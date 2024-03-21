import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const quicksilver: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "quicksilver",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://quicksilver.zone/",
  "pretty_name": "Quicksilver",
  "chain_id": "quicksilver-2",
  "daemon_name": "quicksilverd",
  "node_home": "$HOME/.quicksilverd",
  "bech32_prefix": "quick",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uqck",
        "fixed_min_gas_price": 0.0001,
        "low_gas_price": 0.0001,
        "average_gas_price": 0.0001,
        "high_gas_price": 0.00025
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uqck"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ingenuity-build/quicksilver",
    "recommended_version": "v1.5.2",
    "compatible_versions": [
      "v1.5.1",
      "v1.5.2"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.2/quicksilverd-v1.5.2-amd64"
    },
    "cosmos_sdk_version": "v0.46.16",
    "consensus": {
      "type": "cometbft",
      "version": "v0.34.31"
    },
    "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
    "cosmwasm_enabled": true,
    "ibc_go_version": "v5.3.2",
    "genesis": {
      "genesis_url": "https://github.com/ingenuity-build/mainnet/raw/main/genesis.json"
    },
    "versions": [
      {
        "name": "v1.2.9-hotfix.0",
        "recommended_version": "v1.2.9-hotfix.0",
        "compatible_versions": [
          "v1.2.9-hotfix.0"
        ],
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true,
        "ibc_go_version": "5.2.0",
        "next_version_name": "v1.2.10"
      },
      {
        "name": "v1.2.10",
        "height": 1936600,
        "recommended_version": "v1.2.10",
        "proposal": 13,
        "compatible_versions": [
          "v1.2.10"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.10/quicksilverd-v1.2.10-amd64"
        },
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true,
        "ibc_go_version": "5.2.0",
        "next_version_name": "v1.2.13"
      },
      {
        "name": "v1.2.13",
        "height": 2148751,
        "recommended_version": "v1.2.14",
        "compatible_versions": [
          "v1.2.13",
          "v1.2.14"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.14/quicksilverd-v1.2.14-amd64"
        },
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true,
        "ibc_go_version": "5.2.1",
        "next_version_name": "v1.2.15"
      },
      {
        "name": "v1.2.15",
        "proposal": 18,
        "height": 3052279,
        "recommended_version": "v1.2.16",
        "compatible_versions": [
          "v1.2.15",
          "v1.2.16"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.16/quicksilverd-v1.2.16-amd64"
        },
        "cosmos_sdk_version": "0.46.14",
        "consensus": {
          "type": "cometbft",
          "version": "0.34.29"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true,
        "ibc_go_version": "5.3.1",
        "next_version_name": "v1.2.17"
      },
      {
        "name": "v1.2.17",
        "proposal": 26,
        "height": 4530000,
        "recommended_version": "v1.2.17",
        "compatible_versions": [
          "v1.2.17"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.17/quicksilverd-v1.2.17-amd64"
        },
        "cosmos_sdk_version": "0.46.15",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "5.3.2",
        "next_version_name": "v1.4.5"
      },
      {
        "name": "v1.4.5",
        "proposal": 27,
        "height": 5432500,
        "recommended_version": "v1.4.5",
        "compatible_versions": [
          "v1.4.5"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.5/quicksilverd-v1.4.5-amd64"
        },
        "cosmos_sdk_version": "v0.46.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v5.3.2",
        "next_version_name": "v1.4.6"
      },
      {
        "name": "v1.4.6",
        "proposal": 28,
        "height": 5493000,
        "recommended_version": "v1.4.6",
        "compatible_versions": [
          "v1.4.6"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.6/quicksilverd-v1.4.6-amd64"
        },
        "cosmos_sdk_version": "v0.46.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v5.3.2",
        "next_version_name": "v1.4.7"
      },
      {
        "name": "v1.4.7",
        "proposal": 30,
        "height": 5848000,
        "recommended_version": "v1.4.7",
        "compatible_versions": [
          "v1.4.7"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.4.7/quicksilverd-v1.4.7-amd64"
        },
        "cosmos_sdk_version": "v0.46.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v5.3.2",
        "next_version_name": "v1.5.0"
      },
      {
        "name": "v1.5.0",
        "proposal": 31,
        "height": 6365700,
        "recommended_version": "v1.5.0",
        "compatible_versions": [
          "v1.5.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.0/quicksilverd-v1.5.0-amd64"
        },
        "cosmos_sdk_version": "v0.46.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v5.3.2",
        "next_version_name": "v1.5.1"
      },
      {
        "name": "v1.5.1",
        "proposal": 32,
        "height": 6452000,
        "recommended_version": "v1.5.2",
        "compatible_versions": [
          "v1.5.1",
          "v1.5.2"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.5.2/quicksilverd-v1.5.2-amd64"
        },
        "cosmos_sdk_version": "v0.46.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.29"
        },
        "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v5.3.2",
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
  },
  "description": "Liquid Stake your Cosmos assets with your preferred validator and receive liquid staked assets (qASSETs) that you can use for swapping, pooling, lending, and more, all while your original stake earns staking APY from securing the network.",
  "peers": {
    "seeds": [
      {
        "id": "940c0dc153b0e344de6368d101a97fd4d9e69eff",
        "address": "seeds.cros-nest.com:25656",
        "provider": "Cros-Nest"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:11156",
        "provider": "Polkachu"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:11156",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "seed.rhinostake.com:11156",
        "provider": "rhinostake"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "quicksilver-mainnet-seed.autostake.com:27026",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "quicksilver.rpc.kjnodes.com:11159",
        "provider": "kjnodes"
      },
      {
        "id": "a85a651a3cf1746694560c5b6f76d566c04ca581",
        "address": "quicksilver-seed.takeshi.team:10456",
        "provider": "TAKESHI"
      },
      {
        "id": "559e316b30830ddd5e93617592ef70330ecce86d",
        "address": "seed-quicksilver.ibs.team:16668",
        "provider": "Inter Blockchain Services"
      },
      {
        "id": "95fe6a416dff4150e0394f8b429743db60ea1327",
        "address": "seed-node.mms.team:27656",
        "provider": "MMS"
      },
      {
        "id": "20783f43c3b574e9020d22be3415f8a545f0617f",
        "address": "seed.quicksilver.validatus.com:4000",
        "provider": "Validatus"
      }
    ],
    "persistent_peers": [
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "quicksilver-mainnet-peer.autostake.com:27026",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "3461638afd470034067392e5dba8dcf6de49f81f",
        "address": "rpc.quicksilver.indonode.net:28656",
        "provider": "Indonode"
      },
      {
        "id": "958d4be52e81fb4d2cbca134ba7fc9f91cfef247",
        "address": "65.108.226.26:16656",
        "provider": "[NODERS]TEAM"
      },
      {
        "id": "ae44851a5d63d70382c1621bc7727db2a40d10d0",
        "address": "quick.peers.stavr.tech:21026",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "58fe3a7b075e7302f8b46b8171a0aa19ff4a427a",
        "address": "65.108.195.29:31126",
        "provider": "Staketab"
      },
      {
        "id": "9bd2b7e39fb0d823402f22c90e3000fdf3cd05bf",
        "address": "88.99.104.180:26656",
        "provider": "Stake-Take"
      },
      {
        "id": "8200b77d075f2634e6f9dab11fd56726a2e6d75b",
        "address": "quicksilver-seed.theamsolutions.info:31656",
        "provider": "AM Solutions"
      },
      {
        "id": "82b49e6cc0826642e745b7a7a621aecbf8083af7",
        "address": "peer-quicksilver.mms.team:56103",
        "provider": "MMS"
      },
      {
        "id": "3b3384dc98b0e0d8bb12eb21c396c19ce0e46cb0",
        "address": "138.201.21.197:50656",
        "provider": "StakeTown"
      },
      {
        "id": "66a0cd5eff87ec7b1ea2e3b41032c1c2d22aa284",
        "address": "mainnet-quicksilver.konsortech.xyz:46657",
        "provider": "KonsorTech"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-quicksilver.takeshi.team:443",
        "provider": "TAKESHI"
      },
      {
        "address": "https://rpc.quicksilver.zone:443",
        "provider": "Quicksilver"
      },
      {
        "address": "https://rpc-quicksilver-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "https://quicksilver-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc-quicksilver.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://m-quicksilver.rpc.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "http://quick.rpc.m.stavr.tech:21027",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://quicksilver-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://quicksilver-rpc.ibs.team:443",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://quicksilver.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://rpc-quicksilver.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://rpc.quicksilver.indonode.net",
        "provider": "Indonode"
      },
      {
        "address": "https://quicksilver-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://quicksilver-rpc.theamsolutions.info",
        "provider": "AM Solutions"
      },
      {
        "address": "https://quicksilver-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc-quicksilver.mms.team/",
        "provider": "MMS"
      },
      {
        "address": "https://quicksilver-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://quicksilver-rpc.stake-town.com",
        "provider": "StakeTown"
      },
      {
        "address": "https://mainnet-quicksilver-rpc.konsortech.xyz",
        "provider": "KonsorTech"
      },
      {
        "address": "https://quicksilver.tdrsys.com:2053",
        "provider": "TdrSys"
      },
      {
        "address": "https://rpc.quicksilver.validatus.com",
        "provider": "Validatus"
      }
    ],
    "rest": [
      {
        "address": "https://api-quicksilver.takeshi.team:443",
        "provider": "TAKESHI"
      },
      {
        "address": "https://api-quicksilver-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "https://quicksilver-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api-quicksilver.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://quicksilver-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://m-quicksilver.api.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "https://quick.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://quicksilver.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://rest-quicksilver.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://api.quicksilver.indonode.net",
        "provider": "Indonode"
      },
      {
        "address": "https://quicksilver-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://quicksilver-api.theamsolutions.info",
        "provider": "AM Solutions"
      },
      {
        "address": "https://quicksilver-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://api-quicksilver.mms.team",
        "provider": "MMS"
      },
      {
        "address": "https://quicksilver-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://quicksilver-api.stake-town.com",
        "provider": "StakeTown"
      },
      {
        "address": "https://mainnet-quicksilver-api.konsortech.xyz",
        "provider": "KonsorTech"
      },
      {
        "address": "https://quicksilver.tdrsys.com",
        "provider": "TdrSys"
      },
      {
        "address": "https://api.quicksilver.validatus.com",
        "provider": "Validatus"
      }
    ],
    "grpc": [
      {
        "address": "grpc-quicksilver.takeshi.team:443",
        "provider": "TAKESHI"
      },
      {
        "address": "grpc-quicksilver-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "quicksilver-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "quicksilver.grpc.nodersteam.com:9161",
        "provider": "[NODERS]TEAM"
      },
      {
        "address": "grpc-quicksilver.cosmos-spaces.cloud:3300",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "quicksilver-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "quicksilver.grpc.kjnodes.com:11190",
        "provider": "kjnodes"
      },
      {
        "address": "quick.grpc.m.stavr.tech:9113",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "grpc-quicksilver.architectnodes.com:1443",
        "provider": "Architect Nodes"
      },
      {
        "address": "archive-grpc-quicksilver.huginn.tech:9090",
        "provider": "Huginn"
      },
      {
        "address": "https://grpc.quicksilver.indonode.net:28090",
        "provider": "Indonode"
      },
      {
        "address": "services.staketab.com:9034",
        "provider": "Staketab"
      },
      {
        "address": "https://quicksilver-grpc.theamsolutions.info:9797",
        "provider": "AM Solutions"
      },
      {
        "address": "quicksilver-grpc.w3coins.io:11190",
        "provider": "w3coins"
      },
      {
        "address": "grpc-quicksilver.mms.team:443",
        "provider": "MMS"
      },
      {
        "address": "quicksilver-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "quicksilver-grpc.stake-town.com:443",
        "provider": "StakeTown"
      },
      {
        "address": "mainnet-quicksilver.konsortech.xyz:46090",
        "provider": "KonsorTech"
      },
      {
        "address": "https://quicksilver.tdrsys.com:2083",
        "provider": "TdrSys"
      },
      {
        "address": "grpc.quicksilver.validatus.com",
        "provider": "Validatus"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/quicksilver",
      "tx_page": "https://www.mintscan.io/quicksilver/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/quicksilver/accounts/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/quicksilver",
      "tx_page": "https://ezstaking.app/quicksilver/txs/${txHash}",
      "account_page": "https://ezstaking.app/quicksilver/account/${accountAddress}"
    },
    {
      "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer",
      "url": "https://exp.utsa.tech/quicksilver",
      "tx_page": "https://exp.utsa.tech/quicksilver/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥 explorer",
      "url": "https://explorer.stavr.tech/quicksilver-mainnet",
      "tx_page": "https://explorer.stavr.tech/quicksilver-mainnet/tx/${txHash}"
    },
    {
      "kind": "bigdipper",
      "url": "https://bigdipper.live/quicksilver",
      "tx_page": "https://bigdipper.live/quicksilver/transactions/${txHash}",
      "account_page": "https://bigdipper.live/quicksilver/accounts/${accountAddress}"
    },
    {
      "kind": "Stake-Take",
      "url": "https://explorer.stake-take.com/quicksilver",
      "tx_page": "https://explorer.stake-take.com/quicksilver/tx/${txHash}"
    },
    {
      "kind": "AM Solutions Explorers",
      "url": "https://explorer.theamsolutions.info/quicksilver-main/staking",
      "tx_page": "https://explorer.theamsolutions.info/quicksilver-main/tx/${txHash}"
    },
    {
      "kind": "KonsorTech",
      "url": "https://explorer.konsortech.xyz/quicksilver/staking",
      "tx_page": "https://explorer.konsortech.xyz/quicksilver/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
    }
  ]
}

