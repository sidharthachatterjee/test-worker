export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url, {
    pathname: `foo`,
  });
  console.log(url);
  const req = new Request(url);
  return env.ASSETS.fetch(req);
}
