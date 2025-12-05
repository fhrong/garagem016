// app/api/webhook-forward/route.js
export async function POST(req) {
  try {
    const form = await req.formData();

    const data = {};
    form.forEach((value, key) => {
      data[key] = value;
    });

    const n8n_url = "https://auto.garantiabrasilauto.com.br/webhook/1316fb6a-47a1-442d-9b73-3d2278843814";

    const r = await fetch(n8n_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const text = await r.text();

    return new Response(JSON.stringify({ ok: true, forwarded: true, webhookResponse: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
