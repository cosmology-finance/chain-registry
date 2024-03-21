import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const imversed: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "imversed",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://imversed.network/",
  "pretty_name": "Imversed",
  "chain_id": "imversed_5555555-1",
  "bech32_prefix": "imv",
  "daemon_name": "imversed",
  "node_home": "$HOME/.imversed",
  "key_algos": [
    "ethsecp256k1"
  ],
  "extra_codecs": [
    "ethermint"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "aimv",
        "fixed_min_gas_price": 250000000,
        "low_gas_price": 20000000000,
        "average_gas_price": 25000000000,
        "high_gas_price": 40000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "aimv"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/imversed/imversed",
    "recommended_version": "v3.11",
    "compatible_versions": [
      "v3.11"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://static.imversed.com/mainnet/genesis.json"
    },
    "versions": [
      {
        "name": "v3.11",
        "recommended_version": "v3.11",
        "compatible_versions": [
          "v3.11"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz"
        }
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "6413d43ff0dce9400515f24e8e93a0cf28f0efff",
        "address": "35.209.184.54:26656"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "0968486e82c910b1d7adaacb43bf7e633b19665a",
        "address": "35.209.184.219:26656"
      }
    ]
  },
  "apis": {
    "rpc": [],
    "rest": [],
    "grpc": [
      {
        "address": "grpc.imversed.network:443",
        "provider": "imversed"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://jsonrpc.imversed.network:443",
        "provider": "imversed"
      }
    ]
  },
  "explorers": [
    {
      "kind": "blockscout",
      "url": "https://txe.imversed.network/",
      "tx_page": "https://txe.imversed.network/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
    }
  ]
}

export const imversedAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "imversed",
  "assets": [
    {
      "description": "The native EVM, governance and staking token of the Imversed",
      "denom_units": [
        {
          "denom": "aimv",
          "exponent": 0
        },
        {
          "denom": "imv",
          "exponent": 18
        }
      ],
      "base": "aimv",
      "name": "IMV",
      "display": "imv",
      "symbol": "IMV",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
      },
      "coingecko_id": "imv",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
        }
      ]
    }
  ]
}

