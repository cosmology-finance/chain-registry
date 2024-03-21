import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const impacthubdevnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "impacthubdevnet",
  "status": "live",
  "network_type": "devnet",
  "website": "https://www.ixo.world/",
  "pretty_name": "ixo",
  "chain_id": "devnet-1",
  "bech32_prefix": "ixo",
  "daemon_name": "ixod",
  "node_home": "$HOME/.ixod",
  "key_algos": [
    "secp256k1",
    "ed25519"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uixo",
        "fixed_min_gas_price": 0.015,
        "low_gas_price": 0.015,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uixo"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ixofoundation/ixo-blockchain",
    "recommended_version": "v0.20.0",
    "compatible_versions": [
      "v0.20.0"
    ],
    "versions": [
      {
        "name": "v0.20.0",
        "recommended_version": "v0.20.0",
        "compatible_versions": [
          "v0.20.0"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://devnet.ixo.earth/rpc/",
        "provider": "ixoworld"
      }
    ],
    "rest": [
      {
        "address": "https://devnet.ixo.earth/rest/",
        "provider": "ixoworld"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "ixoworld",
      "url": "https://blockscan.devnet.ixo.earth/ixo",
      "tx_page": "https://blockscan.devnet.ixo.earth/ixo/transactions/${txHash}",
      "account_page": "https://blockscan.devnet.ixo.earth/ixo/accounts/${accountAddress}"
    }
  ]
}


export const impacthubdevnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "impacthubdevnet",
  "assets": [
    {
      "description": "The native token of IXO Chain",
      "denom_units": [
        {
          "denom": "uixo",
          "exponent": 0
        },
        {
          "denom": "ixo",
          "exponent": 6
        }
      ],
      "base": "uixo",
      "name": "IXO",
      "display": "ixo",
      "symbol": "IXO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg"
      },
      "coingecko_id": "ixo",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg"
        }
      ]
    }
  ]
}

