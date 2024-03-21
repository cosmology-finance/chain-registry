import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const chimbatestnet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "chimbatestnet",
  "status": "live",
  "network_type": "testnet",
  "website": "https://chimba.ooo/",
  "pretty_name": "Chimba",
  "chain_id": "chimba-testnet",
  "bech32_prefix": "chimba",
  "daemon_name": "chimbad",
  "node_home": "$HOME/.chimbad",
  "fees": {
    "fee_tokens": [
      {
        "denom": "ucmba",
        "fixed_min_gas_price": 0.25,
        "low_gas_price": 1,
        "average_gas_price": 5,
        "high_gas_price": 10
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "chimba"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ChimbaBlockchain/chimba",
    "recommended_version": "v1.0.0",
    "compatible_versions": [
      "v1.0.0"
    ],
    "genesis": {
      "genesis_url": "https://rpc.testnet.chimba.ooo/genesis"
    },
    "versions": [
      {
        "name": "v1.0.0",
        "recommended_version": "v1.0.0",
        "compatible_versions": [
          "v1.0.0"
        ]
      }
    ]
  },
  "peers": {
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.testnet.chimba.ooo",
        "provider": "chimba"
      }
    ],
    "rest": [
      {
        "address": "https://testnet.chimba.ooo",
        "provider": "chimba"
      }
    ]
  },
  "explorers": [
    {
      "kind": "bigdipper",
      "url": "https://explorer.testnet.chimba.ooo/",
      "tx_page": "https://explorer.testnet.chimba.ooo/transactions/${txHash}"
    }
  ]
}

export const chimbatestnetAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "chimbatestnet",
  "assets": [
    {
      "description": "The first blokchain in colombia",
      "denom_units": [
        {
          "denom": "ucmba",
          "exponent": 0
        },
        {
          "denom": "chimba",
          "exponent": 6
        }
      ],
      "base": "ucmba",
      "name": "Chimba",
      "display": "chimba",
      "symbol": "CMBA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg"
        }
      ]
    }
  ]
}

