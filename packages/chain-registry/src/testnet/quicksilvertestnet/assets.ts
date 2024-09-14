import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'quicksilvertestnet',
  assets: [{
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'uqck',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'uqck',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }]
    }]
} as const satisfies AssetList;
export default info;