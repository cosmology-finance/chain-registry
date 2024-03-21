import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const stargazetestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "stargazetestnet",
  "status": "live",
  "network_type": "testnet",
  "website": "https://stargaze.zone/",
  "pretty_name": "Stargaze Testnet",
  "chain_id": "elgafar-1",
  "bech32_prefix": "stars",
  "daemon_name": "starsd",
  "node_home": "$HOME/.starsd",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ustars",
        "low_gas_price": 0.03,
        "average_gas_price": 0.04,
        "high_gas_price": 0.05
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/public-awesome/stargaze",
    "recommended_version": "v7.0.0",
    "compatible_versions": [
      "v7.0.0"
    ],
    "cosmos_sdk_version": "0.45",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "cosmwasm_version": "0.28",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://github.com/public-awesome/testnets/blob/main/elgafar-1/genesis/genesis.tar.gz?raw=true"
    },
    "versions": [
      {
        "name": "v7.0.0",
        "recommended_version": "v7.0.0",
        "compatible_versions": [
          "v7.0.0"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.28",
        "cosmwasm_enabled": true
      }
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "e31886cba90a06e165b0df18cc5c8ae015ecd23e",
        "address": "209.159.152.82:26656",
        "provider": "stargaze"
      },
      {
        "id": "de00d2d65594b672469ecd65826a94ec1be80b9f",
        "address": "208.73.205.226:26656",
        "provider": "stargaze"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.elgafar-1.stargaze-apis.com",
        "provider": "Stargaze Foundation"
      }
    ],
    "rest": [
      {
        "address": "https://rest.elgafar-1.stargaze-apis.com",
        "provider": "Stargaze Foundation"
      }
    ],
    "grpc": [
      {
        "address": "http://grpc-1.elgafar-1.stargaze-apis.com:26660",
        "provider": "Stargaze Foundation"
      },
      {
        "address": "http://grpc-2.elgafar-1.stargaze-apis.com:26660",
        "provider": "Stargaze Foundation"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://testnet-explorer.publicawesome.dev/stargaze",
      "tx_page": "https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}"
    }
  ]
}


export const stargazetestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "stargazetestnet",
  "assets": [
    {
      "description": "The native token of Stargaze",
      "denom_units": [
        {
          "denom": "ustars",
          "exponent": 0
        },
        {
          "denom": "stars",
          "exponent": 6
        }
      ],
      "base": "ustars",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
      },
      "coingecko_id": "stargaze",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        }
      ]
    }
  ]
}

