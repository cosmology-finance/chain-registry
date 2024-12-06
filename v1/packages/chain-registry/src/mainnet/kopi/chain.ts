import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kopi',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://app.kopi.money',
  pretty_name: 'Kopi',
  chain_type: 'cosmos',
  chain_id: 'luwak-1',
  daemon_name: 'kopid',
  node_home: '$HOME/.kopid',
  bech32_prefix: 'kopi',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ukopi',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ukopi'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://rpc.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rpc.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rpc.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi.rpc.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'https://rpc-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-rpc.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-rpc.bluestake.net:443',
        provider: 'Bluestake'
      },
      {
        address: 'https://rpc-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi-rpc.node9x.com/',
        provider: 'Node9x'
      },
      {
        address: 'https://kopi.rpc.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-rpc.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://rest.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://rpc.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rest.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rest.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi.api.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'https://api-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-api.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-api.bluestake.net',
        provider: 'Bluestake'
      },
      {
        address: 'https://api-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi.api.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-api.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'https://kopi.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'kopi-mainnet-grpc.bonynode.online:443',
        provider: 'Bony'
      },
      {
        address: 'kopi-grpc.stakerhouse.com:443',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi.grpc.moonbridge.team',
        provider: 'Moonbridge'
      },
      {
        address: 'kopi-grpc.node9x.com:443',
        provider: 'Node9x'
      },
      {
        address: 'kopi-grpc.polkachu.com:27690',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'Kopi Foundation Explorer',
      url: 'https://explorer.kopi.money/',
      tx_page: 'https://explorer.kopi.money/luwak-1/tx/${txHash}',
      account_page: 'https://explorer.kopi.money/luwak-1/account/${accountAddress}'
    },
    {
      kind: 'CzCryptoman Explorer',
      url: 'https://explorer.czcryptoman.com/kopi-mainnet',
      tx_page: 'https://explorer.czcryptoman.com/kopi-mainnet/tx/${txHash}',
      account_page: 'https://explorer.czcryptoman.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Sychonix Explorer',
      url: 'https://explorer.sychonix.com/kopi-mainnet',
      tx_page: 'https://explorer.sychonix.com/kopi-mainnet/tx/${txHash}',
      account_page: 'https://explorer.sychonix.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/Kopi',
      tx_page: 'https://explorer.nodeshub.online/Kopi/txs/${txHash}',
      account_page: 'https://explorer.nodeshub.online/Kopi/account/${accountAddress}'
    },
    {
      kind: 'Bony Explorer',
      url: 'https://explorer.bonynode.online/kopi/',
      tx_page: 'https://explorer.bonynode.online/kopi/txs/${txHash}',
      account_page: 'https://explorer.bonynode.online/kopi/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge Explorer',
      url: 'https://explorer.moonbridge.team/kopi/',
      tx_page: 'https://explorer.moonbridge.team/kopi/txs/${txHash}',
      account_page: 'https://explorer.moonbridge.team/kopi/account/${accountAddress}'
    },
    {
      kind: 'Cosmoscan Explorer',
      url: 'https://cosmoscan.com/kopi',
      tx_page: 'https://cosmoscan.com/kopi/txs/${txHash}',
      account_page: 'https://cosmoscan.com/kopi/account/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
    }]
};
export default info;