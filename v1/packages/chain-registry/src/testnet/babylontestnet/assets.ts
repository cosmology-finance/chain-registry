import { AssetList } from '@chain-registry/types';

const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'babylontestnet',
  assets: [{
    description: 'The native staking token of Babylon.',
    denom_units: [{
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
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
    },
    images: [{
      png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
    }],
    type_asset: 'sdk.coin'
  }]
};

export default info;
