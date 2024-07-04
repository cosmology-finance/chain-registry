import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dhealth',
  assets: [{
      description: 'The native token of dHealth',
      extended_description: 'dHealth Network is an Operating System for Web3 Healthcare. It provides Web3 components such as Decentralised Digital Identity, Digital Payment, and user-controlled data access to support dApps and business models at the intersection of healthcare and blockchain technology.',
      denom_units: [{
          denom: 'udhp',
          exponent: 0
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      base: 'udhp',
      name: 'Digital Health Point',
      display: 'dhp',
      symbol: 'DHP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      coingecko_id: 'dhealth',
      socials: {
        website: 'https://dhealth.com',
        twitter: 'https://twitter.com/dhealth_network'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primary_color_hex: '#140c7c'
          }
        }]
    }]
};
export default info;