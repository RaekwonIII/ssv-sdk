import type { createBeaconChainAPI, createQueries } from '@/main'

export type APIs = {
  ssv: ReturnType<typeof createQueries>
  beacon: ReturnType<typeof createBeaconChainAPI>
}
