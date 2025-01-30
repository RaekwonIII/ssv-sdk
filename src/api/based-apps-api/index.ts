import type { APIs } from '@/api'
import { chunk } from 'lodash-es'
import { formatGwei } from 'viem'

export const getValidatorsBalance = async (
  apis: APIs,
  args: Parameters<APIs['ssv']['getValidatorsByAccount']>[0],
) => {
  const validators = await apis.ssv.getValidatorsByAccount(args)
  const chunks = chunk(validators, 50)

  const promises = chunks.map((chunk) =>
    apis.beacon.getValidatorBalances({
      stateId: 'head',
      validatorIds: chunk,
    }),
  )

  const results = await Promise.all(promises)
  const data = results.flatMap((v) => v.data)

  const totalBalance = formatGwei(
    data.reduce((acc, v) => {
      return acc + BigInt(v.balance)
    }, 0n),
  )

  return {
    account: args.account,
    validators,
    balance: totalBalance,
  }
}

export const getBasedAppsAPI = (apis: APIs) => {
  return {
    getValidatorsBalance: getValidatorsBalance.bind(null, apis),
  }
}
