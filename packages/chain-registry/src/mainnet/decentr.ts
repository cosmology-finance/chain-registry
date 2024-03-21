import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const decentr: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "decentr",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Decentr",
  "chain_id": "mainnet-3",
  "bech32_prefix": "decentr",
  "daemon_name": "decentrd",
  "node_home": "$HOME/.decentr",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "udec",
        "fixed_min_gas_price": 0.025,
        "low_gas_price": 0.025,
        "average_gas_price": 0.025,
        "high_gas_price": 0.025
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "udec"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Decentr-net/decentr",
    "recommended_version": "v1.5.7",
    "compatible_versions": [
      "v1.5.7"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Decentr-net/mainnets/master/3.0/genesis.json"
    },
    "versions": [
      {
        "name": "v1.5.7",
        "recommended_version": "v1.5.7",
        "compatible_versions": [
          "v1.5.7"
        ]
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "8a3485f940c3b2b9f0dd979a16ea28de154f14dd",
        "address": "calliope.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "3261bff0b7c16dcf6b5b8e62dd54faafbfd75415",
        "address": "hera.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "c37f32e202e13b0725515570f794b68573a6f58c",
        "address": "hera.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "5f3cfa2e3d5ed2c2ef699c8593a3d93c902406a9",
        "address": "hermes.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "a529801b5390f56d5c280eaff4ae95b7163e385f",
        "address": "melpomene.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "385129dbe71bceff982204afa11ed7fa0ee39430",
        "address": "poseidon.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "35a934228c32ad8329ac917613a25474cc79bc08",
        "address": "terpsichore.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "0fd62bcd1de6f2e3cfc15852cdde9f3f8a7987e4",
        "address": "thalia.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "bd99693d0dbc855b0367f781fb48bf1ca6a6a58b",
        "address": "zeus.mainnet.decentr.xyz:26656",
        "provider": "decentr"
      },
      {
        "id": "6bb349e1709da784d1628fa1f8bfc5cd00af974d",
        "address": "seeds.badgerbite.io:16656",
        "provider": "decentr"
      },
      {
        "id": "3fb96f1619340507e7f28fd7c4b81f4cd3d9a7e7",
        "address": "seeds-decentr.sxlzptprjkt.xyz:31656",
        "provider": "sxlzptprjkt | VALIDATOR"
      },
      {
        "id": "89f32d5e096eadddb1b3e6e839963503ef4d2d70",
        "address": "rpc.decentr.nodexcapital.com:10856",
        "provider": "NodeX Validator"
      },
      {
        "id": "49963582499c44dc8e119b4112e2f7b227003333",
        "address": "seed-node.mms.team:39656",
        "provider": "MMS"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "ca6c4b66c41cfca3e1b873321527781d46c92e57",
        "address": "seed-decentr.ibs.team:16657",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "6afae5a544d74a8581da932aaa6d483ce797a6b1",
        "address": "75.119.157.167:28656",
        "provider": "Inter Blockchain Services"
      },
      {
        "id": "1f5497f2b4f6adb3b803c17c3b005f637fcaec2d",
        "address": "decentr.peer.stavr.tech:1066",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "a6ebaed2c7972941b5cce5d94ec94a1352a600a4",
        "address": "peers-decentr.sxlzptprjkt.xyz:31656",
        "provider": "sxlzptprjkt | VALIDATOR"
      },
      {
        "id": "05f4788f936aa0158eeb935d8857cc9d23e6683d",
        "address": "65.109.28.226:12656",
        "provider": "Hexnodes"
      },
      {
        "id": "7678919ce37d6a8dc24a81c20ca8856147455670",
        "address": "rpc.decentr.indonode.net:20656",
        "provider": "Indonode"
      },
      {
        "id": "153656b1037e183368bbf9d03a6b97b1a3a9c976",
        "address": "peer-decentr.mms.team:26656",
        "provider": "MMS"
      },
      {
        "id": "0ec21d5e8c86973bfef04e66b2a0e5d6d3d86820",
        "address": "109.123.234.203:26656",
        "provider": "MathNodes"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://poseidon.mainnet.decentr.xyz",
        "provider": "decentr"
      },
      {
        "address": "https://rpc.decentr.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://decentr.rpc.m.stavr.tech:443",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://decentr-rpc.ibs.team/",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://rpc-dcntr.nodine.id/",
        "provider": "Nodine.ID"
      },
      {
        "address": "https://rpc-decentr.mms.team/",
        "provider": "MMS"
      }
    ],
    "rest": [
      {
        "address": "https://rest.mainnet.decentr.xyz",
        "provider": "decentr"
      },
      {
        "address": "https://decentr.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://api.decentr.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://decentr-api.ibs.team/",
        "provider": "Inter Blockchain Services"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc-decentr.sxlzptprjkt.xyz:443",
        "provider": "sxlzptprjkt | VALIDATOR"
      },
      {
        "address": "decentr.grpc.m.stavr.tech:2060",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://grpc.decentr.hexnodes.co",
        "provider": "Hexnodes"
      },
      {
        "address": "https://grpc.decentr.nodexcapital.com:443",
        "provider": "NodeX Validator"
      },
      {
        "address": "grpc-decentr.mms.team:443",
        "provider": "MMS"
      }
    ]
  },
  "explorers": [
    {
      "kind": "decentr.net",
      "url": "https://explorer.decentr.net",
      "tx_page": "https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/decentr/",
      "tx_page": "https://ping.pub/decentr/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Decentr-Mainnet",
      "tx_page": "https://explorer.stavr.tech/Decentr-Mainnet/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/decentr",
      "tx_page": "https://atomscan.com/decentr/transactions/${txHash}",
      "account_page": "https://atomscan.com/decentr/accounts/${accountAddress}"
    },
    {
      "kind": "Nodine.ID",
      "url": "https://explorer.co.id/decentr",
      "tx_page": "https://explorer.co.id/decentr/tx/${txHash}"
    },
    {
      "kind": "THE EXPLORER",
      "url": "https://explorer.sxlzptprjkt.xyz/decentr",
      "tx_page": "https://explorer.sxlzptprjkt.xyz/decentr/tx/${txHash}"
    },
    {
      "kind": "hexskrt EXPLORER",
      "url": "https://explorer.hexskrt.net/decentr",
      "tx_page": "https://explorer.hexskrt.net/decentr/tx/${txHash}"
    },
    {
      "kind": "NODEXPLORER",
      "url": "https://explorer.nodexcapital.com/decentr",
      "tx_page": "https://explorer.nodexcapital.com/decentr/tx/${txHash}"
    },
    {
      "kind": "Explorer ComunityNode",
      "url": "https://explorer.comunitynode.my.id/decentr",
      "tx_page": "https://explorer.comunitynode.my.id/decentr/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
    }
  ]
}

export const decentrAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "decentr",
  "assets": [
    {
      "description": "The native token of Decentr",
      "denom_units": [
        {
          "denom": "udec",
          "exponent": 0
        },
        {
          "denom": "dec",
          "exponent": 6
        }
      ],
      "base": "udec",
      "name": "Decentr",
      "display": "dec",
      "symbol": "DEC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
      },
      "coingecko_id": "decentr",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
        }
      ]
    }
  ]
}

