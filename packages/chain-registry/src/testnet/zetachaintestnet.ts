import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const zetachaintestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "zetachaintestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "ZetaChain Testnet",
  "chain_id": "athens_7001-1",
  "bech32_prefix": "zeta",
  "daemon_name": "zetacored",
  "node_home": "$HOME/.zetacored",
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
        "denom": "azeta",
        "low_gas_price": 20000000000,
        "average_gas_price": 25000000000,
        "high_gas_price": 40000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "azeta"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/zeta-chain/node",
    "recommended_version": "v8.3.3",
    "compatible_versions": [],
    "cosmos_sdk_version": "0.46",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "ibc_go_version": "v6.1.0",
    "genesis": {
      "genesis_url": "https://zetachain-athens.blockpi.network/rpc/v1/public/genesis"
    },
    "versions": []
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "d5519e378247dfb61dfe90652d1fe3e2b3005a5b",
        "address": "65.109.68.190:16056",
        "provider": ""
      },
      {
        "id": "f96cf94d5eabaf554c9294e731b3994b4c532f3a",
        "address": "46.4.5.45:22556",
        "provider": "Polkachu"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://zetachain-athens.blockpi.network/rpc/v1/public",
        "provider": "BlockPI"
      },
      {
        "address": "https://zetachain-testnet-archive.allthatnode.com:26657",
        "provider": "All That Node"
      }
    ],
    "rest": [
      {
        "address": "https://zetachain-athens.blockpi.network/lcd/v1/public",
        "provider": "BlockPI"
      },
      {
        "address": "https://zetachain-testnet-archive.allthatnode.com:1317",
        "provider": "All That Node"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "ZetaScan",
      "url": "https://athens.explorer.zetachain.com/",
      "tx_page": "https://athens.explorer.zetachain.com/cc/tx/${txHash}"
    },
    {
      "kind": "BlockScout",
      "url": "https://zetachain-athens-3.blockscout.com/",
      "tx_page": "https://zetachain-athens-3.blockscout.com/tx/${txHash}"
    }
  ]
}

export const zetachaintestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "zetachaintestnet",
  "assets": [
    {
      "description": "The native token of ZetaChain",
      "denom_units": [
        {
          "denom": "azeta",
          "exponent": 0
        },
        {
          "denom": "tzeta",
          "exponent": 18
        }
      ],
      "base": "azeta",
      "name": "ZetaChain Testnet",
      "display": "tzeta",
      "symbol": "tZETA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg"
        }
      ]
    }
  ]
}

