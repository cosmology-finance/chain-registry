import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cifer',
  assets: [{
      description: 'Cifer Blockchain Network Built for Decentralized Machine Learning.',
      denom_units: [{
          denom: 'ucif',
          exponent: 0
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ucif',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primary_color_hex: '#af49b7'
          }
        }],
      socials: {
        website: 'http://cifer.ai/',
        twitter: 'https://twitter.com/cifer_ai'
      }
    }]
} as const satisfies AssetList;
export default info;