import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kimatestnet',
  assets: [{
      description: 'The native token of Kima Chain',
      denom_units: [{
          denom: 'uKIMA',
          exponent: 0
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      base: 'uKIMA',
      name: 'KIMA',
      display: 'KIMA',
      symbol: 'KIMA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kimatestnet/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kimatestnet/images/kima.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kimatestnet/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kimatestnet/images/kima.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;