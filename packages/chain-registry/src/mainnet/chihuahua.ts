import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const chihuahua: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "chihuahua",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://chihuahua.wtf/",
  "pretty_name": "Chihuahua",
  "chain_id": "chihuahua-1",
  "bech32_prefix": "chihuahua",
  "daemon_name": "chihuahuad",
  "node_home": "$HOME/.chihuahuad",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uhuahua",
        "fixed_min_gas_price": 0,
        "low_gas_price": 500,
        "average_gas_price": 1250,
        "high_gas_price": 2000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uhuahua"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ChihuahuaChain/chihuahua/",
    "recommended_version": "v6.0.1",
    "compatible_versions": [
      "v6.0.1"
    ],
    "cosmos_sdk_version": "v0.47.5",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.2"
    },
    "ibc_go_version": "7.3.0",
    "cosmwasm_version": "v0.41.0",
    "cosmwasm_enabled": true,
    "cosmwasm_path": "$HOME/.chihuahuad/data/wasm",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/ChihuahuaChain/chihuahua/main/mainnet/genesis.json"
    },
    "versions": [
      {
        "name": "v421",
        "recommended_version": "v4.2.3",
        "compatible_versions": [
          "v4.2.3",
          "v4.2.2",
          "v4.2.1"
        ],
        "cosmwasm_enabled": true,
        "next_version_name": "v500"
      },
      {
        "name": "v500",
        "recommended_version": "v5.0.0",
        "compatible_versions": [
          "v5.0.0"
        ],
        "proposal": 51,
        "height": 8711111,
        "cosmwasm_enabled": true,
        "next_version_name": "v501"
      },
      {
        "name": "v501",
        "recommended_version": "v5.0.1",
        "compatible_versions": [
          "v5.0.1"
        ],
        "proposal": 52,
        "height": 8813000,
        "cosmwasm_enabled": true,
        "next_version_name": "v502"
      },
      {
        "name": "v502",
        "recommended_version": "v5.0.2",
        "compatible_versions": [
          "v5.0.2"
        ],
        "proposal": 53,
        "height": 9180000,
        "cosmwasm_enabled": true,
        "next_version_name": "v503"
      },
      {
        "name": "v503",
        "recommended_version": "v5.0.4",
        "compatible_versions": [
          "v5.0.3",
          "v5.0.4"
        ],
        "proposal": 54,
        "height": 9430000,
        "cosmos_sdk_version": "v0.47.5",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "ibc_go_version": "7.3.0",
        "cosmwasm_version": "v0.41.0",
        "cosmwasm_enabled": true,
        "cosmwasm_path": "$HOME/.chihuahuad/data/wasm",
        "next_version_name": "v6"
      },
      {
        "name": "v6",
        "recommended_version": "v6.0.1",
        "compatible_versions": [
          "v6.0.1"
        ],
        "proposal": 66,
        "height": 10666000,
        "cosmos_sdk_version": "v0.47.5",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "ibc_go_version": "7.3.0",
        "cosmwasm_version": "v0.41.0",
        "cosmwasm_enabled": true,
        "cosmwasm_path": "$HOME/.chihuahuad/data/wasm",
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "seed.rhinostake.com:12956",
        "provider": "RHINO"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:12956",
        "provider": "Polkachu"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:12956",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "cd835cfc413755184239a3dcd24a1f9b5a98627b",
        "address": "chihua.seed.stavr.tech:2016",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "77cbb35d1df17f48a42e9f157f12f55b691e9f5e",
        "address": "seeds.goldenratiostaking.net:1620",
        "provider": "Golden Ratio Staking"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "chihuahua-mainnet-seed.autostake.com:27186",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "7549de9e4fada385ec0bd2807f83f7d97c6a15ec",
        "address": "seed.chihuahua.validatus.com:2000",
        "provider": "Validatus"
      },
      {
        "id": "10ed1e176d874c8bb3c7c065685d2da6a4b86475",
        "address": "seed-chihuahua.ibs.team:16673",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "89b576c3eb72a4f0c66dc0899bec7c21552ea2a5",
        "address": "23.88.7.73:29538",
        "provider": "Mercury"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "chihuahua-mainnet-peer.autostake.com:27186",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.chihuahua.wtf",
        "provider": "Chihuahua"
      },
      {
        "address": "https://rpc-chihuahua.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://chihua.rpc.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://chihuahua-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-chihuahua-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://chihuahua-rpc.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.huahua.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://chihuahua-rpc.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://rpc-chihuahua.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://chihuahua-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://chihuahua-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://rpc.chihuahua.validatus.com",
        "provider": "Validatus"
      },
      {
        "address": "https://chihuahua-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      }
    ],
    "rest": [
      {
        "address": "https://api.chihuahua.wtf",
        "provider": "Chihuahua"
      },
      {
        "address": "https://rest-chihuahua.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://chihua.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://api-chihuahua-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://chihuahua-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://chihuahua-api.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://chihuahua-api.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://api-chihuahua.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://chihuahua-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://chihuahua-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://api.chihuahua.validatus.com",
        "provider": "Validatus"
      },
      {
        "address": "https://chihuahua-api.ibs.team",
        "provider": "Inter Blockchain Services"
      }
    ],
    "grpc": [
      {
        "address": "grpc-chihuahua-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "chihuahua-grpc.polkachu.com:12990",
        "provider": "Polkachu"
      },
      {
        "address": "chihuahua-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "chihua.grpc.m.stavr.tech:108",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "grpc-chihuahua.cosmos-spaces.cloud:2290",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "chihuahua-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "chihuahua-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "grpc.chihuahua.validatus.com:443",
        "provider": "Validatus"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/chihuahua",
      "tx_page": "https://ping.pub/chihuahua/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Chihua-Mainnet",
      "tx_page": "https://explorer.stavr.tech/Chihua-Mainnet/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://mintscan.io/chihuahua",
      "tx_page": "https://mintscan.io/chihuahua/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/chihuahua/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/chihuahua",
      "tx_page": "https://atomscan.com/chihuahua/transactions/${txHash}",
      "account_page": "https://atomscan.com/chihuahua/accounts/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/chihuahua",
      "tx_page": "https://ezstaking.app/chihuahua/txs/${txHash}",
      "account_page": "https://ezstaking.app/chihuahua/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
    }
  ]
}

