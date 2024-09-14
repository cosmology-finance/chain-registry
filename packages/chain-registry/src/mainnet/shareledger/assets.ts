import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'shareledger',
  assets: [{
      description: 'The native token of Shareledger',
      denom_units: [{
          denom: 'nshr',
          exponent: 0
        }, {
          denom: 'shr',
          exponent: 9
        }],
      base: 'nshr',
      name: 'Shareledger',
      display: 'shr',
      symbol: 'SHR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
      },
      coingecko_id: 'shareledger',
      keywords: ['id'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg',
          theme: {
            primary_color_hex: '#1c2474'
          }
        }]
    }]
} as const satisfies AssetList;
export default info;