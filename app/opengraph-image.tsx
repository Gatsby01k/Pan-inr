import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background:
            'radial-gradient(circle at top right, rgba(255,17,120,0.24), transparent 28%), linear-gradient(180deg, #050505 0%, #020202 100%)',
          color: 'white',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'linear-gradient(180deg, rgba(255,17,120,0.16), rgba(255,17,120,0.04))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f7c770',
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            PAN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 28, letterSpacing: 5, textTransform: 'uppercase', color: '#ff4b9d' }}>
              Private Affiliate Network
            </div>
            <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.68)' }}>Controlled INR Flow Network</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 920 }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95 }}>INR FLOW.</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95, color: '#f7c770' }}>CONTROLLED.</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95 }}>EXECUTED.</div>
        </div>

        <div style={{ display: 'flex', gap: 28, fontSize: 26, color: 'rgba(255,255,255,0.78)', textTransform: 'uppercase' }}>
          <div>Deposits</div>
          <div>Routing</div>
          <div>Execution</div>
          <div>Scale</div>
        </div>
      </div>
    ),
    size,
  );
}
