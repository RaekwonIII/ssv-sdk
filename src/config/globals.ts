export const globals = {
  MAX_WEI_AMOUNT: 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
  CLUSTER_SIZES: {
    QUAD_CLUSTER: 4,
    SEPT_CLUSTER: 7,
    DECA_CLUSTER: 10,
    TRISKAIDEKA_CLUSTER: 13,
  } as const,
  FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE: {
    QUAD_CLUSTER: 80,
    SEPT_CLUSTER: 40,
    DECA_CLUSTER: 30,
    TRISKAIDEKA_CLUSTER: 20,
  },
  BLOCKS_PER_DAY: 7160n,
  OPERATORS_PER_PAGE: 50,
  BLOCKS_PER_YEAR: 2613400n,
  DEFAULT_CLUSTER_PERIOD: 730,
  NUMBERS_OF_WEEKS_IN_YEAR: 52.1429,
  MAX_VALIDATORS_COUNT_MULTI_FLOW: 50,
  CLUSTER_VALIDITY_PERIOD_MINIMUM: 30,
  OPERATOR_VALIDATORS_LIMIT_PRESERVE: 5,
  MINIMUM_OPERATOR_FEE_PER_BLOCK: 1000000000n,
  MIN_VALIDATORS_COUNT_PER_BULK_REGISTRATION: 1,
  DEFAULT_ADDRESS_WHITELIST: '0x0000000000000000000000000000000000000000',
}

export type ClusterSize = (typeof globals.CLUSTER_SIZES)[keyof typeof globals.CLUSTER_SIZES]

export const registerValidatorsByClusterSizeLimits = {
  [globals.CLUSTER_SIZES.QUAD_CLUSTER]:
    globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.QUAD_CLUSTER,
  [globals.CLUSTER_SIZES.SEPT_CLUSTER]:
    globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.SEPT_CLUSTER,
  [globals.CLUSTER_SIZES.DECA_CLUSTER]:
    globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.DECA_CLUSTER,
  [globals.CLUSTER_SIZES.TRISKAIDEKA_CLUSTER]:
    globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.TRISKAIDEKA_CLUSTER,
}
