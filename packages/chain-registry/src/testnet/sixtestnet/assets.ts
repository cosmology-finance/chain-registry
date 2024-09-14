import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sixtestnet',
  assets: [{
      description: 'The native staking token of the SIX Protocol.',
      denom_units: [{
          denom: 'usix',
          exponent: 0
        }, {
          denom: 'six',
          exponent: 6
        }],
      base: 'usix',
      name: 'Six token',
      display: 'six',
      symbol: 'six',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
        }]
    }]
} as const satisfies AssetList;
export default info;