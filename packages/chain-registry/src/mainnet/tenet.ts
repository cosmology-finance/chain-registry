import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const tenet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "tenet",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://tenet.org/",
  "pretty_name": "Tenet",
  "chain_id": "tenet_1559-1",
  "bech32_prefix": "tenet",
  "node_home": "$HOME/.tenetd",
  "daemon_name": "tenetd",
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
        "denom": "atenet",
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
        "denom": "atenet"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/tenet-org/tenet-mainnet",
    "recommended_version": "v11.2.1",
    "compatible_versions": [
      "v11.2.1"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_amd64.tar.gz",
      "linux/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_arm64.tar.gz",
      "darwin/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_amd64.tar.gz",
      "darwin/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_arm64.tar.gz",
      "windows/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Windows_amd64.zip"
    },
    "cosmos_sdk_version": "0.46",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "ibc_go_version": "6.1.0",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/tenet-org/tenet-mainnet/master/config/genesis.json"
    },
    "versions": [
      {
        "name": "v11",
        "recommended_version": "v11.0.6",
        "compatible_versions": [
          "v11.0.6"
        ],
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "ibc_go_version": "6.1.0",
        "binaries": {
          "linux/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.0.6/tenet-mainnet_11.0.6_Linux_amd64.tar.gz",
          "linux/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.0.6/tenet-mainnet_11.0.6_Darwin_arm64.tar.gz",
          "darwin/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.0.6/tenet-mainnet_11.0.6_Darwin_amd64.tar.gz",
          "darwin/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.0.6/tenet-mainnet_11.0.6_Darwin_arm64.tar.gz",
          "windows/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.0.6/tenet-mainnet_11.0.6_Windows_amd64.zip"
        },
        "next_version_name": "multichain"
      },
      {
        "name": "multichain",
        "proposal": 2,
        "height": 2330000,
        "recommended_version": "v11.2.1",
        "compatible_versions": [
          "v11.2.0",
          "v11.2.1"
        ],
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "ibc_go_version": "6.1.0",
        "binaries": {
          "linux/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_amd64.tar.gz",
          "linux/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Linux_arm64.tar.gz",
          "darwin/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_amd64.tar.gz",
          "darwin/arm64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Darwin_arm64.tar.gz",
          "windows/amd64": "https://github.com/tenet-org/tenet-mainnet/releases/download/v11.2.1/tenet-mainnet_11.2.1_Windows_amd64.zip"
        },
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "tenet-mainnet-seed.autostake.com:27386",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "persistent_peers": [
      {
        "id": "f8432cc5094870c96f34a0ebb36ffb0d38a53ad4",
        "address": "164.92.209.223:26656",
        "provider": "tenet"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "tenet-mainnet-peer.autostake.com:27386",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://tendermint-1.rpc.tenet.org",
        "provider": "tenet"
      },
      {
        "address": "https://tenet-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "rest": [
      {
        "address": "https://app.rpc.tenet.org",
        "provider": "tenet"
      },
      {
        "address": "https://tenet-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "grpc": [
      {
        "address": "tenet-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "kichain-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://rpc.tenet.org",
        "provider": "tenet"
      },
      {
        "address": "https://tenet-evm.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/tenet",
      "tx_page": "https://ping.pub/tenet/tx/${txHash}"
    },
    {
      "kind": "Nodeist Explorer",
      "url": "https://exp.nodeist.net/Tenet",
      "tx_page": "https://exp.nodeist.net/Tenet/tx/${txHash}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/tenet",
      "tx_page": "https://explorer.tcnetwork.io/tenet/transaction/${txHash}",
      "account_page": "https://explorer.tcnetwork.io/tenet/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
    }
  ]
}

export const tenetAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "tenet",
  "assets": [
    {
      "description": "The native EVM, governance and staking token of the Tenet",
      "denom_units": [
        {
          "denom": "atenet",
          "exponent": 0
        },
        {
          "denom": "tenet",
          "exponent": 18
        }
      ],
      "base": "atenet",
      "name": "Tenet",
      "display": "tenet",
      "symbol": "TENET",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
      },
      "coingecko_id": "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
        }
      ]
    }
  ]
}

