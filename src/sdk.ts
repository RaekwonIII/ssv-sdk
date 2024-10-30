import { createClusterManager } from '@/libs/cluster'
import { utils } from '@/libs/utils'
import { ConfigReturnType, createConfig } from './config/create'
import { ConfigArgs } from './utils/zod/config'

export class SSVSDK {
  readonly core: ConfigReturnType
  readonly clusters: ReturnType<typeof createClusterManager>
  readonly api: ConfigReturnType['api']
  readonly contract: ConfigReturnType['contract']
  readonly utils: typeof utils

  constructor(props: ConfigArgs) {
    this.core = createConfig(props)
    this.clusters = createClusterManager(this.core)
    this.api = this.core.api
    this.contract = this.core.contract
    this.utils = utils
  }
}
