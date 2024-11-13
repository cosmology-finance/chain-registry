import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'andromeda1',
  assets: [{
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'uandr',
          exponent: 0
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingecko_id: 'andromeda-2',
      base: 'uandr',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;