import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'metanovaversetestnet',
  assets: [{
      description: 'MetaNova Verse Native Token',
      denom_units: [{
          denom: 'amnv',
          exponent: 0
        }, {
          denom: 'mnv',
          exponent: 18
        }],
      base: 'amnv',
      name: 'MNV',
      display: 'mnv',
      symbol: 'MNV',
      type_asset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/metanovaversetestnet/images/mnova.png'
        }],
      socials: {
        website: 'https://metanovaverse.com/'
      }
    }]
} as const satisfies AssetList;
export default info;