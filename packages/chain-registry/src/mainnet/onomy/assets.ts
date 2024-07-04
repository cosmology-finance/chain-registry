import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'onomy',
  assets: [{
      description: 'The native token of Onomy Protocol',
      denom_units: [{
          denom: 'anom',
          exponent: 0
        }, {
          denom: 'nom',
          exponent: 18
        }],
      base: 'anom',
      name: 'Nom',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ],
      coingecko_id: 'onomy-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
          theme: {
            primary_color_hex: '#1c1c28'
          }
        }]
    }]
};
export default info;