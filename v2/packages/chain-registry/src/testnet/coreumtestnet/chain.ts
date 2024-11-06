import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'coreumtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.coreum.com',
  prettyName: 'Coreum',
  chainType: 'cosmos',
  chainId: 'coreum-testnet-1',
  bech32Prefix: 'testcore',
  daemonName: 'cored',
  nodeHome: '$HOME/.core/coreum-testnet-1',
  keyAlgos: ['secp256k1'],
  slip44: 990,
  fees: {
    feeTokens: [{
        denom: 'utestcore',
        fixedMinGasPrice: 0.03125,
        lowGasPrice: 0.0625,
        averageGasPrice: 0.0625,
        highGasPrice: 62.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utestcore'
      }],
    lockDuration: {
      time: '168h'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/CoreumFoundation/coreum',
    recommendedVersion: 'v3.0.3',
    compatibleVersions: ['v3.0.3'],
    binaries: {
      "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
      "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v0',
      genesisUrl: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json'
    },
    versions: [
      {
        name: 'v0',
        tag: 'v0.1.1',
        height: 0,
        recommendedVersion: 'v0.1.1',
        compatibleVersions: ['v0.1.1'],
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3'
        },
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        nextVersionName: 'v1',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        }
      },
      {
        name: 'v1',
        tag: 'v1.0.0',
        proposal: 3,
        height: 3233700,
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-amd64?checksum=sha256:34098ad7586bda364b1b2e7c4569cbcefb630cd4ed7c8f68eb5bced834082c57',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-arm64?checksum=sha256:3ced97f06607f0cdaf77e7ff0b36b2011d101c660684e4f3e54c2ac6bf344dd6'
        },
        nextVersionName: 'v2',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        }
      },
      {
        name: 'v2',
        tag: 'v2.0.0',
        proposal: 13,
        height: 8728400,
        recommendedVersion: 'v2.0.0',
        compatibleVersions: ['v2.0.0'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.0/cored-linux-amd64?checksum=sha256:7848022a3a35723ecef02eb835fbf139989aace8d780186018dbcdebdc57d694',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.0/cored-linux-arm64?checksum=sha256:c082eeebbc206633f1b71ef9c16a7f390f5ea5b27ce06c735ed7a632f38b5891'
        },
        nextVersionName: 'v2patch1',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        }
      },
      {
        name: 'v2patch1',
        tag: 'v2.0.2',
        proposal: 15,
        height: 9122200,
        recommendedVersion: 'v2.0.2',
        compatibleVersions: ['v2.0.2'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-amd64?checksum=sha256:3facf55f7ff795719f68b9bcf76ea08262bc7c9e9cd735c660257ba73678250e',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-arm64?checksum=sha256:35e261eb3b87c833c30174e6b8667a6155f5962441275d443157e209bbb0bf0d'
        },
        nextVersionName: 'v3',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        }
      },
      {
        name: 'v3',
        tag: 'v3.0.0',
        proposal: 23,
        height: 14980000,
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.0/cored-linux-amd64?checksum=sha256:0198b5bf7a32b0e76c57f5fe30bcb27bdc69ba91cd6e4fc8c416bea3a1251a24',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.0/cored-linux-arm64?checksum=sha256:192eaf4fcc49c3ea3339d12f53c905420575d00d605048e526a994a0c4368768'
        },
        nextVersionName: 'v3patch1',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.44',
          enabled: true
        }
      },
      {
        name: 'v3patch1',
        tag: 'v3.0.1',
        proposal: 24,
        height: 15385000,
        recommendedVersion: 'v3.0.1',
        compatibleVersions: ['v3.0.1'],
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.1/cored-linux-amd64?checksum=sha256:4d533ed578bb3dddf0142095bf62c63c2f25edf8248df1e8f88b35361be180c4',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.1/cored-linux-arm64?checksum=sha256:83b88f8323061d5dd6aa08895a7ebde7491ccf6360538151e811b7edac9dd1c5'
        },
        nextVersionName: 'v3patch2',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.44',
          enabled: true
        }
      },
      {
        name: 'v3patch2',
        tag: 'v3.0.3',
        proposal: 25,
        height: 15684437,
        recommendedVersion: 'v3.0.3',
        compatibleVersions: ['v3.0.3'],
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        binaries: {
          "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
          "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.44',
          enabled: true
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primaryColorHex: '#25d695'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://coreum-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'https://full-node.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      }, {
        address: 'https://full-node-eris.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      }],
    rest: [{
        address: 'https://full-node.testnet-1.coreum.dev:1317',
        provider: 'Coreum'
      }, {
        address: 'https://coreum-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }]
  },
  explorers: [{
      kind: 'Coreum',
      url: 'https://explorer.testnet-1.coreum.dev/coreum',
      txPage: 'https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}',
      accountPage: 'https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}'
    }, {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum-testnet',
      txPage: 'https://www.mintscan.io/coreum-testnet/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/coreum-testnet/accounts/${accountAddress}'
    }],
  keywords: [
    'dex',
    'staking',
    'wasm',
    'assets',
    'nft'
  ]
};
export default info;