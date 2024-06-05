import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  chain_name: 'althea',
  $schema: '../assetlist.schema.json',
  assets: [{
      description: 'Althea native token',
      denom_units: [{
          denom: 'aalthea',
          exponent: 0
        }, {
          denom: 'althea',
          exponent: 18
        }],
      base: 'aalthea',
      name: 'Althea Token',
      display: 'althea',
      symbol: 'ALTHEA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
        }]
    }]
};
export default info;