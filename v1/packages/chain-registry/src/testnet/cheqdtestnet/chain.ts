import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cheqdtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'cheqd',
  chain_type: 'cosmos',
  chain_id: 'cheqd-testnet-6',
  bech32_prefix: 'cheqd',
  daemon_name: 'cheqd-noded',
  node_home: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ncheq',
        fixed_min_gas_price: 5000,
        low_gas_price: 5000,
        average_gas_price: 7500,
        high_gas_price: 10000
      }]
  },
  codebase: {
    git_repo: 'https://github.com/cheqd/cheqd-node',
    recommended_version: 'v3.1.6',
    compatible_versions: ['v3.1.5', 'v3.1.6'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.1.6/cheqd-noded-3.1.6-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.1.6/cheqd-noded-3.1.6-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.1.6/cheqd-noded-3.1.6-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v3.1.6/cheqd-noded-3.1.6-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/testnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cheqd/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-height-mismatch'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cheqd.network',
        provider: 'cheqd'
      }],
    rest: [{
        address: 'https://api.cheqd.network',
        provider: 'cheqd'
      }],
    grpc: [{
        address: 'grpc.cheqd.network:443',
        provider: 'cheqd'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://testnet-explorer.cheqd.io/',
      tx_page: 'https://testnet-explorer.cheqd.io/transactions/${txHash}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }]
};
export default info;