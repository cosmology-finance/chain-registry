import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dydxtestnet',
  assets: [{
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [{
          denom: 'adv4tnt',
          exponent: 0
        }, {
          denom: 'dv4tnt',
          exponent: 18
        }],
      base: 'adv4tnt',
      name: 'dYdX',
      display: 'dv4tnt',
      symbol: 'DV4TNT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Dydx'
        }],
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    }]
} as const satisfies AssetList;
export default info;