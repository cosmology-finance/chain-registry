import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const gitopiatestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "gitopiatestnet",
  "chain_id": "gitopia-janus-testnet-2",
  "pretty_name": "Gitopia Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "gitopia",
  "daemon_name": "gitopiad",
  "node_home": "$HOME/.gitopia",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "utlore",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://gitopia.com/gitopia",
    "recommended_version": "v1.2.0",
    "compatible_versions": [
      "v1.2.0"
    ],
    "genesis": {
      "genesis_url": "https://server.gitopia.com/raw/gitopia/testnets/master/gitopia-janus-testnet-2/genesis.json.gz"
    },
    "versions": [
      {
        "name": "v1.2.0",
        "recommended_version": "v1.2.0",
        "compatible_versions": [
          "v1.2.0"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "399d4e19186577b04c23296c4f7ecc53e61080cb",
        "address": "seed.gitopia.com:26656"
      }
    ],
    "persistent_peers": [
      {
        "id": "6146658ffe2d148524a9fdcc3d701440053442bf",
        "address": "gitopia-testnet.nodejumper.io:30656",
        "provider": "NODEJUMPER"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://gitopia-testnet.nodejumper.io",
        "provider": "NODEJUMPER"
      }
    ],
    "rest": [
      {
        "address": "https://gitopia-testnet.nodejumper.io:1317",
        "provider": "NODEJUMPER"
      }
    ],
    "grpc": [
      {
        "address": "https://gitopia-testnet.nodejumper.io:9090",
        "provider": "NODEJUMPER"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorer.humans.zone",
      "url": "https://gitopia.explorers.guru/",
      "tx_page": "https://gitopia.explorers.guru/transaction/${txHash}"
    }
  ]
}

export const gitopiatestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "gitopiatestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the testnet version of Gitopia.",
      "denom_units": [
        {
          "denom": "utlore",
          "exponent": 0
        },
        {
          "denom": "tlore",
          "exponent": 6
        }
      ],
      "base": "utlore",
      "name": "TLORE",
      "display": "tlore",
      "symbol": "TLORE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png"
        }
      ]
    }
  ]
}

