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

`/302/apple/the-smart-7` it will redirect with a `302` status code to `https://podcasts.apple.com/gb/podcast/us-secretary-of-state-blinken-calls-for-action-from/id1506079308?i=1000563226467`

`/303/google/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXNtYXJ0Nw` it will redirect with a `303` status code to `https://podcasts.google.com/u/2/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXNtYXJ0Nw/episode/NjI4YjExMTU3NTExYmUwMDE3NmJkNWQy`

in order to do this it will need to query the spotify/apple/google API to determine the most recent episode and then redirect to the relevant page

