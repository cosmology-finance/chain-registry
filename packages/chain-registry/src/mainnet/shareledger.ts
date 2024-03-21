import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const shareledger: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "shareledger",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.sharering.network/",
  "pretty_name": "Shareledger",
  "chain_id": "ShareRing-VoyagerNet",
  "bech32_prefix": "shareledger",
  "daemon_name": "shareledger",
  "node_home": "$HOME/.shareledger",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "nshr",
        "fixed_min_gas_price": 0,
        "low_gas_price": 2000,
        "average_gas_price": 3000,
        "high_gas_price": 4000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "nshr"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ShareRing/Shareledger/",
    "recommended_version": "1.4.1",
    "compatible_versions": [
      "1.4.1"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger"
    },
    "cosmos_sdk_version": "0.45",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "cosmwasm_version": "0.27",
    "cosmwasm_enabled": true,
    "ibc_go_version": "3.0.0",
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "name": "v1",
      "genesis_url": "https://github.com/ShareRing/Shareledger/releases/download/v1.2.0/genesis.json"
    },
    "versions": [
      {
        "name": "v1",
        "tag": "v1.2.0",
        "height": 4382920,
        "next_version_name": "v2"
      },
      {
        "name": "v2",
        "tag": "v1.3.0",
        "height": 6905000,
        "next_version_name": "v3"
      },
      {
        "name": "v3",
        "tag": "v1.4.0",
        "height": 7325550,
        "next_version_name": "v4"
      },
      {
        "name": "v4",
        "tag": "v1.4.1",
        "height": 7507600,
        "next_version_name": "v5",
        "recommended_version": "1.4.1",
        "compatible_versions": [
          "1.4.1"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.27",
        "cosmwasm_enabled": true,
        "ibc_go_version": "3.0.0",
        "ics_enabled": [
          "ics20-1"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger"
        }
      }
    ]
  },
  "peers": {
    "seeds": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.explorer.shareri.ng",
        "provider": "ShareRing"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.explorer.shareri.ng/",
        "provider": "ShareRing"
      }
    ],
    "grpc": [
      {
        "address": "rpc.explorer.shareri.ng:443",
        "provider": "ShareRing"
      }
    ]
  },
  "explorers": [
    {
      "kind": "big dipper",
      "url": "https://explorer.shareri.ng",
      "tx_page": "https://explorer.shareri.ng/transactions/${txHash}",
      "account_page": "https://explorer.shareri.ng/accounts/${accountAddress}"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
  },
  "keywords": [
    "id"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
    }
  ]
}

export const shareledgerAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "shareledger",
  "assets": [
    {
      "description": "The native token of Shareledger",
      "denom_units": [
        {
          "denom": "nshr",
          "exponent": 0
        },
        {
          "denom": "shr",
          "exponent": 9
        }
      ],
      "base": "nshr",
      "name": "Shareledger",
      "display": "shr",
      "symbol": "SHR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
      },
      "coingecko_id": "shareledger",
      "keywords": [
        "id"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
        }
      ]
    }
  ]
}

