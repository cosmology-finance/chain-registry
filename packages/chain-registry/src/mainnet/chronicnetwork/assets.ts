import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chronicnetwork',
  assets: [{
      description: 'The CHT coin is the governance token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ucht',
          exponent: 0
        }, {
          denom: 'cht',
          exponent: 6
        }],
      base: 'ucht',
      display: 'cht',
      name: 'Chronic Token',
      symbol: 'CHT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png'
      },
      coingecko_id: 'cht',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png',
          theme: {
            primary_color_hex: '#1eb975'
          }
        }]
    }, {
      description: 'The CGAS coin is the transactional token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ucgas',
          exponent: 0
        }, {
          denom: 'cgas',
          exponent: 6
        }],
      base: 'ucgas',
      display: 'cgas',
      name: 'Chronic Gas',
      symbol: 'CGAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png'
      },
      coingecko_id: 'cgas',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png',
          theme: {
            primary_color_hex: '#ecb368'
          }
        }]
    }]
};
export default info;