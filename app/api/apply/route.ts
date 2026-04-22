import { NextResponse } from 'next/server';

type LeadType = 'merchant' | 'trader';

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function formatTelegramMessage(type: LeadType, payload: Record<string, string>) {
  const lines = Object.entries(payload)
    .filter(([, value]) => value)
    .map(([key, value]) => `• <b>${escapeHtml(key)}</b>: ${escapeHtml(value)}`);

  return [`<b>New ${type === 'merchant' ? 'Merchant' : 'Trader'} Lead</b>`, ...lines].join('\n');
}

async function sendTelegramMessage(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });
}

async function sendWebhook(payload: Record<string, string>) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const type = (getString(formData, 'type') || 'merchant') as LeadType;
    const email = getString(formData, 'email');

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email is required.' }, { status: 400 });
    }

    const payload: Record<string, string> = {
      type,
      submittedAt: new Date().toISOString(),
      email,
      telegram: getString(formData, 'telegram'),
    };

    if (type === 'merchant') {
      payload.company = getString(formData, 'company');
      payload.vertical = getString(formData, 'vertical');
      payload.geo = getString(formData, 'geo');
      payload.volume = getString(formData, 'volume');
      payload.flow = getString(formData, 'flow');

      if (!payload.company || !payload.vertical || !payload.geo || !payload.volume || !payload.flow) {
        return NextResponse.json({ ok: false, error: 'Please complete all required merchant fields.' }, { status: 400 });
      }
    } else {
      payload.name = getString(formData, 'name');
      payload.experience = getString(formData, 'experience');
      payload.capacity = getString(formData, 'capacity');
      payload.flowSize = getString(formData, 'flowSize');
      payload.coverage = getString(formData, 'coverage');
      payload.notes = getString(formData, 'notes');

      if (!payload.name || !payload.experience || !payload.capacity || !payload.flowSize || !payload.coverage) {
        return NextResponse.json({ ok: false, error: 'Please complete all required trader fields.' }, { status: 400 });
      }
    }

    await Promise.all([
      sendWebhook(payload),
      sendTelegramMessage(formatTelegramMessage(type, payload)),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Submission failed. Configure TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID or LEAD_WEBHOOK_URL in Vercel settings.',
      },
      { status: 500 },
    );
  }
}
