# Latest Podcast Link

## What this does?

- JS app
- Cloudflare worker
- Jest automated testing

## Developing

```bash
npm run dev
```

## Actions

`/301/spotify/1kCU4T1Tjnw5FJ8fVaM1R9/` it will redirect with `301` status code to `https://open.spotify.com/episode/1xeVVmWIbus7D7q268hawe`
`https://api.spotify.com/v1/shows/1kCU4T1Tjnw5FJ8fVaM1R9/episodes?offset=0&limit=1` should return a json response with `items[0]external_urls.spotify` as the thing to redirect to.
NB spotify requires authentication, so will need to be provided as a secret to the cloudflare worker

`/302/apple/1506079308` it will redirect with a `302` status code to `https://podcasts.apple.com/gb/podcast/us-secretary-of-state-blinken-calls-for-action-from/id1506079308?i=1000563226467`
`https://itunes.apple.com/lookup?id=1506079308&media=podcast&entity=podcastEpisode&limit=1` should return a json response with `results[1]trackId` 

`/303/google/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXNtYXJ0Nw` it will redirect with a `303` status code to `https://podcasts.google.com/u/2/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXNtYXJ0Nw/episode/NjI4YjExMTU3NTExYmUwMDE3NmJkNWQy`
can't see an api, may need to web scrape `https://podcasts.google.com/u/2/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXNtYXJ0Nw`

in order to do this it will need to query the spotify/apple/google API to determine the most recent episode and then redirect to the relevant page

