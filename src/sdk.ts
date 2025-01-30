import type { ConfigReturnType } from './config/create'
import { createConfig, isConfig } from './config/create'
import type { ConfigArgs } from './utils/zod/config'

export class BasedAppsSDK {
  readonly config: ConfigReturnType
  readonly api: ConfigReturnType['api']

  constructor(props: ConfigArgs | ConfigReturnType) {
    this.config = isConfig(props) ? props : createConfig(props)
    this.api = this.config.api
  }
}
