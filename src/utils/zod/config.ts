import type { SupportedChainsIDs } from '@/config'
import { chainIds } from '@/config'
import { z } from 'zod'

type ZodConfigArgs = {
  // walletClient: z.ZodType<WalletClient>
  // publicClient: z.ZodType<PublicClient>
  chain: z.ZodType<SupportedChainsIDs>
}

export const configArgsSchema: z.ZodObject<ZodConfigArgs> = z.object({
  // walletClient: z.custom<WalletClient>((val) => typeof val === 'object' && val !== null, {}),
  // publicClient: z.custom<publicClient>((val) => typeof val === 'object' && val !== null, {}),
  chain: z.number().refine((val) => chainIds.includes(val as SupportedChainsIDs), {
    message: 'Chain must be one of ' + chainIds.join(', '),
  }) as z.ZodType<SupportedChainsIDs>,
})

export type ConfigArgs = z.infer<z.ZodObject<ZodConfigArgs>>
