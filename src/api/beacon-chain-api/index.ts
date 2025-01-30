import join from '@/utils/url-join'
import type { Hex } from 'viem'

type GetValidatorBalancesArgs = {
  stateId: 'head' | 'genesis' | 'finalized' | 'justified'
  validatorIds: Hex[]
}

type GetValidatorBalancesResponse = {
  execution_optimistic: boolean
  finalized: boolean
  data: {
    index: string
    balance: string
  }[]
}

export const getValidatorBalances = (baseApi: string, args: GetValidatorBalancesArgs) => {
  return fetch(join(baseApi, `/eth/v1/beacon/states/${args.stateId}/validator_balances`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args.validatorIds),
  }).then((res) => res.json() as Promise<GetValidatorBalancesResponse>)
}

export const getBeaconChainAPI = (endpoint: string) => {
  return {
    getValidatorBalances: getValidatorBalances.bind(null, endpoint),
  }
}
