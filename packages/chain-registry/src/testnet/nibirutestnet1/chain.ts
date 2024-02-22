import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nibiru',
  status: 'live',
  network_type: 'testnet',
  website: 'https://nibiru.fi/',
  pretty_name: 'Nibiru',
  chain_id: 'nibiru-testnet-1',
  bech32_prefix: 'nibi',
  daemon_name: 'nibid',
  node_home: '$HOME/.nibid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'unibi',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.1
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unibi'
      }
    ],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/NibiruChain/nibiru',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_arm64.tar.gz'
    },
    cosmos_sdk_version: 'v0.47.7',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    cosmwasm_version: 'v0.44.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.3.1',
    genesis: {
      genesis_url:
        'https://github.com/NibiruChain/Networks/blob/main/Testnet/nibiru-testnet-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        tag: 'v1.0.0',
        height: 1,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        cosmos_sdk_version: 'v0.45.5',
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        cosmwasm_path: '$HOME/.nibid/data/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_arm64.tar.gz'
        },
        next_version_name: 'v1.0.1'
      },
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.1'],
        tag: 'v1.0.1',
        binaries: {
          'linux/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_arm64.tar.gz'
        },
        proposal: 2,
        height: 2753803,
        cosmos_sdk_version: 'v0.47.7',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        cosmwasm_version: 'v0.44.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: ''
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
  },
  description: 'A Web3 hub ushering in the next era of money',
  peers: {
    seeds: [],
    persistent_peers: []
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet-1.nibiru.fi',
        provider: 'Nibiru Foundation'
      }
    ],
    rest: [
      {
        address: 'https://lcd.testnet-1.nibiru.fi',
        provider: 'Nibiru Foundation'
      }
    ],
    grpc: [
      {
        address: 'grpc.testnet-1.nibiru.fi:443',
        provider: 'Nibiru Foundation'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nibiru Foundation',
      url: 'https://explorer.nibiru.fi/nibiru-testnet-1',
      tx_page: 'https://explorer.nibiru.fi/nibiru-testnet-1/tx/${txHash}',
      account_page:
        'https://explorer.nibiru.fi/nibiru-testnet-1/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
    }
  ]
};
export default info;
