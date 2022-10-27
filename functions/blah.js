export async function onRequest() {
  await fetch("https://solitary-star-c9fa.sid7002.workers.dev/");
  return new Response("blah blah blah blah");
}
