import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'int3face',
  chain_type: 'cosmos',
  chain_id: 'int3face-1',
  pretty_name: 'Int3face',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://int3face.io/',
  bech32_prefix: 'int3',
  daemon_name: 'int3',
  node_home: '$HOME/.int3faced',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uint3',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
        fixed_min_gas_price: 1e-7,
        low_gas_price: 1e-7,
        average_gas_price: 0.0000025,
        high_gas_price: 0.000004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.000025,
        high_gas_price: 0.00004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.000025,
        high_gas_price: 0.00004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.004
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'uint3'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
  },
  description: 'Int3face is a cross-chain bridge that connects the Cosmos ecosystem with other blockchains.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }],
    rest: [{
        address: 'https://api.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }],
    grpc: [{
        address: 'grpc.mainnet.int3face.zone:443',
        provider: 'Int3face.io'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.int3face.zone',
      tx_page: 'https://explorer.int3face.zone/int3face-1/tx/${txHash}'
    }],
  images: [{
      image_sync: {
        chain_name: 'int3face',
        base_denom: 'uint3'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
      theme: {
        primary_color_hex: '#3d3d3d'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3face-chain-logo.png',
      theme: {
        primary_color_hex: '#040404',
        circle: false
      }
    }]
};
export default info;