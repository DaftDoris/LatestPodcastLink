import { handleRequest } from '../src/index'
import makeServiceWorkerEnv from 'service-worker-mock'

// eslint-disable-next-line no-var
declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })

  test('handle GET', async () => {
    const result = await handleRequest(new Request('/foo', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const text = await result.text()
    expect(text).toEqual('Hello World https://www.test.com/foo')
  })
})
