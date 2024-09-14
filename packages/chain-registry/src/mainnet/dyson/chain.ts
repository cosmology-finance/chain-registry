import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'dyson',
  website: 'https://dysonprotocol.com/',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Dyson Protocol',
  chain_type: 'cosmos',
  chain_id: 'dyson-mainnet-01',
  bech32_prefix: 'dys',
  node_home: '$HOME/.dyson',
  daemon_name: 'dysond',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'dys',
        low_gas_price: 0.0001,
        average_gas_price: 0.0002,
        high_gas_price: 0.0003
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'dys'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg'
  },
  apis: {
    rpc: [{
        address: 'https://dys-tm.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-rpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    rest: [{
        address: 'https://dys-api.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-api.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    grpc: [{
        address: 'dys-grpc.dyson.lol:443',
        provider: 'lol'
      }, {
        address: 'https://dyson-grpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }]
  },
  explorers: [{
      kind: 'dysonprotocol',
      url: 'https://explorer.dys.dysonprotocol.com/dyson/',
      tx_page: 'https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}',
      account_page: 'https://explorer.dys.dysonprotocol.com/dyson/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg'
    }]
} as const satisfies Chain;
export default info;