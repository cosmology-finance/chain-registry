import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const kusamaAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "kusama",
  "assets": [
    {
      "description": "The native fee, governance, staking, and bonding token of the Polkadot platform.",
      "denom_units": [
        {
          "denom": "Planck",
          "exponent": 0
        },
        {
          "denom": "Point",
          "exponent": 3
        },
        {
          "denom": "uKSM",
          "exponent": 3,
          "aliases": [
            "MicroKSM"
          ]
        },
        {
          "denom": "uKSM",
          "exponent": 3,
          "aliases": [
            "MilliKSM"
          ]
        },
        {
          "denom": "KSM",
          "exponent": 12
        }
      ],
      "base": "Planck",
      "name": "Kusama",
      "display": "KSM",
      "symbol": "KSM",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
      },
      "coingecko_id": "kusama",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
        }
      ]
    }
  ]
}

