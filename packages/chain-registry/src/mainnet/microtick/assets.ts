import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'microtick',
  assets: [{
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [{
          denom: 'utick',
          exponent: 0
        }, {
          denom: 'tick',
          exponent: 6
        }],
      base: 'utick',
      display: 'tick',
      name: 'Microtick',
      symbol: 'TICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      coingecko_id: 'microtick',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
          theme: {
            primary_color_hex: '#6bab14'
          }
        }]
    }]
};
export default info;