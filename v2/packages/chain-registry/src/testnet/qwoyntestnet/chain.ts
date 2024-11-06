import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'qwoyntestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://qwoyn.studio/',
  prettyName: 'Qwoyn',
  chainType: 'cosmos',
  chainId: 'earendel-1',
  bech32Prefix: 'qwoyn',
  daemonName: 'qwoynd',
  nodeHome: '$HOME/.qwoynd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqwoyn'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqwoyn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmic-horizon/QWOYN',
    recommendedVersion: 'v5.2.0',
    compatibleVersions: ['v5.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cosmic-horizon/testnets/main/higgs-boson-1/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip'
        },
        sdk: {
          type: 'cosmos',
          version: '0.42.10'
        },
        ibc: {
          type: 'go',
          version: '3.0.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47.3'
    },
    ibc: {
      type: 'go',
      version: '7.0.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }],
    grpc: [{
        address: 'http://66.42.74.12:9090',
        provider: 'Qwoyn Studios'
      }],
    rest: [{
        address: 'https://testnet-api.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }]
  },
  explorers: [{
      kind: 'pingfork',
      url: 'https://explorer.theamsolutions.info/qwoyn-testnet/',
      txPage: 'https://explorer.theamsolutions.info/qwoyn-testnet/tx/${txHash}',
      accountPage: 'https://explorer.theamsolutions.info/qwoyn-testnet/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
    }]
};
export default info;