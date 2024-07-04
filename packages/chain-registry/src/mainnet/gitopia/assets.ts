import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gitopia',
  assets: [{
      description: 'The native token of Gitopia',
      denom_units: [{
          denom: 'ulore',
          exponent: 0
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      base: 'ulore',
      name: 'LORE',
      display: 'LORE',
      symbol: 'LORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg',
          theme: {
            primary_color_hex: '#2c173c'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
          theme: {
            primary_color_hex: '#2e154d'
          }
        }],
      coingecko_id: 'gitopia',
      socials: {
        website: 'https://gitopia.com/',
        twitter: 'https://twitter.com/gitopiaDAO'
      }
    }]
};
export default info;