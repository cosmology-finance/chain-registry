import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const idep: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "idep",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.idep.network/",
  "pretty_name": "IDEP",
  "chain_id": "Antora",
  "bech32_prefix": "idep",
  "daemon_name": "idep",
  "node_home": "$HOME/.ion",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "idep",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/IDEP-network/ion",
    "recommended_version": "v1.0.0",
    "compatible_versions": [
      "v1.0.0"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/IDEP-network/Antora/raw/main/iond"
    },
    "genesis": {
      "genesis_url": "https://github.com/IDEP-network/Antora/raw/main/genesis.json"
    },
    "versions": [
      {
        "name": "v1.0.0",
        "recommended_version": "v1.0.0",
        "compatible_versions": [
          "v1.0.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/IDEP-network/Antora/raw/main/iond"
        }
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:16556",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ],
    "persistent_peers": [
      {
        "id": "8ffc74dbcd5ab32bc89e058ec53060d5762f88b5",
        "address": "178.63.100.102:26656",
        "provider": "IDEP"
      },
      {
        "id": "3a8cfcbaac7d102e9cfad31f856e1852be2125f3",
        "address": "sentry-1.idep.ezstaking.xyz:26756",
        "provider": "EZStaking.io"
      },
      {
        "id": "32a1a93033968e391266484cd4896dfc9b326e4c",
        "address": "sentry-2.idep.ezstaking.xyz:26789",
        "provider": "EZStaking.io"
      }
    ]
  },
  "apis": {
    "rpc": [],
    "rest": [],
    "grpc": [
      {
        "address": "idep-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ]
  },
  "explorers": [
    {
      "kind": "chadscan",
      "url": "https://chadscan.com",
      "tx_page": "https://chadscan.com/transactions/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/idep",
      "tx_page": "https://atomscan.com/idep/transactions/${txHash}",
      "account_page": "https://atomscan.com/idep/accounts/${accountAddress}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/idep",
      "tx_page": "https://explorer.tcnetwork.io/idep/transaction/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
    }
  ]
}

export const idepAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "idep",
  "assets": [
    {
      "description": "The native token of IDEP chain",
      "denom_units": [
        {
          "denom": "IDEP",
          "exponent": 6,
          "aliases": []
        },
        {
          "denom": "idep",
          "exponent": 0,
          "aliases": []
        }
      ],
      "base": "idep",
      "name": "IDEP",
      "display": "IDEP",
      "symbol": "IDEP",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
        }
      ]
    }
  ]
}

