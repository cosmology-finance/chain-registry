import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'uniontestnet',
  assets: [{
      description: 'Union native token',
      denom_units: [{
          denom: 'muno',
          exponent: 0
        }, {
          denom: 'uno',
          exponent: 6
        }],
      base: 'muno',
      name: 'Union',
      display: 'uno',
      symbol: 'UNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
      },
      keywords: ['staking'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
        }]
    }]
} as const satisfies AssetList;
export default info;