# @chain-registry/juno

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/hyperweb-io/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/juno"><img height="20" src="https://img.shields.io/github/package-json/v/hyperweb-io/chain-registry?filename=v1%2Fpackages%2Fjuno%2Fpackage.json"></a>
</p>

Chain Registry info for Juno, including asset lists.

```
npm install @chain-registry/juno
```

```js
import { chain, assets, asset_list, testnet, testnet_assets } from '@chain-registry/juno';
```
```js
console.log(asset_list);
{
  chain_name: 'juno',
  assets: [
    {
      description: "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [Array],
      base: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: [Object],
      coingecko_id: 'akash-network',
      ibc: [Object]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [Array],
      base: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: [Object],
      coingecko_id: 'axelar-network',
      ibc: [Object]
    },
    // ... more assets
  ]
}
```

## Related

Checkout these related projects:

* [telescope](https://github.com/hyperweb-io/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/hyperweb-io/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/hyperweb-io/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/hyperweb-io/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/hyperweb-io/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
