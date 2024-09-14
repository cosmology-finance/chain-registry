import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mythos',
  assets: [{
      description: 'The native token of Mythos',
      denom_units: [{
          denom: 'aMYT',
          exponent: 0
        }, {
          denom: 'MYT',
          exponent: 18
        }],
      base: 'aMYT',
      name: 'MYT',
      display: 'MYT',
      symbol: 'MYT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg',
          theme: {
            primary_color_hex: '#848484'
          }
        }]
    }]
} as const satisfies AssetList;
export default info;