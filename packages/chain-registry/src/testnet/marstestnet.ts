import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const marstestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "marstestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Mars Hub Testnet",
  "chain_id": "ares-1",
  "bech32_prefix": "mars",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "umars",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0,
        "average_gas_price": 0,
        "high_gas_price": 0.025
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "umars"
      }
    ]
  },
  "codebase": {
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/mars-protocol/networks/main/ares-1/genesis.json"
    }
  },
  "apis": {
    "rpc": [
      {
        "address": "https://testnet-rpc.marsprotocol.io/",
        "provider": "Mars Protocol"
      },
      {
        "address": "https://rpc-mars.nodeist.net/",
        "provider": "Nodeist"
      }
    ],
    "rest": [
      {
        "address": "https://testnet-rest.marsprotocol.io/",
        "provider": "Mars Protocol"
      },
      {
        "address": "https://api-mars.nodeist.net/",
        "provider": "Nodeist"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Mars Protocol",
      "url": "https://testnet-explorer.marsprotocol.io",
      "tx_page": "https://testnet-explorer.marsprotocol.io/transactions/${txHash}"
    },
    {
      "kind": "Nodeist Explorer",
      "url": "https://exp.nodeist.net/t-mars/",
      "tx_page": "https://exp.nodeist.net/t-mars/transactions/${txHash}"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg"
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg"
    }
  ]
}

export const marstestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "marstestnet",
  "assets": [
    {
      "description": "The native token of Mars Protocol",
      "denom_units": [
        {
          "denom": "umars",
          "exponent": 0
        },
        {
          "denom": "mars",
          "exponent": 6
        }
      ],
      "base": "umars",
      "name": "Mars",
      "display": "mars",
      "symbol": "MARS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg"
        }
      ]
    }
  ]
}

