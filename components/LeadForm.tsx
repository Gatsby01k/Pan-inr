'use client';

import { FormEvent, useState } from 'react';

type LeadType = 'merchant' | 'trader';

type FormState = {
  loading: boolean;
  success: boolean;
  error: string;
};

const initialState: FormState = {
  loading: false,
  success: false,
  error: '',
};

export function LeadForm({ type }: { type: LeadType }) {
  const [state, setState] = useState<FormState>(initialState);

  const isMerchant = type === 'merchant';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ loading: true, success: false, error: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('type', type);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed.');
      }

      form.reset();
      setState({ loading: false, success: true, error: '' });
    } catch (error) {
      setState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Submission failed.',
      });
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <input type="hidden" name="type" value={type} />
      <div className="form-kicker">{isMerchant ? 'Merchant Access' : 'Trader Access'}</div>
      <h3>{isMerchant ? 'Tell us what volume you handle.' : 'Apply only if you can execute stable daily flow.'}</h3>
      <p>
        {isMerchant
          ? 'Manual review only. Active or scalable volume gets priority.'
          : 'Manual review only. Disciplined capacity matters more than volume claims.'}
      </p>

      <div className="form-grid">
        {isMerchant ? (
          <>
            <label>
              Company / Brand
              <input name="company" required placeholder="Company / Brand" />
            </label>
            <label>
              Vertical
              <input name="vertical" required placeholder="iGaming / Forex / Crypto" />
            </label>
            <label>
              GEO / Traffic Source
              <input name="geo" required placeholder="India, affiliates, direct, media-buying" />
            </label>
            <label>
              Current Daily Volume
              <input name="volume" required placeholder="Example: ₹2M daily" />
            </label>
            <label className="span-2">
              Required Payment Flow
              <textarea name="flow" required placeholder="Describe your deposit flow, methods, and expected scale." rows={4} />
            </label>
            <label>
              Telegram
              <input name="telegram" placeholder="@username" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="name@company.com" />
            </label>
          </>
        ) : (
          <>
            <label>
              Name / Team
              <input name="name" required placeholder="Name / Team" />
            </label>
            <label>
              Payment Experience
              <input name="experience" required placeholder="P2P / UPI / payouts / years" />
            </label>
            <label>
              Daily Capacity
              <input name="capacity" required placeholder="Example: 10L / day" />
            </label>
            <label>
              Preferred Flow Size
              <input name="flowSize" required placeholder="Typical ticket size or range" />
            </label>
            <label>
              Working Hours / Coverage
              <input name="coverage" required placeholder="IST hours / shifts" />
            </label>
            <label>
              Telegram
              <input name="telegram" placeholder="@username" />
            </label>
            <label className="span-2">
              Notes
              <textarea name="notes" placeholder="Anything relevant about accounts, team, methods, or coverage." rows={4} />
            </label>
            <label className="span-2">
              Email
              <input name="email" type="email" required placeholder="name@example.com" />
            </label>
          </>
        )}
      </div>

      <button type="submit" className="primary-btn" disabled={state.loading}>
        {state.loading ? 'Submitting...' : isMerchant ? 'Submit Merchant Request' : 'Submit Trader Request'}
      </button>

      {state.success ? (
        <div className="form-status success">Request received. We will review it manually.</div>
      ) : null}

      {state.error ? <div className="form-status error">{state.error}</div> : null}
    </form>
  );
}