export const chihuahuaAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "chihuahua",
  "assets": [
    {
      "description": "The native token of Chihuahua Chain",
      "denom_units": [
        {
          "denom": "uhuahua",
          "exponent": 0
        },
        {
          "denom": "huahua",
          "exponent": 6
        }
      ],
      "base": "uhuahua",
      "name": "Chihuahua",
      "display": "huahua",
      "symbol": "HUAHUA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
      },
      "coingecko_id": "chihuahua-token",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
        }
      ]
    },
    {
      "description": "Puppy",
      "denom_units": [
        {
          "denom": "cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef",
          "exponent": 0
        },
        {
          "denom": "puppy",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef",
      "base": "cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef",
      "name": "Puppy",
      "display": "puppy",
      "symbol": "PUPPY",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png"
      }
    },
    {
      "description": "has a hat",
      "denom_units": [
        {
          "denom": "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat",
          "exponent": 0
        },
        {
          "denom": "achihuahuawifhat",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat",
      "name": "Chihuahuawifhat",
      "display": "achihuahuawifhat",
      "symbol": "BADDOG",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
        }
      ]
    },
    {
      "description": "Woof",
      "denom_units": [
        {
          "denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof",
          "exponent": 0
        },
        {
          "denom": "WOOF",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof",
      "name": "WOOF",
      "display": "WOOF",
      "symbol": "WOOF",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
        }
      ]
    },
    {
      "description": "Tacos",
      "denom_units": [
        {
          "denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos",
          "exponent": 0
        },
        {
          "denom": "TACOS",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos",
      "name": "TACOS",
      "display": "TACOS",
      "symbol": "TACOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png"
        }
      ]
    },
    {
      "description": "Weed",
      "denom_units": [
        {
          "denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed",
          "exponent": 0
        },
        {
          "denom": "WEED",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed",
      "name": "WEED",
      "display": "WEED",
      "symbol": "WEED",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png"
        }
      ]
    },
    {
      "description": "Bulldog",
      "denom_units": [
        {
          "denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog",
          "exponent": 0
        },
        {
          "denom": "BDOG",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog",
      "name": "BDOG",
      "display": "BDOG",
      "symbol": "BDOG",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png"
        }
      ]
    },
    {
      "description": "CaneCorso",
      "denom_units": [
        {
          "denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso",
          "exponent": 0
        },
        {
          "denom": "CORSO",
          "exponent": 6
        }
      ],
      "base": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso",
      "name": "CORSO",
      "display": "CORSO",
      "symbol": "CORSO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png"
        }
      ]
    }
  ]
}

