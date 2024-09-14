import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'blockx',
  assets: [{
      description: 'BlockX Native Token',
      denom_units: [{
          denom: 'abcx',
          exponent: 0
        }, {
          denom: 'bcx',
          exponent: 18
        }],
      base: 'abcx',
      name: 'BCX',
      display: 'bcx',
      symbol: 'BCX',
      type_asset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockx/images/blockx.png'
        }],
      socials: {
        website: 'https://www.blockxnet.com/'
      }
    }]
} as const satisfies AssetList;
export default info;