export const quicksilverAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "quicksilver",
  "assets": [
    {
      "description": "QCK - native token of Quicksilver",
      "denom_units": [
        {
          "denom": "uqck",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qck",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqck",
      "name": "Quicksilver",
      "display": "qck",
      "symbol": "QCK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
      },
      "coingecko_id": "quicksilver",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
        }
      ],
      "socials": {
        "webiste": "https://quicksilver.zone/",
        "twitter": "https://twitter.com/quicksilverzone"
      }
    },
    {
      "description": "Quicksilver Liquid Staked STARS",
      "denom_units": [
        {
          "denom": "uqstars",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qstars",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqstars",
      "name": "Quicksilver Liquid Staked STARS",
      "display": "qstars",
      "symbol": "qSTARS",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "stargaze",
            "base_denom": "ustars"
          },
          "provider": "Quicksilver"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked ATOM",
      "denom_units": [
        {
          "denom": "uqatom",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qatom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqatom",
      "name": "Quicksilver Liquid Staked ATOM",
      "display": "qatom",
      "symbol": "qATOM",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "provider": "Quicksilver"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked REGEN",
      "denom_units": [
        {
          "denom": "uqregen",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qregen",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqregen",
      "name": "Quicksilver Liquid Staked Regen",
      "display": "qregen",
      "symbol": "qREGEN",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "regen",
            "base_denom": "uregen"
          },
          "provider": "Quicksilver"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked OSMO",
      "denom_units": [
        {
          "denom": "uqosmo",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qosmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqosmo",
      "name": "Quicksilver Liquid Staked OSMO",
      "display": "qosmo",
      "symbol": "qOSMO",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "provider": "Quicksilver"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked SOMM",
      "denom_units": [
        {
          "denom": "uqsomm",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "qsomm",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uqsomm",
      "name": "Quicksilver Liquid Staked SOMM",
      "display": "qsomm",
      "symbol": "qSOMM",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "sommelier",
            "base_denom": "usomm"
          },
          "provider": "Quicksilver"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg"
        }
      ]
    }
  ]
}

