import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'ulastestnet',
  assets: [{
      description: 'WEB3 twitter',
      denom_units: [{
          denom: 'uulas',
          exponent: 0
        }, {
          denom: 'ulas',
          exponent: 6
        }],
      base: 'uulas',
      name: 'ULAS Network',
      display: 'ulas',
      symbol: 'ULAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
      },
      coingecko_id: 'ulas',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
        }]
    }]
} as const satisfies AssetList;
export default info;