import { handleRequest } from '../src/index'
import makeServiceWorkerEnv from 'service-worker-mock'
import { FetchMock, enableFetchMocks } from 'jest-fetch-mock'

// eslint-disable-next-line no-var
declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
    enableFetchMocks()
    fetchMock.doMock()
  })

  // test('invalid path', async () => {
  //   expect(async () => {
  //     await handleRequest(new Request('/', { method: 'GET' }))
  //   }).rejects.toMatchObject({ message: 'Invalid path' })
  // })

  // test('invalid site', async () => {
  //   expect(
  //     await handleRequest(new Request('/302/foo/123', { method: 'GET' }))
  //   }).rejects.toMatchObject({ message: 'Invalid site' })
  // })

  test('invalid path', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }))
    expect(result.status).toEqual(500)
    expect(await result.text()).toEqual('Invalid path')
  })
  test('invalid site', async () => {
    const result = await handleRequest(
      new Request('/123/foobar/123', { method: 'GET' }),
    )
    expect(result.status).toEqual(500)
    expect(await result.text()).toEqual('Invalid site')
  })

  test('apple', async () => {
    const mock = {
      resultCount: 101,
      results: [
        {
          wrapperType: 'track',
          kind: 'podcast',
          artistId: 594344196,
          collectionId: 1251196416,
          trackId: 1251196416,
          artistName: 'All Things Comedy',
          collectionName: 'Self-Helpless',
          trackName: 'Self-Helpless',
          collectionCensoredName: 'Self-Helpless',
          trackCensoredName: 'Self-Helpless',
          artistViewUrl:
            'https://podcasts.apple.com/us/artist/all-things-comedy/594344196?uo=4',
          collectionViewUrl:
            'https://podcasts.apple.com/us/podcast/self-helpless/id1251196416?uo=4',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-helpless/id1251196416?uo=4',
          artworkUrl30:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6e/fc/50/6efc506d-b2e1-3343-bc43-88d5a65f98a3/mza_13384926290597726506.jpg/30x30bb.jpg',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6e/fc/50/6efc506d-b2e1-3343-bc43-88d5a65f98a3/mza_13384926290597726506.jpg/60x60bb.jpg',
          artworkUrl100:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6e/fc/50/6efc506d-b2e1-3343-bc43-88d5a65f98a3/mza_13384926290597726506.jpg/100x100bb.jpg',
          collectionPrice: 0.0,
          trackPrice: 0.0,
          trackRentalPrice: 0,
          collectionHdPrice: 0,
          trackHdPrice: 0,
          trackHdRentalPrice: 0,
          releaseDate: '2022-05-16T12:00:00Z',
          collectionExplicitness: 'explicit',
          trackExplicitness: 'explicit',
          trackCount: 264,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Comedy',
          contentAdvisoryRating: 'Explicit',
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6e/fc/50/6efc506d-b2e1-3343-bc43-88d5a65f98a3/mza_13384926290597726506.jpg/600x600bb.jpg',
          genreIds: ['1303', '26', '1304'],
          genres: ['Comedy', 'Podcasts', 'Education'],
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/69/01/84/690184d9-cbb8-1dd4-2468-12d801c7c69e/mza_3378627996240074844.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/overcoming-the-fear-of-death/id1251196416?i=1000563287770&uo=4',
          trackTimeMillis: 4779000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/69/01/84/690184d9-cbb8-1dd4-2468-12d801c7c69e/mza_3378627996240074844.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/69/01/84/690184d9-cbb8-1dd4-2468-12d801c7c69e/mza_3378627996240074844.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/869e649e-a82b-493d-829e-ae9d009149c1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/869e649e-a82b-493d-829e-ae9d009149c1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000563287770,
          trackName: 'Overcoming the Fear of Death',
          releaseDate: '2022-05-23T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Life After Life expert, Certified Grief Recovery Specialist, and founder of the Overcoming The Fear Of Death Foundation, Kelvin Chin. Kelvin shares about his near-death experience, what happens in the human body when we experience anxiety around death and dying, and provides practical tips for managing the fear of death (including both short-term and long-term methods). Whether you suffer from thanatophobia, or experience a more dull or mild anxiety around death, there are plenty of takeaways in this episode. Personal experiences around losing loved ones are also shared - and to Delanie’s delight, it gets a bit woo woo! \n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '869e649e-a82b-493d-829e-ae9d009149c1',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/44/10/bb/4410bbe5-cc9f-201a-2ded-2796c060d7bf/mza_3516008871221093672.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/toxic-productivity/id1251196416?i=1000561569924&uo=4',
          trackTimeMillis: 2863000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/44/10/bb/4410bbe5-cc9f-201a-2ded-2796c060d7bf/mza_3516008871221093672.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/44/10/bb/4410bbe5-cc9f-201a-2ded-2796c060d7bf/mza_3516008871221093672.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/592d311a-26e5-40fe-91f0-ae8d00f49547/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/592d311a-26e5-40fe-91f0-ae8d00f49547/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000561569924,
          trackName: 'Toxic Productivity',
          releaseDate: '2022-05-16T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "This week the girls are talking about toxic productivity. They explain what it is and who it affects, share the signs that you might be experiencing it, and offer tips for managing it as well as their personal experiences with it. Tune in to find out their favorite go-to's for stopping toxic productivity in its tracks!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Athletic Greens, Cerebral, and Faherty!\n\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1-year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nListeners can get 65% off their first month of medication management and care counseling at cerebral.com/helpless.\n\nHead to FAHERTYBRAND.com/HELPLESS, and use code HELPLESS at checkout to snag 20% off ALL your new spring staples. \n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '592d311a-26e5-40fe-91f0-ae8d00f49547',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/62/cf/74/62cf7461-797d-bd1a-a350-bff4fd5479e6/mza_4368032056241250498.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/post-traumatic-stress-disorder/id1251196416?i=1000560046386&uo=4',
          trackTimeMillis: 3393000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/62/cf/74/62cf7461-797d-bd1a-a350-bff4fd5479e6/mza_4368032056241250498.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/62/cf/74/62cf7461-797d-bd1a-a350-bff4fd5479e6/mza_4368032056241250498.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2cfa1490-f894-4459-800b-ae8d00ef7f02/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2cfa1490-f894-4459-800b-ae8d00ef7f02/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000560046386,
          trackName: 'Post-Traumatic Stress Disorder',
          releaseDate: '2022-05-09T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by licensed marriage and family therapist, Nadirah Habeebullah, who specializes in providing trauma-informed, culturally sensitive services. Nadirah educates us about all things PTSD - the symptoms, who is at risk for it, how it develops, treatment options, and the ways it can affect both adults and children. Plus, tune in to learn a supportive way to approach and encourage a loved one who you believe is experiencing PTSD. *** Some content in this episode may be triggering to victims of abuse. Listener discretion is advised.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Coterie, Helix!\n\nListeners get 10% off their first month at BetterHelp.com/selfhelpless.\n\nRight now, Coterie is partnering with Self Helpless to offer you 20% off your first order plus free shipping at Coterie.com/HELPLESS.\n\nHelix is offering UP TO $200 off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '2cfa1490-f894-4459-800b-ae8d00ef7f02',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/82/4e/23/824e2393-60a8-299c-c4c5-4553bb4a2469/mza_7502989482636115722.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/revenge-bedtime-procrastination/id1251196416?i=1000559322058&uo=4',
          trackTimeMillis: 3626000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/82/4e/23/824e2393-60a8-299c-c4c5-4553bb4a2469/mza_7502989482636115722.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/82/4e/23/824e2393-60a8-299c-c4c5-4553bb4a2469/mza_7502989482636115722.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4b89c047-ee53-47e9-8a1b-ae8600745f2d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4b89c047-ee53-47e9-8a1b-ae8600745f2d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000559322058,
          trackName: 'Revenge Bedtime Procrastination',
          releaseDate: '2022-05-02T11:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss revenge bedtime procrastination - what it is, the causes and effects, as well as tips on how to prevent and manage it. They also share what their own bedtime procrastination has looked like and what they’ve implemented to combat it. If you’re caught in a cycle of staying up too late to give yourself downtime, you need this episode right now!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Merit Beauty, & Vegamour!\n\nListeners get 10% off their first month at BetterHelp.com/selfhelpless.\n\nGo to MeritBeauty.com/helpless to get your free signature reusable makeup bag with your purchase.\n\nGo to VEGAMOUR.com/HELPLESS, use code HELPLESS to save 20% on your first order!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '4b89c047-ee53-47e9-8a1b-ae8600745f2d',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a3/34/18/a33418bd-b06b-709a-1591-b7384698cfc1/mza_3204715485209563581.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/10-signs-that-youre-a-highly-sensitive-person-tips-for-hsps/id1251196416?i=1000558605213&uo=4',
          trackTimeMillis: 2233000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a3/34/18/a33418bd-b06b-709a-1591-b7384698cfc1/mza_3204715485209563581.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a3/34/18/a33418bd-b06b-709a-1591-b7384698cfc1/mza_3204715485209563581.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/932e5261-3c1d-485f-a440-ae810138992b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/932e5261-3c1d-485f-a440-ae810138992b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000558605213,
          trackName:
            "10 Signs That You're A Highly Sensitive Person (Tips for HSPs)",
          releaseDate: '2022-04-25T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by licensed therapist and HSP Coach, Lauren LaSalle. As an HSP herself, Lauren explains what characteristics and attributes Highly Sensitive People tend to have, practical tips for optimizing your environment, setting boundaries, and increasing your energy as a Highly Sensitive Person, and how we can all best support the HSPs in our life. Think you might be experiencing high sensitivity? Tune in to find out!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\n\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Cerebral, Dipsea, & Faherty!\nListeners can get 65% off your first month of medication management and care counseling at cerebral.com/helpless.\nDipsea is offering an extended 30 day free trial when you go to DipseaStories.com/helpless.\nHead to FAHERTYBRAND.com/HELPLESS and use code HELPLESS at checkout to snag 20% off ALL your new spring staples.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '932e5261-3c1d-485f-a440-ae810138992b',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c5/cf/f2/c5cff288-702a-5e08-7115-950391540276/mza_6233023639961746047.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/fear-of-commitment/id1251196416?i=1000557891805&uo=4',
          trackTimeMillis: 3414000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c5/cf/f2/c5cff288-702a-5e08-7115-950391540276/mza_6233023639961746047.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c5/cf/f2/c5cff288-702a-5e08-7115-950391540276/mza_6233023639961746047.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/10787410-0240-46be-a0e9-ae7a018603b5/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/10787410-0240-46be-a0e9-ae7a018603b5/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000557891805,
          trackName: 'Fear of Commitment',
          releaseDate: '2022-04-18T07:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are talking about the fear of commitment. They discuss how to spot it, some root causes, and tips for overcoming it. They also open up about their own experiences and how they’re able to decipher when they’re making decisions based on fear of commitment vs. gut instinct that something isn’t the right fit for them. Whether you’re a commitment-phobe, commitment lover, or somewhere in between - this episode will help you ease the common nerves we all experience when considering personal and professional commitments throughout our lives.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp & Thrive Market!\nListeners get 10% off their first month at BetterHelp.com/SELFHELPLESS.\nJoin today at ThriveMarket.com/helpless to get 40% off your first order AND a FREE gift worth over fifty dollars!!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '10787410-0240-46be-a0e9-ae7a018603b5',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/50/eb/b1/50ebb172-c5d8-c61d-f8f7-a87e42e7198c/mza_11565313162583519515.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/how-to-adopt-a-child/id1251196416?i=1000557099396&uo=4',
          trackTimeMillis: 3096000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/50/eb/b1/50ebb172-c5d8-c61d-f8f7-a87e42e7198c/mza_11565313162583519515.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/50/eb/b1/50ebb172-c5d8-c61d-f8f7-a87e42e7198c/mza_11565313162583519515.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/11ea356f-ac1f-49d6-842f-ae71015b5c7e/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/11ea356f-ac1f-49d6-842f-ae71015b5c7e/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000557099396,
          trackName: 'How to Adopt A Child',
          releaseDate: '2022-04-11T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are joined by Adoption Lawyer, Lucrece Bundy. Lucrece debunks common misconceptions about the adoption process, what steps to take to adopt a child (and what not to waste your time on), plus offers tips that support both parents and children acclimate after a successful adoption. Tune in to find out how long the adoption process ACTUALLY takes and what role trauma plays when considering if adoption is right for you.\n\nFor those who are looking at options to grow their family such as IVF, surrogacy, etc, and want to know if adoption is the right route for them, they can purchase Lucrece\'s mini-course "Is Adoption Right for Me?" here: lucrece-bundy.teachable.com/p/is-adoption-right-for-me\n\nIf you want to adopt and want to know which adoption route is right for your family, Lucece has a free guide for you. You can access it here: https://adoptionsuccessaccelerator.com/freeguide\n\nFinally, if you know for sure that adoption is the route you want to take to grow your family, but have no idea where to start and need a guide to help you navigate through the process, you can learn more about Lucrece’s adoption program here: https://adoptionssimplified.com/adoption-success-accelerator/\n\nYou can connect with Lucrece on social media on:\nYoutube: https://www.youtube.com/channel/UCayM-ItyLRzbxAY2qj_tvOw\nFacebook: https://www.facebook.com/groups/adoptionsupportandresourcecommunity\nWebsite: https://adoptionssimplified.com/\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\n\nThis episode was sponsored by Athletic Greens, Cerebral, & Merit Beauty!\n\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nAnd as Self-Helpless listeners, you can receive 65% off your first month of medication management and care counseling at Cerebral.com/helpless.\n\nUpgrade your makeup routine with Merit! Head to MeritBeauty.com/helpless to get your free signature reusable makeup bag with your purchase.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '11ea356f-ac1f-49d6-842f-ae71015b5c7e',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4c/0a/9c/4c0a9c20-77dd-051b-74f9-703200eae7cc/mza_11561060759732439295.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/tools-for-a-successful-relationship/id1251196416?i=1000556178442&uo=4',
          trackTimeMillis: 2883000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4c/0a/9c/4c0a9c20-77dd-051b-74f9-703200eae7cc/mza_11561060759732439295.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4c/0a/9c/4c0a9c20-77dd-051b-74f9-703200eae7cc/mza_11561060759732439295.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ed058912-33b6-49d6-af96-ae640125ad28/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ed058912-33b6-49d6-af96-ae640125ad28/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000556178442,
          trackName: 'Tools For A Successful Relationship',
          releaseDate: '2022-04-04T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by a close-to-perfect couple, Kevin and Rachel. They tell their love story, share some tools that helped them navigate their relationship, and answer some insightful questions we have. Tune in to get a healthy perspective and outlook on a real-life romantic relationship. \n\nAs heard on the podcast, you can reach out to Kevin at eldridge.kevin@gmail.com to ask him more questions on this topic.\n\nThis episode was sponsored by BetterHelp & Helix!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'ed058912-33b6-49d6-af96-ae640125ad28',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f1/be/1a/f1be1a3a-abd7-12a4-45c7-95d31d322246/mza_4327562081855891326.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/shiny-object-syndrome/id1251196416?i=1000555453901&uo=4',
          trackTimeMillis: 2745000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f1/be/1a/f1be1a3a-abd7-12a4-45c7-95d31d322246/mza_4327562081855891326.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f1/be/1a/f1be1a3a-abd7-12a4-45c7-95d31d322246/mza_4327562081855891326.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7a287127-980c-452b-9934-ae5b0182f97b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7a287127-980c-452b-9934-ae5b0182f97b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000555453901,
          trackName: 'Shiny Object Syndrome',
          releaseDate: '2022-03-28T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss shiny object syndrome - what it is, how to prevent it, and they also share their personal and professional experiences with it. If you resonate with this episode, and shiny object syndrome seems to be interfering with your daily productivity and happiness, you also might want to check out our episode about ADHD with Dr. Sarkis here: https://podcasts.apple.com/us/podcast/adult-adhd-with-dr-stephanie-sarkis/id1251196416?i=1000536740309 (or wherever else you get your podcast). \n\nThis episode was sponsored by Athletic Greens, Dipsea, & ZocDoc!\n\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nDipsea is offering an extended 30 day free trial when you go to DipseaStories.com/helpless.\n\nGo to Zocdoc.com/HELPLESS and download the Zocdoc app for FREE. Then start your search for a top-rated doctor today. Many are available within 24 hours.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '7a287127-980c-452b-9934-ae5b0182f97b',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ae/18/bb/ae18bb58-9831-b777-e632-145abb120c95/mza_9686182934927294281.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/20-tips-for-navigating-life-and-career-transitions/id1251196416?i=1000554719964&uo=4',
          trackTimeMillis: 2845000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ae/18/bb/ae18bb58-9831-b777-e632-145abb120c95/mza_9686182934927294281.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ae/18/bb/ae18bb58-9831-b777-e632-145abb120c95/mza_9686182934927294281.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ac32fe00-2d2c-4f3a-95cd-ae5901673755/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ac32fe00-2d2c-4f3a-95cd-ae5901673755/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000554719964,
          trackName: '20 Tips for Navigating Life and Career Transitions',
          releaseDate: '2022-03-21T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss navigating life and career transitions - relationships, entrepreneurship, location changes, and grief. They provide tips for transitioning with more ease and less overwhelm, as well as share what’s worked (and hasn’t worked) for them. If you’re experiencing a tough and/or awesome transition, this episode is for you.\n\nThis episode was sponsored by BetterHelp, Bombas, & Merit Beauty\n\nListeners get 10% off their first month at BetterHelp.com/SELFHELPLESS.\n\nGo to Bombas.com/helpless and get 20% off your first purchase.\n\nHead to MeritBeauty.com/helpless to get their free signature reusable makeup bag\nwith your purchase.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'ac32fe00-2d2c-4f3a-95cd-ae5901673755',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8b/a2/55/8ba255bf-0571-413b-9209-4be66dcce09d/mza_8366208703902705147.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-care-our-favorite-activities-tips/id1251196416?i=1000553954450&uo=4',
          trackTimeMillis: 2845000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8b/a2/55/8ba255bf-0571-413b-9209-4be66dcce09d/mza_8366208703902705147.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8b/a2/55/8ba255bf-0571-413b-9209-4be66dcce09d/mza_8366208703902705147.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/803e3474-d94c-4e28-808d-ae5501622f59/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/803e3474-d94c-4e28-808d-ae5501622f59/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000553954450,
          trackName: 'Self-Care: Our Favorite Activities + Tips',
          releaseDate: '2022-03-14T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are giving you a self-care buffet! They share their go-to activities, the love languages they practice on themselves, and offer some powerful questions you can ask yourself to gain clarity on what you truly need (and want!). Tune in to learn WTF a jolly jar is and why one of the girls will never purchase a tea kettle. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Brooklinen, & Native & Ritual!\n\nYou can use promo code helpless anytime for $20 off of your purchase of $100+ at Brooklinen.com.\n\nGo to NativeDeo.com/helpless, or use promo code helpless at checkout, and get 20% off your first order.\n\nRight now Ritual is offering my listeners 10% off your first three months. Visit ritual.com/HELPLESS and turn healthy habits into a Ritual.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '803e3474-d94c-4e28-808d-ae5501622f59',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/b2/50/a7/b250a744-4746-c868-d78c-edf05345c146/mza_5410466727772662514.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/time-blindness/id1251196416?i=1000553165793&uo=4',
          trackTimeMillis: 3408000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/b2/50/a7/b250a744-4746-c868-d78c-edf05345c146/mza_5410466727772662514.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/b2/50/a7/b250a744-4746-c868-d78c-edf05345c146/mza_5410466727772662514.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d83f6971-10a7-40e1-9969-ae45000696f1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d83f6971-10a7-40e1-9969-ae45000696f1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000553165793,
          trackName: 'Time Blindness',
          releaseDate: '2022-03-07T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are talking about time blindness. They share the symptoms, disorders it’s linked to, and offer practical time management tips. Plus, they swap personal experiences around time blindness and what they’ve implemented in their daily routine to avoid being late!\n\nThis episode was sponsored by Athletic Greens, BetterHelp, and Helix!\n\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless\n\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at Helix Sleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'd83f6971-10a7-40e1-9969-ae45000696f1',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ab/0d/22/ab0d2211-3711-289f-b222-12f02b90054f/mza_15683349581851110641.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/dialectical-behavior-therapy/id1251196416?i=1000552445015&uo=4',
          trackTimeMillis: 2579000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ab/0d/22/ab0d2211-3711-289f-b222-12f02b90054f/mza_15683349581851110641.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ab/0d/22/ab0d2211-3711-289f-b222-12f02b90054f/mza_15683349581851110641.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d4786a5e-5173-453e-ac82-ae4201563f63/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d4786a5e-5173-453e-ac82-ae4201563f63/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000552445015,
          trackName: 'Dialectical Behavior Therapy',
          releaseDate: '2022-02-28T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are joined by licensed clinical psychologist and emotional intelligence skills training expert, Dr. J. J. Kelly. Dr. J.J. discusses dialectical behavior therapy (DBT) - who it’s for, the transformation it provides, as well as the misdiagnoses that are related to DBT. Tune in to learn simple tips for applying emotional intelligence skills to your relationship with yourself and others.\n\nThis episode was sponsored by ZocDoc & Dipsea!\nGo to Zocdoc.com/HELPLESS and download the Zocdoc app for FREE. Then start your search for a top-rated doctor today. Many are available within 24 hours.\nDipsea is offering an extended 30-day free trial when you go to DipseaStories.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'd4786a5e-5173-453e-ac82-ae4201563f63',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/60/cf/ca/60cfca1c-705e-5757-8485-fd1a47051e32/mza_18218381523913375074.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/communication-in-relationships/id1251196416?i=1000551738204&uo=4',
          trackTimeMillis: 2574000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/60/cf/ca/60cfca1c-705e-5757-8485-fd1a47051e32/mza_18218381523913375074.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/60/cf/ca/60cfca1c-705e-5757-8485-fd1a47051e32/mza_18218381523913375074.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0ac9b53a-d4cb-4657-91e1-ae3b00e7f704/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0ac9b53a-d4cb-4657-91e1-ae3b00e7f704/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000551738204,
          trackName: 'Communication in Relationships',
          releaseDate: '2022-02-21T08:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss Communication Accommodation Theory. They define what it is, break down convergence vs. divergence, and share how understanding this theory can improve the efficacy of communication and improve relationships. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Athletic Green, Bombas! \nListeners get 10% off their first month at BetterHelp.com/SELFHELPLESS.\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\nGo to Bombas.com/helpless and get 20% off your first purchase.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '0ac9b53a-d4cb-4657-91e1-ae3b00e7f704',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/e8/94/b1/e894b1e7-e38c-c63e-629f-0d95177873c3/mza_5017341819656057941.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/birth-charts/id1251196416?i=1000551008529&uo=4',
          trackTimeMillis: 2632000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/e8/94/b1/e894b1e7-e38c-c63e-629f-0d95177873c3/mza_5017341819656057941.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/e8/94/b1/e894b1e7-e38c-c63e-629f-0d95177873c3/mza_5017341819656057941.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b84a9e92-0fca-407a-a96b-ae3a014d0bc9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b84a9e92-0fca-407a-a96b-ae3a014d0bc9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000551008529,
          trackName: 'Birth Charts',
          releaseDate: '2022-02-14T08:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are reading their birth charts. They share what resonates with them, swap personal experiences based on their results, and discuss how they enjoy implementing this information. Grab your birth chart (and your drink of choice) and tune in for a fun reflection!\n\nThis episode was sponsored by Native, Brooklinen & Ritual!\nGet 20% off your first order by going to NativeDeo.com/helpless, or use promo code helpless at checkout.\nGet the deals of your dreams at Brooklinen.com with promo code helpless.\nRight now, get 10% off your first three months by visiting ritual.com/HELPLESS.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'b84a9e92-0fca-407a-a96b-ae3a014d0bc9',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/af/ad/08/afad0848-72f8-0ba1-c7e0-61251064ca66/mza_8822116814429248126.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/10-tips-for-applying-minimalism-to-your-space-and-schedule/id1251196416?i=1000550307310&uo=4',
          trackTimeMillis: 2557000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/af/ad/08/afad0848-72f8-0ba1-c7e0-61251064ca66/mza_8822116814429248126.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/af/ad/08/afad0848-72f8-0ba1-c7e0-61251064ca66/mza_8822116814429248126.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/c271d1b4-9eda-467f-befa-ae3201522ada/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/c271d1b4-9eda-467f-befa-ae3201522ada/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000550307310,
          trackName:
            '10 Tips For Applying Minimalism To Your Space And Schedule',
          releaseDate: '2022-02-07T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss how to apply minimalism to your space and schedule. They offer simple tips for decluttering your space (and maintaining it), keeping your weekly schedule manageable, and questions to ask yourself to get clear on what you value most to make all the implementation easier and more fun. Whether you’re new to minimalism or you’re a seasoned pro, tune in to infuse more joy and calm into your life!\n\nThis episode was sponsored by BetterHelp, Helix, Athletic Green!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'c271d1b4-9eda-467f-befa-ae3201522ada',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/08/28/08082843-e916-dd29-41a9-2cbc59234183/mza_12714247283934805706.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/black-white-thinking/id1251196416?i=1000549525963&uo=4',
          trackTimeMillis: 2725000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/08/28/08082843-e916-dd29-41a9-2cbc59234183/mza_12714247283934805706.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/08/08/28/08082843-e916-dd29-41a9-2cbc59234183/mza_12714247283934805706.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/6c56ef8a-b246-409f-9a78-ae2d0134a698/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/6c56ef8a-b246-409f-9a78-ae2d0134a698/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000549525963,
          trackName: 'Black & White Thinking',
          releaseDate: '2022-01-31T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss black and white thinking. They cover what often causes it, the conditions and disorders it can be linked to, share personal experiences of when it’s shown up in their own lives, and offer practical tips on how to manage it. Tune in for some inspiration on how we can all live more life in the gray!\n\nThis episode was sponsored by Athletic Greens, Bombas, & Zocdoc!\n\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\n\nGo to Bombas.com/helpless and get twenty percent off your first purchase.\n\nGo to Zocdoc.com/HELPLESS and download the Zocdoc app for FREE. Then start your search for a top-rated doctor today. Many are available within 24 hours\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '6c56ef8a-b246-409f-9a78-ae2d0134a698',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8f/30/a9/8f30a9b9-97d1-9f9d-fb59-1cacd9788843/mza_10603061266349347255.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/reflecting-on-the-four-agreements/id1251196416?i=1000548817715&uo=4',
          trackTimeMillis: 2896000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8f/30/a9/8f30a9b9-97d1-9f9d-fb59-1cacd9788843/mza_10603061266349347255.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/8f/30/a9/8f30a9b9-97d1-9f9d-fb59-1cacd9788843/mza_10603061266349347255.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/c7cd00a3-d6c2-4a17-92df-ae2201274c69/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/c7cd00a3-d6c2-4a17-92df-ae2201274c69/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000548817715,
          trackName: 'Reflecting on The Four Agreements',
          releaseDate: '2022-01-24T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are reflecting on The Four Agreements by Don Miguel Ruiz. They cover every agreement from this world-renowned book and share personal experiences related to each. Grab the book and tune in to generate your actions steps for implementing these life-changing guidelines to personal freedom!\n\nAlso, be sure to check out Don Miguel Ruiz’s website to learn more about his many other amazing books at https://www.miguelruiz.com/.\n\nThis episode was sponsored by Athletic Greens, Dipsea, & BetterHelp!\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase.\nDipsea is offering an extended 30-day free trial when you go to DipseaStories.com/helpless.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'c7cd00a3-d6c2-4a17-92df-ae2201274c69',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9c/da/2e/9cda2e4f-aef7-3695-e8f7-39ab5fc030c8/mza_17019179640617144754.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/depression-and-serotonin-syndrome/id1251196416?i=1000548091366&uo=4',
          trackTimeMillis: 3315000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9c/da/2e/9cda2e4f-aef7-3695-e8f7-39ab5fc030c8/mza_17019179640617144754.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9c/da/2e/9cda2e4f-aef7-3695-e8f7-39ab5fc030c8/mza_17019179640617144754.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/8be2290e-a036-4cfe-8fe8-ae1e000d061b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/8be2290e-a036-4cfe-8fe8-ae1e000d061b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000548091366,
          trackName: 'Depression and Serotonin Syndrome',
          releaseDate: '2022-01-17T08:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by forensic psychiatrist, Dr. Tracey Marks. Dr. Marks explains what serotonin syndrome is, how it differs from serotonin toxicity, what causes this syndrome, symptoms to be aware of, and how to treat it. She also offers fascinating information regarding new developments for the treatment of depression that are providing people with a lot of hope. Plus, discover how your gut can boost your mood!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\n\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Laithwaites, Ritual, & Brooklinen!\nNow, get six amazing bottles of Laithwaites wine, plus two bonus bottles and two stemless wine glasses for $49.99 (plus tax) with free delivery. To get this special offer, text HELPLESS to Sixty-Four Thousand (64-000).\n\nRight now Ritual is offering 10% off your first three months at ritual.com/HELPLESS.\n\nGo to Brooklinen.com and use promo code HELPLESS for $20 off your purchase of $100.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '8be2290e-a036-4cfe-8fe8-ae1e000d061b',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/92/59/7a/92597abc-5556-559c-6119-da84a935e9ff/mza_616573545625355282.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/how-dbt-and-martial-arts-saved-my-life/id1251196416?i=1000547420791&uo=4',
          trackTimeMillis: 2561000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/92/59/7a/92597abc-5556-559c-6119-da84a935e9ff/mza_616573545625355282.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/92/59/7a/92597abc-5556-559c-6119-da84a935e9ff/mza_616573545625355282.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d908edc2-1a15-4349-b9e3-ae160128c025/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d908edc2-1a15-4349-b9e3-ae160128c025/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000547420791,
          trackName: 'How DBT and Martial Arts Saved My Life',
          releaseDate: '2022-01-10T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Competitive Martial Artist and Founder and Head Coach of Kurtz MMA, Alyssa Kurtz. Alyssa opens up about her past trauma including being in and out of psychiatric hospitals as a teen and young adult, what her rock bottom really looked like, the exact turning point in her life, and how a combination of Dialectical Behavior Therapy and Martial Arts literally saved her. Alyssa also walks us through some DBT exercises we can all practice and offers tips for applying the teachings of martial arts to your life in order to set healthy boundaries and cultivate self-respect. Tune in to find out how she utilizes the tools that changed her life to help others. \n\n***Alyssa candidly shares about her past trauma and self-destructive behavior. Please use discretion if you think the content in this episode may be upsetting to you. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Dipsea, and Native!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nDipsea is offering an extended 30-day free trial when you go to DipseaStories.com/helpless.\nGo to NativeDeo.com/helpless and use promo code helpless at checkout, to get 20% off your first order!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'd908edc2-1a15-4349-b9e3-ae160128c025',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ae/b8/e6/aeb8e6cc-509a-eadb-2f3a-2b706d1a2831/mza_17417110084559520270.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/your-burning-relationship-questions-answered-with/id1251196416?i=1000546782772&uo=4',
          trackTimeMillis: 3872000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ae/b8/e6/aeb8e6cc-509a-eadb-2f3a-2b706d1a2831/mza_17417110084559520270.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ae/b8/e6/aeb8e6cc-509a-eadb-2f3a-2b706d1a2831/mza_17417110084559520270.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/dea6f79f-f2ed-470b-9029-ae11018258a7/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/dea6f79f-f2ed-470b-9029-ae11018258a7/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000546782772,
          trackName:
            'Your Burning Relationship Questions Answered with Rachel DeAlto',
          releaseDate: '2022-01-03T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Relationship Expert, media personality, and speaker, Rachel DeAlto. Rachel explains the most important thing that all relationships are based on and provides awesome answers to questions like; How do you know when it’s time to call it quits? What can you do if you’re stuck in a pattern of dating people who aren’t a good fit for you? What are some simple tips for success in long-distance relationships? How do we handle one of the leading causes of breakups, separation, and divorce (MONEY)? Hot tips for virtual dating?! How can we keep the passion alive in a long-term relationship? Why do people stay in unhappy relationships and what can they do about it? Plus, find out why our new favorite relationship analogy now involves TJ Maxx! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Helix!\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'dea6f79f-f2ed-470b-9029-ae11018258a7',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/07/1a/26071a96-77e5-ea7a-f44a-d2963f069c9f/mza_1324547597935534294.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/our-lowest-lows-and-highest-highs-of-2021/id1251196416?i=1000546190647&uo=4',
          trackTimeMillis: 3415000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/07/1a/26071a96-77e5-ea7a-f44a-d2963f069c9f/mza_1324547597935534294.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/26/07/1a/26071a96-77e5-ea7a-f44a-d2963f069c9f/mza_1324547597935534294.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/6f43fc02-7d79-484d-a4ba-adfe002f7e8c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/6f43fc02-7d79-484d-a4ba-adfe002f7e8c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000546190647,
          trackName: 'Our Lowest Lows and Highest Highs of 2021',
          releaseDate: '2021-12-27T08:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are reflecting on the greatest and hardest things they experienced in 2021. They share what they learned from these experiences, in what ways they changed their perspective, and how this year inspired next year’s intentions and resolutions. They cover relationships, career, and health - plus offer some tips for reducing stress during the holiday season!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Athletic Greens!\nVisit ATHLETICGREENS.com/HELPLESS for a FREE 1 year supply of Vitamin D AND 5 FREE travel packs with your first purchase. \n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '6f43fc02-7d79-484d-a4ba-adfe002f7e8c',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e2/ca/cc/e2cacc76-2657-5bb2-09c6-59c53dc9c4a3/mza_6820217104946573946.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/why-were-messing-up-around-consent-and-how-to-fix-it/id1251196416?i=1000545511283&uo=4',
          trackTimeMillis: 4517000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e2/ca/cc/e2cacc76-2657-5bb2-09c6-59c53dc9c4a3/mza_6820217104946573946.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e2/ca/cc/e2cacc76-2657-5bb2-09c6-59c53dc9c4a3/mza_6820217104946573946.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4bc34442-e658-42ba-904e-adf9017e3f15/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4bc34442-e658-42ba-904e-adf9017e3f15/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000545511283,
          trackName: "Why We're Messing Up Around Consent (And How To Fix It)",
          releaseDate: '2021-12-20T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by consent educator and founder of Comprehensive Consent, Sarah Casper. Sarah shares how we can practice consent daily in our relationships, offers tips for communicating our desires and needs (plus specific tips for people-pleasers!), how social media has impacted the discussion around consent, and even the role that approval and popularity play. Tune in to learn the consent exercises you can do today with the kids and adults in your lives!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless Delanie’s comped resources for entrepreneurs: https://www.delaniefischer.com Kelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Postmates, Beam Organics, and Greenchef!\nPostmates is giving new customers $20 off your first order of $30 or more when you use code “HELPLESS”.\nGet $20 off any purchase over $75 when you go to BEAMORGANICS.com/HELPLESS.\nGo to GreenChef.com/helpless10 and use code helpless10 to get 10 Free Meals including free shipping!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '4bc34442-e658-42ba-904e-adf9017e3f15',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/71/a1/2571a1bc-d0ff-5de8-36be-4d8bc3b2fe70/mza_4902826250816654409.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/craniosacral-therapy/id1251196416?i=1000544808428&uo=4',
          trackTimeMillis: 3069000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/71/a1/2571a1bc-d0ff-5de8-36be-4d8bc3b2fe70/mza_4902826250816654409.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/71/a1/2571a1bc-d0ff-5de8-36be-4d8bc3b2fe70/mza_4902826250816654409.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3c7e2927-3650-4e9e-9f26-adf9015ee3d4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3c7e2927-3650-4e9e-9f26-adf9015ee3d4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000544808428,
          trackName: 'Craniosacral Therapy',
          releaseDate: '2021-12-13T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by craniosacral therapist and registered nurse, Joey Miller. Joey explains the science behind craniosacral therapy, how the body responds to it, and some possible results you can see with craniosacral therapy. Tune in to hear the difference Kelsey has seen after going to Joey for a couple of months.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Quip, ExpressVPN, Scribd, BetterHelp! \nIf you go to GETQUIP.com/HELPLESS, RIGHT NOW, on top of their holiday savings, you’ll get your first refill FREE.\nProtect yourself with the VPN I trust to keep me private online. Visit ExpressVPN.com/HELPLESS to get three extra months free.\nRight now, Scribd is offering our listeners a FREE 60-day trial. Go to try.scribd.com/HELPLESS for your free trial.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '3c7e2927-3650-4e9e-9f26-adf9015ee3d4',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/41/1c/f7/411cf7b2-d360-b9bf-d65d-5f1b5f55b5fa/mza_3301502577623640571.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/navigating-grief-the-loss-of-a-child/id1251196416?i=1000544090868&uo=4',
          trackTimeMillis: 4815000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/41/1c/f7/411cf7b2-d360-b9bf-d65d-5f1b5f55b5fa/mza_3301502577623640571.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/41/1c/f7/411cf7b2-d360-b9bf-d65d-5f1b5f55b5fa/mza_3301502577623640571.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/e2d09337-9d48-4f79-a9ed-adf2016aa9ca/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/e2d09337-9d48-4f79-a9ed-adf2016aa9ca/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000544090868,
          trackName: 'Navigating Grief: The Loss of a Child',
          releaseDate: '2021-12-06T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Palliative Care Social Worker and mother, Karyn Trowbridge. Karyn shares how she navigated her grief after the loss of her daughter, how this experience changed the way she views death, the impact it had on her marriage and her other children, what helped her cope (and what didn’t help), how others react when they find out about her loss (plus her response to the question, “how many kids do you have?”), and the many ways this experience altered her personal and professional path. Karyn is Delanie’s cousin and she graciously answers very tough personal questions.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s comped resources for entrepreneurs: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Tushy, Dipsea, Athletic Greens, and Helix!\nGet 10% OFF plus FREE SHIPPING RIGHT NOW at HELLOTUSHY.com/HELPLESS. \nDipsea is offering an extended 30-day free trial when you go to DipseaStories.com/HELPLESS.\nAthletic Greens is going to give you an immune-supporting FREE 1 year supply of Vitamin D AND 5 free travel packs with your first purchase if you visit ATHLETICGREENS.com/HELPLESS today.\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'e2d09337-9d48-4f79-a9ed-adf2016aa9ca',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ea/80/04/ea80045e-984d-7f90-563e-c271b3c5e08a/mza_18137829352347213395.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/the-truth-about-tantric-sex/id1251196416?i=1000543382232&uo=4',
          trackTimeMillis: 4203000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ea/80/04/ea80045e-984d-7f90-563e-c271b3c5e08a/mza_18137829352347213395.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ea/80/04/ea80045e-984d-7f90-563e-c271b3c5e08a/mza_18137829352347213395.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4aff6475-5a22-4cdb-b521-adea001b9c28/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4aff6475-5a22-4cdb-b521-adea001b9c28/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000543382232,
          trackName: 'The Truth About Tantric Sex',
          releaseDate: '2021-11-29T15:09:43Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are joined by international intimacy and relationship expert, Michaela Boehm. Michaela shares the key components of Tantra, the common misconceptions, and offers practical tips for applying this practice in order to strengthen your relationship with your partner (and yourself). Plus, find out the 1 area of the human body we should all be tending to A LOT more to keep things fired up in the bedroom (it’s not what you think!). \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Truebill, BEAMOrganics, and Everywell! \nEverlywell is offering a special discount of 20% off an at-home lab test at everlywell.com/helpless.\nDon’t fall for subscription scams. Start canceling today at Truebill.com/HELPLESS.\nHead to BEAMOrganics.com/HELPLESS and get 40% off the first 3 months of a peppermint dream subscription PLUS free mug and frother, OR you can get 20% off a one-time purchase.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '4aff6475-5a22-4cdb-b521-adea001b9c28',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7f/56/0c/7f560c54-cb4d-6e46-db03-5329551a6dd3/mza_7510181565218914687.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/6-steps-to-break-a-toxic-relationship-pattern/id1251196416?i=1000542706340&uo=4',
          trackTimeMillis: 2875000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7f/56/0c/7f560c54-cb4d-6e46-db03-5329551a6dd3/mza_7510181565218914687.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7f/56/0c/7f560c54-cb4d-6e46-db03-5329551a6dd3/mza_7510181565218914687.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/37c05344-ef50-4a25-9055-addd01568242/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/37c05344-ef50-4a25-9055-addd01568242/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000542706340,
          trackName: '6 Steps To Break A Toxic Relationship Pattern',
          releaseDate: '2021-11-22T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by mental health counselor and anxiety expert, Justine Carino! Justine breaks down step-by-step the 6 phases we must go through to break a toxic relationship pattern (and make it stick). Whether you’re experiencing toxicity with a romantic partner, family member, friend, coworker - or anyone else, this episode provides the tips and tools you need in order to be hyper-aware, establish and practice implementing new boundaries, and become the healthiest version of yourself. Plus, find out how anxiety plays a role in perpetuating destructive patterns!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\n \n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '37c05344-ef50-4a25-9055-addd01568242',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/c8/27/87/c8278762-83fd-9a22-ae39-9324bfe2b20c/mza_1997208201594711856.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/12-long-distance-relationship-tips-with-taylor-tomlinson/id1251196416?i=1000541971728&uo=4',
          trackTimeMillis: 3937000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/c8/27/87/c8278762-83fd-9a22-ae39-9324bfe2b20c/mza_1997208201594711856.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/c8/27/87/c8278762-83fd-9a22-ae39-9324bfe2b20c/mza_1997208201594711856.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7fab2fd0-9a88-4390-9aab-addc0007396a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7fab2fd0-9a88-4390-9aab-addc0007396a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000541971728,
          trackName: '12 Long Distance Relationship Tips with Taylor Tomlinson',
          releaseDate: '2021-11-15T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Taylor Tomlinson! Taylor offers tips on managing a long-distance relationship, answers all our burning questions regarding the matter, and shares her personal experiences. Tune in to find out the number one reason why some long-distance relationships fail.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Tushy, Quip, and Postmates!\nGet 10% OFF plus FREE SHIPPING RIGHT NOW at HELLOTUSHY.com/HELPLESS.\nGo to GETQUIP.com/HELPLESS and get your first refill FREE.\nPostmates is giving just our listeners a little something. You’ll get 50% off your first 5 orders of $50 or more when you use code “HELPLESS”.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '7fab2fd0-9a88-4390-9aab-addc0007396a',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ae/1b/0b/ae1b0b1a-42d2-98d7-c78f-603a10076274/mza_7019785994058895237.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/the-body-keeps-the-score/id1251196416?i=1000541109285&uo=4',
          trackTimeMillis: 3038000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ae/1b/0b/ae1b0b1a-42d2-98d7-c78f-603a10076274/mza_7019785994058895237.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ae/1b/0b/ae1b0b1a-42d2-98d7-c78f-603a10076274/mza_7019785994058895237.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/84391d9b-ace9-4c85-ac0e-add301720cd4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/84391d9b-ace9-4c85-ac0e-add301720cd4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000541109285,
          trackName: 'The Body Keeps the Score',
          releaseDate: '2021-11-08T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are discussing the book The Body Keeps the Score, by Bessel van der Kolk. The book analyzes how the body and mind react to trauma, lists the essential tools for trauma sufferers to cope and work to recover from their trauma, and breaks down the difference between normal memories and traumatic memories. The girls also share personal experiences, including dealing with recent losses and getting more in touch with their gut. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Dipsea, and Everywell. \nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless. \nFor listeners of the show, Dipsea is offering an extended 30-day free trial when you go to DipseaStories.com/HELPLESS.\n\nFor listeners of the show, Everlywell is offering a special discount of 20% off an at-home lab test at EVERLY WELL DOT COM slash HELPLESS.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '84391d9b-ace9-4c85-ac0e-add301720cd4',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e8/fd/62/e8fd6243-165a-c6a3-a4ee-7c39af6ce971/mza_10367448332487138233.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-doubt/id1251196416?i=1000540376296&uo=4',
          trackTimeMillis: 3474000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e8/fd/62/e8fd6243-165a-c6a3-a4ee-7c39af6ce971/mza_10367448332487138233.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/e8/fd/62/e8fd6243-165a-c6a3-a4ee-7c39af6ce971/mza_10367448332487138233.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9d7eb40f-ba8d-4156-9f95-adce017cfae2/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9d7eb40f-ba8d-4156-9f95-adce017cfae2/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000540376296,
          trackName: 'Self-Doubt',
          releaseDate: '2021-11-01T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss self-doubt. They share the negative behaviors that can be associated with self-doubt (one of these really blew their mind), different ways to manage it, and their personal go-to tips for when self-doubt creeps into their lives. Plus, enjoy a quotable buffet that’ll get you fired up!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\n\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHELP, Dad Grass, and Scribd. \nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless. \nGo to DADGRASS.com/HELPLESS for 20% off your first order.\nGo to try.scribd.com/HELPLESS for your 60 day FREE trial.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '9d7eb40f-ba8d-4156-9f95-adce017cfae2',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cd/52/ba/cd52ba76-f618-ed25-5e34-31f9db0ee3a3/mza_7220070288841392827.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/creator-burnout/id1251196416?i=1000539630871&uo=4',
          trackTimeMillis: 2548000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cd/52/ba/cd52ba76-f618-ed25-5e34-31f9db0ee3a3/mza_7220070288841392827.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cd/52/ba/cd52ba76-f618-ed25-5e34-31f9db0ee3a3/mza_7220070288841392827.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5ceed67d-26bc-4955-ad14-adc9014092db/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5ceed67d-26bc-4955-ad14-adc9014092db/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000539630871,
          trackName: 'Creator Burnout',
          releaseDate: '2021-10-25T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss creator burnout this week. They dive into the signs and symptoms of creator burnout, tips for managing and preventing it, and share the impact consistent content creation has on their mental and physical health. They also describe how their relationship with social media plays a role - with Kelsey being on socials having a big following and Delanie being social media free.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Quip and Tushy. \nStart getting rewards for brushing your teeth today, go to GETQuip.com/HELPLESS, RIGHT NOW, to save $10 on a Quip Smart Electric Toothbrush.\nGo to Hellotushy.com/HELPLESS to get TEN PERCENT OFF PLUS FREE SHIPPING.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '5ceed67d-26bc-4955-ad14-adc9014092db',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9a/43/70/9a43707f-505c-23d4-f101-3547c07cd7c0/mza_15467232063951933247.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/why-you-became-a-people-pleaser/id1251196416?i=1000538929402&uo=4',
          trackTimeMillis: 3406000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9a/43/70/9a43707f-505c-23d4-f101-3547c07cd7c0/mza_15467232063951933247.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9a/43/70/9a43707f-505c-23d4-f101-3547c07cd7c0/mza_15467232063951933247.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9663a2a6-b1cc-47fa-bb5d-adba014a5604/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9663a2a6-b1cc-47fa-bb5d-adba014a5604/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000538929402,
          trackName: 'Why You Became a People-Pleaser',
          releaseDate: '2021-10-18T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls revisit the topic of people-pleasing. They cover the signs that you’re a people pleaser, how individuals develop these tendencies and why they have a hard time breaking these patterns, and offer tips for setting boundaries and prioritizing your needs. Plus, they share some shocking stories about how people-pleasing have shown up in their own lives. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Laithwaites, and Everywell.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nNow, at Laithwaites, get six amazing bottles of wine, plus two bonus bottles and two stemless wine glasses for $49.99 (plus tax) with free delivery. Just text HELPLESS to 64-000!\nEverlywell is offering a special discount of 20% off an at-home lab test at everlywell.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '9663a2a6-b1cc-47fa-bb5d-adba014a5604',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/24/08/32/240832fb-9da0-0cb9-fa16-aca37fce1f16/mza_3536941239311348861.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/utis-interstitial-cystitis-and-pelvic-floor/id1251196416?i=1000538207624&uo=4',
          trackTimeMillis: 4401000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/24/08/32/240832fb-9da0-0cb9-fa16-aca37fce1f16/mza_3536941239311348861.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/24/08/32/240832fb-9da0-0cb9-fa16-aca37fce1f16/mza_3536941239311348861.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3719987f-b2f1-491a-a1e2-adba010e4b83/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3719987f-b2f1-491a-a1e2-adba010e4b83/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000538207624,
          trackName:
            'UTIs, Interstitial Cystitis, and Pelvic Floor Dysfunction with Dr. Rena Malik',
          releaseDate: '2021-10-11T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are joined by urologist Dr. Rena Malik, to debunk UTI myths, discuss interstitial cystitis, and offer tips and treatment options for pelvic floor dysfunction. If you’ve been experiencing pain during sex, feel a stinging sensation when you pee, or suffer from chronic constipation or back pain, the answers you need might be in this episode! PLUS, Taylor Tomlinson is back to kick off her theatre tour!!!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Helix, Dipsea, Dead Grass!\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\nGet 30 days of full access for free when you go to DIPSEAstories.com/HELPLESS.\nGo to DADGRASS.com/HELPLESS for 20% off your first order.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '3719987f-b2f1-491a-a1e2-adba010e4b83',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/72/91/3a/72913aa7-e66b-d484-985f-385ab1b129f9/mza_9481379645558227949.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/wintering-by-katherine-may/id1251196416?i=1000537475739&uo=4',
          trackTimeMillis: 2569000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/72/91/3a/72913aa7-e66b-d484-985f-385ab1b129f9/mza_9481379645558227949.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/72/91/3a/72913aa7-e66b-d484-985f-385ab1b129f9/mza_9481379645558227949.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/8e8a5489-fbf9-440f-af65-adb30163c582/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/8e8a5489-fbf9-440f-af65-adb30163c582/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000537475739,
          trackName: 'Wintering by Katherine May',
          releaseDate: '2021-10-04T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are discussing the book Wintering, by Katherine May. This book is all about the winter seasons of life - literal and metaphorical, why slowing down during tough times is both necessary and important and how we can learn to accept challenging seasons instead of resisting them. The girls also share personal experiences and their go-to comforts when they find themselves “wintering.”\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Quip and BetterHelp. \nStart getting rewards for brushing your teeth today, go to getQuip.com/HELPLESS, RIGHT NOW, to save $10 on a Quip Smart Electric Toothbrush.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '8e8a5489-fbf9-440f-af65-adb30163c582',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/57/06/a1/5706a1ff-a59d-368c-0e70-da989ddb40b2/mza_7268287749665901360.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/adult-adhd-with-dr-stephanie-sarkis/id1251196416?i=1000536740309&uo=4',
          trackTimeMillis: 4136000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/57/06/a1/5706a1ff-a59d-368c-0e70-da989ddb40b2/mza_7268287749665901360.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/57/06/a1/5706a1ff-a59d-368c-0e70-da989ddb40b2/mza_7268287749665901360.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/608c61ca-c276-4c7f-8bb6-ada7017fc1c9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/608c61ca-c276-4c7f-8bb6-ada7017fc1c9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000536740309,
          trackName: 'Adult ADHD with Dr. Stephanie Sarkis',
          releaseDate: '2021-09-27T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by psychotherapist, American Mental Health Counselors Association Diplomate, and ADHD and Gaslighting expert, Dr. Stephanie Sarkis! Dr. Sarkis shares the signs, symptoms, different types, and treatment options for people who have ADHD, the biggest misconceptions about this disorder (these blew our minds), why young girls are often overlooked and not diagnosed until adulthood, as well as what partners of people with ADHD experience in their day-to-day. Plus, tune in to find out the shocking link between emotional abuse and ADHD. Go to www.stephaniesarkis.com to find out more about Dr. Sarkis and her work.  \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless\nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\n\nThis episode was sponsored by Helix and Laithwaites!\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\nNow, at Laithwaites, get six amazing bottles of wine, plus two bonus bottles and two stemless wine glasses for $49.99 (plus tax) with free delivery. Just text HELPLESS to 64000!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '608c61ca-c276-4c7f-8bb6-ada7017fc1c9',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/96/dd/5f96ddce-c956-0c9d-c01e-4f74f7547051/mza_15535199876353485094.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/the-3-types-of-empathy/id1251196416?i=1000536009644&uo=4',
          trackTimeMillis: 2320000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/96/dd/5f96ddce-c956-0c9d-c01e-4f74f7547051/mza_15535199876353485094.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/96/dd/5f96ddce-c956-0c9d-c01e-4f74f7547051/mza_15535199876353485094.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f143598c-8a0a-4d72-8849-ada70172d5ae/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f143598c-8a0a-4d72-8849-ada70172d5ae/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000536009644,
          trackName: 'The 3 Types of Empathy',
          releaseDate: '2021-09-20T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls discuss empathy. They cover the 3 different types of empathy (did you know there were 3??), offer ways we can all become more empathetic, and provide personal experiences regarding how empathy affects them physically and emotionally. Plus, Kelsey shares a story that encompasses all 3 types! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \nDelanie’s Business Coaching: https://www.delaniefischer.com\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Dad Grass, Scribd, and BetterHelp!\nGo to DADGRASS.com/HELPLESS for 20% off your first order.\nGo to try.scribd.com/HELPLESS for your 60 day FREE trial.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'f143598c-8a0a-4d72-8849-ada70172d5ae',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/89/27/06/892706e3-2c21-7329-dddc-e06788a9b9d4/mza_7781729655146395027.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/cancel-culture-vs-accountability-with-sonya-renee-taylor/id1251196416?i=1000535162533&uo=4',
          trackTimeMillis: 3127000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/89/27/06/892706e3-2c21-7329-dddc-e06788a9b9d4/mza_7781729655146395027.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/89/27/06/892706e3-2c21-7329-dddc-e06788a9b9d4/mza_7781729655146395027.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/24fd5a4a-fae4-4b25-882b-ad9f0169088f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/24fd5a4a-fae4-4b25-882b-ad9f0169088f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000535162533,
          trackName:
            'Cancel Culture vs. Accountability with Sonya Renee Taylor',
          releaseDate: '2021-09-13T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by author, spoken word artist, speaker, social justice activist, educator, and founder of The Body is Not An Apology movement, Sonya Renee Taylor! Sonya shares the difference between “cancel culture” and accountability, what a sincere apology includes vs. what is just absolution, whether “getting canceled” is actually a real thing, and how we can hold ourselves and others accountable while remembering that we all make mistakes. Also - discover the ONE requirement of true accountability. Grab your notebook, this episode is packed with practical tips and takeaways that can make us all better listeners (and humans!). You can find more information about Sonya at https://www.sonyareneetaylor.com/ \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Dipsea!\nGet 30 days of full access for free when you go to DIPSEAstories.com/HELPLESS.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '24fd5a4a-fae4-4b25-882b-ad9f0169088f',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/de/5d/7c/de5d7c15-2727-0ddd-ea8f-c725553fce70/mza_12719428374177307315.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/social-conditioning/id1251196416?i=1000534445856&uo=4',
          trackTimeMillis: 2489000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/de/5d/7c/de5d7c15-2727-0ddd-ea8f-c725553fce70/mza_12719428374177307315.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/de/5d/7c/de5d7c15-2727-0ddd-ea8f-c725553fce70/mza_12719428374177307315.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d99ff696-54cc-4785-93a3-ad9701380c42/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d99ff696-54cc-4785-93a3-ad9701380c42/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000534445856,
          trackName: 'Social Conditioning',
          releaseDate: '2021-09-06T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are discussing social conditioning this week. They cover what social conditioning is, its impact on us, and how to question the parts of your conditioning that don’t feel good to you. The girls also share some memories surrounding their own conditioning, how it’s shaped who they are today, and how each of them continues to question aspects of our society that are accepted as “the norm.”\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Helix! \n\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nHelix is offering up to 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'd99ff696-54cc-4785-93a3-ad9701380c42',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/0f/70/1e/0f701ed3-5b63-ef7c-9f57-606073df1130/mza_9763496837748871372.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/how-to-stay-informed-with-noor-tagouri/id1251196416?i=1000533571397&uo=4',
          trackTimeMillis: 2887000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/0f/70/1e/0f701ed3-5b63-ef7c-9f57-606073df1130/mza_9763496837748871372.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/0f/70/1e/0f701ed3-5b63-ef7c-9f57-606073df1130/mza_9763496837748871372.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f52636b6-905b-45e0-857e-ad9001794dd8/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f52636b6-905b-45e0-857e-ad9001794dd8/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000533571397,
          trackName: 'How to Stay Informed with Noor Tagouri',
          releaseDate: '2021-08-30T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by award-winning journalist, badass activist, and producer, Noor Tagouri! Noor shares how we can ensure that the information we receive and share is credible, who benefits (and profits) from our fear and the divisiveness created in traditional media outlets, and what changes would have a positive impact on the media industry - and on us. Plus, practical tips for getting involved in causes you care about without the overwhelm! Check out Noor’s work https://www.noortagouri.com/.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Upstart, Quip, and Scribd!\n\nFind out how Upstart can lower your monthly payments today when you go to UPSTART.com/helpless.\n\nGo to GETQuip.com/HELPLESS to save $10 on a Quip Smart Electric Toothbrush.\n\nGo to try.scribd.com/HELPLESS for your 60 day FREE trial.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'f52636b6-905b-45e0-857e-ad9001794dd8',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f3/9b/b1/f39bb134-cfd2-327c-8a5a-9af22edbba73/mza_3617758727820542227.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/50-weird-facts/id1251196416?i=1000532804041&uo=4',
          trackTimeMillis: 3109000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f3/9b/b1/f39bb134-cfd2-327c-8a5a-9af22edbba73/mza_3617758727820542227.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f3/9b/b1/f39bb134-cfd2-327c-8a5a-9af22edbba73/mza_3617758727820542227.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/54b14543-d4c6-4d87-8ef0-ad7f015c7c05/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/54b14543-d4c6-4d87-8ef0-ad7f015c7c05/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000532804041,
          trackName: '50 Weird Facts',
          releaseDate: '2021-08-23T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are dishing out some strange facts this week! Everything from the origin of the term spam mail, a terrifying skill that wasps have, the one family dynamic no U.S. president has ever experienced, why pigeons have been so underappreciated, and how jellyfish are probably going to take over the world at some point. Plus, some weird exercises and fun facts about Delanie and Kelsey!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp! \nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless. \n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '54b14543-d4c6-4d87-8ef0-ad7f015c7c05',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7e/98/fe/7e98fec1-e8aa-b45f-aa15-319519ac44df/mza_9014099945110542775.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/uncertainty/id1251196416?i=1000532149843&uo=4',
          trackTimeMillis: 2038000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7e/98/fe/7e98fec1-e8aa-b45f-aa15-319519ac44df/mza_9014099945110542775.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7e/98/fe/7e98fec1-e8aa-b45f-aa15-319519ac44df/mza_9014099945110542775.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/84a5cd89-ebc2-4643-8ad1-ad7f0154e11c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/84a5cd89-ebc2-4643-8ad1-ad7f0154e11c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000532149843,
          trackName: 'Uncertainty',
          releaseDate: '2021-08-16T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are discussing managing uncertainty (and all the anxiety that can come with it) this week. They share some tips for coping with uncertainty, what tools have helped them the most, and offer some personal experiences as well. Tune in to find out what they feel has been the biggest silver lining when it comes to uncertainty in their lives, and reflect on how you might be able to improve your own relationship with uncertainty.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Goodchef!\nGo to GreenChef.com/HELPLESS100 and use code HELPLESS100 to get $100 off including free shipping!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '84a5cd89-ebc2-4643-8ad1-ad7f0154e11c',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/2e/90/3f/2e903fb6-a50f-1d11-9520-c2173ca37a6e/mza_17547732170288031497.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/signs-you-might-be-in-a-toxic-relationship/id1251196416?i=1000531485231&uo=4',
          trackTimeMillis: 3690000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/2e/90/3f/2e903fb6-a50f-1d11-9520-c2173ca37a6e/mza_17547732170288031497.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/2e/90/3f/2e903fb6-a50f-1d11-9520-c2173ca37a6e/mza_17547732170288031497.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/766438f9-e51c-4e27-8684-ad7f00f68495/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/766438f9-e51c-4e27-8684-ad7f00f68495/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000531485231,
          trackName: 'Signs You Might Be in a Toxic Relationship',
          releaseDate: '2021-08-09T15:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are discussing damaging relationships. They share some statistics about emotional abuse in the United States, signs to be aware of when it comes to toxic relationship dynamics, as well as open up about some tough personal experiences. We’re hoping this episode provides some clarity and validation to anyone who is, currently, in a harmful situation or has been in the past.\n\n***This episode may be triggering to survivors of abuse, listener discretion advised.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Helix and BetterHelp! \nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '766438f9-e51c-4e27-8684-ad7f00f68495',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c9/9d/aa/c99daab8-71fc-1910-1a0c-79c284db8190/mza_15916359112711347126.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/work-life-balance/id1251196416?i=1000530747517&uo=4',
          trackTimeMillis: 2582000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c9/9d/aa/c99daab8-71fc-1910-1a0c-79c284db8190/mza_15916359112711347126.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/c9/9d/aa/c99daab8-71fc-1910-1a0c-79c284db8190/mza_15916359112711347126.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4d231822-f69f-4d3c-9ac4-ad7501706547/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4d231822-f69f-4d3c-9ac4-ad7501706547/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000530747517,
          trackName: 'Work-Life Balance',
          releaseDate: '2021-08-02T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are discussing work-life balance. They share some tips for finding more balance personally and professionally, what’s actually stuck for them when it comes to building habits that support balance (and what hasn’t worked so well), and their go-to systems that they use in their day-to-day. This episode is a chance to take a step back and evaluate what’s working for you, what’s not, and generate some solutions to implement for more enjoyment and fulfillment when it comes to both work and life.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Upstart and Dipsea!\nFind out how Upstart can lower your monthly payments today when you go to UPSTART.com/helpless.\nFor listeners of the show, Dipsea is offering an extended 30 day free trial when you go to DipseaStories.com/HELPLESS.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '4d231822-f69f-4d3c-9ac4-ad7501706547',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/34/3c/8c/343c8ca1-d4a9-f8cd-7921-9ff9694ac76b/mza_3853073999005684985.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/20-beauty-tips-we-wish-we-knew-sooner/id1251196416?i=1000530040294&uo=4',
          trackTimeMillis: 4034000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/34/3c/8c/343c8ca1-d4a9-f8cd-7921-9ff9694ac76b/mza_3853073999005684985.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/34/3c/8c/343c8ca1-d4a9-f8cd-7921-9ff9694ac76b/mza_3853073999005684985.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/06c2ac62-ce65-4b4a-9078-ad6501456948/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/06c2ac62-ce65-4b4a-9078-ad6501456948/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000530040294,
          trackName: '20 Beauty Tips We Wish We Knew Sooner',
          releaseDate: '2021-07-26T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are sharing their top 20 simple beauty tips this week! They cover hair, skincare, makeup, outfits, and some of their favorite products. They also discuss what’s worked, what hasn’t, and swap some beauty fail stories. Tune in to find out who chopped their hair off as a kid, and who was missing a chunk of their eyebrow for a while.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '06c2ac62-ce65-4b4a-9078-ad6501456948',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/25/92/07/259207cf-55a6-7926-0e1e-7df1bb61b464/mza_8437272347219347297.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/jealousy/id1251196416?i=1000529338296&uo=4',
          trackTimeMillis: 2760000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/25/92/07/259207cf-55a6-7926-0e1e-7df1bb61b464/mza_8437272347219347297.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/25/92/07/259207cf-55a6-7926-0e1e-7df1bb61b464/mza_8437272347219347297.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/184ae51f-b725-4559-84e8-ad650137a29c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/184ae51f-b725-4559-84e8-ad650137a29c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000529338296,
          trackName: 'Jealousy',
          releaseDate: '2021-07-19T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are discussing jealousy this week. They cover the root cause of jealousy, what can happen if we let this emotion dictate our lives, and how we can use jealousy as a tool to move us forward towards our goals and desires. The girls also share some personal experiences with jealousy, how they used to respond to it, and how they navigate these emotions now.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Care/of!\nFor 50% off your first Care/of order, go to TakeCareOf.com and enter code selfhelpless50.\n\n\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '184ae51f-b725-4559-84e8-ad650137a29c',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/ae/65/80/ae658085-e1ab-5f0e-94fd-8c3df6924569/mza_11901932468746666147.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/gaslighting/id1251196416?i=1000528606106&uo=4',
          trackTimeMillis: 4013000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/ae/65/80/ae658085-e1ab-5f0e-94fd-8c3df6924569/mza_11901932468746666147.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/ae/65/80/ae658085-e1ab-5f0e-94fd-8c3df6924569/mza_11901932468746666147.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/15f91fb9-e0d2-42a6-b058-ad5f01364db5/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/15f91fb9-e0d2-42a6-b058-ad5f01364db5/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000528606106,
          trackName: 'Gaslighting',
          releaseDate: '2021-07-12T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by psychotherapist, American Mental Health Counselors Association Diplomate, and author of Gaslighting: Recognize Manipulative and Emotionally Abusive People - And Break Free, Dr. Stephanie Sarkis. Dr. Sarkis explains what gaslighting is, why people gaslight, and the short-term and long-term psychological effects people who get gaslighted experience. She also offers examples ranging from subtle to extreme forms of gaslighting, signs to be aware of, and how to set boundaries in order to protect yourself from emotional abuse. Whether you’re being gaslighted, or you’re doing the gaslighting (there’s help available for you too), this informative episode provides guidance, action steps, and hope. Plus, find out which popular TV tropes Dr. Sarkis is not a fan of, and rightly so! Go to www.stephaniesarkis.com to find out more about Dr. Sarkis and her work. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Dipsea!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless. \nFor listeners of the show, Dipsea is offering an extended 30 day free trial when you go to DipseaStories.com/HELPLESS.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '15f91fb9-e0d2-42a6-b058-ad5f01364db5',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4e/0b/ab/4e0bab3f-6447-339f-b06b-8b3d9b31cc77/mza_8437696160362770988.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/gratitude-and-presence/id1251196416?i=1000527869486&uo=4',
          trackTimeMillis: 3715000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4e/0b/ab/4e0bab3f-6447-339f-b06b-8b3d9b31cc77/mza_8437696160362770988.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4e/0b/ab/4e0bab3f-6447-339f-b06b-8b3d9b31cc77/mza_8437696160362770988.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/de31f2ba-b930-4d6d-a4ca-ad58011d4408/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/de31f2ba-b930-4d6d-a4ca-ad58011d4408/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000527869486,
          trackName: 'Gratitude and Presence',
          releaseDate: '2021-07-05T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by two-time cancer survivor and motivational speaker Janet Knode. Janet is a big proponent of being your own healthcare advocate, practicing gratitude, and being present. In this episode, she describes the moment she found out that she had cancer, the different procedures she went through to get into remission (ever heard of leech therapy??), experiences with family, friends, hairstyles, and her body, and the biggest differences in how she thinks and lives her life now vs. before her first diagnosis. If you’re navigating a difficult time, struggling with living in the moment, or finding things to be grateful for, or you’re looking for some inspiration to go after what you want in your life, this episode is definitely for you.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Helix!\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'de31f2ba-b930-4d6d-a4ca-ad58011d4408',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/6e/99/7a/6e997a49-2724-3c75-15de-10c820bf3495/mza_10055162882140867472.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/constructive-criticism-vs-destructive-criticism/id1251196416?i=1000527111937&uo=4',
          trackTimeMillis: 2989000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/6e/99/7a/6e997a49-2724-3c75-15de-10c820bf3495/mza_10055162882140867472.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/6e/99/7a/6e997a49-2724-3c75-15de-10c820bf3495/mza_10055162882140867472.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b48b589d-87bb-4ae4-832a-ad44002fab19/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b48b589d-87bb-4ae4-832a-ad44002fab19/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000527111937,
          trackName: 'Constructive Criticism vs. Destructive Criticism',
          releaseDate: '2021-06-28T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are talking about criticism this week. They discuss the difference between constructive criticism vs. destructive criticism, tips for handling criticism and managing fear, anger, anxiety, and hurt, the value of constructive criticism and feedback, personal experiences - as well as how they continue to work towards their goals despite destructive criticism. Whether you’re in the midst of managing criticism, and the feelings that surround it, online or in person, this episode is for you!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Care/of!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nFor 50% off your first Care/of order, go to TakeCareOf.com and enter code selfhelpless50.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'b48b589d-87bb-4ae4-832a-ad44002fab19',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/14/a6/c7/14a6c7f7-7a0f-bbfb-2e44-2f45efd0dbdc/mza_2007013394588472665.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/acupuncture/id1251196416?i=1000526265685&uo=4',
          trackTimeMillis: 3128000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/14/a6/c7/14a6c7f7-7a0f-bbfb-2e44-2f45efd0dbdc/mza_2007013394588472665.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/14/a6/c7/14a6c7f7-7a0f-bbfb-2e44-2f45efd0dbdc/mza_2007013394588472665.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0cab91aa-e0d3-483b-aa4b-ad4300476d7c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0cab91aa-e0d3-483b-aa4b-ad4300476d7c/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000526265685,
          trackName: 'Acupuncture',
          releaseDate: '2021-06-21T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Doctor of Acupuncture, Dr. Kathleen Funk! Dr. Funk answers our questions about the efficacy of acupuncture, its origins, its benefits, misconceptions behind the practice and so much more. Kelsey also talks about her recent progress managing her TMJ with acupuncture and gets additional guidance from Dr. Funk. If you struggle with things like IBS, migraines, thyroid issues, PCOS, and more, you may find this episode particularly helpful!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Feals and Bright Cellar! \nGo to FEALS.com/helpless to become a member and get 50% automatically taken off your first order with free shipping.\nListeners get 60% off your first 4-bottle order at BRIGHTCELLARS.COM/HELPLESS\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '0cab91aa-e0d3-483b-aa4b-ad4300476d7c',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/da/28/19/da281949-2ce3-8783-6a44-1337808bfffe/mza_12079688471583490947.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/getting-married-at-21/id1251196416?i=1000525429036&uo=4',
          trackTimeMillis: 4138000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/da/28/19/da281949-2ce3-8783-6a44-1337808bfffe/mza_12079688471583490947.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/da/28/19/da281949-2ce3-8783-6a44-1337808bfffe/mza_12079688471583490947.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/86c3d5db-7ad3-45e2-8339-ad3c01239692/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/86c3d5db-7ad3-45e2-8339-ad3c01239692/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000525429036,
          trackName: 'Getting Married at 21',
          releaseDate: '2021-06-14T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by Kris Hillberg. Kris opens up about getting married at the age of 21, what led to that decision, and how it impacted her life.\n\nKris is very candid as she shares her personal experience with the organized religion that she grew up in, and her feelings about those experiences. This episode is in no way meant to offend anyone who has religious beliefs - we believe religion can offer community, guidance, and comfort and it can be a very powerful and meaningful part of someone’s life. This episode is not a generalization about religion as a whole, it is one person‘s experience. \n\nIf you believe you might be upset by hearing someone share about their personal experience relating to religion and no longer being a part of that religion, this episode is not for you. Our goal with this episode is to offer some support, insight, and laughter around this topic for anyone who might be or has been, in a similar situation that Kris was in. Tune in to discover the steps Kris took to pave her own way!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Helix!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '86c3d5db-7ad3-45e2-8339-ad3c01239692',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/c1/8d/4fc18d08-42f7-5c56-816e-ddd9a07bc94f/mza_15423082602986687187.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/homeschooling-and-independent-study/id1251196416?i=1000524492361&uo=4',
          trackTimeMillis: 2985000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/c1/8d/4fc18d08-42f7-5c56-816e-ddd9a07bc94f/mza_15423082602986687187.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/c1/8d/4fc18d08-42f7-5c56-816e-ddd9a07bc94f/mza_15423082602986687187.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7577f530-52c7-4c61-be83-ad3501494511/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7577f530-52c7-4c61-be83-ad3501494511/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000524492361,
          trackName: 'Homeschooling and Independent Study',
          releaseDate: '2021-06-07T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss homeschooling this week. Kelsey interviews Delanie about her personal experience with participating in an independent study program for high school - the unfortunate health issues that led to her having to leave a conventional setting, what the adjustment was like, and how it impacted her social life and career trajectory. We hope this episode provides some comfort to anyone struggling with navigating this new normal of various homeschool experiences during this time and moving forward. Kelsey and Delanie also mention some big personal and professional milestones!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Care/of!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nFor 50% off your first Care/of order, go to TakeCareOf.com and enter code selfhelpless50.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '7577f530-52c7-4c61-be83-ad3501494511',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4b/fc/41/4bfc41c8-4995-7186-f10d-33b6dc9d4411/mza_13625787669938701384.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-worth/id1251196416?i=1000523645846&uo=4',
          trackTimeMillis: 4676000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4b/fc/41/4bfc41c8-4995-7186-f10d-33b6dc9d4411/mza_13625787669938701384.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4b/fc/41/4bfc41c8-4995-7186-f10d-33b6dc9d4411/mza_13625787669938701384.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5fe2454e-7464-4386-8ce3-ad35012bc9ba/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5fe2454e-7464-4386-8ce3-ad35012bc9ba/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000523645846,
          trackName: 'Self-Worth',
          releaseDate: '2021-05-31T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by Life and Mindset Coach for Perfectionists, Nicole Baker. Nicole shares how being exposed to personal development tools from a young age shaped her and opens up about being bullied as a kid, body image, experiencing emotional and physical abuse in a romantic relationship, and the steps she took towards building confidence, fully realizing her worth, and finding her voice. This episode contains information that may be triggering to survivors of abuse and those in recovery for an eating disorder, listener discretion is advised. \n\nHere is the link to the morning routine worksheet that Nicole mentioned in the episode.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp and Bright Cellar!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nListeners get 60% off your first 4-bottle order at BRIGHTCELLARS.COM/HELPLESS\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '5fe2454e-7464-4386-8ce3-ad35012bc9ba',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a0/e7/ac/a0e7ac3d-a85d-4191-f3ea-176ca78618ee/mza_4738804897347148189.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/defining-enough/id1251196416?i=1000522907460&uo=4',
          trackTimeMillis: 2800000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a0/e7/ac/a0e7ac3d-a85d-4191-f3ea-176ca78618ee/mza_4738804897347148189.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a0/e7/ac/a0e7ac3d-a85d-4191-f3ea-176ca78618ee/mza_4738804897347148189.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/229d4b05-66de-4e3d-8682-ad2900086fbd/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/229d4b05-66de-4e3d-8682-ad2900086fbd/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000522907460,
          trackName: 'Defining Enough',
          releaseDate: '2021-05-24T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the concept of defining enough. They share information from studies about the impact of money on happiness, well-being, and overall life satisfaction, what enough means to each of them personally, and tips for gaining clarity on what enough might mean to you. Tune in for some interesting quotes from public figures about fame, money, and happiness as well!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by Feals.\nStart feeling better with Feals. Become a member today by going to Feals.com/helpless and you’ll get 50% off your first order with free shipping!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '229d4b05-66de-4e3d-8682-ad2900086fbd',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/32/b9/5d/32b95d9e-b414-32ea-888a-8fd9b7e47838/mza_18349662975082856762.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/we-should-all-be-millionaires-with-rachel-rodgers/id1251196416?i=1000522008507&uo=4',
          trackTimeMillis: 3567000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/32/b9/5d/32b95d9e-b414-32ea-888a-8fd9b7e47838/mza_18349662975082856762.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/32/b9/5d/32b95d9e-b414-32ea-888a-8fd9b7e47838/mza_18349662975082856762.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/67ebdff4-9d8c-476d-b9f3-ad280188dcc4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/67ebdff4-9d8c-476d-b9f3-ad280188dcc4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000522008507,
          trackName: 'We Should All Be Millionaires with Rachel Rodgers',
          releaseDate: '2021-05-17T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by Founder and CEO of Hello Seven, intellectual property attorney, author, and brilliant speaker, Rachel Rodgers. Rachel shares about her background and the steps she took to become a millionaire, the importance of women building wealth, managing guilt around money, what holds us back from earning more - or trying to earn more, and what we can do today to take control of our financial future. We are thrilled that Rachel celebrated the launch of her new book with us! Be sure to grab your copy of We Should All Be Millionaires: A Woman’s Guide to Earning More, Building Wealth, and Gaining Economic Power. Find out more about Rachel at https://helloseven.co/ \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nThis episode was sponsored by BetterHelp, Zola, and Helix!\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\nGo to ZOLA.com/HELPLESS today and use promo code SAVE50, to get 50% off your save-the-dates.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '67ebdff4-9d8c-476d-b9f3-ad280188dcc4',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6f/33/b8/6f33b8c1-d48a-7880-d09f-783b455867c3/mza_18275525604006728031.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/allergies/id1251196416?i=1000521098152&uo=4',
          trackTimeMillis: 2747000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6f/33/b8/6f33b8c1-d48a-7880-d09f-783b455867c3/mza_18275525604006728031.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6f/33/b8/6f33b8c1-d48a-7880-d09f-783b455867c3/mza_18275525604006728031.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/407bc65c-67b7-48c0-866a-ad2101286594/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/407bc65c-67b7-48c0-866a-ad2101286594/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000521098152,
          trackName: 'Allergies',
          releaseDate: '2021-05-10T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss allergies this week. They cover the types of allergies, facts vs. myths, and some practical tips. Kelsey also shares her personal experience with navigating severe allergic reactions throughout her life, and the anxiety that comes with it. Tune in to find out the one thing we can all do to support people who struggle with allergies!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was brought to you by Care/Of.\nFor 50% off your first Care/Of order, go to TakeCareOf.com and enter code selfhelpless50.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '407bc65c-67b7-48c0-866a-ad2101286594',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/57/6b/5f576b59-37b0-44ca-b962-a759969c570d/mza_2902070283229101817.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/living-with-narcissistic-personality-disorder-with/id1251196416?i=1000519855834&uo=4',
          trackTimeMillis: 5782000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/57/6b/5f576b59-37b0-44ca-b962-a759969c570d/mza_2902070283229101817.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/5f/57/6b/5f576b59-37b0-44ca-b962-a759969c570d/mza_2902070283229101817.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/27c9b5f9-f3dc-4a67-a5c3-ad18013b1632/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/27c9b5f9-f3dc-4a67-a5c3-ad18013b1632/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000519855834,
          trackName:
            'Living with Narcissistic Personality Disorder with Lee Hammock',
          releaseDate: '2021-05-03T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by self-aware narcissist and internet personality, Lee Hammock. Lee is diagnosed with Narcissistic Personality Disorder and has been in therapy for three years managing his NPD. Lee’s perspective, encouragement, and insight has helped thousands of people - victims of narcissistic abuse and people with narcissistic personality disorder alike. \n\nDuring this episode, Lee shares about his childhood and what he thinks led to his narcissistic tendencies, how it feels navigating his relationship with his wife and children, and why narcissists gaslight, devalue, discard, and hoover the people in their lives. He also answers questions like: Do narcissists experience love? Do people with NPD have feelings? Can narcissists spot other narcissists? If you believe you have narcissistic tendencies or NPD, you’re currently navigating a narcissistic relationship, or you’re a survivor of narcissistic abuse - this episode is intended to provide comfort, validation, and practical tools. Also, tune in to find out which Disney princes are narcissists!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode is sponsored by MeUndies and BetterHelp.\nGet 15% off your first order and free shipping go to MeUndies.com/HELPLESS.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '27c9b5f9-f3dc-4a67-a5c3-ad18013b1632',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7a/a4/66/7aa46630-c29a-2722-5924-e7296ba4e867/mza_18000657934632561386.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/untamed/id1251196416?i=1000518667325&uo=4',
          trackTimeMillis: 3113000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7a/a4/66/7aa46630-c29a-2722-5924-e7296ba4e867/mza_18000657934632561386.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7a/a4/66/7aa46630-c29a-2722-5924-e7296ba4e867/mza_18000657934632561386.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2c0f567b-5a5b-4cd0-88f6-ad12013292c3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2c0f567b-5a5b-4cd0-88f6-ad12013292c3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000518667325,
          trackName: 'Untamed',
          releaseDate: '2021-04-26T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week the girls are discussing the highly requested book from their listeners, Untamed, by Glennon Doyle. Delanie shares some points and anecdotes from the audiobook with Kelsey as they reflect on their own social conditioning. Untamed encourages people to question their “training” and instead go inward to make decisions, and to ultimately trust their inner knowing. It explores misogyny, racism, religious indoctrination, homophobia - all the ways that patriarchy keeps people “tamed.” Kelsey and Delanie also share some personal stories about being raised as girls in America.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode is sponsored by Dipsea and Hello Tushy. \n\nFor listeners of the show, Dipsea is offering an extended 30 day free trial when you go to DipseaStories.com/HELPLESS.\n\nGo to HELLOTUSHY.com/HELPLESS to get 10% off plus free shipping.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '2c0f567b-5a5b-4cd0-88f6-ad12013292c3',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a2/75/bf/a275bf27-7924-6f99-cf96-52ea6ae809f5/mza_5120137902549692682.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/performance-anxiety/id1251196416?i=1000517740423&uo=4',
          trackTimeMillis: 3859000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a2/75/bf/a275bf27-7924-6f99-cf96-52ea6ae809f5/mza_5120137902549692682.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/a2/75/bf/a275bf27-7924-6f99-cf96-52ea6ae809f5/mza_5120137902549692682.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/868a7a95-13ce-40be-abf3-ad0d001e70cc/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/868a7a95-13ce-40be-abf3-ad0d001e70cc/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000517740423,
          trackName: 'Performance Anxiety',
          releaseDate: '2021-04-19T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls cover performance anxiety - everything from work, stage fright, and sex. They discuss the physical responses we can experience with performance anxiety, tips for managing it, and share personal stories. There’s talk of sweaty hands, nervous poops, and even the mention of playing patty cake with a wiener (take your best guess at who did that one).\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by Feals and BetterHelp. \nStart feeling better with Feals. Become a member today by going to Feals.com/helpless and you’ll get 50% off your first order with free shipping.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '868a7a95-13ce-40be-abf3-ad0d001e70cc',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/aa/30/3f/aa303fdd-f05c-3d33-ff7e-01b6288f9805/mza_10693416264348404802.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/sleep-deprivation/id1251196416?i=1000516787622&uo=4',
          trackTimeMillis: 2897000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/aa/30/3f/aa303fdd-f05c-3d33-ff7e-01b6288f9805/mza_10693416264348404802.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/aa/30/3f/aa303fdd-f05c-3d33-ff7e-01b6288f9805/mza_10693416264348404802.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a6cf8045-a10e-4003-a30d-acfc016a3e1d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a6cf8045-a10e-4003-a30d-acfc016a3e1d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000516787622,
          trackName: 'Sleep Deprivation',
          releaseDate: '2021-04-12T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week, the girls discuss the importance of sleep. They share information about the negative impacts of sleep deprivation on our health, the link between sleep avoidance and workaholism, different ways to regulate sleep, and they offer some tips from their own bedtime routine. Tune in to find out what puts Delanie to sleep no matter what time of day, and why Kelsey is currently training herself to sleep on her back!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by Care/of, BetterHelp, and Helix!\nGo to TAKECAREOF.COM/SELFHELPLESS50 and enter code SELFHELPLESS50. You’ll get 50% off your first Care/of order! \nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'a6cf8045-a10e-4003-a30d-acfc016a3e1d',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/71/cb/72/71cb72b1-1e01-9dac-8f3a-46fd991f2bda/mza_3631197158631380355.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/adult-children-of-divorce/id1251196416?i=1000515819599&uo=4',
          trackTimeMillis: 4644000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/71/cb/72/71cb72b1-1e01-9dac-8f3a-46fd991f2bda/mza_3631197158631380355.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/71/cb/72/71cb72b1-1e01-9dac-8f3a-46fd991f2bda/mza_3631197158631380355.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0d2e6299-f42a-4cc2-9168-acfb01896271/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0d2e6299-f42a-4cc2-9168-acfb01896271/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000515819599,
          trackName: 'Adult Children of Divorce',
          releaseDate: '2021-04-05T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by emerging Indian-American television writer and former writer of Huffington Post, Nishima Gupta. An article Nishima wrote about her parents’ divorce gained a lot of traction and she has since been developing her story for the screen. \n\nDuring this episode, Nishima shares the moment she found out about her parents’ divorce (three years later while still living under the same roof), why they kept this information from her, how this has affected her view on marriage and relationships – we talk about trauma, Indian representation in the media, and how different divorce can look across families and cultures. Are you an adult child of divorce, or going through one yourself? Tune in! You’re not alone.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by BetterHelp, Honey, & MeUndies.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nGet Honey for FREE at joinhoney.com/helpless.\nGo to MeUndies.com/HELPLESS and get 15% off your first order and free shipping!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '0d2e6299-f42a-4cc2-9168-acfb01896271',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/d0/1e/4fd01e14-daa3-bbf6-8a72-c456a77673df/mza_15609735571234860354.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/narcissism-and-narcissistic-personality-disorder-with/id1251196416?i=1000514861059&uo=4',
          trackTimeMillis: 3852000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/d0/1e/4fd01e14-daa3-bbf6-8a72-c456a77673df/mza_15609735571234860354.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/4f/d0/1e/4fd01e14-daa3-bbf6-8a72-c456a77673df/mza_15609735571234860354.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/99669773-c043-4584-b8ae-acf1001446bb/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/99669773-c043-4584-b8ae-acf1001446bb/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000514861059,
          trackName:
            'Narcissism and Narcissistic Personality Disorder with Dr. Ramani Durvasula',
          releaseDate: '2021-03-29T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'We are joined by narcissism expert, licensed clinical psychologist, best-selling author, professor of psychology, distinguished speaker, and workplace consultant, Dr. Ramani Durvasula. Dr. Ramani offers information about the different types of narcissism, signs you might be in a relationship with a narcissist, the cycle of narcissistic abuse, how to safely leave a relationship with a narcissist, what one might experience after leaving a narcissistic relationship, and A LOT more. If you believe you’re in a toxic relationship, or your life is perpetually chaotic, tune in to discover ways to help yourself understand and work through what might be happening to you.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '99669773-c043-4584-b8ae-acf1001446bb',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/74/9b/15/749b1539-e3f2-3568-8764-788af33a766e/mza_5783774283973775839.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/ex-porn-star-jessie-rogers/id1251196416?i=1000513934034&uo=4',
          trackTimeMillis: 3379000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/74/9b/15/749b1539-e3f2-3568-8764-788af33a766e/mza_5783774283973775839.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/74/9b/15/749b1539-e3f2-3568-8764-788af33a766e/mza_5783774283973775839.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/57167d33-7ea4-4b08-865d-acef006fe81f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/57167d33-7ea4-4b08-865d-acef006fe81f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000513934034,
          trackName: 'Ex-Porn Star Jessie Rogers',
          releaseDate: '2021-03-22T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'Trigger warning: Some contents of this interview might be triggering to survivors of sexual abuse.\n\nThe girls are joined by ex-porn star and internet personality, Jessie Rogers. Jessie shares what she wishes she knew before she got into the adult entertainment industry, misconceptions people have about sex work, what life has been like after leaving the industry, and what she encourages others to consider before becoming an adult film star. Tune in to witness the moment Kelsey finally gets to meet her doppelgänger!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by BetterHelp, Dipsea, & Feals.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nDipsea is offering a 30-day free trial when you go to DipseaStories.com/HELPLESS.\nGo to FEALS.com/HELPLESS to become a member and get 50% automatically taken off your first order with free shipping.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '57167d33-7ea4-4b08-865d-acef006fe81f',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/6a/7c/04/6a7c045c-9090-4b25-8ada-8b11dcd62833/mza_5342827384819938160.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/living-with-a-chronic-illness/id1251196416?i=1000513054221&uo=4',
          trackTimeMillis: 5358000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/6a/7c/04/6a7c045c-9090-4b25-8ada-8b11dcd62833/mza_5342827384819938160.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/6a/7c/04/6a7c045c-9090-4b25-8ada-8b11dcd62833/mza_5342827384819938160.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0edb9919-5005-42fb-ae02-ace10153bc59/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/0edb9919-5005-42fb-ae02-ace10153bc59/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000513054221,
          trackName: 'Living With A Chronic Illness',
          releaseDate: '2021-03-15T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we are joined by Walt Drennan, host of The Ask Me About My Type 1 Podcast and rider from the documentary, Bike Beyond, a film that follows 20 people with Type 1 diabetes as they journey across the country dismantling stereotypes and raising hundreds of thousands of dollars for Type 1 diabetes cure research. \n\nWalt shares his experience living with Type 1, the several different types of diabetes, the events that led to his diagnosis, what biking across the country (multiple times) taught him, the accessibility (and lack thereof) of insulin, and other necessities for people with diabetes, how the global pandemic has affected this community, and Walt opens up about a life-threatening experience he had recently. We also discuss ableism and what people without disabilities can do to best support people with disabilities. This episode is jam-packed with insight that we can all learn from. Check it out! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by Helix & Hello Fresh. \nGo to HELLO FRESH.COM/HELPLESSTWELVE and use code HELPLESS12 for 12 free meals, including free shipping!\nHelix is offering UP TO 200 dollars off all mattress orders AND two free pillows for our listeners at HelixSleep.com/helpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '0edb9919-5005-42fb-ae02-ace10153bc59',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/e0/95/25e0955e-0d05-54d6-8ce4-563094c28cb0/mza_13114065563156995779.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/the-power-of-now/id1251196416?i=1000512077935&uo=4',
          trackTimeMillis: 2979000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/e0/95/25e0955e-0d05-54d6-8ce4-563094c28cb0/mza_13114065563156995779.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/25/e0/95/25e0955e-0d05-54d6-8ce4-563094c28cb0/mza_13114065563156995779.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a4403623-4537-42ee-b1e8-ace101335dbd/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a4403623-4537-42ee-b1e8-ace101335dbd/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000512077935,
          trackName: 'The Power of Now',
          releaseDate: '2021-03-08T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the book, The Power of Now: A Guide To Spiritual Enlightenment, by Eckhart Tolle. The book offers guidance on how to be more present in our day-to-day, why observing our thoughts, surroundings, and interactions with a fresh lens is important, and how getting out of our head and tuning in to our body can help us connect with our true nature. The girls also share personal experiences surrounding presence and anxiety in their daily lives.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by Honey, Care/of, and BetterHelp\nGo to takecareof.com/selfhelpless50 and enter code SELFHELPLESS50 for 50% off your first Care/of order.\nGet Honey for FREE at join Honey.com/helpless.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'a4403623-4537-42ee-b1e8-ace101335dbd',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c9/c8/3b/c9c83b12-7463-f50f-043f-fcd7db4ff8a5/mza_8908743554651184891.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/releasing-shame-around-desire/id1251196416?i=1000511117867&uo=4',
          trackTimeMillis: 3424000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c9/c8/3b/c9c83b12-7463-f50f-043f-fcd7db4ff8a5/mza_8908743554651184891.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c9/c8/3b/c9c83b12-7463-f50f-043f-fcd7db4ff8a5/mza_8908743554651184891.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/de776ec0-055f-4808-bab3-acdb01556ee7/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/de776ec0-055f-4808-bab3-acdb01556ee7/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000511117867,
          trackName: 'Releasing Shame Around Desire',
          releaseDate: '2021-03-01T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week we have sex educator, intimacy coach, and host of The Amorosa podcast, Jessica Parra-Fitch. We discuss shame, pleasure, consent, purity culture, asexuality, orgasms, why and how getting in touch with our desire and nurturing our relationship with self-intimacy is a form of activism, and so much more. Personal stories surrounding shame and turn-ons are also shared. Tune into this episode, and your pleasure (wink)!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was brought to you by Dipsea. Dipsea is offering a 30-day free trial when you go to DipseaStories.com/HELPLESS\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: 'de776ec0-055f-4808-bab3-acdb01556ee7',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4f/ba/71/4fba71f2-f565-76f1-1ee8-3e1f318a1cd9/mza_13159481066804022645.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/living-a-public-life/id1251196416?i=1000510166840&uo=4',
          trackTimeMillis: 3773000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4f/ba/71/4fba71f2-f565-76f1-1ee8-3e1f318a1cd9/mza_13159481066804022645.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/4f/ba/71/4fba71f2-f565-76f1-1ee8-3e1f318a1cd9/mza_13159481066804022645.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/45dc1d66-961f-45a8-ac80-acd500514eb1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/45dc1d66-961f-45a8-ac80-acd500514eb1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000510166840,
          trackName: 'Living A Public Life',
          releaseDate: '2021-02-22T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss their experience with navigating a public life. They discuss the pros and cons of a public career, touch on the Britney Spears documentary and Oprah’s statements about living in the public eye, and share what they’ve learned as their lives have gone from conventional and private to on display.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by Honey, Birchbox, and BetterHelp\nGet Honey for FREE at join Honey.com/helpless.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\nHead over to BIRCHBOX.com/helpless and use promo code helpless to get 50% off your first box, when you subscribe for at least three months!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '45dc1d66-961f-45a8-ac80-acd500514eb1',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/73/7b/52/737b525c-affd-bb4e-df62-5e124f036c69/mza_6488328288524932150.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/introvert-extrovert-or-ambivert/id1251196416?i=1000509682157&uo=4',
          trackTimeMillis: 3241000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/73/7b/52/737b525c-affd-bb4e-df62-5e124f036c69/mza_6488328288524932150.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/73/7b/52/737b525c-affd-bb4e-df62-5e124f036c69/mza_6488328288524932150.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4c7b4875-bad0-4ff7-88af-acd0003466d1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4c7b4875-bad0-4ff7-88af-acd0003466d1/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000509682157,
          trackName: 'Introvert, Extrovert, or Ambivert?',
          releaseDate: '2021-02-18T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the differences between introversion and extroversion. They share some surprising facts, bust some myths, and determine where they think they fall on the spectrum. Find out whether you’re an introvert, extrovert, or ambivert!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com \n\nKelsey’s Tour Dates: https://www.kelseycook.com \n\nThis episode was sponsored by HelloFresh, Kitty Poo Club, and BetterHelp\nGo to HelloFresh.com/helpless10 and use code helpless10 for 10 free meals, including free shipping!\nGo to Kitty Poo Club.com and enter promo code helpless, to get 20% off when you set up auto-ship.\nAs a listener, you’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '4c7b4875-bad0-4ff7-88af-acd0003466d1',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/58/92/50/589250c8-db08-b56a-9fa5-a60fac58f8a6/mza_8073979274945544509.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/getting-the-love-you-want/id1251196416?i=1000509105386&uo=4',
          trackTimeMillis: 3958000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/58/92/50/589250c8-db08-b56a-9fa5-a60fac58f8a6/mza_8073979274945544509.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/58/92/50/589250c8-db08-b56a-9fa5-a60fac58f8a6/mza_8073979274945544509.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/88cd0394-2549-4fc5-b5ba-accc015d281f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/88cd0394-2549-4fc5-b5ba-accc015d281f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000509105386,
          trackName: 'Getting The Love You Want',
          releaseDate: '2021-02-15T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the book, Getting The Love You Want, by Harville Hendrix. The book offers insight into what we look for in a partner and why, how we can effectively navigate difficult situations in our relationships, and why self-love and self-awareness are vital to a successful partnership. They also share personal experiences about what they’ve been attracted to and turned off by in past relationships.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nThis episode was sponsored by FEALS, Function of Beauty, Care/of, and Helix\nFor 50% off your first order, go to “TAKECAREOF.COM/SELFHELPLESS 50” and enter code “SELF HELPLESS 50”\nFind your perfect mattress at HelixSleep.com/helpless.\nGo to FunctionofBeauty.com/helpless to let them know we sent you, and to get 20% off your order.\nAnd go to FEALS.com/HELPLESS to become a member and get 50% automatically taken off your first order with free shipping.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '88cd0394-2549-4fc5-b5ba-accc015d281f',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4a/94/c9/4a94c93b-dacf-2164-7ce6-57c78f805ca9/mza_7452615466096415082.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/q-a-part-2/id1251196416?i=1000507298366&uo=4',
          trackTimeMillis: 3301000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4a/94/c9/4a94c93b-dacf-2164-7ce6-57c78f805ca9/mza_7452615466096415082.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4a/94/c9/4a94c93b-dacf-2164-7ce6-57c78f805ca9/mza_7452615466096415082.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/1dc4ec09-e354-4eb3-94f9-acc0004e22df/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/1dc4ec09-e354-4eb3-94f9-acc0004e22df/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000507298366,
          trackName: 'Q & A Part 2',
          releaseDate: '2021-02-01T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls answer more of your juicy questions! This episode includes answers to questions like their favorite first date ideas, the worst place they crapped their pants, and things they dislike about themselves that they are working on. Also, find out who would be the last to survive the zombie apocalypse! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nThis episode was brought to you by Function of Beauty and BetterHelp. Go to FunctionofBeauty.com/helpless to let them know we sent you, and to get 20% off your order. And thanks to our other sponsor, BetteHELP! You’ll get 10% off your first month by visiting our sponsor at BetterHelp.com/selfhelpless.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '1dc4ec09-e354-4eb3-94f9-acc0004e22df',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/95/30/14953091-b676-cfcf-b41c-3a54d680488b/mza_4964098998920670381.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/200th-episode-q-a/id1251196416?i=1000506489555&uo=4',
          trackTimeMillis: 4555000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/95/30/14953091-b676-cfcf-b41c-3a54d680488b/mza_4964098998920670381.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/95/30/14953091-b676-cfcf-b41c-3a54d680488b/mza_4964098998920670381.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/61589291-d2d3-44b3-bb72-acb9015bb149/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/61589291-d2d3-44b3-bb72-acb9015bb149/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000506489555,
          trackName: '200th Episode Q & A',
          releaseDate: '2021-01-25T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are celebrating 200 episodes of Self-Helpless by answering your burning questions! This episode includes answers to questions like: what were our first impressions of each other, what is the stupidest smart buy we\'ve made, what is our weirdest habits, our biggest "oh shit" moment as a group, a joke we\'re most proud of or think is the most creative, and much more! We also got the honor of naming a Helpster’s baby boy! Thank you for tuning in, celebrating with us, and reflecting on years of growth!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nThanks to Care Of for sponsoring this episode. For 50% off your first order, go to takecareof.com/selfhelpless50 and enter code SELF HELPLESS 50.\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '61589291-d2d3-44b3-bb72-acb9015bb149',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b4/af/8f/b4af8fce-c08d-e76f-7ed7-ba43c2cc569f/mza_17233252779827178664.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/managing-impostor-syndrome/id1251196416?i=1000505652756&uo=4',
          trackTimeMillis: 3431000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b4/af/8f/b4af8fce-c08d-e76f-7ed7-ba43c2cc569f/mza_17233252779827178664.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/b4/af/8f/b4af8fce-c08d-e76f-7ed7-ba43c2cc569f/mza_17233252779827178664.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/157f4cc8-8c38-4816-8d8f-acb1004f42b3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/157f4cc8-8c38-4816-8d8f-acb1004f42b3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000505652756,
          trackName: 'Managing Impostor Syndrome',
          releaseDate: '2021-01-18T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls talk about managing impostor syndrome. They discuss the different types of impostor syndrome, their most recent encounters with it, and tips for managing it. They also share some personal nuggets of wisdom for handling career-related impostor syndrome!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid: '157f4cc8-8c38-4816-8d8f-acb1004f42b3',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/29/4c/e8/294ce829-584b-8819-6d3a-db9ecb56a9ad/mza_4147237184707759340.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-love/id1251196416?i=1000504980288&uo=4',
          trackTimeMillis: 3877000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/29/4c/e8/294ce829-584b-8819-6d3a-db9ecb56a9ad/mza_4147237184707759340.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/29/4c/e8/294ce829-584b-8819-6d3a-db9ecb56a9ad/mza_4147237184707759340.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ebf0a842-62cc-443c-ac71-acad01159351/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/ebf0a842-62cc-443c-ac71-acad01159351/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000504980288,
          trackName: 'Self Love',
          releaseDate: '2021-01-11T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss self-love. They describe what self-love is, offer tips for practicing self-love, and share how they know when they are personally acting out of self-love. Find out the somewhat silly self-love tactics they implement in their daily lives!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/GxZmxpl-aeR39eVb9GRoxkw3lHUcEP-WBPX7hFFxH8M',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ad/79/d5/ad79d595-a195-b74b-fcd0-599dd5236491/mza_16650922533228350819.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/raising-kids-without-social-media/id1251196416?i=1000504286321&uo=4',
          trackTimeMillis: 4822000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ad/79/d5/ad79d595-a195-b74b-fcd0-599dd5236491/mza_16650922533228350819.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ad/79/d5/ad79d595-a195-b74b-fcd0-599dd5236491/mza_16650922533228350819.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/449352ed-2ce2-4764-9a9f-aca90002ebc4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/449352ed-2ce2-4764-9a9f-aca90002ebc4/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000504286321,
          trackName: 'Raising Kids Without Social Media',
          releaseDate: '2021-01-04T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by comedian, Dustin Nickerson. Dustin shares what parenting is like during quarantine, the negative effects social media has on kids, and the secret to his 20-year marriage. The girls also share how the addictive nature of social media affects their day-to-day.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/KLP5wunda1up6hWvu1okcNXmV9gytE0ccAtVkq3Qfag',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cf/5b/cc/cf5bcc03-e8ee-6a56-4230-f9c71ddd8730/mza_7773811957729032379.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/goodbye-2020/id1251196416?i=1000503689134&uo=4',
          trackTimeMillis: 3021000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cf/5b/cc/cf5bcc03-e8ee-6a56-4230-f9c71ddd8730/mza_7773811957729032379.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/cf/5b/cc/cf5bcc03-e8ee-6a56-4230-f9c71ddd8730/mza_7773811957729032379.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d73cdbf8-2501-4e3f-b7f4-aca90003174f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d73cdbf8-2501-4e3f-b7f4-aca90003174f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000503689134,
          trackName: 'Goodbye 2020',
          releaseDate: '2020-12-28T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "Join the girls for an end of year reflection. They share what they learned this year, what their hopes are for the future, and what changes they're making as we move into 2021. Find out if they were able to follow through with last year's resolutions plus which binge-able shows they feel provided a much-needed escape this year! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nAlso don't forget to get your free bottle of Daily Buzz Gummies by using the link: tryfivecbd.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/oXIaYzTz4GToMhN2QaXZtRaTt6igNpaIUYx5DkP_nx0',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/bc/34/42/bc344277-2564-833a-0bf2-5f0b8747596d/mza_7190571290442583187.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/mini-habits/id1251196416?i=1000503087589&uo=4',
          trackTimeMillis: 3965000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/bc/34/42/bc344277-2564-833a-0bf2-5f0b8747596d/mza_7190571290442583187.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/bc/34/42/bc344277-2564-833a-0bf2-5f0b8747596d/mza_7190571290442583187.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f17f0136-69a6-45a7-9777-aca900034391/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/f17f0136-69a6-45a7-9777-aca900034391/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000503087589,
          trackName: 'Mini Habits',
          releaseDate: '2020-12-21T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls discuss the book, Mini Habits, by Stephen Guise this week! This book offers tactics for building new habits by starting small, how our core motivations can help the process, and why baby steps lead to massive growth. The girls also share how they've formed their own habits - and sometimes it involves tricking their mind into taking better care of themselves.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/ei47V19QLg6pDFu9IlDFgjdSgSZvpTAhRGD3gmCK_-U',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/fd/7d/3e/fd7d3ef5-089b-0f1b-bbab-2d578aa953db/mza_17127782886920988733.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/12-steps/id1251196416?i=1000502332487&uo=4',
          trackTimeMillis: 4082000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/fd/7d/3e/fd7d3ef5-089b-0f1b-bbab-2d578aa953db/mza_17127782886920988733.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/fd/7d/3e/fd7d3ef5-089b-0f1b-bbab-2d578aa953db/mza_17127782886920988733.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/00bd96b2-951c-48e5-ac74-aca900038b13/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/00bd96b2-951c-48e5-ac74-aca900038b13/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000502332487,
          trackName: '12 Steps',
          releaseDate: '2020-12-14T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by Finance Coach and 12 step advocate, Amanda Hill. Amanda shares her story of sobriety by walking us through her experience with a 12 step program, explaining the difference between rock-bottom vs. high-bottom, and how the decision to get sober has affected her relationships - and her life. We can all benefit from the juicy nuggets of wisdom Amanda drops in this episode!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nGet an order of Five CBD Gummies for the price of shipping, go to TryFiveCbd.com!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/evlVcRbAqY39o5yOU08tnwxJU39p5EhPSWMoJEbw-5E',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b2/54/3d/b2543dfe-bdea-9561-35a3-fe504ffdc084/mza_9510286146811354881.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/social-anxiety/id1251196416?i=1000501602116&uo=4',
          trackTimeMillis: 4079000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b2/54/3d/b2543dfe-bdea-9561-35a3-fe504ffdc084/mza_9510286146811354881.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/b2/54/3d/b2543dfe-bdea-9561-35a3-fe504ffdc084/mza_9510286146811354881.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2fc055f7-8d25-4042-92ca-aca90003da9a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/2fc055f7-8d25-4042-92ca-aca90003da9a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000501602116,
          trackName: 'Social Anxiety',
          releaseDate: '2020-12-07T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss something they are very much familiar with: social anxiety! They share both hilarious and traumatic moments where their anxiety got the best of them - from puberty to social media to performing live. Learn about one of their tips, "the anti-spiral list," and other ways to manage social anxiety.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nGet an order of Five CBD Gummies for the price of shipping, go to TryFiveCbd.com!\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/UrogHbIZE3vCL6UGkCr8adJ6j-EPLQNg6eSrIhZACos',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4c/91/ef/4c91ef61-a91c-76f3-8203-51aeb5ae4aff/mza_10608579625335613784.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/societal-pressures/id1251196416?i=1000500803082&uo=4',
          trackTimeMillis: 3340000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4c/91/ef/4c91ef61-a91c-76f3-8203-51aeb5ae4aff/mza_10608579625335613784.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4c/91/ef/4c91ef61-a91c-76f3-8203-51aeb5ae4aff/mza_10608579625335613784.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/942771ca-2c2e-4f31-8db1-aca900042523/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/942771ca-2c2e-4f31-8db1-aca900042523/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000500803082,
          trackName: 'Societal Pressures',
          releaseDate: '2020-11-30T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by social worker, therapist, and Self-Helpless Facebook Group Admin, Aubrie McCarthy! They discuss pressure - societal, career, and relationships. Aubrie opens up about the pressure she faces as a mental health professional, and even shares what therapy is like for her as a therapist! They also discuss pressure surrounding marriage, children, and education.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/nnottrRao-RlOK2ixbLM8f6DTXePSo5ELdR70oDW0Rk',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/39/6c/67/396c6700-3882-90bc-5505-2c1508cf7d0b/mza_14014503024904874114.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/impact-of-teachers/id1251196416?i=1000499974535&uo=4',
          trackTimeMillis: 3965000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/39/6c/67/396c6700-3882-90bc-5505-2c1508cf7d0b/mza_14014503024904874114.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/39/6c/67/396c6700-3882-90bc-5505-2c1508cf7d0b/mza_14014503024904874114.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/e9cbd960-b87c-432d-8dd6-aca900049c3b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/e9cbd960-b87c-432d-8dd6-aca900049c3b/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000499974535,
          trackName: 'Impact of Teachers',
          releaseDate: '2020-11-23T19:34:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the impact of teachers - the good, the great, the bad, and the creepy. They also discuss what kind of students they were, how they enjoyed learning, and the most memorable moments of their academic career. Tune in to hear some of their shocking stories and reflect on your own experience!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/1VdX3c4FDjtoddnJfrNgNT9LiHgKkq9kLRs_DJj1cM8',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d5/45/47/d5454794-1594-1de4-0985-14f7afe9234d/mza_12134721744744553213.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/mike-birbiglia/id1251196416?i=1000498828728&uo=4',
          trackTimeMillis: 3518000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d5/45/47/d5454794-1594-1de4-0985-14f7afe9234d/mza_12134721744744553213.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d5/45/47/d5454794-1594-1de4-0985-14f7afe9234d/mza_12134721744744553213.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/38698b68-60ff-4c7b-b332-aca90004ff7f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/38698b68-60ff-4c7b-b332-aca90004ff7f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000498828728,
          trackName: 'Mike Birbiglia!',
          releaseDate: '2020-11-16T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by the hilarious comedian, director, and producer, Mike Birbiglia! Mike shares some hot tips from his favorite self-help book, how he manages his mental health, and some wild stories about his career. Plus, find out Mike's mindset hack for feeling good about your day-to-day. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/uz9zRlaaumLlkxpzdR-rjo6FMA2a7B89gkgvAabNH0E',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/a5/4b/f0/a54bf0ff-4add-02a4-c1ff-092844cea936/mza_15973528003742249887.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/9-habits-that-have-changed-our-lives/id1251196416?i=1000496925504&uo=4',
          trackTimeMillis: 3060000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/a5/4b/f0/a54bf0ff-4add-02a4-c1ff-092844cea936/mza_15973528003742249887.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/a5/4b/f0/a54bf0ff-4add-02a4-c1ff-092844cea936/mza_15973528003742249887.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/deaa6c51-d788-417e-a028-aca900058e46/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/deaa6c51-d788-417e-a028-aca900058e46/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000496925504,
          trackName: '9 Habits That Have Changed Our Lives',
          releaseDate: '2020-11-02T13:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls discuss habits that they wish they had vs. the habits they actually have. They share self-care practices they currently implement each day, the things they do less frequently, and what they've actually been able to stick to long-term. If you're curious about everything from how to drink more water to how to say no to sh*t you don't want to do, this episode is for you. Plus, find out who left a tupperware in her sink for so long that it grew its own ecosystem.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/yo7uSYVqfKNvkVzPf9AVua9WCvNeioMFbmiWGyveY_c',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c3/52/83/c352838c-b4b7-aa7d-d55a-c45496cce8c9/mza_14625420312043927545.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/self-help-me/id1251196416?i=1000496101683&uo=4',
          trackTimeMillis: 4183000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c3/52/83/c352838c-b4b7-aa7d-d55a-c45496cce8c9/mza_14625420312043927545.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c3/52/83/c352838c-b4b7-aa7d-d55a-c45496cce8c9/mza_14625420312043927545.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9e7342ff-a0f5-4d96-a972-aca90005dd45/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9e7342ff-a0f5-4d96-a972-aca90005dd45/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000496101683,
          trackName: 'Self Help Me',
          releaseDate: '2020-10-26T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by the hilarious comedian, Liz Miele! Liz opens up about her rock bottom, finding the silver lining in failures, mental health, and how she took charge of her career and her overall wellness. Check out Liz's special called, Self Help Me, on YouTube!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/5zf_o-5JG4UlGVCxhKdCKSanx63OnD4rqcQ3BPr71_w',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d1/6b/31/d16b316c-5c1a-bed8-559c-b9c916f2617b/mza_10482867946504756735.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/imomsohard/id1251196416?i=1000495268268&uo=4',
          trackTimeMillis: 3410000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d1/6b/31/d16b316c-5c1a-bed8-559c-b9c916f2617b/mza_10482867946504756735.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d1/6b/31/d16b316c-5c1a-bed8-559c-b9c916f2617b/mza_10482867946504756735.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5d99d901-a0f4-4d80-944c-aca9000620de/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5d99d901-a0f4-4d80-944c-aca9000620de/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000495268268,
          trackName: 'IMOMSOHARD',
          releaseDate: '2020-10-19T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by the hilarious comedy duo and hosts of The #IMOMSOHARD podcast, Kristin and Jen! The girls got to ask their burning questions about parenthood and identity. Kristin and Jen share what they wish they would've known before having kids, the difference in how they spend their time, how they feel about imperfection, what type of person might not be best suited to be a parent, and the societal pressures women experience regarding motherhood. And of course it wouldn't be a normal episode without a little nipple hair talk, so there's that too!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/aL9iCF3x0HXOhiIxhhq9_vklCwJNNMWxq4OEPpVOkyU',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f9/ff/77/f9ff775e-48d9-780c-7f75-0b7d0c6eb482/mza_17891398326297740677.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/9-things-i-wish-i-knew-in-high-school/id1251196416?i=1000494447449&uo=4',
          trackTimeMillis: 4177000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f9/ff/77/f9ff775e-48d9-780c-7f75-0b7d0c6eb482/mza_17891398326297740677.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f9/ff/77/f9ff775e-48d9-780c-7f75-0b7d0c6eb482/mza_17891398326297740677.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9d90394f-fa70-4721-bc0a-aca90006672d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/9d90394f-fa70-4721-bc0a-aca90006672d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000494447449,
          trackName: '9 Things I Wish I Knew in High School',
          releaseDate: '2020-10-12T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls reflect on their high school experience and reveal 9 things they wish they could go back and tell their high school selves. They discuss how those years shaped who they are today, the biggest lessons they learned, and why some of the shittiest moments turned out to be the greatest gifts. Find out who faked their way through 3 years of marching band, why one of them was forced into homeschooling, and who actually LOVED high school (I know, nuts right?)\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/6lEMobAilGYhwmfxzf_jQklt79ZSt9n9vUNHXxeJTag',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c3/4c/2f/c34c2ff0-3562-67dc-1580-f355ecdd3969/mza_7379399451551167045.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/ravi-patels-pursuit-of-happiness/id1251196416?i=1000493637532&uo=4',
          trackTimeMillis: 4041000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c3/4c/2f/c34c2ff0-3562-67dc-1580-f355ecdd3969/mza_7379399451551167045.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c3/4c/2f/c34c2ff0-3562-67dc-1580-f355ecdd3969/mza_7379399451551167045.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b5b67feb-bb38-4f8d-abfa-aca90006ac9d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b5b67feb-bb38-4f8d-abfa-aca90006ac9d/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000493637532,
          trackName: "Ravi Patel's Pursuit of Happiness",
          releaseDate: '2020-10-05T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by documentarian and hilarious comedian, Ravi Patel! They talk about navigating boundaries with family, marriage, reinventing yourself after a breakup, how familial relationships change as you get older, and more. Check out Ravi's fantastic docuseries on HBO Max, Ravi Patel's Pursuit of Happiness!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/hYDYc00TO0-ltk6b6S-ELGrvakQbwUSfLGC8PDRvrOk',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/01/7b/da/017bda36-876d-0366-544e-514a03428167/mza_7531413672354451846.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/the-social-dilemma/id1251196416?i=1000492806559&uo=4',
          trackTimeMillis: 2857000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/01/7b/da/017bda36-876d-0366-544e-514a03428167/mza_7531413672354451846.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/01/7b/da/017bda36-876d-0366-544e-514a03428167/mza_7531413672354451846.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b6407d67-0ddb-4e8d-b0f8-aca90006ecf6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/b6407d67-0ddb-4e8d-b0f8-aca90006ecf6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000492806559,
          trackName: 'The Social Dilemma',
          releaseDate: '2020-09-28T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls talk about the fascinating Netflix documentary, The Social Dilemma. The documentary features tech experts as they reveal the manipulative mechanisms behind social media platforms, how it affects human behavior, and what we can do about it. The girls also discuss their personal relationship with social media - everything from the pressure of having hundreds of thousands of followers to leaving social media completely.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/OU1DpQllL9_6Qx2M9x19MZ_VVxzKu8bMLauLQrnWGog',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d6/bf/a6/d6bfa675-1ec2-9595-65da-743179f30773/mza_4159367600191109244.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/and-thats-why-we-drink/id1251196416?i=1000491981469&uo=4',
          trackTimeMillis: 3752000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d6/bf/a6/d6bfa675-1ec2-9595-65da-743179f30773/mza_4159367600191109244.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d6/bf/a6/d6bfa675-1ec2-9595-65da-743179f30773/mza_4159367600191109244.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/22efc244-2964-403e-b58b-aca900073523/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/22efc244-2964-403e-b58b-aca900073523/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000491981469,
          trackName: "And That's Why We Drink",
          releaseDate: '2020-09-21T13:19:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by Em and Christine from the hit comedic paranormal and true crime podcast, And That's Why We Drink! They share about their experience with therapy, communicating with ghosts, and how they decompress in between ingesting heavy information for their show. Have you ever taught a ghost how to use an iPhone? Em has. Give it a listen!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/sBru4uJ1kXnSnfIKv371tXmbvkd9-33INCPAaVUIBJ0',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/10/e4/1d/10e41d47-7ec0-b85a-133f-becf3f910c45/mza_10610661743948529310.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/people-pleasing/id1251196416?i=1000491191709&uo=4',
          trackTimeMillis: 3267000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/10/e4/1d/10e41d47-7ec0-b85a-133f-becf3f910c45/mza_10610661743948529310.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/10/e4/1d/10e41d47-7ec0-b85a-133f-becf3f910c45/mza_10610661743948529310.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/becde466-b1dc-4fe1-83cf-aca9000787c9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/becde466-b1dc-4fe1-83cf-aca9000787c9/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000491191709,
          trackName: 'People Pleasing',
          releaseDate: '2020-09-14T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss People Pleasing this week and oh boy do they feel called out. They share the signs of people pleasing, tips for preventing burnout and resentment, and they open up about where their deep-rooted people pleasing tendencies originated. Plus, some personal stories about how people pleasing got them into some very uncomfortable situations - and SO many good quotes all up in this episode.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/cJSw73JsvukHo_qALyW4Ty2ohy-0CbrTdoE40DX21WY',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8c/bc/d5/8cbcd529-6ad0-99f1-2a14-3b2964dbe7ce/mza_17229282515855433896.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/toxic-positivity/id1251196416?i=1000490343147&uo=4',
          trackTimeMillis: 3421000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8c/bc/d5/8cbcd529-6ad0-99f1-2a14-3b2964dbe7ce/mza_17229282515855433896.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8c/bc/d5/8cbcd529-6ad0-99f1-2a14-3b2964dbe7ce/mza_17229282515855433896.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/35da240f-6b74-4cb7-9dad-aca90007ccee/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/35da240f-6b74-4cb7-9dad-aca90007ccee/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000490343147,
          trackName: 'Toxic Positivity',
          releaseDate: '2020-09-07T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by comedian, Rosebud Baker! They discuss toxic positivity, identity, the importance of allowing yourself to feel, how to observe our own behavior, and more.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/CbUk8mA5u1BNageooRZlYcH75q_HwGEs3Cedvr8SqbA',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1c/1b/6d/1c1b6df5-19c2-053e-3e3c-7702acd81e9f/mza_16059853679124436681.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/tan-france/id1251196416?i=1000489640266&uo=4',
          trackTimeMillis: 4776000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1c/1b/6d/1c1b6df5-19c2-053e-3e3c-7702acd81e9f/mza_16059853679124436681.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1c/1b/6d/1c1b6df5-19c2-053e-3e3c-7702acd81e9f/mza_16059853679124436681.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5594bc0b-c8b3-4b32-9ca0-aca9000810e6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/5594bc0b-c8b3-4b32-9ca0-aca9000810e6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000489640266,
          trackName: 'Tan France',
          releaseDate: '2020-08-31T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls are joined by fashion designer and Queer Eye's, Tan France! WHAT?! Tan shares about his upbringing, how his love for fashion was born, booking Queer Eye and being scared sh*tless about it, his self-care practices, handling criticism, and so much more. He also dishes out a hot tip that will set you up for success every morning in under two minutes!\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/5yrF9xAQDvne3PzDkL31sB0hCSgG-r1l5ydTE0MhjbA',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f8/ac/f7/f8acf775-6d64-1742-5abd-7fbe53e39ebb/mza_14233789877499481610.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/sexuality/id1251196416?i=1000489011309&uo=4',
          trackTimeMillis: 3756000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f8/ac/f7/f8acf775-6d64-1742-5abd-7fbe53e39ebb/mza_14233789877499481610.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f8/ac/f7/f8acf775-6d64-1742-5abd-7fbe53e39ebb/mza_14233789877499481610.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d372e085-1eb5-42b1-96c1-aca9000853b3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/d372e085-1eb5-42b1-96c1-aca9000853b3/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000489011309,
          trackName: 'Sexuality',
          releaseDate: '2020-08-24T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by Amanda Blake, the host of Sex Ed Made Easy - a series that provides comprehensive, accessible, and engaging sex education to everyone from curious teens to sheltered adults. In this episode, Amanda discusses her religious upbringing, the evolution of her sexual identity, navigating her romantic relationship, and how we can all be better LGBTQ+ advocates. Plus, she breaks down important definitions and concepts using cute charts that we want to print and frame immediately. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/3Wi1DDgCbkZRJO4FTCjs2mTZMa_JWaH9hbgOFhdtLLQ',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/b0/34/f2/b034f235-4fa3-f85c-95f8-affd7d900faa/mza_1903711239194115513.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/time-management/id1251196416?i=1000488404441&uo=4',
          trackTimeMillis: 2988000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/b0/34/f2/b034f235-4fa3-f85c-95f8-affd7d900faa/mza_1903711239194115513.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/b0/34/f2/b034f235-4fa3-f85c-95f8-affd7d900faa/mza_1903711239194115513.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/51e6f280-ed00-4627-8f1e-aca900089f25/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/51e6f280-ed00-4627-8f1e-aca900089f25/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000488404441,
          trackName: 'Time Management',
          releaseDate: '2020-08-17T19:47:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls discuss all things time management this week! They share their favorite tips and tricks, surprising stats, what's behind procrastination, how managing their time has changed since quarantine, and more! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/TV9zqPqf4ybxMHmOZfFvk3AkqAP6HCKnKZ5cBXS_S40',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/56/16/d8/5616d8a7-9b55-082f-df6d-10e0d6f3751b/mza_10925650499257894827.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/instagram-vs-reality/id1251196416?i=1000487671772&uo=4',
          trackTimeMillis: 3883000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/56/16/d8/5616d8a7-9b55-082f-df6d-10e0d6f3751b/mza_10925650499257894827.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/56/16/d8/5616d8a7-9b55-082f-df6d-10e0d6f3751b/mza_10925650499257894827.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7bafea65-09f2-4d09-afbb-aca90008d974/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/7bafea65-09f2-4d09-afbb-aca90008d974/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000487671772,
          trackName: 'Instagram vs Reality',
          releaseDate: '2020-08-10T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "This week, the girls share some photos they've posted on Instagram in the past and what was actually going on in their lives at the time the photos were posted. They reveal the insecurities these pictures were trying to mask regarding relationships, breakups, career choices, body image, and more. If you're looking for an episode that's equal parts embarrassing, healing, and encouraging authenticity, this one's for you. Hashtag yikes.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/cHigoKkak8vR0L0Wa3flUuvAZhNIDP1tVgfNvkMVFus',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/dd/19/c3/dd19c3ca-5b56-3902-3e7a-e5973c338b71/mza_11910307077800451121.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/racial-justice-educator-rachel-ricketts/id1251196416?i=1000486957895&uo=4',
          trackTimeMillis: 3170000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/dd/19/c3/dd19c3ca-5b56-3902-3e7a-e5973c338b71/mza_11910307077800451121.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/dd/19/c3/dd19c3ca-5b56-3902-3e7a-e5973c338b71/mza_11910307077800451121.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/aefb6ead-f396-478e-9e6b-aca9000917ad/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/aefb6ead-f396-478e-9e6b-aca9000917ad/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000486957895,
          trackName: 'Racial Justice Educator, Rachel Ricketts ',
          releaseDate: '2020-08-03T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls are joined by racial justice educator, author, and speaker, Rachel Ricketts. Rachel shares about her experience as a lawyer, what led to her calling, and discusses some of the information that is available in her Spiritual Activism 101 webinar. We are grateful that Rachel was willing to take the time to be our guest, please check out her work and join her newsletter at rachelricketts.com. \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/wyg2ygyvReCcS2-heoliGgLpTzFJ8pA32iDUVG2qSpc',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/49/37/ab/4937aba3-9be1-0204-a770-1bebadc0f368/mza_9220255692628111734.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/attachment-styles/id1251196416?i=1000486254887&uo=4',
          trackTimeMillis: 3392000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/49/37/ab/4937aba3-9be1-0204-a770-1bebadc0f368/mza_9220255692628111734.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/49/37/ab/4937aba3-9be1-0204-a770-1bebadc0f368/mza_9220255692628111734.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/38133c70-0419-4551-bf0a-aca900095046/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/38133c70-0419-4551-bf0a-aca900095046/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000486254887,
          trackName: 'Attachment Styles',
          releaseDate: '2020-07-27T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week, the girls discuss the attachment theory, take an attachment style quiz and break down the 4 attachment styles. Taylor, Kelsey, and Delanie share some events in their life that created their attachment styles. AND Taylor and Delanie also quiz their partners and get their attachment style results. Kelsey also shares some exciting news! Here is the link to the quiz, as discussed on the show, https://attachment.personaldevelopmentschool.com/\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/ZM-nRAoFCYZSxCVS71eDQkE0SEvtyVAosUVjp0QKGtA',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/05/94/0b/05940bf3-2679-4b75-0b52-7042decfa35f/mza_14911675814556289808.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/whitney-cummings/id1251196416?i=1000485517735&uo=4',
          trackTimeMillis: 6772000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/05/94/0b/05940bf3-2679-4b75-0b52-7042decfa35f/mza_14911675814556289808.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/05/94/0b/05940bf3-2679-4b75-0b52-7042decfa35f/mza_14911675814556289808.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/71af8ac0-3799-4814-9f75-aca900098d60/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/71af8ac0-3799-4814-9f75-aca900098d60/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000485517735,
          trackName: 'Whitney Cummings',
          releaseDate: '2020-07-20T15:24:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The hosts are joined by comedian, actress, producer, writer, director, and podcaster, Whitney Cummings! Grab your notebooks for this one because it is JAM-PACKED with takeaways. Whitney shares great tips about managing your finances, how to navigate toxic relationships, tools she's learned from her 12 step program, and even dishes out her skincare secrets. Just a heads up, you will probably want to tattoo most things she says somewhere on your body.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/t1ZnuAm4LZpembAFuh5VqK-PrvbA96XWSlJFbOnBc3o',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1b/1a/14/1b1a148b-e916-f479-5640-f30b52852181/mza_17999618747083437960.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/year-of-yes/id1251196416?i=1000484624610&uo=4',
          trackTimeMillis: 3060000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1b/1a/14/1b1a148b-e916-f479-5640-f30b52852181/mza_17999618747083437960.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1b/1a/14/1b1a148b-e916-f479-5640-f30b52852181/mza_17999618747083437960.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/fe84fb6a-23f2-4c23-8c71-aca90009d23f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/fe84fb6a-23f2-4c23-8c71-aca90009d23f/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000484624610,
          trackName: 'Year of Yes',
          releaseDate: '2020-07-13T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'The girls discuss the book, Year of Yes, by Shonda Rhimes this week! This book describes Shonda’s experience as an introvert saying “yes” to everything that scared her for an entire year. The girls also share what steps they’ve taken in order to feel more balanced in their personal and professional lives.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/AVdqvzjDhv13LJ0I8DlKV61TAKvWBA00luojv9o65Yk',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e0/a5/aa/e0a5aa6c-3b4c-8867-f3a3-df783f495e87/mza_16967186613760939646.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/21-questions/id1251196416?i=1000482863767&uo=4',
          trackTimeMillis: 4421000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e0/a5/aa/e0a5aa6c-3b4c-8867-f3a3-df783f495e87/mza_16967186613760939646.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e0/a5/aa/e0a5aa6c-3b4c-8867-f3a3-df783f495e87/mza_16967186613760939646.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a1fa1bd8-6147-419f-a013-aca9000a0cfc/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/a1fa1bd8-6147-419f-a013-aca9000a0cfc/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000482863767,
          trackName: '21 Questions',
          releaseDate: '2020-07-06T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            'This week, as requested by listeners, the girls ask each other 21 questions that they’ve never asked one another before. They discuss everything from their regrets, how they’d spend $1,000, most ridiculous arguments they’ve had, and what roles they’d play in a zombie apocalypse. Plus, a pretty gross habit is revealed by one of them.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.',
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/EEE1z-P6kI12cbF1I9i2QtcMh3oNvpWJj8arLVyl0Qk',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/54/49/ee/5449eea9-a114-a3c3-0654-1cce5c9d4f88/mza_6198364528695585660.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/unfinished-business/id1251196416?i=1000480123933&uo=4',
          trackTimeMillis: 3127000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/54/49/ee/5449eea9-a114-a3c3-0654-1cce5c9d4f88/mza_6198364528695585660.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/54/49/ee/5449eea9-a114-a3c3-0654-1cce5c9d4f88/mza_6198364528695585660.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/db304e56-ccbd-4386-8e2f-aca9000a502a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/db304e56-ccbd-4386-8e2f-aca9000a502a/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000480123933,
          trackName: 'Unfinished Business',
          releaseDate: '2020-06-29T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The hosts are joined by hilarious comedian and former lawyer, Jackie Fabulous! Jackie shares about her transition from law to comedy, her new but not-so-new relationship, and her favorite self-care practices. Plus, Jackie reveals something that she's currently studying for that may come as a big surprise to her fans! \n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/5vriLPn4aMSa_lysma1u-0bUtEA1cn7DSxvozSo8rQA',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
        {
          artworkUrl600:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/1b/12/0c1b1258-747e-7328-b498-f03b08653d9d/mza_616426275813140896.jpg/600x600bb.jpg',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/all-things-comedy/594344196?mt=2&uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/podcast/self-helpless/id1251196416?mt=2&uo=4',
          trackViewUrl:
            'https://podcasts.apple.com/us/podcast/growth/id1251196416?i=1000479063241&uo=4',
          trackTimeMillis: 2809000,
          contentAdvisoryRating: 'Explicit',
          artworkUrl60:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/1b/12/0c1b1258-747e-7328-b498-f03b08653d9d/mza_616426275813140896.jpg/60x60bb.jpg',
          episodeFileExtension: 'mp3',
          artworkUrl160:
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/1b/12/0c1b1258-747e-7328-b498-f03b08653d9d/mza_616426275813140896.jpg/160x160bb.jpg',
          episodeContentType: 'audio',
          episodeUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4e5d79f5-41f0-40db-8053-aca9000a8ed6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          previewUrl:
            'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/3417G2/pdst.fm/e/traffic.omny.fm/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/4e5d79f5-41f0-40db-8053-aca9000a8ed6/audio.mp3?utm_source=Podcast&in_playlist=3d03ddd1-ffc1-4aa7-8d27-aca90002bec1',
          trackId: 1000479063241,
          trackName: 'Growth',
          releaseDate: '2020-06-22T12:00:00Z',
          shortDescription: '',
          feedUrl:
            'https://www.omnycontent.com/d/playlist/885ace83-027a-47ad-ad67-aca7002f1df8/2360c817-d63b-4596-892b-aca90002beb7/3d03ddd1-ffc1-4aa7-8d27-aca90002bec1/podcast.rss',
          artistIds: [594344196],
          closedCaptioning: 'none',
          collectionId: 1251196416,
          collectionName: 'Self-Helpless',
          country: 'USA',
          description:
            "The girls discuss the knowledge they've gained during quarantine, and the ways their perspectives have changed over the past few months.\n\nFor 65 bonus episodes, exclusive rewards, and to influence content for the show, join our Patreon community: https://www.patreon.com/selfhelpless \n\nDelanie’s Business Coaching: https://www.delaniefischer.com\n\nKelsey’s Tour Dates: https://www.kelseycook.com\n\nTaylor’s Tour Dates: https://ttomcomedy.com\n\nSee omnystudio.com/listener for privacy information.",
          genres: [{ name: 'Comedy', id: '1303' }],
          episodeGuid:
            'gid://art19-episode-locator/V0/jPiHJKt638WcsdOXFrFtVCbRvnH6SV7svZPdkDurduc',
          kind: 'podcast-episode',
          wrapperType: 'podcastEpisode',
        },
      ],
    }

    fetchMock.mockOnce(JSON.stringify(mock))
    const result = await handleRequest(
      new Request('/302/apple/1506079308', { method: 'GET' }),
    )
    expect(result.status).toEqual(302)
    expect(result.headers.get('location')).toBe(
      'https://podcasts.apple.com/us/podcast/overcoming-the-fear-of-death/id1251196416?i=1000563287770&uo=4',
    )
  })
})
