import { AssetList } from '@chain-registry/v2-types';

const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'babylontestnet',
  assets: [{
    description: 'The native staking token of Babylon.',
    denomUnits: [{
      denom: 'ubbn',
      exponent: 0
    }, {
      denom: 'BABY',
      exponent: 6
    }],
    base: 'ubbn',
    name: 'Babylon Testnet',
    display: 'BABY',
    symbol: 'BABY',
    logoURIs: {
      png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
    },
    images: [{
      png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
    }],
    typeAsset: 'sdk.coin'
  }]
};

export default info;
