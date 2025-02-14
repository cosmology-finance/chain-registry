import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kimanetworktestnet',
  status: 'live',
  website: 'https://www.kima.network/',
  network_type: 'testnet',
  pretty_name: 'Kima Network Testnet',
  chain_type: 'cosmos',
  chain_id: 'kima_testnet',
  bech32_prefix: 'kima',
  daemon_name: 'kimad',
  node_home: '$HOME/.kima',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uKIMA',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uKIMA'
      }],
    lock_duration: {
      time: '259200s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/kima-finance/kima-blockchain/',
    genesis: {
      name: 'v1',
      genesis_url: 'https://archive.sardis.kima.network/genesis.json'
    },
    recommended_version: 'v0.4.8'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sardis.kima.network/',
        provider: 'Kima Network'
      }],
    grpc: [{
        address: 'https://grpc.sardis.kima.network',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api.sardis.kima.network/',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network',
      url: 'https://explorer.sardis.kima.network/',
      tx_page: 'https://explorer.sardis.kima.network/transactions/${txHash}'
    }]
};
export default info;