import { BasedAppsSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('SDK Initiation', async () => {
  it('should initialize the SDK', async () => {
    expect(() => {
      return new BasedAppsSDK({
        chain: 17000,
      })
    }).not.toThrowError()
  })

  it('can calculate total balance', async () => {
    const sdk = new BasedAppsSDK({
      chain: 17000,
    })

    const response = await sdk.api.bam.getValidatorsBalance({
      account: '0x77fc6e8b24a623725d935bc88057098d0bca6eb3',
    })

    expect(response.balance).toBeDefined()
  })
})
