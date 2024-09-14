import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'self',
  assets: [{
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'uslf',
          exponent: 0
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'uslf',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primary_color_hex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      }
    }]
} as const satisfies AssetList;
export default info;