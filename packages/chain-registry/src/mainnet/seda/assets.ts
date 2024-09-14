import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'seda',
  assets: [{
      description: 'The native token of SEDA Chain.',
      extended_description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
      denom_units: [{
          denom: 'aseda',
          exponent: 0
        }, {
          denom: 'seda',
          exponent: 18
        }],
      base: 'aseda',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
      },
      coingecko_id: 'seda-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
          theme: {
            primary_color_hex: '#8178d1'
          }
        }],
      socials: {
        website: 'https://www.seda.xyz/',
        twitter: 'https://twitter.com/sedaprotocol'
      }
    }]
} as const satisfies AssetList;
export default info;