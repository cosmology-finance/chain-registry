import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'axelartestnet',
  chain_id: 'axelar-testnet-lisbon-3',
  pretty_name: 'Axelar Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://axelar.network/',
  bech32_prefix: 'axelar',
  daemon_name: 'axelard',
  node_home: '$HOME/.axelard',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uaxl',
        low_gas_price: 0.007,
        average_gas_price: 0.007,
        high_gas_price: 0.01
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uaxl'
      }
    ]
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: 'https://rpc-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelartest-rpc.quickapi.com/',
        provider: 'Quickapi'
      },
      {
        address: 'https://axelar-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://lcd-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelartest-lcd.quickapi.com/',
        provider: 'Quickapi'
      },
      {
        address: 'https://axelar-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [
    {
      kind: 'axelarscan',
      url: 'https://testnet.axelarscan.io',
      tx_page: 'https://testnet.axelarscan.io/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/axelar-testnet',
      tx_page: 'https://testnet.mintscan.io/axelar-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}'
    }
  ]
};
export default info;
