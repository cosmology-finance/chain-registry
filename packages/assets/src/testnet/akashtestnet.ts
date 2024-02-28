import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "akashtestnet",
  "assets": [
    {
      "description": "The native token of Archway testnetwork",
      "denom_units": [
        {
          "denom": "ibc/2372A9EE065E69A29298205F8AB99AA8DE6C2F10A51C031C1925DB35A8C0309E",
          "exponent": 0,
          "aliases": [
            "aconst"
          ]
        },
        {
          "denom": "uconst",
          "exponent": 12
        },
        {
          "denom": "const",
          "exponent": 18
        }
      ],
      "base": "ibc/2372A9EE065E69A29298205F8AB99AA8DE6C2F10A51C031C1925DB35A8C0309E",
      "name": "Archway",
      "display": "const",
      "symbol": "CONST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-34",
            "base_denom": "aconst",
            "chain_name": "archwaytestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      },
      "coingecko_id": "osmosis",
      "keywords": [
        "dex",
        "staking"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4171",
            "base_denom": "uosmo",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389",
          "exponent": 0,
          "aliases": [
            "uion"
          ]
        },
        {
          "denom": "ion",
          "exponent": 6
        }
      ],
      "base": "ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389",
      "name": "Ion",
      "display": "ion",
      "symbol": "ION",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
      },
      "coingecko_id": "ion",
      "keywords": [
        "memecoin"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4171",
            "base_denom": "uion",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/6A1D2F9E30BBB5B6FD598B722581FF157F8582E69556255987B10A887C0A248F",
          "exponent": 0,
          "aliases": [
            "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz"
          ]
        },
        {
          "denom": "willyz",
          "exponent": 6
        }
      ],
      "base": "ibc/6A1D2F9E30BBB5B6FD598B722581FF157F8582E69556255987B10A887C0A248F",
      "name": "Willyz",
      "display": "willyz",
      "symbol": "WILLYZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
      },
      "keywords": [
        "memecoin"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4171",
            "base_denom": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    }
  ]
};
export default assets;
    