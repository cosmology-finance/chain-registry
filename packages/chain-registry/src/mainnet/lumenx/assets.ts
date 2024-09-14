import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lumenx',
  assets: [{
      description: 'The native token of LumenX Network',
      denom_units: [{
          denom: 'ulumen',
          exponent: 0
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
          theme: {
            primary_color_hex: '#cb8b40'
          }
        }]
    }]
} as const satisfies AssetList;
export default info;