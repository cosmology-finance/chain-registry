import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'qwoyn',
  assets: [{
      description: 'The native governance token for Qwoyn Network',
      extended_description: 'The Qwoyn Network stands as a cutting-edge gaming hub that embeds Web3 technologies into the core of interactive entertainment. It revolutionizes the gaming industry by ensuring true ownership of in-game assets for players, facilitated through blockchain. This approach not only enhances gameplay but also fosters a unique ecosystem of interoperability and innovation. As a beacon in the gaming world, Qwoyn Network is dedicated to merging the excitement of traditional gaming with the transformative potential of Web3, creating a seamless and enriched gaming experience.',
      denom_units: [{
          denom: 'uqwoyn',
          exponent: 0
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      base: 'uqwoyn',
      name: 'Qwoyn Network',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primary_color_hex: '#04e4fc'
          }
        }],
      coingecko_id: 'qwoyn',
      keywords: ['gaming'],
      socials: {
        website: 'https://qwoyn.studio',
        twitter: 'https://twitter.com/Qwoyn_Studios'
      }
    }]
};
export default info;