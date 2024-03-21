import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const arkeonetworktestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "arkeonetworktestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Arkeo Network",
  "chain_id": "arkeo",
  "bech32_prefix": "tarkeo",
  "daemon_name": "arkeod",
  "node_home": "$HOME/.arkeo",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uarkeo"
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uarkeo"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/arkeonetwork/arkeo"
  },
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:22856"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://arkeonetwork-testnet.nodejumper.io:26657",
        "provider": "NODEJUMPER"
      },
      {
        "address": "https://test-arkeo-rpc.kynraze.com",
        "provider": "kynraze"
      },
      {
        "address": "https://testnet-arkeo-rpc.lavenderfive.com",
        "provider": "lavenderfive"
      },
      {
        "address": "https://arkeo-rpc.siriusnodes.uk",
        "provider": "siriusnodes"
      },
      {
        "address": "http://seed.arkeo.network:26657",
        "provider": "arkeo"
      }
    ],
    "rest": [
      {
        "address": "https://arkeonetwork-testnet.nodejumper.io:1317",
        "provider": "NODEJUMPER"
      },
      {
        "address": "https://test-arkeo-api.kynraze.com",
        "provider": "kynraze"
      },
      {
        "address": "https://testnet-arkeo-api.lavenderfive.com",
        "provider": "lavenderfive"
      },
      {
        "address": "https://arkeo-api.siriusnodes.uk",
        "provider": "siriusnodes"
      },
      {
        "address": "http://seed.arkeo.network:1317",
        "provider": "arkeo"
      }
    ],
    "grpc": [
      {
        "address": "https://arkeonetwork-testnet.nodejumper.io:9090/",
        "provider": "NODEJUMPER"
      }
    ]
  },
  "explorers": [
    {
      "url": "https://explorer.nodexcapital.com/arkeo",
      "tx_page": "https://explorer.nodexcapital.com/arkeo/tx/${txHash}"
    }
  ]
}


export const arkeonetworktestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "arkeonetworktestnet",
  "assets": [
    {
      "description": "",
      "denom_units": [
        {
          "denom": "uarkeo",
          "exponent": 6
        }
      ],
      "base": "uarkeo",
      "display": "arkeo",
      "name": "Arkeo",
      "symbol": "ARKEO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png"
        }
      ]
    }
  ]
}

