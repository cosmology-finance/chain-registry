import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cudostestnet',
  assets: [{
      description: 'The native token of the Cudos blockchain',
      denom_units: [{
          denom: 'acudos',
          exponent: 0,
          aliases: ['attocudos']
        }, {
          denom: 'cudos',
          exponent: 18,
          aliases: []
        }],
      base: 'acudos',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;