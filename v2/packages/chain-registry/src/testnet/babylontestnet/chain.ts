import { Chain } from '@chain-registry/v2-types';

const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'babylontestnet',
  status: 'live',
  website: 'https://babylonlabs.io/',
  networkType: 'testnet',
  prettyName: 'Babylon Testnet',
  chainType: 'cosmos',
  chainId: 'bbn-test-5',
  bech32Prefix: 'bbn',
  slip44: 118,
  daemonName: 'babylond',
  nodeHome: '$HOME/.babylond',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
      denom: 'ubbn',
      fixedMinGasPrice: 0,
      lowGasPrice: 0.007,
      averageGasPrice: 0.007,
      highGasPrice: 0.01
    }]
  },
  staking: {
    stakingTokens: [{
      denom: 'ubbn'
    }]
  },
  codebase: {
    gitRepo: 'https://github.com/babylonlabs-io/babylon/releases',
    recommendedVersion: 'v1.0.0-rc.3',
    compatibleVersions: ['v1.0.0-rc.3'],
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
  },
  apis: {
    rpc: [{
      address: 'https://babylon-testnet-rpc.nodes.guru',
      provider: 'NodesGuru'
    }],
    rest: [{
      address: 'https://babylon-testnet-api.nodes.guru',
      provider: 'NodesGuru'
    }],
    grpc: []
  },
  explorers: [{
    kind: 'babylonscan',
    url: 'https://babylon-testnet.l2scan.co/tx/${txHash}',
    txPage: 'https://babylon-testnet.l2scan.co/tx/${txHash}'
  }, {
    kind: 'explorers.guru',
    url: 'https://testnet.babylon.explorers.guru',
    txPage: 'https://testnet.babylon.explorers.guru/transaction/${txHash}'
  }],
  images: [{
    png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
  }]
};

export default info;
