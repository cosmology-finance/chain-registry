import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const sourcetestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "sourcetestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Source Testnet",
  "chain_id": "sourcetest-1",
  "bech32_prefix": "source",
  "daemon_name": "sourced",
  "node_home": "$HOME/.source",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "usource",
        "fixed_min_gas_price": 0.05,
        "low_gas_price": 0.05,
        "average_gas_price": 0.075,
        "high_gas_price": 0.1
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "usource"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Source-Protocol-Cosmos/source",
    "recommended_version": "v3.0.1",
    "compatible_versions": [
      "v3.0.1"
    ],
    "cosmos_sdk_version": "0.45",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "cosmwasm_version": "0.30",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Source-Protocol-Cosmos/testnets/master/sourcetest-1/genesis.json"
    },
    "versions": [
      {
        "name": "v3.0.0",
        "recommended_version": "v3.0.0",
        "compatible_versions": [
          "v3.0.0"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.30",
        "cosmwasm_enabled": true
      },
      {
        "name": "v3.0.1",
        "recommended_version": "v3.0.1",
        "compatible_versions": [
          "v3.0.1"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.30",
        "cosmwasm_enabled": true
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "eca738b67fd23381f9a72717bea757c1d291ed2b",
        "address": "source-testnet-seed.itrocket.net:24656",
        "provider": "ITRocket"
      },
      {
        "id": "67c55549a4eb9ce0651c270a7f531ee5b50198ef",
        "address": "rpc-t.source.nodestake.top:666",
        "provider": "Nodestake"
      }
    ],
    "persistent_peers": [
      {
        "id": "6ace839c852739d1ea6e3675d30380fe085c1c23a",
        "address": "52.26.226.21:26656",
        "provider": "Source"
      },
      {
        "id": "8145d4d13511e7f89dbd257f51ed5d076941f12f",
        "address": "164.92.98.12:26656",
        "provider": ""
      },
      {
        "id": "a47f3b354e75478c0dfe22ad2b937ad07c9bcf3c",
        "address": "source-testnet-peer.itrocket.net:24656",
        "provider": "ITRocket"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://source-testnet-rpc.stake-town.com:443",
        "provider": "StakeTown"
      },
      {
        "address": "https://rpc-testnet-source.sr20de.xyz",
        "provider": "SR20DE"
      },
      {
        "address": "https://source-testnet.rpc.kjnodes.com",
        "provider": "kjnodes"
      }
    ],
    "rest": [
      {
        "address": "https://source-testnet-api.stake-town.com:443",
        "provider": "StakeTown"
      },
      {
        "address": "https://api-testnet-source.sr20de.xyz",
        "provider": "SR20DE"
      },
      {
        "address": "https://source.api.t.stavr.tech",
        "provider": "🔥STAVR🔥"
      }
    ],
    "grpc": [
      {
        "address": "source-testnet-grpc.stake-town.com:443",
        "provider": "StakeTown"
      },
      {
        "address": "grpc-testnet-source.sr20de.xyz/",
        "provider": "SR20DE"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Nodestake",
      "url": "https://explorer.nodestake.top/source-testnet",
      "tx_page": "https://explorer.nodestake.top/source-testnet/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Source",
      "tx_page": "https://explorer.stavr.tech/Source/tx/${txHash}"
    },
    {
      "kind": "SR20DE",
      "url": "https://explorer.sr20de.xyz/Source-testnet",
      "tx_page": "https://explorer.sr20de.xyz/Source-testnet/txs/${txHash}"
    }
  ]
}


export const sourcetestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "sourcetestnet",
  "assets": [
    {
      "description": "The native token of SOURCE Chain",
      "denom_units": [
        {
          "denom": "usource",
          "exponent": 0
        },
        {
          "denom": "source",
          "exponent": 6
        }
      ],
      "base": "usource",
      "name": "Source Testnet",
      "display": "source",
      "symbol": "SOURCE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg"
        }
      ]
    }
  ]
}

