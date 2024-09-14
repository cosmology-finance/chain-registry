import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'finschiatestnet',
  assets: [{
      description: 'The native token of Ebony',
      denom_units: [{
          denom: 'tcony',
          exponent: 0
        }, {
          denom: 'tfnsa',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'tcony',
      name: 'Test FINSCHIA',
      display: 'tfnsa',
      symbol: 'TFNSA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
        }],
      keywords: ['staking']
    }]
} as const satisfies AssetList;
export default info;