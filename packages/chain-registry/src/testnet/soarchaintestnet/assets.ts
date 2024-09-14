import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'soarchaintestnet',
  assets: [{
      description: 'The native staking coin of the Soarchain-core.',
      denom_units: [{
          denom: 'utsoar',
          exponent: 0,
          aliases: ['microtsoar']
        }, {
          denom: 'tsoar',
          exponent: 6
        }],
      base: 'utsoar',
      display: 'tsoar',
      name: 'tsoar',
      symbol: 'tsoar',
      keywords: ['DePin'],
      socials: {
        website: 'https://www.soarchain.com',
        twitter: 'https://x.com/soar_chain'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;