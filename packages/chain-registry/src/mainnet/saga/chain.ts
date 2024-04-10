import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'saga',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.saga.xyz/',
  pretty_name: 'Saga',
  chain_id: 'ssc-1',
  bech32_prefix: 'saga',
  daemon_name: 'sscd',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'saga'
      }
    ],
    lock_duration: {
      time: '1814400s'
    }
  },
  fees: {
    fee_tokens: [
      {
        denom: 'usaga',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'osmosis-labs/cosmos-sdk v0.47.5',
    cosmwasm_enabled: false
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-saga.keplr.app',
        provider: 'chainapsis'
      },
      {
        address: 'https://saga-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://saga-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'saga-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'saga-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
  },
  description:
    'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or “Chainlets,” that provide applications with infinite horizontal scalability. Each Chainlet is a replica of the Saga Mainnet, with the same validator set and security model.\n\nSaga’s mission is to enable the next 1000 chains in gaming and entertainment as part of the growing Saga Multiverse. ',
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/saga',
      tx_page: 'https://www.mintscan.io/saga/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/saga/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/saga',
      tx_page: 'https://ezstaking.app/saga/txs/${txHash}',
      account_page: 'https://ezstaking.app/saga/account/${accountAddress}'
    }
  ],
  keywords: [],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
    }
  ]
};
export default info;
