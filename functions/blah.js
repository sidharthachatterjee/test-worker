export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  url.pathname = `foo`;
  const req = new Request(url);
  return env.ASSETS.fetch(req);
}
