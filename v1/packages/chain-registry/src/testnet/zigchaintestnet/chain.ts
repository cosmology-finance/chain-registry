import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'zigchaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'ZIGChain Testnet',
  website: 'https://zigchain.com/',
  chain_type: 'cosmos',
  chain_id: 'zig-test-1',
  bech32_prefix: 'zig',
  daemon_name: 'zigchaind',
  node_home: '$HOME/.zigchain',
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
  },
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uzig'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uzig'
      }]
  },
  apis: {
    rest: [{
        address: 'https://testnet-api.zigchain.com',
        provider: 'ZIGCHAIN'
      }],
    rpc: [{
        address: 'https://testnet-rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      }]
  },
  keywords: [
    'wealth generation',
    'rwa',
    'staking',
    'wasm',
    'testnet'
  ],
  images: [{
      image_sync: {
        chain_name: 'zigchaintestnet',
        base_denom: 'uzig'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
    }]
};
export default info;