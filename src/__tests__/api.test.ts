import { chains } from '@/config'
import { BasedAppsSDK } from '@/sdk'
import { createPublicClient, http } from 'viem'
import { describe, expect, it } from 'vitest'

describe('SDK Initiation', async () => {
  const chain = chains.holesky
  const transport = http()

  const publicClient = createPublicClient({
    chain,
    transport,
  })

  it('should initialize the SDK', async () => {
    expect(() => {
      return new BasedAppsSDK({
        publicClient,
      })
    }).not.toThrowError()
  })

  it('can get validators by account', async () => {
    const sdk = new BasedAppsSDK({
      publicClient,
    })

    const validators = await sdk.api.ssv.getValidatorsByAccount({
      account: '0x3187a42658417a4d60866163a4534ce00d40c0c8',
    })

    // const balances = await sdk.api.beacon.getValidatorBalances({
    //   stateId: 'head',
    //   validatorIds: validators,
    // })

    // console.log(balances)

    console.log(validators)

    expect(validators).toBeDefined()
    expect(Array.isArray(validators)).toBe(true)
  })
})
