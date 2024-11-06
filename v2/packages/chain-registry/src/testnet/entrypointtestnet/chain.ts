import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'entrypointtestnet',
  status: 'killed',
  networkType: 'testnet',
  prettyName: 'EntryPoint Testnet',
  chainType: 'cosmos',
  chainId: 'entrypoint-pubtest-2',
  bech32Prefix: 'entrypoint',
  daemonName: 'entrypointd',
  nodeHome: '$HOME/.entrypointd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
        lowGasPrice: 0.01,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uentry'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/entrypoint-zone/testnets',
    recommendedVersion: 'v1.2.0',
    compatibleVersions: ['v1.2.0'],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/entrypoint-zone/testnets/2f2bffec8e73db30886bffa67fda1a242a6dc1d1/entrypoint-pubtest-2/genesis.json'
    },
    versions: [{
        name: 'v1.1.1',
        recommendedVersion: 'v1.1.1',
        compatibleVersions: ['v1.1.1'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.4'
        }
      }, {
        name: 'v1.2.0',
        recommendedVersion: 'v1.2.0',
        compatibleVersions: ['v1.2.0'],
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.4'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47.4'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.entrypoint.zone',
        provider: 'Simply Staking'
      }],
    rest: [{
        address: 'https://entry.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-rest.entrypoint.zone',
        provider: 'Simply Staking'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.entrypoint.zone/entrypoint',
      txPage: 'https://explorer.entrypoint.zone/entrypoint/tx/${txHash}',
      accountPage: 'https://explorer.entrypoint.zone/entrypoint/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Entrypoint-Testnet',
      txPage: 'https://explorer.stavr.tech/Entrypoint-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Entrypoint-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/entrypoint',
      txPage: 'https://testnet.ping.pub/entrypoint/tx/${txHash}',
      accountPage: 'https://testnet.ping.pub/entrypoint/account/${accountAddress}'
    }
  ],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
    }]
};
export default info;