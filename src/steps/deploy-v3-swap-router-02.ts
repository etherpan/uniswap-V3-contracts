import SwapRouter from '@uniswap/swap-router-contracts/artifacts/contracts/SwapRouter.sol/SwapRouter.json'
import createDeployContractStep from './meta/createDeployContractStep'

export const DEPLOY_V3_SWAP_ROUTER_02 = createDeployContractStep({
  key: 'swapRouter02',
  artifact: SwapRouter,
  computeArguments(state, config) {
    if (state.v3CoreFactoryAddress === undefined) {
      throw new Error('Missing V3 Core Factory')
    }

    return [
      state.v3CoreFactoryAddress,
      config.weth9Address,
    ]
  },
})
