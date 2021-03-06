import { handleRequest } from '../src/index'
import makeServiceWorkerEnv from 'service-worker-mock'
import { FetchMock, enableFetchMocks } from 'jest-fetch-mock'
import * as fs from 'fs'
import * as appleStub from './apple.stub.json'

// eslint-disable-next-line no-var
declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
    enableFetchMocks()
    fetchMock.doMock()
  })

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
    const mock = fetchMock.mockOnce(JSON.stringify(appleStub))
    const result = await handleRequest(
      new Request('/302/apple/1506079308', { method: 'GET' }),
    )
    expect(result.status).toEqual(302)
    expect(result.headers.get('location')).toBe(
      'https://podcasts.apple.com/us/podcast/overcoming-the-fear-of-death/id1251196416?i=1000563287770&uo=4',
    )
  })
  test('spotify', async () => {
    const response = fs.readFileSync('test/spotify.stub.html', {
      encoding: 'utf8',
      flag: 'r',
    })
    fetchMock.mockOnce(response)
    const result = await handleRequest(
      new Request('/302/spotify/1kCU4T1Tjnw5FJ8fVaM1R9', { method: 'GET' }),
    )
    expect(result.status).toEqual(302)
    expect(result.headers.get('location')).toBe(
      'https://open.spotify.com/episode/5iWfCmcBXkOT1o5pKbrCuf',
    )
  })
})
