import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'doravotatestnet2',
  assets: [{
      description: 'The native staking and governance token of the Theta incentive version of the Dora Vota Testnet.',
      denom_units: [{
          denom: 'peaka',
          exponent: 0
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'peaka',
      name: 'Dora Vota Incentive Testnet',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        }]
    }]
} as const satisfies AssetList;
export default info;