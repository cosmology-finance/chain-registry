import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'desmostestnet',
  assets: [{
      description: 'The native token of Desmos',
      denom_units: [{
          denom: 'udaric',
          exponent: 0
        }, {
          denom: 'daric',
          exponent: 6
        }],
      base: 'udaric',
      name: 'Desmos Testnet',
      display: 'daric',
      symbol: 'DARIC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
      },
      coingecko_id: 'desmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;