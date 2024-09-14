import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kyve',
  assets: [{
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ukyve',
          exponent: 0
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ukyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingecko_id: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primary_color_hex: '#335350'
          }
        }],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork'
      }
    }]
} as const satisfies AssetList;
export default info;