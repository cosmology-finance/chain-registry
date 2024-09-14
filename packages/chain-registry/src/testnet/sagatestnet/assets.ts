import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sagatestnet',
  assets: [{
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'utsaga',
          exponent: 0,
          aliases: []
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'utsaga',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;