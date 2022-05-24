export default {
  fetch: handleRequest,
}

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.split('/')
  const statusCode = parseInt(path[1])
  const site = path[2]
  const showid = path[3]
  try {
    if (path.length !== 4) throw new Error('Invalid path')

    let destinationURL
    if (site.toLowerCase() === 'google') {
      destinationURL = 'foo'
    } else if (site.toLowerCase() === 'spotify') {
      destinationURL = 'foo'
    } else if (site.toLowerCase() === 'apple') {
      const response = await fetch(
        `https://itunes.apple.com/lookup?id=${showid}&media=podcast&entity=podcastEpisode&limit=1`,
      )
      const jsonResponse = await response.json()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TS2571: Object is possibly 'undefined'.
      destinationURL = jsonResponse.results[1].trackViewUrl
    } else {
      throw new Error('Invalid site')
    }
    return Response.redirect(destinationURL, statusCode)

    return new Response(`Hello World ${destinationURL}`)
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS2571: Object is possibly 'undefined'.
    return new Response(`${error.message}`, {
      status: 500,
    })
  }
}
