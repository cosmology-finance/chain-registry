import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'jackaltestnet2',
  assets: [{
      description: 'The native staking and governance token of Jackal.',
      denom_units: [{
          denom: 'ujkl',
          exponent: 0
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ujkl',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'jackal',
            base_denom: 'ujkl'
          },
          provider: 'Jackal'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          image_sync: {
            chain_name: 'jackal',
            base_denom: 'ujkl'
          },
          theme: {
            primary_color_hex: '#dbdbcb'
          }
        }]
    }]
} as const satisfies AssetList;
export default info;