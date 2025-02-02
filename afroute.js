export async function POST(request) {
  const body = await request.json();
  const buttonIndex = body.untrustedData.buttonIndex;

  // Button 1: Crypto Price
  if (buttonIndex === 1) {
    return Response.json({
      type: 'frame',
      image: "https://your-vercel-url.vercel.app/api/og?type=price",
      buttons: [{ label: "Refresh", action: "post" }]
    });
  }

  // Button 2: Coin Info
  if (buttonIndex === 2) {
    return Response.json({
      type: 'frame',
      image: "https://your-vercel-url.vercel.app/api/og?type=info",
      buttons: [{ label: "Back", action: "post" }]
    });
  }

  return Response.json({ error: "Invalid request" }, { status: 400 });
}