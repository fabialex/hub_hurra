import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';

export const metadata: Metadata = {
  title: 'Impressum | Hub Hub Hurra',
  description:
    'Klassisches Impressum der Hub Hub Hurra GmbH mit allen Pflichtangaben nach § 5 TMG und § 55 Abs. 2 RStV.',
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <Section className="pt-10">
          <div className="mx-auto max-w-4xl space-y-10">
            <header className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Rechtliche Hinweise</p>
              <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
              <p className="text-base text-white/70 leading-relaxed">
                Nachfolgend finden Sie die gesetzlich vorgeschriebenen Pflichtangaben für den
                digitalen Auftritt der Hub Hub Hurra GmbH. Wir pflegen diese Angaben fortlaufend,
                damit Sie Transparenz über Verantwortlichkeiten, Kontaktwege und rechtliche
                Rahmenbedingungen behalten.
              </p>
            </header>

            <div className="grid gap-6">
              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 DDG</h2>
                <div className="text-white/80 leading-relaxed">
                  <p>pragmatic industries GmbH</p>
                  <p>Stuttgarter Straße 45</p>
                  <p>73230 Kirchheim unter Teck</p>
                </div>
                <div className="text-white/80 leading-relaxed">
                  <p>Handelsregister: 760916</p>
                  <p>Registergericht: Amtsgericht Stuttgart</p>
                  <p>Vertreten durch: Dr. Julian Feinauer</p>
                  <p>USt-IdNr.: DE312329809</p>
                </div>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Kontakt</h2>
                <div className="text-white/80 leading-relaxed">
                  <p>Telefon: <a className="text-white underline-offset-4 hover:underline" href="tel:+493012345678">+49 (0)7021 87868 00</a></p>
                  <p>E-Mail: <a className="text-white underline-offset-4 hover:underline" href="mailto:hallo@hubhubhurra.de"> info@pragmaticindustries.de</a></p>
                  <p>LinkedIn: <a className="text-white underline-offset-4 hover:underline" href="https://www.linkedin.com/company/hubhubhurra" target="_blank" rel="noreferrer">Hub Hub Hurra</a></p>
                </div>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Verantwortlich für den Inhalt</h2>
                <p className="text-white/80 leading-relaxed">
                  Verantwortlich gemäß § 55 Abs. 2 RStV: Dr. Julian Feinauer, Anschrift wie oben.
                </p>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Haftung für Inhalte</h2>
                <p className="text-white/80 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                  der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                  entsprechenden Rechtsverletzungen entfernen wir diese Inhalte umgehend.
                </p>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Haftung für Links</h2>
                <p className="text-white/80 leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                  zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Urheberrecht</h2>
                <p className="text-white/80 leading-relaxed">
                  Die durch die Hub Hub Hurra GmbH erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung der jeweiligen Autorinnen bzw. Autoren. Soweit
                  die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                  Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte
                  umgehend.
                </p>
              </article>

              <article className="card space-y-4">
                <h2 className="text-xl font-semibold text-white">Streitschlichtung</h2>
                <p className="text-white/80 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                  bereit: <a className="text-white underline-offset-4 hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>.
                  Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Bei
                  Fragen wenden Sie sich bitte direkt an uns.
                </p>
              </article>
            </div>
          </div>
        </Section>
        <Footer />
      </main>
    </>
  );
}
