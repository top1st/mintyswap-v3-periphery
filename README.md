# Uniswap V3 Periphery

[![Tests](https://github.com/Uniswap/uniswap-v3-periphery/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-v3-periphery/actions?query=workflow%3ATests)
[![Lint](https://github.com/Uniswap/uniswap-v3-periphery/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-v3-periphery/actions?query=workflow%3ALint)

This repository contains the periphery smart contracts for the Uniswap V3 Protocol.
For the lower level core contracts, see the [uniswap-v3-core](https://github.com/Uniswap/uniswap-v3-core)
repository.

## Bug bounty

This repository is subject to the Uniswap V3 bug bounty program,
per the terms defined [here](./bug-bounty.md).

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@uniswap/v3-periphery`
and import bytecode imported from artifacts located at
`@uniswap/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Uniswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Uniswap v3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@uniswap/v3-periphery`, e.g.:

```solidity
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```


### Deployed ETHERUEM

```angular2html
deployer: 0x768C44eB96862Acc5b35c0dFC526Cb34aA7c063F
Factory: 0x21bf88d5753f971ADD459b33504cb1B62c2D2719
InitCodeHash: 0x43217921bbb04fabc8c743fa538c897486d663f86b31754003da0ae10967a0bc

nftDescriptor 0x418467BE923EC19817710e2898f648b8B4de87c6
positionDescriptor 0xec3fBf694de486e62c81bAFf3CEea25eF2DcCeE2
positionManager 0x5200Cb7bF0980850baa68F2D2239eE7Bc6397329

Router: 0x9AbC53E03C1ba9b9416E0c0Bc0a34E357B8E8DfF
Quoter: 0xA6E5ac275fB7455C2b43f30d9539989858710E91
Migrator: 0x685db6bF5289A756fE48E7cF96BDEf41FDe8A2Fc
```

