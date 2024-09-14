import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'vincechaintestnet',
  assets: [{
      description: 'Vince Chain is an Industry-Grade Blockchain For DeFi, Remote work, Gaming, Web3 and will power the new internet.',
      denom_units: [{
          denom: 'avce',
          exponent: 0
        }, {
          denom: 'vce',
          exponent: 18
        }],
      base: 'avce',
      name: 'VinceChain',
      display: 'vce',
      symbol: 'VCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
        }]
    }]
} as const satisfies AssetList;
export default info;