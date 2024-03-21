import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const bitcannadevnet2: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "bitcannadevnet2",
  "status": "live",
  "network_type": "devnet",
  "pretty_name": "BitCanna Devnet-6 SDK v0.46.x",
  "chain_id": "bitcanna-dev-6",
  "bech32_prefix": "bcna",
  "daemon_name": "bcnad",
  "node_home": "$HOME/.bcna",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ubcna",
        "fixed_min_gas_price": 0.001
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/BitCannaGlobal/bcna",
    "recommended_version": "v2.0.0-beta",
    "compatible_versions": [
      "v2.0.0-beta"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/BitCannaGlobal/testnet-bcna-cosmos/main/instructions/bitcanna-dev-6/genesis.json"
    },
    "versions": [
      {
        "name": "v2.0.0-beta",
        "recommended_version": "v2.0.0-beta",
        "compatible_versions": [
          "v2.0.0-beta"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz"
        }
      }
    ]
  },
  "peers": {
    "persistent_peers": [
      {
        "id": "85be53f499c803a10e73734018334049a7c4686d",
        "address": "212.227.151.105:26656"
      },
      {
        "id": "fb88f165477b7c7a4fbb47bb6b01448c732a0e88",
        "address": "164.68.119.233:26656"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-devnet-6.bitcanna.io/",
        "provider": "bitcanna"
      }
    ],
    "grpc": [
      {
        "address": "http://devnet-6.bitcanna.io:9090",
        "provider": "bitcanna"
      }
    ],
    "rest": [
      {
        "address": "https://lcd-devnet-6.bitcanna.io/",
        "provider": "bitcanna"
      }
    ]
  },
  "explorers": [
    {
      "url": "https://explorer-devnet-6.bitcanna.io",
      "tx_page": "https://explorer-devnet-6.bitcanna.io/tx/${txHash}"
    }
  ]
}

export const bitcannadevnet2AssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "bitcannadevnet2",
  "assets": [
    {
      "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
      "denom_units": [
        {
          "denom": "ubcna",
          "exponent": 0
        },
        {
          "denom": "bcna",
          "exponent": 6
        }
      ],
      "base": "ubcna",
      "display": "bcna",
      "name": "BitCanna",
      "symbol": "BCNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg"
      },
      "coingecko_id": "bitcanna",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg"
        }
      ]
    }
  ]
}

