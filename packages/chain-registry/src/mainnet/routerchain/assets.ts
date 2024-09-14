import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'routerchain',
  assets: [{
      description: 'The native token of Router Chain',
      extended_description: 'Router Chain is a PoS L1 that allows stateful bridging–enabling truly omnichain dapps that can abstract chains from the users and aggregate liquidity across multiple chains.',
      denom_units: [{
          denom: 'route',
          exponent: 0
        }, {
          denom: 'ROUTE',
          exponent: 18
        }],
      base: 'route',
      name: 'Router Chain',
      display: 'ROUTE',
      symbol: 'ROUTE',
      coingecko_id: 'router-protocol-2',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primary_color_hex: '#cb0766'
          }
        }],
      socials: {
        website: 'https://www.routerprotocol.com/',
        twitter: 'https://x.com/routerprotocol'
      }
    }]
} as const satisfies AssetList;
export default info;