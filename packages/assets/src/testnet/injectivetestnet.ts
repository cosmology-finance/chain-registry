import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "injectivetestnet",
  "assets": [
    {
      "description": "The native token of Nois",
      "denom_units": [
        {
          "denom": "ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B",
          "exponent": 0,
          "aliases": [
            "unois"
          ]
        },
        {
          "denom": "nois",
          "exponent": 6
        }
      ],
      "base": "ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B",
      "name": "Nois",
      "display": "nois",
      "symbol": "NOIS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
      },
      "keywords": [
        "nois",
        "randomness",
        "drand",
        "wasm"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-33",
            "base_denom": "unois",
            "chain_name": "noistestnet"
          },
          "chain": {
            "channel_id": "channel-74"
          }
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D",
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
      "base": "ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D",
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
            "channel_id": "channel-4174",
            "base_denom": "uosmo",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-129"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F",
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
      "base": "ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F",
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
            "channel_id": "channel-4174",
            "base_denom": "uion",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-129"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/F720CD702241F9C6193BAA3F4ECEA6AAC4426ADBE2AA17224F7032BA549C45DF",
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
      "base": "ibc/F720CD702241F9C6193BAA3F4ECEA6AAC4426ADBE2AA17224F7032BA549C45DF",
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
            "channel_id": "channel-4174",
            "base_denom": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-129"
          }
        }
      ]
    }
  ]
};
export default assets;
    