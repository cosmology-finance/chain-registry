import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chain4energytestnet',
  assets: [{
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'uc4e',
          exponent: 0
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }]
    }]
} as const satisfies AssetList;
export default info;