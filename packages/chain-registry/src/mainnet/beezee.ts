import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const beezee: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "beezee",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "BeeZee",
  "chain_id": "beezee-1",
  "bech32_prefix": "bze",
  "daemon_name": "bzed",
  "node_home": "$HOME/.bze",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ubze",
        "fixed_min_gas_price": 0.01,
        "low_gas_price": 0.01,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ubze"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/bze-alphateam/bze",
    "recommended_version": "v6.1.0",
    "compatible_versions": [
      "v6.1.0"
    ],
    "binaries": {
      "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-amd64.tar.gz",
      "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-arm64.tar.gz",
      "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-amd64.tar.gz",
      "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-arm64.tar.gz",
      "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-win64.zip"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/bze-alphateam/bze/main/genesis.json"
    },
    "versions": [
      {
        "name": "v5.0.1",
        "recommended_version": "v5.0.1",
        "tag": "v5.0.1",
        "compatible_versions": [
          "v5.0.1"
        ],
        "cosmos_sdk_version": "v0.44.3",
        "ibc_go_version": "v1.2.2",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.14"
        },
        "height": 0,
        "binaries": {
          "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-darwin-amd64.tar.gz",
          "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-darwin-arm64.tar.gz",
          "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-linux-arm64.tar.gz",
          "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.0.1/bze-5.0.1-win64.zip"
        },
        "next_version_name": "v5.1.1"
      },
      {
        "name": "v5.1.1",
        "recommended_version": "v5.1.1",
        "tag": "v5.1.1",
        "compatible_versions": [
          "v5.1.1"
        ],
        "cosmos_sdk_version": "v0.45.9",
        "ibc_go_version": "v1.2.2",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.22"
        },
        "height": 3303144,
        "binaries": {
          "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-darwin-amd64.tar.gz",
          "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-darwin-arm64.tar.gz",
          "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-linux-arm64.tar.gz",
          "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.1/bze-5.1.1-win64.zip"
        },
        "next_version_name": "v5.1.2"
      },
      {
        "name": "v5.1.2",
        "recommended_version": "v5.1.2",
        "tag": "v5.1.2",
        "compatible_versions": [
          "v5.1.2"
        ],
        "cosmos_sdk_version": "v0.45.9",
        "ibc_go_version": "v1.2.2",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.22"
        },
        "height": 3646700,
        "binaries": {
          "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-amd64.tar.gz",
          "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-arm64.tar.gz",
          "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-arm64.tar.gz",
          "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-win64.zip"
        },
        "next_version_name": "v6.0.0"
      },
      {
        "name": "v6.0.0",
        "recommended_version": "v6.0.0",
        "tag": "v6.0.0",
        "compatible_versions": [
          "v6.0.0"
        ],
        "cosmos_sdk_version": "v0.45.10",
        "ibc_go_version": "v2.4.2",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.22"
        },
        "height": 4875460,
        "binaries": {
          "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz",
          "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz",
          "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz",
          "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip"
        },
        "next_version_name": "v6.1.0"
      },
      {
        "name": "v6.1.0",
        "recommended_version": "v6.1.0",
        "tag": "v6.1.0",
        "compatible_versions": [
          "v6.1.0"
        ],
        "cosmos_sdk_version": "v0.45.16",
        "ibc_go_version": "v4.5.1",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "height": 9079079,
        "binaries": {
          "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-amd64.tar.gz",
          "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-darwin-arm64.tar.gz",
          "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-linux-arm64.tar.gz",
          "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.1.0/bze-6.1.0-win64.zip"
        },
        "next_version_name": "v7.0.0"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "6385d5fb198e3a793498019bb8917973325e5eb7",
        "address": "51.15.138.216:26656",
        "provider": "AlphaTeam"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "ef5377944874e2e8e5bd7156d2bb2e46c6a24b45",
        "address": "31.220.82.236:26656",
        "provider": "AlphaTeam"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.getbze.com",
        "provider": "AlphaTeam"
      },
      {
        "address": "https://rpc-1.getbze.com",
        "provider": "AlphaTeam"
      },
      {
        "address": "https://rpc-2.getbze.com",
        "provider": "AlphaTeam"
      }
    ],
    "rest": [
      {
        "address": "https://rest.getbze.com",
        "provider": "AlphaTeam"
      },
      {
        "address": "https://rest-1.getbze.com",
        "provider": "AlphaTeam"
      },
      {
        "address": "https://rest-2.getbze.com",
        "provider": "AlphaTeam"
      }
    ],
    "grpc": [
      {
        "address": "grpc.getbze.com:9099",
        "provider": "AlphaTeam"
      },
      {
        "address": "grpc-1.getbze.com:9099",
        "provider": "AlphaTeam"
      },
      {
        "address": "grpc-2.getbze.com:9099",
        "provider": "AlphaTeam"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/beezee",
      "tx_page": "https://ping.pub/beezee/tx/${txHash}",
      "account_page": "https://ping.pub/beezee/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.getbze.com/beezee",
      "tx_page": "https://explorer.getbze.com/beezee/tx/${txHash}",
      "account_page": "https://explorer.getbze.com/beezee/account/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/beezee",
      "tx_page": "https://atomscan.com/beezee/transactions/${txHash}",
      "account_page": "https://atomscan.com/beezee/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
    }
  ]
}

export const beezeeAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "beezee",
  "assets": [
    {
      "description": "BeeZee native blockchain",
      "denom_units": [
        {
          "denom": "ubze",
          "exponent": 0
        },
        {
          "denom": "bze",
          "exponent": 6
        }
      ],
      "base": "ubze",
      "name": "BeeZee",
      "display": "bze",
      "symbol": "BZE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
      },
      "coingecko_id": "bzedge",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
        }
      ]
    }
  ]
}

