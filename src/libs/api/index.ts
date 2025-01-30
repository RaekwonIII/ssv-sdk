import { getBeaconChainAPI } from '@/api/beacon-chain-api'
import { getSSVAPI } from '@/api/ssv-api'
import { getQueries } from '@/api/subgraph'
import type { GraphQLClient } from 'graphql-request'

export const createQueries = (graphqlClient: GraphQLClient) => {
  return getQueries(graphqlClient)
}

export const createSSVAPI = (endpoint: string) => {
  return getSSVAPI(endpoint)
}

export const createBeaconChainAPI = (endpoint: string) => {
  return getBeaconChainAPI(endpoint)
}
