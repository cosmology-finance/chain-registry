import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const empowertestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "empowertestnet",
  "chain_id": "circulus-1",
  "pretty_name": "Empower Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "empower",
  "daemon_name": "empowerd",
  "node_home": "$HOME/.empowerchain",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "umpwr",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/empowerchain/empowerchain",
    "recommended_version": "v1.0.0-rc1",
    "compatible_versions": [
      "v1.0.0-rc1"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/empowerchain/empowerchain/main/testnets/circulus-1/genesis.json"
    },
    "versions": [
      {
        "name": "v1.0.0-rc1",
        "recommended_version": "v1.0.0-rc1",
        "compatible_versions": [
          "v1.0.0-rc1"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "testnet-seeds.polkachu.com:17456"
      },
      {
        "id": "258f523c96efde50d5fe0a9faeea8a3e83be22ca",
        "address": "seed.circulus-1.empower.aviaone.com:20272"
      },
      {
        "id": "d6a7cd9fa2bafc0087cb606de1d6d71216695c25",
        "address": "51.159.161.174:26656"
      },
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "testnet-seed.rhinostake.com:17456"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://empower-testnet-rpc.polkachu.com:443",
        "provider": "Polkachu"
      },
      {
        "address": "https://empower.rpc.cumulo.com.es:443",
        "provider": "Cumulo"
      },
      {
        "address": "https://rpc-t.empower.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "https://rpc-empower.nodeist.net:443",
        "provider": "Nodeist"
      },
      {
        "address": "https://empower-testnet.nodejumper.io:443",
        "provider": "NODEJUMPER"
      },
      {
        "address": "https://empower-testnet-rpc.itrocket.net:443",
        "provider": "ITRocket"
      },
      {
        "address": "https://rpc.circulus-1.empower.aviaone.com:443",
        "provider": "AviaOne"
      }
    ],
    "rest": [
      {
        "address": "https://empower-testnet-api.polkachu.com:443",
        "provider": "Polkachu"
      },
      {
        "address": "https://empower.api.cumulo.com.es:443",
        "provider": "Cumulo"
      },
      {
        "address": "https://empw.api.t.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://api-t.empower.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "https://api-empower.nodeist.net:443",
        "provider": "Nodeist"
      },
      {
        "address": "https://empower-testnet.nodejumper.io:1317",
        "provider": "NODEJUMPER"
      },
      {
        "address": "https://empower-testnet-api.itrocket.net:443",
        "provider": "ITRocket"
      },
      {
        "address": "https://api.circulus-1.empower.aviaone.com",
        "provider": "AviaOne"
      }
    ],
    "grpc": [
      {
        "address": "empower-testnet-grpc.polkachu.com:17490",
        "provider": "Polkachu"
      },
      {
        "address": "empower.grpc.cumulo.com.es:443",
        "provider": "Cumulo"
      },
      {
        "address": "grpc-t.empower.nodestake.top:9090",
        "provider": "NodeStake"
      },
      {
        "address": "empower-testnet.nodejumper.io:9090",
        "provider": "NODEJUMPER"
      },
      {
        "address": "empower-testnet-grpc.itrocket.net:16090",
        "provider": "ITRocket"
      },
      {
        "address": "grpc.circulus-1.empower.aviaone.com:443",
        "provider": "AviaOne"
      }
    ]
  },
  "explorers": [
    {
      "kind": "exploreme",
      "url": "https://empowerchain.exploreme.pro",
      "tx_page": "https://empowerchain.exploreme.pro/transaction/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://exp.nodeist.net/Empower",
      "tx_page": "https://exp.nodeist.net/Empower/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Empower",
      "tx_page": "https://explorer.stavr.tech/Empower/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.nodestake.top/empower-testnet",
      "tx_page": "https://explorer.nodestake.top/empower-testnet/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://testnet.itrocket.net/empower/staking",
      "tx_page": "https://testnet.itrocket.net/empower/staking/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.stavr.tech/empower",
      "tx_page": "https://explorer.stavr.tech/empower/tx/${txHash}"
    }
  ]
}


export const empowertestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "empowertestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the testnet version of Empower.",
      "denom_units": [
        {
          "denom": "umpwr",
          "exponent": 0
        },
        {
          "denom": "mpwr",
          "exponent": 6
        }
      ],
      "base": "umpwr",
      "name": "MPWR",
      "display": "mpwr",
      "symbol": "MPWR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png"
        }
      ]
    }
  ]
}

