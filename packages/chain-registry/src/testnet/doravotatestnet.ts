import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const doravotatestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "doravotatestnet",
  "chain_id": "vota-testnet",
  "pretty_name": "Dora Vota Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "dora",
  "daemon_name": "dorad",
  "node_home": "$HOME/.dora",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "peaka",
        "fixed_min_gas_price": 100000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "peaka"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/dorafactory/doravota",
    "recommended_version": "v11.0.0",
    "compatible_versions": [
      "v11.0.0"
    ],
    "binaries": {
    },
    "genesis": {
      "genesis_url": "https://github.com/DoraFactory/doravota/blob/main/config/testnet/genesis.json"
    },
    "versions": [
      {
        "name": "v9.0.1",
        "recommended_version": "v9.0.1",
        "compatible_versions": [
          "v9.0.1"
        ],
        "binaries": {
        }
      },
      {
        "name": "v10.0.1",
        "recommended_version": "v10.0.1",
        "compatible_versions": [
          "v10.0.1"
        ],
        "binaries": {
        }
      },
      {
        "name": "v11",
        "recommended_version": "v11.0.0",
        "compatible_versions": [
          "v11.0.0"
        ],
        "binaries": {
        }
      }
    ]
  },
  "peers": {
    "seeds": [
    ],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://vota-testnet-rpc.dorafactory.org/",
        "provider": "dorafactory"
      }
    ],
    "rest": [
      {
        "address": "https://vota-testnet-rest.dorafactory.org",
        "provider": "dorafactory"
      }
    ],
    "grpc": [
      {
        "address": "vota-testnet-grpc.dorafactory.org:443",
        "provider": "dorafactory"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Dora Vota Ping Pub",
      "url": "https://maci-explorer-test.dorafactory.org",
      "tx_page": "https://maci-explorer-test.dorafactory.org/dora/tx/${txHash}"
    }
  ]
}


export const doravotatestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "doravotatestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.",
      "denom_units": [
        {
          "denom": "peaka",
          "exponent": 0
        },
        {
          "denom": "DORA",
          "exponent": 18
        }
      ],
      "base": "peaka",
      "name": "Dora Vota Testnet",
      "display": "DORA",
      "symbol": "DORA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png"
        }
      ]
    }
  ]
}

