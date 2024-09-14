import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'composabletestnet',
  assets: [{
      description: 'The native staking and governance token of the Composable testnet.',
      denom_units: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;