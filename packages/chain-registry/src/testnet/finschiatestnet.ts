import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const finschiatestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "finschiatestnet",
  "chain_id": "ebony-2",
  "website": "https://www.finschia.io/",
  "pretty_name": "Ebony",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "tlink",
  "daemon_name": "fnsad",
  "node_home": "$HOME/.finschia",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 438,
  "fees": {
    "fee_tokens": [
      {
        "denom": "tcony",
        "fixed_min_gas_price": 0.015,
        "low_gas_price": 0.015,
        "average_gas_price": 0.015,
        "high_gas_price": 0.015
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "tcony"
      }
    ],
    "lock_duration": {
      "time": "86400s"
    }
  },
  "codebase": {
    "git_repo": "https://github.com/finschia/finschia",
    "recommended_version": "v2.0.1",
    "compatible_versions": [
      "v2.0.0",
      "v2.0.1"
    ],
    "go_version": "1.20",
    "binaries": {
      "linux/amd64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-amd64",
      "linux/arm64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-arm64",
      "darwin/amd64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-amd64",
      "darwin/arm64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-arm64"
    },
    "cosmos_sdk_version": "github.com/Finschia/finschia-sdk@v0.48.1",
    "cosmwasm_version": "github.com/Finschia/wasmd@v0.2.0",
    "cosmwasm_enabled": true,
    "cosmwasm_path": "$HOME/.finschia/wasm/wasm",
    "ibc_go_version": "v4.3.1",
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "name": "v2",
      "genesis_url": "https://vos.line-scdn.net/finschia-2-fileshare/ebony-prod-2/genesis-file.tgz"
    },
    "versions": [
      {
        "name": "v1",
        "tag": "v1.1.1",
        "height": 36305907,
        "recommended_version": "v1.1.1",
        "compatible_versions": [
          "v1.1.1"
        ],
        "go_version": "1.18",
        "binaries": {
          "linux/amd64": "https://github.com/Finschia/finschia/releases/download/v1.1.1/finschia-v1.1.1-linux-amd64.tgz",
          "linux/arm64": "https://github.com/Finschia/finschia/releases/download/v1.1.1/finschia-v1.1.1-linux-arm64.tgz",
          "darwin/amd64": "https://github.com/Finschia/finschia/releases/download/v1.1.1/finschia-v1.1.1-darwin-amd64.tgz",
          "darwin/arm64": "https://github.com/Finschia/finschia/releases/download/v1.1.1/finschia-v1.1.1-darwin-arm64.tgz"
        },
        "cosmos_sdk_version": "github.com/Finschia/finschia-sdk@v0.47.3",
        "cosmwasm_version": "github.com/Finschia/wasmd@v0.1.5",
        "cosmwasm_enabled": true,
        "cosmwasm_path": "$HOME/.finschia/wasm/wasm",
        "ibc_go_version": "v3.3.3",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "v2"
      },
      {
        "name": "v2",
        "tag": "v2.0.1",
        "proposal": 1,
        "height": 40154246,
        "recommended_version": "v2.0.1",
        "compatible_versions": [
          "v2.0.0",
          "v2.0.1"
        ],
        "go_version": "1.20",
        "binaries": {
          "linux/amd64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-amd64",
          "linux/arm64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-arm64",
          "darwin/amd64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-amd64",
          "darwin/arm64": "https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-arm64"
        },
        "cosmos_sdk_version": "github.com/Finschia/finschia-sdk@v0.48.1",
        "cosmwasm_version": "github.com/Finschia/wasmd@v0.2.0",
        "cosmwasm_enabled": true,
        "cosmwasm_path": "$HOME/.finschia/wasm/wasm",
        "ibc_go_version": "v4.3.1",
        "ics_enabled": [
          "ics20-1"
        ],
        "previous_version_name": "v1",
        "next_version_name": "v3"
      }
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "9f4eafe881aa2ffd44ea520102518933a5a0f6d1",
        "address": "147.92.196.180:26656"
      },
      {
        "id": "7957b361c1cbe28f590b7bc19dbd88075d8dc3c4",
        "address": "147.92.234.133:26656"
      },
      {
        "id": "05715c6e1641925816cd319169107386a3ab652d",
        "address": "147.92.239.216:26656"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://ebony-rpc.finschia.io"
      }
    ],
    "rest": [
      {
        "address": "https://ebony-api.finschia.io"
      }
    ],
    "grpc": [
      {
        "address": "ebony-grpc.finschia.io:443"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/finschia-testnet",
      "tx_page": "https://www.mintscan.io/finschia-testnet/tx/${txHash}",
      "account_page": "https://www.mintscan.io/finschia-testnet/address/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg"
  }
}

export const finschiatestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "finschiatestnet",
  "assets": [
    {
      "description": "The native token of Ebony",
      "denom_units": [
        {
          "denom": "tcony",
          "exponent": 0
        },
        {
          "denom": "tfnsa",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "tcony",
      "name": "Test FINSCHIA",
      "display": "tfnsa",
      "symbol": "TFNSA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg"
        }
      ],
      "keywords": [
        "staking"
      ]
    }
  ]
}

