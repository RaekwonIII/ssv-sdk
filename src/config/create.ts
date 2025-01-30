import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter'
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import { createReader, createWriter } from '@/contract-interactions/create'

import { createBasedAppsAPI, createBeaconChainAPI, createQueries } from '@/libs/api'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'
import type { PublicClient, WalletClient } from 'viem'
import type { ContractAddresses, SupportedChainsIDs } from './chains'
import { beaconchain_endpoints, graph_endpoints } from './chains'

export type ConfigReturnType = {
  publicClient: PublicClient
  chain: SupportedChainsIDs
  api: {
    ssv: ReturnType<typeof createQueries>
    beacon: ReturnType<typeof createBeaconChainAPI>
    bam: ReturnType<typeof createBasedAppsAPI>
  }
  graphQLClient: GraphQLClient
  graphEndpoint: string
}

export const isConfig = (props: unknown): props is ConfigReturnType => {
  return (
    typeof props === 'object' &&
    props !== null &&
    'publicClient' in props &&
    'chain' in props &&
    'api' in props &&
    'graphQLClient' in props &&
    'graphEndpoint' in props
  )
}

type CreateContractInteractionsArgs = {
  walletClient: WalletClient
  publicClient: PublicClient
  addresses: ContractAddresses
}

export const createContractInteractions = ({
  walletClient,
  publicClient,
  addresses,
}: CreateContractInteractionsArgs) => {
  return {
    ssv: {
      write: createWriter<'setter'>({
        abi: MainnetV4SetterABI,
        walletClient,
        publicClient,
        contractAddress: addresses.setter,
      }),
      read: createReader<'getter'>({
        abi: MainnetV4GetterABI,
        publicClient,
        contractAddress: addresses.getter,
      }),
    },
    token: {
      read: createReader<'token'>({
        abi: TokenABI,
        publicClient,
        contractAddress: addresses.token,
      }),
      write: createWriter<'token'>({
        abi: TokenABI,
        walletClient,
        publicClient,
        contractAddress: addresses.token,
      }),
    },
  }
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)
  const { chain } = parsed
  // const { publicClient } = parsed
  // if (!publicClient.chain || !chainIds.includes(publicClient.chain?.id as SupportedChainsIDs))
  //   throw new Error(`Chain must be one of ${chainIds.join(', ')}`)

  const graphEndpoint = graph_endpoints[chain]
  const beaconchainEndpoint = beaconchain_endpoints[chain]
  const graphQLClient = new GraphQLClient(graphEndpoint)

  const apis = {
    ssv: createQueries(graphQLClient),
    beacon: createBeaconChainAPI(beaconchainEndpoint),
  }
  return {
    chain,
    graphEndpoint,
    api: {
      ssv: createQueries(graphQLClient),
      beacon: createBeaconChainAPI(beaconchainEndpoint),
      bam: createBasedAppsAPI(apis),
    },
    graphQLClient,
  } as ConfigReturnType
}
