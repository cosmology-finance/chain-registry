import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'uniontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Union Testnet',
  chain_type: 'cosmos',
  chain_id: 'union-testnet-9',
  bech32_prefix: 'union',
  daemon_name: 'uniond',
  node_home: '$HOME/.uniond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'muno',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'muno'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet-9.union.build',
        provider: 'union'
      }],
    rest: [
      {
        address: 'https://rest.testnet-9.union.build',
        provider: 'union'
      },
      {
        address: 'https://union-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-testnet-union.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://union-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [{
        address: 'grpc.testnet-9.union.build',
        provider: 'union'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.testnet-9.union.build/union',
      tx_page: 'https://explorer.testnet-9.union.build/union/tx/${txHash}',
      account_page: 'https://explorer.testnet-9.union.build/union/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
    }]
};
export default info;