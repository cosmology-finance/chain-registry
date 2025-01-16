import { Chain } from '@chain-registry/types';

const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'babylontestnet',
  status: 'live',
  website: 'https://babylonlabs.io/',
  network_type: 'testnet',
  pretty_name: 'Babylon Testnet',
  chain_type: 'cosmos',
  chain_id: 'bbn-test-5',
  pre_fork_chain_name: 'babylontestnet1',
  bech32_prefix: 'bbn',
  slip44: 118,
  daemon_name: 'babylond',
  node_home: '$HOME/.babylond',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
      denom: 'ubbn',
      fixed_min_gas_price: 0,
      low_gas_price: 0.007,
      average_gas_price: 0.007,
      high_gas_price: 0.01
    }]
  },
  staking: {
    staking_tokens: [{
      denom: 'ubbn'
    }]
  },
  codebase: {
    git_repo: 'https://github.com/babylonlabs-io/babylon/releases',
    recommended_version: 'v1.0.0-rc.3',
    compatible_versions: ['v1.0.0-rc.3'],
  },
  logo_URIs: {
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
    tx_page: 'https://babylon-testnet.l2scan.co/tx/${txHash}'
  }, {
    kind: 'explorers.guru',
    url: 'https://testnet.babylon.explorers.guru',
    tx_page: 'https://testnet.babylon.explorers.guru/transaction/${txHash}'
  }],
  images: [{
    png: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png'
  }]
};

export default info;
