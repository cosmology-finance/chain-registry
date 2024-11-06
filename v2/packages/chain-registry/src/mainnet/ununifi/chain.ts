import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ununifi',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://ununifi.io/',
  prettyName: 'UnUniFi',
  chainType: 'cosmos',
  chainId: 'ununifi-beta-v1',
  bech32Prefix: 'ununifi',
  daemonName: 'ununifid',
  nodeHome: '$HOME/.ununifi',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uguu',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uguu'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/UnUniFi/chain',
    recommendedVersion: 'v4.0.2',
    compatibleVersions: ['v4.0.2'],
    binaries: {
      "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v4.0.1/ununifid'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    genesis: {
      name: 'beta-v1',
      genesisUrl: 'https://raw.githubusercontent.com/UnUniFi/network/main/launch/ununifi-beta-v1/genesis.json'
    },
    versions: [
      {
        name: 'v2',
        recommendedVersion: 'v2.0.0',
        compatibleVersions: ['v2.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v2.0.0/ununifid'
        },
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        nextVersionName: 'v2_1',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.40',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '7.0.0',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2_1',
        recommendedVersion: 'v2.1.0',
        compatibleVersions: ['v2.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v2.1.0/ununifid'
        },
        proposal: 12,
        height: 5630000,
        consensus: {
          type: 'cometbft',
          version: '0.34'
        },
        nextVersionName: 'v2_2',
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        cosmwasm: {
          version: '0.40',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v2_2',
        recommendedVersion: 'v2.2.0',
        compatibleVersions: ['v2.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v2.2.0/ununifid'
        },
        proposal: 13,
        height: 5736100,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v3',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.1',
          tag: 'v0.47.1-bank-rc2'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v3',
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v3.0.0/ununifid'
        },
        proposal: 14,
        height: 5807100,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v3_1',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v3_1',
        recommendedVersion: 'v3.1.0',
        compatibleVersions: ['v3.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v3.1.0/ununifid'
        },
        proposal: 15,
        height: 6577693,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v3_2_1',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v3_2_1',
        recommendedVersion: 'v3.2.1',
        compatibleVersions: ['v3.2.1'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v3.2.1/ununifid'
        },
        proposal: 16,
        height: 6754737,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v3_2_2',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v3_2_2',
        recommendedVersion: 'v3.2.2-query',
        compatibleVersions: ['v3.2.2', 'v3.2.2-query'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v3.2.2-query/ununifid'
        },
        proposal: 18,
        height: 7061394,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v4',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v4',
        recommendedVersion: 'v4.0.0',
        compatibleVersions: ['v4.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v4.0.0/ununifid'
        },
        proposal: 24,
        height: 8197583,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v4_0_1',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v4_0_1',
        recommendedVersion: 'v4.0.1',
        compatibleVersions: ['v4.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v4.0.1/ununifid'
        },
        proposal: 25,
        height: 8299656,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1'
        },
        nextVersionName: 'v4_0_2',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.0.1',
          icsEnabled: ['ics20-1']
        }
      },
      {
        name: 'v4_0_2',
        recommendedVersion: 'v4.0.2',
        compatibleVersions: ['v4.0.2'],
        binaries: {
          "linux/amd64": 'https://github.com/UnUniFi/chain/releases/download/v4.0.2/ununifid'
        },
        proposal: 26,
        height: 9974824,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/ununifi/cosmos-sdk',
          version: 'v0.47.3',
          tag: 'v0.47.3-custom-bank-1'
        },
        cosmwasm: {
          version: 'v0.40.1',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/ununifi/cosmos-sdk',
      version: 'v0.47.3',
      tag: 'v0.47.3-custom-bank-1'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.40.1',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://a.lcd.ununifi.cauchye.net:26657',
        provider: 'CauchyE'
      },
      {
        address: 'https://rpc.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-rpc.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    rest: [
      {
        address: 'https://a.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://b.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://api.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-api.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    grpc: [
      {
        address: 'a.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'b.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'ununifi-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.ununifi.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-ununifi.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'ununifi.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'ununifi-grpc.genznodes.dev:54090',
        provider: 'genznodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'UnUniFi Explorer',
      url: 'https://ununifi.io/explorer',
      txPage: 'https://ununifi.io/explorer/txs/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/ununifi',
      txPage: 'https://explorer.nodestake.top/ununifi/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/ununifi',
      txPage: 'https://staking-explorer.com/transaction.php?chain=ununifi&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=ununifi&addr=${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Ununifi',
      txPage: 'https://exp.nodeist.net/Ununifi/tx/${txHash}'
    }
  ],
  keywords: [
    'staking',
    'wasm',
    'assets',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
      theme: {
        primaryColorHex: '#546c8c'
      }
    }]
};
export default info;