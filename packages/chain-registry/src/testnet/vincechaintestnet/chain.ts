import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../../chain.schema.json',
  chain_name: 'vincechaintestnet',
  status: 'killed',
  network_type: 'testnet',
  pretty_name: 'VinceChain Testnet',
  chain_type: 'cosmos',
  chain_id: 'vince_1903-1',
  bech32_prefix: 'vce',
  node_home: '$HOME/.vinced',
  slip44: 60,
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  fees: {
    fee_tokens: [{
        denom: 'avce',
        fixed_min_gas_price: 250000000,
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'avce'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
  },
  apis: {
    rpc: [{
        address: 'http://api-testnet.vincechain.com/:26657/',
        provider: 'vincescan.com'
      }],
    rest: [{
        address: 'http://lcd-testnet.vincechain.com/:1317/',
        provider: 'vincescan.com'
      }],
    grpc: [],
    "evm-http-jsonrpc": [{
        address: 'http://rpc-testnet.vincechain.com',
        provider: 'vincescan.com'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://scan-testnet.vincechain.com',
      tx_page: 'https://scan-testnet.vincechain.com/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
    }]
} as const satisfies Chain;
export default info;