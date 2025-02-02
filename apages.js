export default function Home() {
  return (
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://your-vercel-url.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="💰 Crypto Price" />
        <meta property="fc:frame:button:2" content="ℹ️ Coin Info" />
        <meta property="fc:frame:post_url" content="https://your-vercel-url.vercel.app/api/frame" />
      </head>
      <body>
        <h1 className="text-4xl font-bold text-center mt-8">Cryptovilla 🎩</h1>
      </body>
    </html>
  );
}