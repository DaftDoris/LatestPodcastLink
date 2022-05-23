export default {
  fetch: handleRequest,
}

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Hello World ${request.url}`)
}
