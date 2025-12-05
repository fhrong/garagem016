export async function POST(req) {
  const form = await req.formData();

  const data = {};
  form.forEach((value, key) => {
    data[key] = value;
  });

  const n8n_url = "https://auto.garantiabrasilauto.com.br/webhook/1316fb6a-47a1-442d-9b73-3d2278843814";

  await fetch(n8n_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return Response.json({ ok: true });
}
