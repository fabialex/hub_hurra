import { NextResponse } from 'next/server';

type ContactRequestPayload = {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  useCase?: string;
  message?: string;
  consent?: boolean;
  newsletter?: boolean;
  hp?: string;
};

const missingFieldMessage = 'Missing required fields: name, email or consent';

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'N8N_WEBHOOK_URL environment variable is not defined' },
      { status: 500 }
    );
  }

  let payload: ContactRequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const normalized = {
    name: payload.name?.trim() ?? '',
    email: payload.email?.trim() ?? '',
    company: payload.company?.trim() ?? '',
    teamSize: payload.teamSize?.trim() ?? '',
    useCase: payload.useCase?.trim() ?? '',
    message: payload.message?.trim() ?? '',
    consent: Boolean(payload.consent),
    newsletter: Boolean(payload.newsletter),
    hp: payload.hp?.trim() ?? '',
  };

  if (normalized.hp) {
    // Honeypot triggered – pretend success without hitting webhook
    return NextResponse.json({ success: true });
  }

  if (!normalized.name || !normalized.email || !normalized.consent) {
    return NextResponse.json({ error: missingFieldMessage }, { status: 400 });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'contact-form',
        timestamp: new Date().toISOString(),
        ...normalized,
      }),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text().catch(() => '');
      return NextResponse.json(
        {
          error: 'webhook responded with an error',
          details: text?.slice(0, 2000) ?? '',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to reach webhook',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 502 }
    );
  }
}
