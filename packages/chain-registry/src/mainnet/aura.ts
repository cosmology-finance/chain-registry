import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const aura: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "aura",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://aura.network/",
  "pretty_name": "Aura Network",
  "chain_id": "xstaxy-1",
  "bech32_prefix": "aura",
  "daemon_name": "aurad",
  "node_home": "$HOME/.aura",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uaura",
        "fixed_min_gas_price": 0.001,
        "low_gas_price": 0.001,
        "average_gas_price": 0.002,
        "high_gas_price": 0.0025
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uaura"
      }
    ],
    "lock_duration": {
      "time": "1209600s"
    }
  },
  "codebase": {
    "git_repo": "https://github.com/aura-nw/aura",
    "recommended_version": "v0.7.3",
    "compatible_versions": [
      "v0.7.3"
    ],
    "cosmos_sdk_version": "0.47.5",
    "ibc_go_version": "v7.3.0",
    "consensus": {
      "type": "cometbft",
      "version": "0.37.2"
    },
    "cosmwasm_version": "0.42.0",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/aura-nw/mainnet-artifacts/main/xstaxy-1/genesis.json"
    },
    "versions": [
      {
        "name": "aura_v0.4.4",
        "recommended_version": "aura_v0.4.4",
        "compatible_versions": [
          "aura_v0.4.4"
        ],
        "next_version_name": "v0.4.5"
      },
      {
        "name": "v0.4.5",
        "proposal": 4,
        "height": 1292226,
        "recommended_version": "aura_v0.4.5",
        "compatible_versions": [
          "aura_v0.4.5"
        ],
        "next_version_name": "v0.7.1"
      },
      {
        "name": "v0.7.1",
        "proposal": 7,
        "height": 3666129,
        "recommended_version": "v0.7.1",
        "compatible_versions": [
          "v0.7.1"
        ],
        "cosmos_sdk_version": "0.47.4",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "cosmwasm_version": "0.41.0",
        "cosmwasm_enabled": true,
        "next_version_name": "v0.7.2"
      },
      {
        "name": "v0.7.2",
        "proposal": 8,
        "height": 5329503,
        "recommended_version": "v0.7.2",
        "compatible_versions": [
          "v0.7.2"
        ],
        "cosmos_sdk_version": "0.47.4",
        "ibc_go_version": "v7.2.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "cosmwasm_version": "0.41.0",
        "cosmwasm_enabled": true,
        "next_version_name": "v0.7.3"
      },
      {
        "name": "v0.7.3",
        "proposal": 9,
        "height": 4083908,
        "recommended_version": "v0.7.3",
        "compatible_versions": [
          "v0.7.3"
        ],
        "cosmos_sdk_version": "0.47.5",
        "ibc_go_version": "v7.3.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "cosmwasm_version": "0.42.0",
        "cosmwasm_enabled": true,
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "22a0ca5f64187bb477be1d82166b1e9e184afe50",
        "address": "18.143.52.13:26656"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "auranetwork-mainnet-seed.autostake.com:26966",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "0b8bd8c1b956b441f036e71df3a4d96e85f843b8",
        "address": "13.250.159.219:26656"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "aura.rpc.kjnodes.com:11759",
        "provider": "kjnodes"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:21756",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "d05e3f406ed2275ec86957c5983a27768350ac47",
        "address": "seed-node.mms.team:26656",
        "provider": "MMS"
      }
    ],
    "persistent_peers": [
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "auranetwork-mainnet-peer.autostake.com:26966",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "ced3a13f4f7200ce1a2392a5738c88532f794359",
        "address": "mainnet-aura.konsortech.xyz:25656",
        "provider": "KonsorTech"
      },
      {
        "id": "dce07d176e5ba4cfdc7b806eb80eabab162a09d0",
        "address": "45.76.213.229:26656",
        "provider": "[NODERS]TEAM"
      },
      {
        "id": "57406c041d38af3bac9acdcb2b4bdc90dc7a8852",
        "address": "aura.peers.stavr.tech:21056",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "9ee34b0829e9d85d88784aa17857fa1719760da2",
        "address": "aura.ramuchi.tech:30000",
        "provider": "ramuchi.tech"
      },
      {
        "id": "b6a0d0d030f35ffffcfe92e72ea13933c1adbe62",
        "address": "116.202.174.253:21656",
        "provider": "Staketab"
      },
      {
        "id": "07317346ab58eb4de14fe8c7705863002186d340",
        "address": "142.132.201.53:36656",
        "provider": "Stake-Take"
      },
      {
        "id": "da9f07269cac08619190dbce8b0978556315b359",
        "address": "p2p.aura.safeblock.space:26656",
        "provider": "Safe Block"
      },
      {
        "id": "bdd32536c902de9b240a36f0b23641233a080351",
        "address": "peer-aura.mms.team:27656",
        "provider": "MMS"
      },
      {
        "id": "2bd24dbac94c3b95707c8f06a57d61a31ae666fa",
        "address": "138.201.21.197:46656",
        "provider": "StakeTown"
      },
      {
        "id": "fc9f3b8771bb7deda71ab179f610cff1edb7534d",
        "address": "aura.peers.stakr.space:21656",
        "provider": "STAKR.space"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.aura.network/",
        "provider": "Aura Network Foundation"
      },
      {
        "address": "https://m-aura.rpc.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "http://aura.rpc.m.stavr.tech:11047",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://aura-rpc.ramuchi.tech",
        "provider": "ramuchi.tech"
      },
      {
        "address": "https://aura.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://mainnet-aura-rpc.konsortech.xyz",
        "provider": "KonsorTech"
      },
      {
        "address": "https://aura-rpc.tienthuattoan.ventures",
        "provider": "TienThuatToan"
      },
      {
        "address": "https://aura-rpc.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://aura-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://rpc.aura.safeblock.space",
        "provider": "Safe Block"
      },
      {
        "address": "https://rpc.aura.silentvalidator.com",
        "provider": "silent"
      },
      {
        "address": "https://rpc-aura.mms.team",
        "provider": "MMS"
      },
      {
        "address": "https://aura-rpc.stake-town.com",
        "provider": "StakeTown"
      },
      {
        "address": "https://aura-rpc.palamar.io",
        "provider": "Palamar"
      },
      {
        "address": "https://aura.rpc.srv.stakr.space",
        "provider": "STAKR.space"
      },
      {
        "address": "https://aura-rpc.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.aura.network/",
        "provider": "Aura Network Foundation"
      },
      {
        "address": "https://m-aura.api.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "https://aura.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://aura-api.ramuchi.tech",
        "provider": "ramuchi.tech"
      },
      {
        "address": "https://aura.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://mainnet-aura-api.konsortech.xyz",
        "provider": "KonsorTech"
      },
      {
        "address": "https://aura-api.tienthuattoan.ventures",
        "provider": "TienThuatToan"
      },
      {
        "address": "https://aura-api.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://aura-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://api.aura.safeblock.space",
        "provider": "Safe Block"
      },
      {
        "address": "https://api.aura.silentvalidator.com",
        "provider": "silent"
      },
      {
        "address": "https://api-aura.mms.team",
        "provider": "MMS"
      },
      {
        "address": "https://aura-api.stake-town.com",
        "provider": "StakeTown"
      },
      {
        "address": "https://aura-api.palamar.io",
        "provider": "Palamar"
      },
      {
        "address": "https://aura.api.srv.stakr.space",
        "provider": "STAKR.space"
      },
      {
        "address": "https://aura-api.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.aura.network",
        "provider": "Aura Network Foundation"
      },
      {
        "address": "auranetwork-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://grpc.aura.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "aura.mainnet.grpc.nodersteam.com:9100/",
        "provider": "[NODERS]TEAM"
      },
      {
        "address": "https://aura-grpc.ramuchi.tech:15000",
        "provider": "ramuchi.tech"
      },
      {
        "address": "http://aura.grpc.m.stavr.tech:9901",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "aura.grpc.kjnodes.com:11790",
        "provider": "kjnodes"
      },
      {
        "address": "aura-grpc.tienthuattoan.ventures:9090",
        "provider": "TienThuatToan"
      },
      {
        "address": "aura-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "services.staketab.com:9021",
        "provider": "Staketab"
      },
      {
        "address": "grpc.aura.silentvalidator.com:443",
        "provider": "silent"
      },
      {
        "address": "grpc-aura.mms.team:443",
        "provider": "MMS"
      },
      {
        "address": "aura-grpc.stake-town.com:443",
        "provider": "StakeTown"
      },
      {
        "address": "grpc.aura.safeblock.space:9090",
        "provider": "Safe Block"
      },
      {
        "address": "aura-grpc.palamar.io:443",
        "provider": "Palamar"
      },
      {
        "address": "aura.grpc.srv.stakr.space:19090",
        "provider": "STAKR.space"
      }
    ]
  },
  "explorers": [
    {
      "kind": "aurascan",
      "url": "https://aurascan.io",
      "tx_page": "https://aurascan.io/transaction/${txHash}",
      "account_page": "https://aurascan.io/account/${accountAddress}"
    },
    {
      "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
      "url": "https://exp.utsa.tech/aura",
      "tx_page": "https://exp.utsa.tech/aura/tx/${txHash}",
      "account_page": "https://exp.utsa.tech/aura/account/${accountAddress}"
    },
    {
      "kind": "🔥STAVR🔥 Explorer",
      "url": "https://explorer.stavr.tech/Aura-Mainnet",
      "tx_page": "https://explorer.stavr.tech/aura-mainnet/tx/${txHash}",
      "account_page": "https://explorer.stavr.tech/aura-mainnet/account/${accountAddress}"
    },
    {
      "kind": "NodeStake Explorer",
      "url": "https://explorer.nodestake.top/aura",
      "tx_page": "https://explorer.nodestake.top/aura/tx/${txHash}",
      "account_page": "https://explorer.nodestake.top/aura/account/${accountAddress}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/aura",
      "tx_page": "https://explorer.tcnetwork.io/aura/transaction/${txHash}",
      "account_page": "https://explorer.tcnetwork.io/aura/account/${accountAddress}"
    },
    {
      "kind": "Stake-Take",
      "url": "https://explorer.stake-take.com/aura",
      "tx_page": "https://explorer.stake-take.com/aura/tx/${txHash}",
      "account_page": "https://explorer.stake-take.com/aura/account/${accountAddress}"
    },
    {
      "kind": "Safe Block",
      "url": "https://explorer.safeblock.space/aura",
      "tx_page": "https://explorer.safeblock.space/aura/tx/${txHash}",
      "account_page": "https://explorer.safeblock.space/aura/account/${accountAddress}"
    },
    {
      "kind": "STAKR.space explorer",
      "url": "https://explorer.stakr.space/aura/",
      "tx_page": "https://explorer.stakr.space/aura/tx/${txHash}",
      "account_page": "https://explorer.stakr.space/aura/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
    }
  ]
}

export const auraAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "aura",
  "assets": [
    {
      "description": "The native token of Aura Network",
      "denom_units": [
        {
          "denom": "uaura",
          "exponent": 0
        },
        {
          "denom": "aura",
          "exponent": 6
        }
      ],
      "base": "uaura",
      "name": "Aura",
      "display": "aura",
      "symbol": "AURA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
      },
      "coingecko_id": "aura-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
        }
      ]
    }
  ]
}

