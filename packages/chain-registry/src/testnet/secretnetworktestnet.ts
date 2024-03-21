import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const secretnetworktestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "secretnetworktestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Secret Network",
  "chain_id": "pulsar-3",
  "pre_fork_chain_name": "secretnetworktestnet2",
  "bech32_prefix": "secret",
  "daemon_name": "secretd",
  "node_home": "$HOME/.secretd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 529,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uscrt",
        "fixed_min_gas_price": 0.1
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/scrtlabs/SecretNetwork",
    "recommended_version": "v1.9.3",
    "binaries": {
      "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.3/secretnetwork_1.9.3_testnet_goleveldb_amd64.deb"
    },
    "compatible_versions": [
      "v1.9.3"
    ],
    "genesis": {
      "genesis_url": "https://rpc.pulsar3.scrttestnet.com/genesis"
    },
    "versions": [
      {
        "name": "v1.9.3",
        "recommended_version": "v1.9.3",
        "compatible_versions": [
          "v1.9.3"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.3/secretnetwork_1.9.3_testnet_goleveldb_amd64.deb"
        }
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "b5d1bb9194c6148367b64586d6bc0128866fc646",
        "address": "212.7.211.39:26656",
        "provider": "Community"
      },
      {
        "id": "a3c9c415fe6b46babd16f000c7dbd4d94be6e450",
        "address": "178.162.151.73:26656",
        "provider": "Community"
      },
      {
        "id": "c088b57ebc7b2cfa2ec99e8b4ffef90bead96b47",
        "address": "185.56.139.84:26656",
        "provider": "Community"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.testnet.secretsaturn.net",
        "provider": "𝕊ecret 𝕊aturn"
      },
      {
        "address": "https://rpc.pulsar.scrttestnet.com",
        "provider": "SCRT Testnet Committee"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.testnet.secretsaturn.net",
        "provider": "𝕊ecret 𝕊aturn"
      },
      {
        "address": "https://api.pulsar.scrttestnet.com",
        "provider": "SCRT Testnet Committee"
      }
    ],
    "grpc-web": [
      {
        "address": "https://grpc.testnet.secretsaturn.net",
        "provider": "𝕊ecret 𝕊aturn"
      },
      {
        "address": "https://grpc.pulsar.scrttestnet.com",
        "provider": "SCRT Testnet Committee"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://testnet.ping.pub/secret",
      "tx_page": "https://testnet.ping.pub/secret/tx/${txHash}"
    }
  ]
}


export const secretnetworktestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "secretnetworktestnet",
  "assets": [
    {
      "description": "The native token of Secret Network",
      "denom_units": [
        {
          "denom": "uscrt",
          "exponent": 0
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "base": "uscrt",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      },
      "coingecko_id": "secret",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ]
    }
  ]
}

