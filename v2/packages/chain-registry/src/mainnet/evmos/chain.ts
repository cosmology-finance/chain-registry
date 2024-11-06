import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'evmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://evmos.org/',
  prettyName: 'Evmos',
  chainType: 'cosmos',
  chainId: 'evmos_9001-2',
  bech32Prefix: 'evmos',
  nodeHome: '$HOME/.evmosd',
  daemonName: 'evmosd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aevmos',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aevmos'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/evmos/evmos',
    recommendedVersion: 'v19.1.0',
    compatibleVersions: ['v19.1.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    binaries: {
      "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Windows_amd64.zip'
    },
    genesis: {
      genesisUrl: 'https://archive.evmos.org/mainnet/genesis.json'
    },
    versions: [
      {
        name: 'v12',
        tag: 'v12.1.5',
        proposal: 137,
        height: 12303000,
        recommendedVersion: 'v12.1.5',
        compatibleVersions: [
          'v12.1.5',
          'v12.1.3',
          'v12.1.2',
          'v12.1.1',
          'v12.1.0'
        ],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v12.1.5/evmos_12.1.5_Windows_amd64.zip'
        },
        nextVersionName: 'v13.0.2',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '6.1.0'
        }
      },
      {
        name: 'v13.0.2',
        tag: 'v13.0.2',
        proposal: 149,
        height: 14538200,
        recommendedVersion: 'v13.0.2',
        compatibleVersions: ['v13.0.2'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v13.0.2/evmos_13.0.2_Windows_amd64.zip'
        },
        nextVersionName: 'v14.0.0',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: 'v6.2.0'
        }
      },
      {
        name: 'v14.0.0',
        tag: 'v14.0.0',
        proposal: 196,
        height: 16105000,
        recommendedVersion: 'v14.0.0',
        compatibleVersions: ['v14.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v14.0.0/evmos_14.0.0_Windows_amd64.zip'
        },
        nextVersionName: 'v15.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.4',
          tag: 'v0.47.4-evmos.2'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.0'
        }
      },
      {
        name: 'v15.0.0',
        tag: 'v15.0.0',
        proposal: 240,
        height: 16946771,
        recommendedVersion: 'v15.0.0',
        compatibleVersions: ['v15.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
          tag: 'v0.37.3-0.20230920093934-46df7b597e3c'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v15.0.0/evmos_15.0.0_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v15.0.0/evmos_15.0.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v15.0.0/evmos_15.0.0_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v15.0.0/evmos_15.0.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v15.0.0/evmos_15.0.0_Windows_amd64.zip'
        },
        nextVersionName: 'v16.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos.2'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v16.0.0',
        tag: 'v16.0.4',
        proposal: 265,
        height: 18295000,
        recommendedVersion: 'v16.0.4',
        compatibleVersions: ['v16.0.4'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.3',
          tag: 'v0.37.3-0.20230920093934-46df7b597e3c'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v16.0.4/evmos_16.0.4_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v16.0.4/evmos_16.0.4_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v16.0.4/evmos_16.0.4_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v16.0.4/evmos_16.0.4_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v16.0.4/evmos_16.0.4_Windows_amd64.zip'
        },
        nextVersionName: 'v17.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos.2'
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      },
      {
        name: 'v17.0.0',
        tag: 'v17.0.1',
        height: 20101000,
        recommendedVersion: 'v17.0.1',
        compatibleVersions: ['v17.0.1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v17.0.1/evmos_17.0.1_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v17.0.1/evmos_17.0.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v17.0.1/evmos_17.0.1_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v17.0.1/evmos_17.0.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v17.0.1/evmos_17.0.1_Windows_amd64.zip'
        },
        nextVersionName: 'v18.0.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos.2'
        },
        ibc: {
          type: 'go',
          version: '7.4.0'
        }
      },
      {
        name: 'v18.0.0',
        tag: 'v18.0.1',
        height: 20396852,
        recommendedVersion: 'v18.0.1',
        compatibleVersions: ['v18.0.1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v18.0.1/evmos_18.0.1_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v18.0.1/evmos_18.0.1_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v18.0.1/evmos_18.0.1_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v18.0.1/evmos_18.0.1_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v18.0.1/evmos_18.0.1_Windows_amd64.zip'
        },
        nextVersionName: 'v18.1.0',
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos.2'
        },
        ibc: {
          type: 'go',
          version: '7.4.0'
        }
      },
      {
        name: 'v18.1.0',
        tag: 'v18.1.0',
        height: 21209000,
        recommendedVersion: 'v18.1.0',
        compatibleVersions: ['v18.1.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v18.1.0/evmos_18.1.0_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v18.1.0/evmos_18.1.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v18.1.0/evmos_18.1.0_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v18.1.0/evmos_18.1.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v18.1.0/evmos_18.1.0_Windows_amd64.zip'
        },
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.5',
          tag: 'v0.47.5-evmos.2'
        },
        ibc: {
          type: 'go',
          version: '7.4.0'
        },
        nextVersionName: 'v19.1.0'
      },
      {
        name: 'v19.1.0',
        tag: 'v19.1.0',
        height: 22763500,
        recommendedVersion: 'v19.1.0',
        compatibleVersions: ['v19.1.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.9'
        },
        binaries: {
          "linux/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/evmos/evmos/releases/download/v19.1.0/evmos_19.1.0_Windows_amd64.zip'
        },
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/evmos/cosmos-sdk',
          version: 'v0.47.12',
          tag: 'v0.47.12-evmos.2'
        },
        ibc: {
          type: 'go',
          version: '7.6.0'
        },
        nextVersionName: ''
      }
    ],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/evmos/cosmos-sdk',
      version: 'v0.47.12',
      tag: 'v0.47.5-evmos.2'
    },
    ibc: {
      type: 'go',
      version: '7.6.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
  },
  description: 'Developers use Evmos as the Ethereum Canary Chain to deploy applications of the future. Get all the functionalities of Ethereum with the power of IBC and Interchain composability.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/evmos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://tendermint.bd.evmos.org:26657',
        provider: 'Blockdaemon'
      },
      {
        address: 'https://rpc-evmos-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.evmos.testnet.run',
        provider: 'TestNetRun'
      },
      {
        address: 'https://rpc.evmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.evmos.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://evmos-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.evmos.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://rpc.evmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://evmos.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rpc-evmos.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://evmos-rpc.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://evmos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-evmos-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://evmos-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://rpc-evmos.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://evmos-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://evmos-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://evmos.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evmos-rpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://evmos-mainnet.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://rpc.evmos.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc.evmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.evmos.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://evmos.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [
      {
        address: 'https://rest.bd.evmos.org:1317',
        provider: 'Blockdaemon'
      },
      {
        address: 'https://rest.lavenderfive.com:443/evmos',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-evmos-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.evmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://evmos-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.evmos.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://rest.evmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://evmos.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rest-evmos.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://evmos-api.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://evmos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-evmos-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://evmos-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://lcd-evmos.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://evmos-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://evmos-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://evmos.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evmos-rest.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://evmos-mainnet.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://api.evmos.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://lcd.evmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'grpc.bd.evmos.org:9090',
        provider: 'evmos.org'
      },
      {
        address: 'grpc-evmos-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'evmos.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.evmos.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-evmos.cosmos-spaces.cloud:1190',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'evmos.grpcui.chaintools.host:443',
        provider: 'ChainTools'
      },
      {
        address: 'evmos-grpc.polkachu.com:13490',
        provider: 'Polkachu'
      },
      {
        address: 'evmos.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'evmos-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'evmos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-evmos-01.stakeflow.io:1702',
        provider: 'Stakeflow'
      },
      {
        address: 'https://evmos-grpc.theamsolutions.info ',
        provider: 'AM Solutions'
      },
      {
        address: 'evmos-grpc.w3coins.io:13490',
        provider: 'w3coins'
      },
      {
        address: 'grpc-evmos.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'evmos-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'evmos.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evmos-grpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'evmos-mainnet.grpc.stakevillage.net:16990',
        provider: 'Stake Village'
      },
      {
        address: 'grpc.evmos.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.evmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://eth.bd.evmos.org:8545',
        provider: 'Blockdaemon'
      },
      {
        address: 'https://jsonrpc-evmos-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://evmos-json-rpc.stakely.io',
        provider: 'Stakely'
      },
      {
        address: 'https://jsonrpc.evmos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://json-rpc.evmos.bh.rocks',
        provider: 'BlockHunters'
      },
      {
        address: 'https://evmos-json-rpc.agoranodes.com',
        provider: 'AgoraNodes'
      },
      {
        address: 'https://evm-rpc.evmos.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://json-rpc.evmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://evmosevm.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://evmos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      },
      {
        address: 'https://evmos-jsonrpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://jsonrpc-evmos.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://evmos-jsonrpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://evmos.jsonrpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evmos.json.antrixy.org',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://evmos-mainnet.jsonrpc.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://json-rpc.evmos.validatus.com',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/evmos',
      txPage: 'https://ezstaking.app/evmos/txs/${txHash}',
      accountPage: 'https://ezstaking.app/evmos/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/evmos',
      txPage: 'https://www.mintscan.io/evmos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/evmos/accounts/${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://evm.evmos.org',
      txPage: 'https://evm.evmos.org/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/evmos',
      txPage: 'https://ping.pub/evmos/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://evmos.explorers.guru',
      txPage: 'https://evmos.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/evmos',
      txPage: 'https://staking-explorer.com/transaction.php?chain=evmos&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=evmos&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/evmos',
      txPage: 'https://atomscan.com/evmos/transactions/${txHash}',
      accountPage: 'https://atomscan.com/evmos/accounts/${accountAddress}'
    },
    {
      kind: 'tcnetwork',
      url: 'https://evmos.tcnetwork.io',
      txPage: 'https://evmos.tcnetwork.io/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/evmos',
      accountPage: 'https://stakeflow.io/evmos/accounts/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/evmos',
      txPage: 'https://exp.stakevillage.net/evmos/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/evmos/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/evmos',
      txPage: 'https://explorer.stavr.tech/evmos/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/evmos/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
      theme: {
        primaryColorHex: '#ec4c34'
      }
    }]
};
export default info;