"use client";
import { useState } from "react";

type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string;
  message: string;
  consent: boolean;
  newsletter: boolean;
  hp: string;
};

export default function ContactDemo() {
  const [state, setState] = useState<"idle"|"loading"|"ok"|"error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const asString = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const payload: ContactFormPayload = {
      name: asString("name"),
      email: asString("email"),
      company: asString("company"),
      teamSize: asString("teamSize"),
      useCase: asString("useCase"),
      message: asString("message"),
      consent: formData.get("consent") === "on",
      newsletter: formData.get("newsletter") === "on",
      hp: asString("hp"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok || !json?.success) {
      setError(json?.error || "Senden fehlgeschlagen.");
      setState("error");
      return;
    }

    setState("ok");
    form.reset();
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Hintergrund optional: leichtes Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18), rgba(110,231,242,0.12) 60%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Demo anfragen
        </h2>
        <p className="mt-3 text-white/70">
          Wir erklären dir gerne wie unser API Hub dein nächstes Integrationsprojekt beschleunigen kann.
        </p>

        {/* Glas-Card mit Blur */}
        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 md:p-8"
        >
          {/* Honeypot – versteckt für Bots */}
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Name*</label>
              <input
                name="name"
                required
                placeholder="Max Mustermann"
                className="h-11 rounded-xl bg-black/30 border border-white/15 px-3 text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">E-Mail*</label>
              <input
                name="email"
                type="email"
                required
                placeholder="max@firma.de"
                className="h-11 rounded-xl bg-black/30 border border-white/15 px-3 text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Firma</label>
              <input
                name="company"
                placeholder="Deine Firma"
                className="h-11 rounded-xl bg-black/30 border border-white/15 px-3 text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Teamgröße</label>
              <select
                name="teamSize"
                className="h-11 rounded-xl bg-black/30 border border-white/15 px-3 text-white outline-none focus:border-white/40"
                defaultValue=""
              >
                <option value="" disabled>Bitte auswählen</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-250">51–250</option>
                <option value="250+">250+</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm text-white/80">Use Case</label>
              <select
                name="teamSize"
                className="h-11 rounded-xl bg-black/30 border border-white/15 px-3 text-white outline-none focus:border-white/40"
                defaultValue=""
              >
                <option value="" disabled>Bitte auswählen</option>
                <option value="1-10">Meine Kunden oder Partner möchten sich mit meinen Systemem verbinden</option>
                <option value="11-50">Ich möchte meine AI-Agents mit den richtigen Daten versorgen</option>
                <option value="51-250">Ich haben den Überblick über meine Schnittstellen verloren</option>
                <option value="250+">Alles oder etwas ganz anderes</option>
              </select>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm text-white/80">Nachricht</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Womit sollen wir starten?"
              className="rounded-xl bg-black/30 border border-white/15 px-3 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/40"
            />
          </div>

          <div className="mt-5 flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 accent-cyan-300"
              required
            />
            <label htmlFor="consent" className="text-sm text-white/70">
              Ich bin mit der Verarbeitung meiner Daten zur Kontaktaufnahme einverstanden.
              <a href="https://pragmaticindustries.com/datenschutzerklaerung.html" target="_blank" className="underline decoration-white/40 hover:text-white ml-1">
                Datenschutz
              </a>
            </label>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              defaultChecked
              className="mt-1 h-4 w-4 accent-cyan-300"
            />
            <label htmlFor="newsletter" className="text-sm text-white/70">
              Newsletter abonnieren und Updates zu Features, Events & Best Practices erhalten.
            </label>
          </div>

          {/* Status / Fehler */}
          {state === "ok" && (
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-200">
              Danke! Wir melden uns in Kürze mit einem Terminvorschlag.
            </div>
          )}
          {state === "error" && (
            <div className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-rose-200">
              {error}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6EE7F2] text-black font-medium disabled:opacity-60 cursor-pointer"
            >
              {state === "loading" ? "Senden…" : "Demo anfragen"}
            </button>
            <button
              type="reset"
              className="rounded-xl px-5 py-3 border border-white/15 text-white/80 hover:bg-white/10 cursor-pointer"
              onClick={() => { setError(""); setState("idle"); }}
            >
              Zurücksetzen
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
