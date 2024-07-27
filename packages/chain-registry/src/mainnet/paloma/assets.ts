import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'paloma',
  assets: [{
      description: 'The native token of the Paloma chain',
      denom_units: [{
          denom: 'ugrain',
          exponent: 0
        }, {
          denom: 'grain',
          exponent: 6
        }],
      base: 'ugrain',
      name: 'Grain',
      display: 'grain',
      symbol: 'GRAIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.svg'
        }],
      socials: {
        website: 'https://palomachain.com/',
        twitter: 'https://twitter.com/paloma_chain'
      }
    }]
};
export default info;