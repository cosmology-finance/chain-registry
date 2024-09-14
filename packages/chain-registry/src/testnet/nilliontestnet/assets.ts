import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'nilliontestnet',
  assets: [{
      description: 'NIL - the native token of Nillion',
      denom_units: [{
          denom: 'unil',
          exponent: 0
        }, {
          denom: 'nil',
          exponent: 6
        }],
      base: 'unil',
      name: 'Nillion',
      display: 'nil',
      symbol: 'NIL',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;