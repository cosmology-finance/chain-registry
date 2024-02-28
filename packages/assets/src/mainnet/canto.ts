import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "canto",
  "assets": [
    {
      "description": "The native governance token of Carbon",
      "denom_units": [
        {
          "denom": "ibc/0D739D7202D248F85EBEC38D4C5649B86AED820A512451E7C680672A0528E88B",
          "exponent": 0,
          "aliases": [
            "swth"
          ]
        },
        {
          "denom": "dswth",
          "exponent": 8,
          "aliases": [
            "SWTH"
          ]
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/0D739D7202D248F85EBEC38D4C5649B86AED820A512451E7C680672A0528E88B",
      "name": "Carbon",
      "display": "dswth",
      "symbol": "SWTH",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
      },
      "coingecko_id": "switcheo",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "swth",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    },
    {
      "description": "The native stablecoin of Carbon",
      "denom_units": [
        {
          "denom": "ibc/3638AD279FB356BDD3BA6FD7C6E581C7AEB37E23A2F6E6327B0C146F3B876C35",
          "exponent": 0,
          "aliases": [
            "usc"
          ]
        },
        {
          "denom": "dusc",
          "exponent": 8,
          "aliases": [
            "USC"
          ]
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/3638AD279FB356BDD3BA6FD7C6E581C7AEB37E23A2F6E6327B0C146F3B876C35",
      "name": "Carbon USD Coin",
      "display": "dusc",
      "symbol": "USC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg"
      },
      "coingecko_id": "carbon-usd",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "usc",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    },
    {
      "description": "BNB token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/6B4D9BA064843C2FB53380251634134EC2FC12DF5409BD89F51E07CFB40B6877",
          "exponent": 0,
          "aliases": [
            "bnb.1.6.773edb"
          ]
        },
        {
          "denom": "bnb",
          "exponent": 18,
          "aliases": [
            "BNB"
          ]
        }
      ],
      "base": "ibc/6B4D9BA064843C2FB53380251634134EC2FC12DF5409BD89F51E07CFB40B6877",
      "name": "Binance Coin",
      "display": "bnb",
      "symbol": "BNB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "bnb.1.6.773edb",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg"
        }
      ]
    },
    {
      "description": "bNEO token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/4E1FF987874DCF953C4045CEAAE8C54B4465DCE6860D3652D3FBBBA4C33BE02E",
          "exponent": 0,
          "aliases": [
            "bneo.1.14.e2e5f6"
          ]
        },
        {
          "denom": "bneo",
          "exponent": 8,
          "aliases": [
            "bNEO"
          ]
        }
      ],
      "base": "ibc/4E1FF987874DCF953C4045CEAAE8C54B4465DCE6860D3652D3FBBBA4C33BE02E",
      "name": "BurgerNEO",
      "display": "bneo",
      "symbol": "bNEO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "bneo.1.14.e2e5f6",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg"
        }
      ]
    },
    {
      "description": "BUSD (BEP-20) token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/60DC861E8BEF250864C2E1EF27674D848BB0816E2469468D0F8BC6697EDA47F3",
          "exponent": 0,
          "aliases": [
            "busd.1.6.754a80"
          ]
        },
        {
          "denom": "busd",
          "exponent": 18,
          "aliases": [
            "BUSD"
          ]
        }
      ],
      "base": "ibc/60DC861E8BEF250864C2E1EF27674D848BB0816E2469468D0F8BC6697EDA47F3",
      "name": "BUSD (BEP-20)",
      "display": "busd",
      "symbol": "BUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "busd.1.6.754a80",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png"
        }
      ]
    },
    {
      "description": "Carbon Wrapped GLP on Carbon",
      "denom_units": [
        {
          "denom": "ibc/E8CDBB4D87F6E6F9AD9F5716AA6403D686CBAE13D3E3152A389BDCE9D40027E0",
          "exponent": 0,
          "aliases": [
            "cglp.1.19.1698d3"
          ]
        },
        {
          "denom": "cglp",
          "exponent": 18,
          "aliases": [
            "CGLP"
          ]
        }
      ],
      "base": "ibc/E8CDBB4D87F6E6F9AD9F5716AA6403D686CBAE13D3E3152A389BDCE9D40027E0",
      "name": "Carbon Wrapped GLP",
      "display": "cglp",
      "symbol": "CGLP",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "cglp.1.19.1698d3",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg"
        }
      ]
    },
    {
      "description": "Grouped USD on Carbon",
      "denom_units": [
        {
          "denom": "ibc/8A5AD3ABB5D38BC78FACB216DFD59DFB688D9E1935975E633BEDC03F48C0C242",
          "exponent": 0,
          "aliases": [
            "cgt/1"
          ]
        },
        {
          "denom": "usd",
          "exponent": 18,
          "aliases": [
            "USD"
          ]
        }
      ],
      "base": "ibc/8A5AD3ABB5D38BC78FACB216DFD59DFB688D9E1935975E633BEDC03F48C0C242",
      "name": "Carbon Grouped USD",
      "display": "usd",
      "symbol": "USD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "cgt/1",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ]
    },
    {
      "description": "ETH (Arbitrum) token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/5EB9AF189FAF36276841945A131ABEE6917A516F0C280C5BE5346AF950FB2197",
          "exponent": 0,
          "aliases": [
            "eth.1.19.c3b805"
          ]
        },
        {
          "denom": "eth",
          "exponent": 18,
          "aliases": [
            "ETH"
          ]
        }
      ],
      "base": "ibc/5EB9AF189FAF36276841945A131ABEE6917A516F0C280C5BE5346AF950FB2197",
      "name": "Ethereum (Arbitrum)",
      "display": "eth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "eth.1.19.c3b805",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg"
        }
      ]
    },
    {
      "description": "ETH (ERC20) token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/4F0DFDAB2F35682D217B0E731C3C84EEE4A4EA3B3BE7C0316773FA579E24511B",
          "exponent": 0,
          "aliases": [
            "eth.1.2.942d87"
          ]
        },
        {
          "denom": "eth",
          "exponent": 18,
          "aliases": [
            "ETH"
          ]
        }
      ],
      "base": "ibc/4F0DFDAB2F35682D217B0E731C3C84EEE4A4EA3B3BE7C0316773FA579E24511B",
      "name": "Ethereum (ERC20)",
      "display": "eth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "eth.1.2.942d87",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg"
        }
      ]
    },
    {
      "description": "USDC (ERC20) token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/318F3F36888C093340769BC8DDAC989DACEA89E16649A55B7ACDE2B4A0621229",
          "exponent": 0,
          "aliases": [
            "usdc.1.2.343151"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6,
          "aliases": [
            "USDC"
          ]
        }
      ],
      "base": "ibc/318F3F36888C093340769BC8DDAC989DACEA89E16649A55B7ACDE2B4A0621229",
      "name": "Circle USD",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "usdc.1.2.343151",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "USD Coin (BEP-20) token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/4C0928A5549BF93AA9933DD0660A59C3CB05D9BDFB8F266F99EA8900ECCBBB5E",
          "exponent": 0,
          "aliases": [
            "usdc.1.6.53ff75"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 18,
          "aliases": [
            "USDC"
          ]
        }
      ],
      "base": "ibc/4C0928A5549BF93AA9933DD0660A59C3CB05D9BDFB8F266F99EA8900ECCBBB5E",
      "name": "USD Coin (BEP-20)",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "usdc.1.6.53ff75",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "ZIL token on Carbon",
      "denom_units": [
        {
          "denom": "ibc/CA77555AF790CE7E0368BE46BA4C0433AD9CB5B092FADB02D8DFB30E777D12AA",
          "exponent": 0,
          "aliases": [
            "zil.1.18.1a4a06"
          ]
        },
        {
          "denom": "zil",
          "exponent": 12,
          "aliases": [
            "ZIL"
          ]
        }
      ],
      "base": "ibc/CA77555AF790CE7E0368BE46BA4C0433AD9CB5B092FADB02D8DFB30E777D12AA",
      "name": "Zilliqa",
      "display": "zil",
      "symbol": "ZIL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-18",
            "base_denom": "zil.1.18.1a4a06",
            "chain_name": "carbon"
          },
          "chain": {
            "channel_id": "channel-6"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of Composable.",
      "denom_units": [
        {
          "denom": "ibc/67EA418E1C4F31BC3443A1C7068567CFA1CE9C31253787B233D693FB68797255",
          "exponent": 0,
          "aliases": [
            "ppica"
          ]
        },
        {
          "denom": "pica",
          "exponent": 12
        }
      ],
      "base": "ibc/67EA418E1C4F31BC3443A1C7068567CFA1CE9C31253787B233D693FB68797255",
      "name": "Pica",
      "display": "pica",
      "symbol": "PICA",
      "coingecko_id": "picasso",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ppica",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "picasso",
            "base_denom": "ppica"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
      }
    },
    {
      "description": "The native staking and governance token of Kusama Relay Chain.",
      "denom_units": [
        {
          "denom": "ibc/F5BF63933AA9FB1D9648B09733CF0736B1409A1E9B14F95889282AC3C21D7E22",
          "exponent": 0,
          "aliases": [
            "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9"
          ]
        },
        {
          "denom": "ksm",
          "exponent": 12
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F5BF63933AA9FB1D9648B09733CF0736B1409A1E9B14F95889282AC3C21D7E22",
      "name": "KSM",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "picasso",
            "base_denom": "4"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
      }
    },
    {
      "description": "The native staking and governance token of Polkadot Relay Chain.",
      "denom_units": [
        {
          "denom": "ibc/597C2C1D697ACAEA870FFDF491AFFA62826A43672E835B412733E775474E58C8",
          "exponent": 0,
          "aliases": [
            "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/597C2C1D697ACAEA870FFDF491AFFA62826A43672E835B412733E775474E58C8",
      "name": "DOT",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "picasso",
            "base_denom": "79228162514264337593543950342"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      }
    },
    {
      "description": "The native staking and governance token of Statemine parachain.",
      "denom_units": [
        {
          "denom": "ibc/6400018D0B3DEA4027CC4196B04D4AAD138D73E429629E0B95A80A5A5821342E",
          "exponent": 0,
          "aliases": [
            "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6400018D0B3DEA4027CC4196B04D4AAD138D73E429629E0B95A80A5A5821342E",
      "name": "USDT",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "picasso",
            "base_denom": "130"
          }
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ],
      "coingecko_id": "osmosis",
      "keywords": [
        "dex",
        "staking"
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "uosmo",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206",
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
      "type_asset": "sdk.coin",
      "base": "ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206",
      "name": "Ion DAO",
      "display": "ion",
      "symbol": "ION",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        }
      ],
      "coingecko_id": "ion",
      "keywords": [
        "memecoin"
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "uion",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/2D3458A504ADA3971E5697998AAC8507E7BFB10583CC7E249C8EBC317DDF92EF",
          "exponent": 0,
          "aliases": [
            "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2D3458A504ADA3971E5697998AAC8507E7BFB10583CC7E249C8EBC317DDF92EF",
      "name": "USD Coin (Axelar)",
      "display": "usdc",
      "symbol": "USDC.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg"
        },
        {
          "image_sync": {
            "chain_name": "axelar",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It's the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.",
      "denom_units": [
        {
          "denom": "ibc/38C1064F147A125ACBFB6791C5FE3AD7371154E5AE64471CBBBDA187D489805B",
          "exponent": 0,
          "aliases": [
            "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/38C1064F147A125ACBFB6791C5FE3AD7371154E5AE64471CBBBDA187D489805B",
      "name": "Ether",
      "display": "weth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
        }
      ]
    },
    {
      "description": "Wrapped Bitcoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/69FA880032B055A05B87F2F62D6FFFFDC516FA9D7A7B0CA8880145A7130528CE",
          "exponent": 0,
          "aliases": [
            "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/69FA880032B055A05B87F2F62D6FFFFDC516FA9D7A7B0CA8880145A7130528CE",
      "name": "Wrapped Bitcoin (Axelar)",
      "display": "wbtc",
      "symbol": "WBTC.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg"
        },
        {
          "image_sync": {
            "chain_name": "axelar",
            "base_denom": "wbtc-satoshi"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ]
    },
    {
      "description": "Tether's USD stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/381F1A00D61E83FDFE3D7D30B02B921E93B8029C16813F056A55FCC21D3C182D",
          "exponent": 0,
          "aliases": [
            "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/381F1A00D61E83FDFE3D7D30B02B921E93B8029C16813F056A55FCC21D3C182D",
      "name": "Tether USD (Axelar)",
      "display": "usdt",
      "symbol": "USDT.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg"
        }
      ]
    },
    {
      "description": "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
      "denom_units": [
        {
          "denom": "ibc/D2914A92E53BAEEF50D62931FDE739E54265552731DD060A0C865B7A767EECE0",
          "exponent": 0,
          "aliases": [
            "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7"
          ]
        },
        {
          "denom": "dai",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D2914A92E53BAEEF50D62931FDE739E54265552731DD060A0C865B7A767EECE0",
      "name": "Dai Stablecoin",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        }
      ]
    },
    {
      "description": "Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.",
      "denom_units": [
        {
          "denom": "ibc/BE63A9FA94D478DE8D82C0E480FAFF8824F43A8256D2F7DED59381832FDFE0C6",
          "exponent": 0,
          "aliases": [
            "ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D"
          ]
        },
        {
          "denom": "busd",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BE63A9FA94D478DE8D82C0E480FAFF8824F43A8256D2F7DED59381832FDFE0C6",
      "name": "Binance USD",
      "display": "busd",
      "symbol": "BUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Cosmos Hub.",
      "denom_units": [
        {
          "denom": "ibc/070039AB58034252D2E86210276E05FE25B2FB41D15603185FD57960AFBAEDB6",
          "exponent": 0,
          "aliases": [
            "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/070039AB58034252D2E86210276E05FE25B2FB41D15603185FD57960AFBAEDB6",
      "name": "Cosmos Hub",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ]
    },
    {
      "description": "CRO is the native token of the Crypto.org Chain, referred to as Native CRO.",
      "denom_units": [
        {
          "denom": "ibc/2475196A6E87EEA47C8878EDE62E99C0FAA14A81B83165E4121E776622EF59BE",
          "exponent": 0,
          "aliases": [
            "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"
          ]
        },
        {
          "denom": "cro",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2475196A6E87EEA47C8878EDE62E99C0FAA14A81B83165E4121E776622EF59BE",
      "name": "Cronos POS Chain",
      "display": "cro",
      "symbol": "CRO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "cryptoorgchain",
            "base_denom": "basecro"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
        }
      ]
    },
    {
      "description": "BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.",
      "denom_units": [
        {
          "denom": "ibc/39AB649EC1E0A5CA2511AE1E1D51F79F8B0359DC099BCECD4D0F24F8655E043F",
          "exponent": 0,
          "aliases": [
            "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D"
          ]
        },
        {
          "denom": "wbnb",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/39AB649EC1E0A5CA2511AE1E1D51F79F8B0359DC099BCECD4D0F24F8655E043F",
      "name": "Binance Coin",
      "display": "wbnb",
      "symbol": "BNB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg"
        }
      ]
    },
    {
      "description": "Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.",
      "denom_units": [
        {
          "denom": "ibc/3ECDE72EABFD5BA3D936DD0E281873822EB5D23174D9DB55B206F2141BB87E23",
          "exponent": 0,
          "aliases": [
            "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB"
          ]
        },
        {
          "denom": "wmatic",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3ECDE72EABFD5BA3D936DD0E281873822EB5D23174D9DB55B206F2141BB87E23",
      "name": "Polygon",
      "display": "wmatic",
      "symbol": "MATIC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg"
        }
      ]
    },
    {
      "description": "AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.",
      "denom_units": [
        {
          "denom": "ibc/448D691F94ED010739AC829FFD677FEC94552CFA45A2CFC771FD4139EE8CA185",
          "exponent": 0,
          "aliases": [
            "ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373"
          ]
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/448D691F94ED010739AC829FFD677FEC94552CFA45A2CFC771FD4139EE8CA185",
      "name": "Avalanche",
      "display": "avax",
      "symbol": "AVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg"
        }
      ]
    },
    {
      "description": "The native staking token of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/E5328584BE0CD0749E3BC73B730D53FBA10570B6C74F8AD40B20B9D9E2859B91",
          "exponent": 0,
          "aliases": [
            "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0"
          ]
        },
        {
          "denom": "mluna",
          "exponent": 3,
          "aliases": [
            "milliluna"
          ]
        },
        {
          "denom": "luna",
          "exponent": 6,
          "aliases": [
            "lunc"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E5328584BE0CD0749E3BC73B730D53FBA10570B6C74F8AD40B20B9D9E2859B91",
      "name": "Luna Classic",
      "display": "luna",
      "symbol": "LUNC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
        }
      ]
    },
    {
      "description": "The native token of JUNO Chain",
      "denom_units": [
        {
          "denom": "ibc/9739C5A6CFC391F852A7558B3A9A2D9F83874F97E8560D27C5DBC6A332E92205",
          "exponent": 0,
          "aliases": [
            "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"
          ]
        },
        {
          "denom": "juno",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9739C5A6CFC391F852A7558B3A9A2D9F83874F97E8560D27C5DBC6A332E92205",
      "name": "Juno",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        }
      ]
    },
    {
      "description": "Wrapped Polkadot on Axelar",
      "denom_units": [
        {
          "denom": "ibc/A3ADEC3F1AF25594B2195DD992658E503BBE5C2983F5E8478CABF4A6B8FFBD94",
          "exponent": 0,
          "aliases": [
            "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A3ADEC3F1AF25594B2195DD992658E503BBE5C2983F5E8478CABF4A6B8FFBD94",
      "name": "Wrapped Polkadot (Axelar)",
      "display": "dot",
      "symbol": "DOT.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Evmos Hub",
      "denom_units": [
        {
          "denom": "ibc/69CA63A07FEFA176EC226F0AE9839436A3F5CF44F36E42E8BF5C9CFD3BD8E269",
          "exponent": 0,
          "aliases": [
            "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A"
          ]
        },
        {
          "denom": "evmos",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/69CA63A07FEFA176EC226F0AE9839436A3F5CF44F36E42E8BF5C9CFD3BD8E269",
      "name": "Evmos",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of Kava",
      "denom_units": [
        {
          "denom": "ibc/60E83E88A7EC62D94C2BAF821383AC00B7CD70B6D1F22F2998FA6D75C1FE5C66",
          "exponent": 0,
          "aliases": [
            "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205"
          ]
        },
        {
          "denom": "kava",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/60E83E88A7EC62D94C2BAF821383AC00B7CD70B6D1F22F2998FA6D75C1FE5C66",
      "name": "Kava",
      "display": "kava",
      "symbol": "KAVA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
        }
      ]
    },
    {
      "description": "The native token of Secret Network",
      "denom_units": [
        {
          "denom": "ibc/C14408C66377F4D321FE71CB409F23B274B3B81294A88EC14C8DCC19F2B3863D",
          "exponent": 0,
          "aliases": [
            "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A"
          ]
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C14408C66377F4D321FE71CB409F23B274B3B81294A88EC14C8DCC19F2B3863D",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ]
    },
    {
      "description": "The USD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/4DDE2906DED4A1F146F716DEB5D56D718B4AEB4A3B3B49893470E94E2D0CEA26",
          "exponent": 0,
          "aliases": [
            "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC"
          ]
        },
        {
          "denom": "musd",
          "exponent": 3,
          "aliases": [
            "milliusd"
          ]
        },
        {
          "denom": "ust",
          "exponent": 6,
          "aliases": [
            "ustc"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4DDE2906DED4A1F146F716DEB5D56D718B4AEB4A3B3B49893470E94E2D0CEA26",
      "name": "TerraClassicUSD",
      "display": "ust",
      "symbol": "USTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg"
        }
      ]
    },
    {
      "description": "The native token of Stargaze",
      "denom_units": [
        {
          "denom": "ibc/CC5D0DDF168CDD879697363EAEDEFC93CF8D5D1411B513D51B68E21ABC3F629A",
          "exponent": 0,
          "aliases": [
            "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"
          ]
        },
        {
          "denom": "stars",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CC5D0DDF168CDD879697363EAEDEFC93CF8D5D1411B513D51B68E21ABC3F629A",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "stargaze",
            "base_denom": "ustars"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ]
    },
    {
      "description": "The native token of Chihuahua Chain",
      "denom_units": [
        {
          "denom": "ibc/DD38CC3BEC6EF53C4C05EB1DB7C4BCC0C50C17DD7F07F63B7DB84A812F0F7735",
          "exponent": 0,
          "aliases": [
            "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228"
          ]
        },
        {
          "denom": "huahua",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DD38CC3BEC6EF53C4C05EB1DB7C4BCC0C50C17DD7F07F63B7DB84A812F0F7735",
      "name": "Chihuahua",
      "display": "huahua",
      "symbol": "HUAHUA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
        }
      ]
    },
    {
      "description": "The XPRT token is primarily a governance token for the Persistence chain.",
      "denom_units": [
        {
          "denom": "ibc/58A9D1BECA6EA22830F9A530094B8108EB7CF5F00AD3AB383FFE3E078A6055F4",
          "exponent": 0,
          "aliases": [
            "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293"
          ]
        },
        {
          "denom": "xprt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/58A9D1BECA6EA22830F9A530094B8108EB7CF5F00AD3AB383FFE3E078A6055F4",
      "name": "Persistence",
      "display": "xprt",
      "symbol": "XPRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        }
      ]
    },
    {
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.",
      "denom_units": [
        {
          "denom": "ibc/A4C24DADEB6C7442F313910EE029BFD8F1C339727EF47B7827283DF50E4F4132",
          "exponent": 0,
          "aliases": [
            "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961"
          ]
        },
        {
          "denom": "pstake",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A4C24DADEB6C7442F313910EE029BFD8F1C339727EF47B7827283DF50E4F4132",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        }
      ],
      "keywords": [
        "canon"
      ]
    },
    {
      "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "denom_units": [
        {
          "denom": "ibc/25223A2508A4FBDC609E8BC6CF6CEC23A5348E1EC4F161041CB44994630B2925",
          "exponent": 0,
          "aliases": [
            "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4"
          ]
        },
        {
          "denom": "akt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/25223A2508A4FBDC609E8BC6CF6CEC23A5348E1EC4F161041CB44994630B2925",
      "name": "Akash",
      "display": "akt",
      "symbol": "AKT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        }
      ]
    },
    {
      "description": "REGEN coin is the token for the Regen Network Platform",
      "denom_units": [
        {
          "denom": "ibc/47767014416DBD34FD18503DBE11E9E0A494BA4022A094C201F13732807FD0A2",
          "exponent": 0,
          "aliases": [
            "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076"
          ]
        },
        {
          "denom": "regen",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/47767014416DBD34FD18503DBE11E9E0A494BA4022A094C201F13732807FD0A2",
      "name": "Regen",
      "display": "regen",
      "symbol": "REGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg"
        }
      ]
    },
    {
      "description": "DVPN is the native token of the Sentinel Hub.",
      "denom_units": [
        {
          "denom": "ibc/4CFEDE888B1F3CAD91C208CFC8DC18C8FFADA00B07B05603046B3D8A3BEC6BE0",
          "exponent": 0,
          "aliases": [
            "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84"
          ]
        },
        {
          "denom": "dvpn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4CFEDE888B1F3CAD91C208CFC8DC18C8FFADA00B07B05603046B3D8A3BEC6BE0",
      "name": "Sentinel",
      "display": "dvpn",
      "symbol": "DVPN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
        }
      ]
    },
    {
      "description": "The IRIS token is the native governance token for the IrisNet chain.",
      "denom_units": [
        {
          "denom": "ibc/C266B1F0EFB716A0FF41B4927C0EE526060ED3E7EFFF8076117A8FDFC6AA74F6",
          "exponent": 0,
          "aliases": [
            "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0"
          ]
        },
        {
          "denom": "iris",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C266B1F0EFB716A0FF41B4927C0EE526060ED3E7EFFF8076117A8FDFC6AA74F6",
      "name": "IRISnet",
      "display": "iris",
      "symbol": "IRIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        }
      ]
    },
    {
      "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
      "denom_units": [
        {
          "denom": "ibc/6C6856A4848E7923AAD2813CDFF885656F6641D6A56E9A476429853B765122CF",
          "exponent": 0,
          "aliases": [
            "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC"
          ]
        },
        {
          "denom": "iov",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6C6856A4848E7923AAD2813CDFF885656F6641D6A56E9A476429853B765122CF",
      "name": "Starname",
      "display": "iov",
      "symbol": "IOV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        }
      ]
    },
    {
      "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
      "denom_units": [
        {
          "denom": "ibc/12503F156ED447145AB7DAF5F11A54A250A02C2AD148E2B60CC3C85418C2BDE7",
          "exponent": 0,
          "aliases": [
            "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59"
          ]
        },
        {
          "denom": "ngm",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/12503F156ED447145AB7DAF5F11A54A250A02C2AD148E2B60CC3C85418C2BDE7",
      "name": "e-Money",
      "display": "ngm",
      "symbol": "NGM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
        }
      ]
    },
    {
      "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
      "denom_units": [
        {
          "denom": "ibc/8143311675CD44A4F1BF5E897F57B64B603D4C15E4628F3118881C19B5D1A5BB",
          "exponent": 0,
          "aliases": [
            "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F"
          ]
        },
        {
          "denom": "eur",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8143311675CD44A4F1BF5E897F57B64B603D4C15E4628F3118881C19B5D1A5BB",
      "name": "e-Money EUR",
      "display": "eur",
      "symbol": "EEUR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg"
        }
      ]
    },
    {
      "description": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.",
      "denom_units": [
        {
          "denom": "ibc/3908F213A4C655B470E0196AD88D9A3F25B010260B28766E0E9A3B0DD7276BB5",
          "exponent": 0,
          "aliases": [
            "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525"
          ]
        },
        {
          "denom": "like",
          "exponent": 9
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3908F213A4C655B470E0196AD88D9A3F25B010260B28766E0E9A3B0DD7276BB5",
      "name": "LikeCoin",
      "display": "like",
      "symbol": "LIKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg"
        }
      ]
    },
    {
      "description": "The native token of IXO Chain",
      "denom_units": [
        {
          "denom": "ibc/865B155961ACF5D63A440A1BF53A5163428866AC4CA7409E61511E735E198F22",
          "exponent": 0,
          "aliases": [
            "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B"
          ]
        },
        {
          "denom": "ixo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/865B155961ACF5D63A440A1BF53A5163428866AC4CA7409E61511E735E198F22",
      "name": "ixo",
      "display": "ixo",
      "symbol": "IXO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
        }
      ]
    },
    {
      "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
      "denom_units": [
        {
          "denom": "ibc/2BE8B77593430166FF82FB7A700C7B84EC2494947FC77B3EA206D147BDF51E09",
          "exponent": 0,
          "aliases": [
            "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5"
          ]
        },
        {
          "denom": "bcna",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2BE8B77593430166FF82FB7A700C7B84EC2494947FC77B3EA206D147BDF51E09",
      "name": "BitCanna",
      "display": "bcna",
      "symbol": "BCNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
        }
      ]
    },
    {
      "description": "BitSong Native Token",
      "denom_units": [
        {
          "denom": "ibc/18C7E52F87EB5AE71CA1C9E9CCFDF5BAF9028B50CF5636FEBE1FBB31F016364B",
          "exponent": 0,
          "aliases": [
            "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452"
          ]
        },
        {
          "denom": "btsg",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/18C7E52F87EB5AE71CA1C9E9CCFDF5BAF9028B50CF5636FEBE1FBB31F016364B",
      "name": "BitSong",
      "display": "btsg",
      "symbol": "BTSG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
        }
      ]
    },
    {
      "description": "The native token of Ki Chain",
      "denom_units": [
        {
          "denom": "ibc/607EC62A5945B48EAA65BD455F974104091B5C10C66599D8A2605145F1E1C76C",
          "exponent": 0,
          "aliases": [
            "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E"
          ]
        },
        {
          "denom": "xki",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/607EC62A5945B48EAA65BD455F974104091B5C10C66599D8A2605145F1E1C76C",
      "name": "Ki",
      "display": "xki",
      "symbol": "XKI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
        }
      ]
    },
    {
      "description": "Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem",
      "denom_units": [
        {
          "denom": "ibc/3B2D91E2AD43CD590E43640E0FD2D1096BE5385B85E70B8FFBEC02E6ACFDE3EA",
          "exponent": 0,
          "aliases": [
            "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB"
          ]
        },
        {
          "denom": "med",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3B2D91E2AD43CD590E43640E0FD2D1096BE5385B85E70B8FFBEC02E6ACFDE3EA",
      "name": "Medibloc",
      "display": "med",
      "symbol": "MED",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
        }
      ]
    },
    {
      "description": "The staking token of Bostrom",
      "denom_units": [
        {
          "denom": "ibc/ECDB88416DD2C9C42433E7F07F6EBF69B894DE43A7A62FD3B860F48E03F679ED",
          "exponent": 0,
          "aliases": [
            "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ECDB88416DD2C9C42433E7F07F6EBF69B894DE43A7A62FD3B860F48E03F679ED",
      "name": "bostrom",
      "display": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
      "symbol": "BOOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
        }
      ]
    },
    {
      "description": "Native Token of Comdex Protocol",
      "denom_units": [
        {
          "denom": "ibc/38661B8C9689EE3B96C371BE7CCAB57E8D574B8B756B52B2E3724511BF7322DF",
          "exponent": 0,
          "aliases": [
            "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0"
          ]
        },
        {
          "denom": "cmdx",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/38661B8C9689EE3B96C371BE7CCAB57E8D574B8B756B52B2E3724511BF7322DF",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
        }
      ]
    },
    {
      "description": "Native token for the cheqd network",
      "denom_units": [
        {
          "denom": "ibc/7DC44540111AD0442A68DAF6DD6390F5D1341552C96F95FA07CCA9575363432F",
          "exponent": 0,
          "aliases": [
            "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA"
          ]
        },
        {
          "denom": "cheq",
          "exponent": 9
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7DC44540111AD0442A68DAF6DD6390F5D1341552C96F95FA07CCA9575363432F",
      "name": "Cheqd",
      "display": "cheq",
      "symbol": "CHEQ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
        }
      ]
    },
    {
      "description": "Native token of the Lum Network",
      "denom_units": [
        {
          "denom": "ibc/BDA95D884799A829CA2FC2A48B99DA3D742821AAA77C8A21BF85AB0D32FE6A88",
          "exponent": 0,
          "aliases": [
            "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2"
          ]
        },
        {
          "denom": "lum",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BDA95D884799A829CA2FC2A48B99DA3D742821AAA77C8A21BF85AB0D32FE6A88",
      "name": "Lum Network",
      "display": "lum",
      "symbol": "LUM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
        }
      ]
    },
    {
      "description": "The native token of Vidulum",
      "denom_units": [
        {
          "denom": "ibc/3BC8098DCEA04E4A01F27D939A956B02F7A2312BFA529C680D95D69196D5FEA0",
          "exponent": 0,
          "aliases": [
            "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD"
          ]
        },
        {
          "denom": "vdl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3BC8098DCEA04E4A01F27D939A956B02F7A2312BFA529C680D95D69196D5FEA0",
      "name": "Vidulum",
      "display": "vdl",
      "symbol": "VDL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
        }
      ]
    },
    {
      "description": "The native token of Desmos",
      "denom_units": [
        {
          "denom": "ibc/C6AFBEE481F2E72556C5E4E05C36B0B9B6D2EF8B7124BDE2C630FB4704CC6CA8",
          "exponent": 0,
          "aliases": [
            "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C"
          ]
        },
        {
          "denom": "dsm",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C6AFBEE481F2E72556C5E4E05C36B0B9B6D2EF8B7124BDE2C630FB4704CC6CA8",
      "name": "Desmos",
      "display": "dsm",
      "symbol": "DSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
        }
      ]
    },
    {
      "description": "Native token of Dig Chain",
      "denom_units": [
        {
          "denom": "ibc/CCA2E93866F738BB1AD04DCCA826D2833C5C5F53C6F8F0D5724CDB8A6CA78945",
          "exponent": 0,
          "aliases": [
            "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D"
          ]
        },
        {
          "denom": "dig",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CCA2E93866F738BB1AD04DCCA826D2833C5C5F53C6F8F0D5724CDB8A6CA78945",
      "name": "Dig Chain",
      "display": "dig",
      "symbol": "DIG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "Somm Token (SOMM) is the native staking token of the Sommelier Chain",
      "denom_units": [
        {
          "denom": "ibc/0E2D741DC4E622DD6AFBE55E587BD1854D987424A772B0300970C37BEBF86660",
          "exponent": 0,
          "aliases": [
            "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E"
          ]
        },
        {
          "denom": "msomm",
          "exponent": 3,
          "aliases": [
            "millisomm"
          ]
        },
        {
          "denom": "somm",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0E2D741DC4E622DD6AFBE55E587BD1854D987424A772B0300970C37BEBF86660",
      "name": "Sommelier",
      "display": "somm",
      "symbol": "SOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
        }
      ]
    },
    {
      "description": "The native token of BandChain",
      "denom_units": [
        {
          "denom": "ibc/86C183DCDABA0689F4AC55AC124CD1AC535B6A86ADC08DC65DE737781F11E133",
          "exponent": 0,
          "aliases": [
            "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE"
          ]
        },
        {
          "denom": "band",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/86C183DCDABA0689F4AC55AC124CD1AC535B6A86ADC08DC65DE737781F11E133",
      "name": "Band Protocol",
      "display": "band",
      "symbol": "BAND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
        }
      ]
    },
    {
      "description": "The native token of Konstellation Network",
      "denom_units": [
        {
          "denom": "ibc/35D47E7EE0748E0ACC30336B9F6DC8BC56F5C424CE4A4BF19FF0900C7B11CCE1",
          "exponent": 0,
          "aliases": [
            "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593"
          ]
        },
        {
          "denom": "darc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/35D47E7EE0748E0ACC30336B9F6DC8BC56F5C424CE4A4BF19FF0900C7B11CCE1",
      "name": "Konstellation",
      "display": "darc",
      "symbol": "DARC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg"
        }
      ]
    },
    {
      "description": "The native token of Umee",
      "denom_units": [
        {
          "denom": "ibc/AF0917DDBF93736A653131453F934655BDD30654538F8F7FD965ECDB978881D2",
          "exponent": 0,
          "aliases": [
            "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C"
          ]
        },
        {
          "denom": "umee",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AF0917DDBF93736A653131453F934655BDD30654538F8F7FD965ECDB978881D2",
      "name": "Umee",
      "display": "umee",
      "symbol": "UMEE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
        }
      ]
    },
    {
      "description": "The native token of Gravity Bridge",
      "denom_units": [
        {
          "denom": "ibc/F4EC0305914E4244AF78D1F0BC2D518A346CD6997DBCD3C49DAC463C0318C9F7",
          "exponent": 0,
          "aliases": [
            "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44"
          ]
        },
        {
          "denom": "graviton",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F4EC0305914E4244AF78D1F0BC2D518A346CD6997DBCD3C49DAC463C0318C9F7",
      "name": "Gravity Bridge",
      "display": "graviton",
      "symbol": "GRAV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
        }
      ]
    },
    {
      "description": "The native token of Decentr",
      "denom_units": [
        {
          "denom": "ibc/035C3B8D4C934C9FCD2D33F2D6DF5C4FB80ED1216983F62439241C5BF9F8D583",
          "exponent": 0,
          "aliases": [
            "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84"
          ]
        },
        {
          "denom": "dec",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/035C3B8D4C934C9FCD2D33F2D6DF5C4FB80ED1216983F62439241C5BF9F8D583",
      "name": "Decentr",
      "display": "dec",
      "symbol": "DEC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Marble DAO on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/42FD8C008525E5DF94AE1E023CA7210B41678F4EBD11F56B0760E7B0B76926D5",
          "exponent": 0,
          "aliases": [
            "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6"
          ]
        },
        {
          "denom": "marble",
          "exponent": 3
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/42FD8C008525E5DF94AE1E023CA7210B41678F4EBD11F56B0760E7B0B76926D5",
      "name": "Marble",
      "display": "marble",
      "symbol": "MARBLE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
        }
      ]
    },
    {
      "description": "The native governance token of Carbon",
      "denom_units": [
        {
          "denom": "ibc/C1A16828361D8B07BFABCD67BE924D719C3B11E14784791877762954B4842612",
          "exponent": 0,
          "aliases": [
            "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3"
          ]
        },
        {
          "denom": "dswth",
          "exponent": 8,
          "aliases": [
            "SWTH"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C1A16828361D8B07BFABCD67BE924D719C3B11E14784791877762954B4842612",
      "name": "Carbon",
      "display": "dswth",
      "symbol": "SWTH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
        }
      ]
    },
    {
      "description": "The native token of Cerberus Chain",
      "denom_units": [
        {
          "denom": "ibc/7EAE64315541C41D0A9D5DEA85FF24C93D6D021C9AB5F0772D625B79B850CCED",
          "exponent": 0,
          "aliases": [
            "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7"
          ]
        },
        {
          "denom": "crbrus",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7EAE64315541C41D0A9D5DEA85FF24C93D6D021C9AB5F0772D625B79B850CCED",
      "name": "Cerberus",
      "display": "crbrus",
      "symbol": "CRBRUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "The native staking and governance token of the Fetch Hub.",
      "denom_units": [
        {
          "denom": "ibc/A2C56B2EDCAD91E8B2799134E83451EF17B64CB04580F592FAB0179F162B0D00",
          "exponent": 0,
          "aliases": [
            "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447"
          ]
        },
        {
          "denom": "fet",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A2C56B2EDCAD91E8B2799134E83451EF17B64CB04580F592FAB0179F162B0D00",
      "name": "Fetch.ai",
      "display": "fet",
      "symbol": "FET",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
        }
      ]
    },
    {
      "description": "The native token of Asset Mantle",
      "denom_units": [
        {
          "denom": "ibc/2A363B32F9651B385B181A47676E6B093E41FE5ED2A1E77144D23B3689CA4872",
          "exponent": 0,
          "aliases": [
            "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC"
          ]
        },
        {
          "denom": "mntl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2A363B32F9651B385B181A47676E6B093E41FE5ED2A1E77144D23B3689CA4872",
      "name": "AssetMantle",
      "display": "mntl",
      "symbol": "MNTL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Neta on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/D16838C8B72BBD90A4531A356BB0875E714703B54F6C3540A7F67FA8850EFB42",
          "exponent": 0,
          "aliases": [
            "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
          ]
        },
        {
          "denom": "neta",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D16838C8B72BBD90A4531A356BB0875E714703B54F6C3540A7F67FA8850EFB42",
      "name": "Neta",
      "display": "neta",
      "symbol": "NETA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
        }
      ]
    },
    {
      "description": "The INJ token is the native governance token for the Injective chain.",
      "denom_units": [
        {
          "denom": "ibc/C030C050D118C32179FF78C2C233D94611164C1C6035215F986199C9916214D9",
          "exponent": 0,
          "aliases": [
            "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273"
          ]
        },
        {
          "denom": "INJ",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C030C050D118C32179FF78C2C233D94611164C1C6035215F986199C9916214D9",
      "name": "Injective",
      "display": "INJ",
      "symbol": "INJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        }
      ]
    },
    {
      "description": "The KRW stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/470C832BEEEA61D994167EED1645E1D3F8DAFF8DA4414F5BB8EEC30BE23DA756",
          "exponent": 0,
          "aliases": [
            "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780"
          ]
        },
        {
          "denom": "mkrw",
          "exponent": 3,
          "aliases": [
            "millikrw"
          ]
        },
        {
          "denom": "krt",
          "exponent": 6,
          "aliases": [
            "krtc"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/470C832BEEEA61D994167EED1645E1D3F8DAFF8DA4414F5BB8EEC30BE23DA756",
      "name": "TerraClassicKRW",
      "display": "krt",
      "symbol": "KRTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg"
        }
      ]
    },
    {
      "description": "TICK coin is the token for the Microtick Price Discovery & Oracle App",
      "denom_units": [
        {
          "denom": "ibc/200BE41B6A6D9110C3FE97A4146D33B8F1ACF7A37CAC192B10AF944A931019DE",
          "exponent": 0,
          "aliases": [
            "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8"
          ]
        },
        {
          "denom": "tick",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/200BE41B6A6D9110C3FE97A4146D33B8F1ACF7A37CAC192B10AF944A931019DE",
      "name": "Microtick",
      "display": "tick",
      "symbol": "TICK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "denom_units": [
        {
          "denom": "ibc/709AD4A7CBFAFD8C33B4F4ADC354470D4A3C7C1B78716746057B6189396D3EBB",
          "exponent": 0,
          "aliases": [
            "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB"
          ]
        },
        {
          "denom": "ROWAN",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/709AD4A7CBFAFD8C33B4F4ADC354470D4A3C7C1B78716746057B6189396D3EBB",
      "name": "Sifchain",
      "display": "ROWAN",
      "symbol": "ROWAN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "The native token of Shentu",
      "denom_units": [
        {
          "denom": "ibc/D2EB5C7C89FF472AE5BC97648256FA8765CBE7DF2E996DE3B7EE119D145DDF6D",
          "exponent": 0,
          "aliases": [
            "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3"
          ]
        },
        {
          "denom": "ctk",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D2EB5C7C89FF472AE5BC97648256FA8765CBE7DF2E996DE3B7EE119D145DDF6D",
      "name": "Shentu",
      "display": "ctk",
      "symbol": "CTK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg"
        }
      ]
    },
    {
      "description": "Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
      "denom_units": [
        {
          "denom": "ibc/477DF49B73A519C66BF24A2F05AE43E2BBBA2BE8A24B7BE6F09EC80117AF7E94",
          "exponent": 0,
          "aliases": [
            "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B"
          ]
        },
        {
          "denom": "hope",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/477DF49B73A519C66BF24A2F05AE43E2BBBA2BE8A24B7BE6F09EC80117AF7E94",
      "name": "Hope Galaxy",
      "display": "hope",
      "symbol": "HOPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
        }
      ]
    },
    {
      "description": "Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
      "denom_units": [
        {
          "denom": "ibc/9163E6CC2AC2A1755651DB477C2CFD29C94B2D4F7165291EEDAEB913F1E838C2",
          "exponent": 0,
          "aliases": [
            "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788"
          ]
        },
        {
          "denom": "rac",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9163E6CC2AC2A1755651DB477C2CFD29C94B2D4F7165291EEDAEB913F1E838C2",
      "name": "Racoon",
      "display": "rac",
      "symbol": "juno.RAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
        }
      ]
    },
    {
      "description": "Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.",
      "denom_units": [
        {
          "denom": "ibc/F219F7BDBA2E56D4666B730AD93DBC2512FD9A5AB2B54392338597AF9EA6104D",
          "exponent": 0,
          "aliases": [
            "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE"
          ]
        },
        {
          "denom": "frax",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F219F7BDBA2E56D4666B730AD93DBC2512FD9A5AB2B54392338597AF9EA6104D",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WBTC",
      "denom_units": [
        {
          "denom": "ibc/A626FFB08D9BD65958D7728C4D764B0000BCF582C6C1F2D0829B82F4176AA14E",
          "exponent": 0,
          "aliases": [
            "ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796"
          ]
        },
        {
          "denom": "gwbtc",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A626FFB08D9BD65958D7728C4D764B0000BCF582C6C1F2D0829B82F4176AA14E",
      "name": "Wrapped Bitcoin (Gravity Bridge)",
      "display": "gwbtc",
      "symbol": "WBTC.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WETH",
      "denom_units": [
        {
          "denom": "ibc/3EB367EE72241008056CD7ED6B42BB64A578D28BAD3A53D29109A7DF49F2EF82",
          "exponent": 0,
          "aliases": [
            "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5"
          ]
        },
        {
          "denom": "gweth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3EB367EE72241008056CD7ED6B42BB64A578D28BAD3A53D29109A7DF49F2EF82",
      "name": "Ether (Gravity Bridge)",
      "display": "gweth",
      "symbol": "WETH.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDC",
      "denom_units": [
        {
          "denom": "ibc/FB835F1D7A85DE6DA742DCF114977EA2DB6577EB29CCBB5F78B37D0FBAE74519",
          "exponent": 0,
          "aliases": [
            "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E"
          ]
        },
        {
          "denom": "gusdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FB835F1D7A85DE6DA742DCF114977EA2DB6577EB29CCBB5F78B37D0FBAE74519",
      "name": "USD Coin (Gravity Bridge)",
      "display": "gusdc",
      "symbol": "USDC.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge DAI",
      "denom_units": [
        {
          "denom": "ibc/8CBC7339DB868AC1020ED86FF24132879FF9FF2719889681DE5F8DBB5AD9FDAB",
          "exponent": 0,
          "aliases": [
            "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5"
          ]
        },
        {
          "denom": "gdai",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8CBC7339DB868AC1020ED86FF24132879FF9FF2719889681DE5F8DBB5AD9FDAB",
      "name": "DAI Stablecoin (Gravity Bridge)",
      "display": "gdai",
      "symbol": "DAI.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDT",
      "denom_units": [
        {
          "denom": "ibc/D3EE2235FF25E87E674D62F39E2446A534D44669F5814B46CCE0391FE90C22AC",
          "exponent": 0,
          "aliases": [
            "ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805"
          ]
        },
        {
          "denom": "gusdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D3EE2235FF25E87E674D62F39E2446A534D44669F5814B46CCE0391FE90C22AC",
      "name": "Tether USD (Gravity Bridge)",
      "display": "gusdt",
      "symbol": "USDT.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg"
        }
      ]
    },
    {
      "description": "The native token of Marble DEX on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/BF5948A9FF091B983EE00DF9D603B37830278F2ACE0F306EB76CE447383631C6",
          "exponent": 0,
          "aliases": [
            "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3"
          ]
        },
        {
          "denom": "block",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BF5948A9FF091B983EE00DF9D603B37830278F2ACE0F306EB76CE447383631C6",
      "name": "Block",
      "display": "block",
      "symbol": "BLOCK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
        }
      ]
    },
    {
      "description": "Hash is the staking token of the Provenance Blockchain",
      "denom_units": [
        {
          "denom": "ibc/89F66BF31583952C9E987471A22A75846A894D2F2E1715AD3038132C474C2C76",
          "exponent": 0,
          "aliases": [
            "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2"
          ]
        },
        {
          "denom": "hash",
          "exponent": 9
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/89F66BF31583952C9E987471A22A75846A894D2F2E1715AD3038132C474C2C76",
      "name": "Provenance",
      "display": "hash",
      "symbol": "HASH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg"
        }
      ]
    },
    {
      "description": "GLX is the staking token of the Galaxy Chain",
      "denom_units": [
        {
          "denom": "ibc/C740F3C40FF4180CD0F8C159762D0F4F7E96BE89A0D079C6CD6B9989630D5AC5",
          "exponent": 0,
          "aliases": [
            "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2"
          ]
        },
        {
          "denom": "glx",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C740F3C40FF4180CD0F8C159762D0F4F7E96BE89A0D079C6CD6B9989630D5AC5",
      "name": "Galaxy",
      "display": "glx",
      "symbol": "GLX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg"
        }
      ]
    },
    {
      "description": "The DAO token to build consensus among Hong Kong People",
      "denom_units": [
        {
          "denom": "ibc/2A08BD44185C289D4DC131E3FBC1A750B91012F0AC5D424BAB1D73651FCB00BE",
          "exponent": 0,
          "aliases": [
            "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2A08BD44185C289D4DC131E3FBC1A750B91012F0AC5D424BAB1D73651FCB00BE",
      "name": "DHK",
      "display": "dhk",
      "symbol": "DHK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
        }
      ]
    },
    {
      "description": "Token governance for Junoswap",
      "denom_units": [
        {
          "denom": "ibc/BAB4290E2E278D5E3A1435FC53CE782A449FFD1CAA53B05F4047DC832214D189",
          "exponent": 0,
          "aliases": [
            "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC"
          ]
        },
        {
          "denom": "raw",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BAB4290E2E278D5E3A1435FC53CE782A449FFD1CAA53B05F4047DC832214D189",
      "name": "JunoSwap",
      "display": "raw",
      "symbol": "RAW",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
        }
      ]
    },
    {
      "description": "MEME Token (MEME) is the native staking token of the MEME Chain",
      "denom_units": [
        {
          "denom": "ibc/8B9A813B2859EA17F783DE3963882D31DCB5962D14DD7D07B5E9C61A643B1A3E",
          "exponent": 0,
          "aliases": [
            "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA"
          ]
        },
        {
          "denom": "meme",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8B9A813B2859EA17F783DE3963882D31DCB5962D14DD7D07B5E9C61A643B1A3E",
      "name": "MEME",
      "display": "meme",
      "symbol": "MEME",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
        }
      ]
    },
    {
      "description": "Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
      "denom_units": [
        {
          "denom": "ibc/8B75A1A24D1CEFE99A0D146E0D43F2A279CFB25CB3EDC7E129552AC747F378A8",
          "exponent": 0,
          "aliases": [
            "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7"
          ]
        },
        {
          "denom": "asvt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8B75A1A24D1CEFE99A0D146E0D43F2A279CFB25CB3EDC7E129552AC747F378A8",
      "name": "Another.Software Validator Token",
      "display": "asvt",
      "symbol": "ASVT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
        }
      ]
    },
    {
      "description": "DAO dedicated to building tools on the Juno Network",
      "denom_units": [
        {
          "denom": "ibc/F2BF4547101FD03F3EFC504173E3600BA1BF5BF98B5574635E8B52DC7EA4F4D6",
          "exponent": 0,
          "aliases": [
            "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484"
          ]
        },
        {
          "denom": "joe",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F2BF4547101FD03F3EFC504173E3600BA1BF5BF98B5574635E8B52DC7EA4F4D6",
      "name": "JoeDAO",
      "display": "joe",
      "symbol": "JOE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
        }
      ]
    },
    {
      "description": "The native staking token of Terra.",
      "denom_units": [
        {
          "denom": "ibc/CE156B33D8A9D0B849646A33556D108C38842066B9DADA0535FC2EA04BE69FEF",
          "exponent": 0,
          "aliases": [
            "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9"
          ]
        },
        {
          "denom": "luna",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CE156B33D8A9D0B849646A33556D108C38842066B9DADA0535FC2EA04BE69FEF",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
        }
      ]
    },
    {
      "description": "Native token of Rizon Chain",
      "denom_units": [
        {
          "denom": "ibc/0BDF3071C10F5170067E9A809A87B0E5961C0D1ABA1EAF326F8868161FEA7B12",
          "exponent": 0,
          "aliases": [
            "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219"
          ]
        },
        {
          "denom": "atolo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0BDF3071C10F5170067E9A809A87B0E5961C0D1ABA1EAF326F8868161FEA7B12",
      "name": "Rizon",
      "display": "atolo",
      "symbol": "ATOLO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
        }
      ]
    },
    {
      "description": "Governance token of Kava Lend Protocol",
      "denom_units": [
        {
          "denom": "ibc/DC97B0199014FD1D066A55B7C0181A03873B9DE42CB289B2A29B81977FB03C03",
          "exponent": 0,
          "aliases": [
            "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC"
          ]
        },
        {
          "denom": "HARD",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DC97B0199014FD1D066A55B7C0181A03873B9DE42CB289B2A29B81977FB03C03",
      "name": "Kava Hard",
      "display": "HARD",
      "symbol": "HARD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
        }
      ]
    },
    {
      "description": "Governance token of Kava Swap Protocol",
      "denom_units": [
        {
          "denom": "ibc/5B44811B62DC01095FA49C8DBF203409D1A1032455AE043C8AAE2476247D8A1A",
          "exponent": 0,
          "aliases": [
            "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5"
          ]
        },
        {
          "denom": "SWP",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5B44811B62DC01095FA49C8DBF203409D1A1032455AE043C8AAE2476247D8A1A",
      "name": "Kava Swap",
      "display": "SWP",
      "symbol": "SWP",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
        }
      ]
    },
    {
      "description": "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
      "denom_units": [
        {
          "denom": "ibc/8A2B1136B3F96F0E41B35B690760BA29CFEB58AF7F6EA98222D5C490122FD5C0",
          "exponent": 0,
          "aliases": [
            "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049"
          ]
        },
        {
          "denom": "link",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8A2B1136B3F96F0E41B35B690760BA29CFEB58AF7F6EA98222D5C490122FD5C0",
      "name": "Chainlink",
      "display": "link",
      "symbol": "LINK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        }
      ]
    },
    {
      "description": "L1 coin is the GenesisL1 blockchain utility, governance and EVM token",
      "denom_units": [
        {
          "denom": "ibc/F84C59A4D4C5B549E2734F8FFA813D10C0123337E4A920E76A6A3854B06CB14E",
          "exponent": 0,
          "aliases": [
            "ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4"
          ]
        },
        {
          "denom": "l1",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F84C59A4D4C5B549E2734F8FFA813D10C0123337E4A920E76A6A3854B06CB14E",
      "name": "GenesisL1",
      "display": "l1",
      "symbol": "L1",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.",
      "denom_units": [
        {
          "denom": "ibc/04B65FABE2D53D690C7C52AA762B38D1CCBD2DB00FDD9196A695766FF5F1567C",
          "exponent": 0,
          "aliases": [
            "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE"
          ]
        },
        {
          "denom": "aave",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/04B65FABE2D53D690C7C52AA762B38D1CCBD2DB00FDD9196A695766FF5F1567C",
      "name": "Aave",
      "display": "aave",
      "symbol": "AAVE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.",
      "denom_units": [
        {
          "denom": "ibc/C4840C4515B3D46DA654A6D8CC578908739CD8C12938D66FB52EFC69E445CAE4",
          "exponent": 0,
          "aliases": [
            "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4"
          ]
        },
        {
          "denom": "ape",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C4840C4515B3D46DA654A6D8CC578908739CD8C12938D66FB52EFC69E445CAE4",
      "name": "ApeCoin",
      "display": "ape",
      "symbol": "APE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
      "denom_units": [
        {
          "denom": "ibc/57AE2373390F79920A31CCC6F1A6205AD2FBD3AB156956BAEEF089228D7F8BD1",
          "exponent": 0,
          "aliases": [
            "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3"
          ]
        },
        {
          "denom": "mkr",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/57AE2373390F79920A31CCC6F1A6205AD2FBD3AB156956BAEEF089228D7F8BD1",
      "name": "Maker",
      "display": "mkr",
      "symbol": "MKR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        }
      ]
    },
    {
      "description": "RAI is a non-pegged, ETH-backed stable asset. It is useful as more 'stable' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.",
      "denom_units": [
        {
          "denom": "ibc/4CC1BE89E7859A88506CD031F86D0E56EBA12DA00337E88782E44B99FAAF20D7",
          "exponent": 0,
          "aliases": [
            "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E"
          ]
        },
        {
          "denom": "rai",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4CC1BE89E7859A88506CD031F86D0E56EBA12DA00337E88782E44B99FAAF20D7",
      "name": "Rai Reflex Index",
      "display": "rai",
      "symbol": "RAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.",
      "denom_units": [
        {
          "denom": "ibc/965F0C1256972D9EEEAE723A240A14A9D1E936E6319338C06056556354570037",
          "exponent": 0,
          "aliases": [
            "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2"
          ]
        },
        {
          "denom": "shib",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/965F0C1256972D9EEEAE723A240A14A9D1E936E6319338C06056556354570037",
      "name": "Shiba Inu",
      "display": "shib",
      "symbol": "SHIB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/93217132E98A1399589E18F302F079390CA9DF03AE61FFEE862B41178F0CE954",
          "exponent": 0,
          "aliases": [
            "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE"
          ]
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/93217132E98A1399589E18F302F079390CA9DF03AE61FFEE862B41178F0CE954",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ]
    },
    {
      "description": "The native token of Tgrade",
      "denom_units": [
        {
          "denom": "ibc/4440490330B0D1B79889E91FC836DA067ABCB3BD7A257A4ADE6A39EB6E41798A",
          "exponent": 0,
          "aliases": [
            "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C"
          ]
        },
        {
          "denom": "tgd",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4440490330B0D1B79889E91FC836DA067ABCB3BD7A257A4ADE6A39EB6E41798A",
      "name": "Tgrade",
      "display": "tgd",
      "symbol": "TGD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
        }
      ]
    },
    {
      "description": "Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics",
      "denom_units": [
        {
          "denom": "ibc/9B9CC4FC2BABC8FF89F0BAAA88933D2EAF36570AD7FF68BDBC503BDDE7522564",
          "exponent": 0,
          "aliases": [
            "ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D"
          ]
        },
        {
          "denom": "echelon",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9B9CC4FC2BABC8FF89F0BAAA88933D2EAF36570AD7FF68BDBC503BDDE7522564",
      "name": "Echelon",
      "display": "echelon",
      "symbol": "ECH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg"
        }
      ]
    },
    {
      "description": "Staking and governance token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "ibc/57249E35C7DFE9E4D9ED77A6288EA96E1B41239DD90FFCBC0BAB6FDC6EB5169D",
          "exponent": 0,
          "aliases": [
            "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B"
          ]
        },
        {
          "denom": "odin",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/57249E35C7DFE9E4D9ED77A6288EA96E1B41239DD90FFCBC0BAB6FDC6EB5169D",
      "name": "Odin Protocol",
      "display": "odin",
      "symbol": "ODIN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "GEO token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "ibc/0846B40ED37D77EF3B3DF885023E8CADD11FF43A4BF990E047880C25D32B5AE8",
          "exponent": 0,
          "aliases": [
            "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A"
          ]
        },
        {
          "denom": "geo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0846B40ED37D77EF3B3DF885023E8CADD11FF43A4BF990E047880C25D32B5AE8",
      "name": "GEO",
      "display": "geo",
      "symbol": "GEO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "O9W token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "ibc/D052E1BEA7FE101E2B22F85D9BB24722E99CC775C3C6332FA3825F6E272891E4",
          "exponent": 0,
          "aliases": [
            "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D"
          ]
        },
        {
          "denom": "O9W",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D052E1BEA7FE101E2B22F85D9BB24722E99CC775C3C6332FA3825F6E272891E4",
      "name": "O9W",
      "display": "O9W",
      "symbol": "O9W",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "ELEVENPARIS loyalty token on KiChain",
      "denom_units": [
        {
          "denom": "ibc/EB5BFFA8A1D7A00D4910342E4A2A738964ED26DC7646E55661A06F27FB256571",
          "exponent": 0,
          "aliases": [
            "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121"
          ]
        },
        {
          "denom": "lvn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EB5BFFA8A1D7A00D4910342E4A2A738964ED26DC7646E55661A06F27FB256571",
      "name": "LVN",
      "display": "lvn",
      "symbol": "kichain.LVN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png"
        }
      ]
    },
    {
      "description": "Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.",
      "denom_units": [
        {
          "denom": "ibc/6A70FC7476C7797E8F1452A24C6367A0950282C11CE16B7A944EA62F767180BA",
          "exponent": 0,
          "aliases": [
            "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49"
          ]
        },
        {
          "denom": "wglmr",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6A70FC7476C7797E8F1452A24C6367A0950282C11CE16B7A944EA62F767180BA",
      "name": "Moonbeam",
      "display": "wglmr",
      "symbol": "GLMR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
        }
      ]
    },
    {
      "description": "DeFi gaming platform built on Juno",
      "denom_units": [
        {
          "denom": "ibc/C6C2A0FF3658285F94DC37D8201B0BB106B6CE21E123A97A96A9BB2B45B1A8D5",
          "exponent": 0,
          "aliases": [
            "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E"
          ]
        },
        {
          "denom": "glto",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C6C2A0FF3658285F94DC37D8201B0BB106B6CE21E123A97A96A9BB2B45B1A8D5",
      "name": "Gelotto",
      "display": "glto",
      "symbol": "GLTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
        }
      ]
    },
    {
      "description": "Gelotto Year 1 Grand Prize Token",
      "denom_units": [
        {
          "denom": "ibc/5E464875D811DEA2077F8DB660055B641295EF5A8DC621A011D6BDB31790352B",
          "exponent": 0,
          "aliases": [
            "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8"
          ]
        },
        {
          "denom": "gkey",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5E464875D811DEA2077F8DB660055B641295EF5A8DC621A011D6BDB31790352B",
      "name": "GKey",
      "display": "gkey",
      "symbol": "GKEY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
        }
      ]
    },
    {
      "description": "The native token of Crescent",
      "denom_units": [
        {
          "denom": "ibc/1B20761FE606A3C38B5287FECA9FA01E9C5A4F3A343DFAFAAE81AEEF10D566F1",
          "exponent": 0,
          "aliases": [
            "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580"
          ]
        },
        {
          "denom": "cre",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1B20761FE606A3C38B5287FECA9FA01E9C5A4F3A343DFAFAAE81AEEF10D566F1",
      "name": "Crescent",
      "display": "cre",
      "symbol": "CRE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        }
      ]
    },
    {
      "description": "The native token of LumenX Network",
      "denom_units": [
        {
          "denom": "ibc/2B8F2C58ECF1C05B345C13B4F87276AA48AD17610ED53FFC6593F8B9FE881FF4",
          "exponent": 0,
          "aliases": [
            "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7"
          ]
        },
        {
          "denom": "lumen",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2B8F2C58ECF1C05B345C13B4F87276AA48AD17610ED53FFC6593F8B9FE881FF4",
      "name": "LumenX",
      "display": "lumen",
      "symbol": "LUMEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "The native token of Oraichain",
      "denom_units": [
        {
          "denom": "ibc/4C0C8DF0256B5EA13B447ABBDB697F032C743214384A59165C349424F9E411FE",
          "exponent": 0,
          "aliases": [
            "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D"
          ]
        },
        {
          "denom": "ORAI",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4C0C8DF0256B5EA13B447ABBDB697F032C743214384A59165C349424F9E411FE",
      "name": "Oraichain",
      "display": "ORAI",
      "symbol": "ORAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg"
        }
      ]
    },
    {
      "description": "The native token of the Cudos blockchain",
      "denom_units": [
        {
          "denom": "ibc/DACB1AA2147C634928CEB262B4E16C65ADC6690AECBDCAC9D431AEDB1097CE72",
          "exponent": 0,
          "aliases": [
            "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B"
          ]
        },
        {
          "denom": "cudos",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DACB1AA2147C634928CEB262B4E16C65ADC6690AECBDCAC9D431AEDB1097CE72",
      "name": "Cudos",
      "display": "cudos",
      "symbol": "CUDOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
        }
      ]
    },
    {
      "description": "The native stablecoin of Kava",
      "denom_units": [
        {
          "denom": "ibc/0B7F0EC1055E6790BD2BECB1DEC6628E2DF93B29C4F89004D90A30633B7BBCE4",
          "exponent": 0,
          "aliases": [
            "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE"
          ]
        },
        {
          "denom": "USDX",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0B7F0EC1055E6790BD2BECB1DEC6628E2DF93B29C4F89004D90A30633B7BBCE4",
      "name": "Kava USDX",
      "display": "USDX",
      "symbol": "USDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
        }
      ]
    },
    {
      "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
      "denom_units": [
        {
          "denom": "ibc/6CB680227FD6061AA87F542B2C626B4C9022EAF9466A6A81C392B90289FDDB41",
          "exponent": 0,
          "aliases": [
            "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604"
          ]
        },
        {
          "denom": "bld",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6CB680227FD6061AA87F542B2C626B4C9022EAF9466A6A81C392B90289FDDB41",
      "name": "Agoric",
      "display": "bld",
      "symbol": "BLD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg"
        }
      ]
    },
    {
      "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
      "denom_units": [
        {
          "denom": "ibc/266D23673D441602DE3707C1DCAD718B7F56642BF2AAE493D219AB39036BF200",
          "exponent": 0,
          "aliases": [
            "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5"
          ]
        },
        {
          "denom": "ist",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/266D23673D441602DE3707C1DCAD718B7F56642BF2AAE493D219AB39036BF200",
      "name": "Inter Stable Token",
      "display": "ist",
      "symbol": "IST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
        }
      ]
    },
    {
      "description": "Staking derivative seJUNO for staked JUNO",
      "denom_units": [
        {
          "denom": "ibc/C14E2130D82FCC7DC66EFBA081DD0B44C04668B9D4D450BA35ED93AE25006CEE",
          "exponent": 0,
          "aliases": [
            "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B"
          ]
        },
        {
          "denom": "sejuno",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C14E2130D82FCC7DC66EFBA081DD0B44C04668B9D4D450BA35ED93AE25006CEE",
      "name": "StakeEasy seJUNO",
      "display": "sejuno",
      "symbol": "SEJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
        }
      ]
    },
    {
      "description": "Staking derivative bJUNO for staked JUNO",
      "denom_units": [
        {
          "denom": "ibc/B7523CB5E9B9CEBC92A15C5809F6A44FFC9D650E05D5A4F2516B6345F5AC3B5E",
          "exponent": 0,
          "aliases": [
            "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3"
          ]
        },
        {
          "denom": "bjuno",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B7523CB5E9B9CEBC92A15C5809F6A44FFC9D650E05D5A4F2516B6345F5AC3B5E",
      "name": "StakeEasy bJUNO",
      "display": "bjuno",
      "symbol": "BJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
        }
      ]
    },
    {
      "description": "The native token of Stride",
      "denom_units": [
        {
          "denom": "ibc/F9289D22361F97A8B8C7055BF4BA34A0D8C71D159AE57A1BE415CDAB4FD45EB6",
          "exponent": 0,
          "aliases": [
            "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4"
          ]
        },
        {
          "denom": "strd",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F9289D22361F97A8B8C7055BF4BA34A0D8C71D159AE57A1BE415CDAB4FD45EB6",
      "name": "Stride",
      "display": "strd",
      "symbol": "STRD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "stride",
            "base_denom": "ustrd"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/D6B46DADF427957EC1E29A569F88FD228C751BA3142A47C81D2AA58BDD386272",
          "exponent": 0,
          "aliases": [
            "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901"
          ]
        },
        {
          "denom": "statom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D6B46DADF427957EC1E29A569F88FD228C751BA3142A47C81D2AA58BDD386272",
      "name": "Stride Staked ATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "stride",
            "base_denom": "stuatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/67AE810E41920C3A94B55D4D33B91ED4363E4129100765912C15241F3F9AA604",
          "exponent": 0,
          "aliases": [
            "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A"
          ]
        },
        {
          "denom": "ststars",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/67AE810E41920C3A94B55D4D33B91ED4363E4129100765912C15241F3F9AA604",
      "name": "Stride Staked STARS",
      "display": "ststars",
      "symbol": "stSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        }
      ]
    },
    {
      "description": "Solarbank DAO Governance Token for speeding up the shift to renewable and green energy",
      "denom_units": [
        {
          "denom": "ibc/6D8E2EB67AEA6E36150A339F84D324C21A2FBF432B25B4F695A560208BC3A4AD",
          "exponent": 0,
          "aliases": [
            "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C"
          ]
        },
        {
          "denom": "solar",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6D8E2EB67AEA6E36150A339F84D324C21A2FBF432B25B4F695A560208BC3A4AD",
      "name": "Solarbank DAO",
      "display": "solar",
      "symbol": "SOLAR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
        }
      ]
    },
    {
      "description": "StakeEasy governance token",
      "denom_units": [
        {
          "denom": "ibc/188D629A59D387ED480F03A912891B0CD8ABF5937BEBABB2946402446C2FBFE0",
          "exponent": 0,
          "aliases": [
            "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6"
          ]
        },
        {
          "denom": "seasy",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/188D629A59D387ED480F03A912891B0CD8ABF5937BEBABB2946402446C2FBFE0",
      "name": "StakeEasy SEASY",
      "display": "seasy",
      "symbol": "SEASY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
        }
      ]
    },
    {
      "description": "The native token of Axelar",
      "denom_units": [
        {
          "denom": "ibc/BDB6DFDFFDA83E7F439CFE1C68008985E1B04804B6EA1A6DDA560DBC24C948C4",
          "exponent": 0,
          "aliases": [
            "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BDB6DFDFFDA83E7F439CFE1C68008985E1B04804B6EA1A6DDA560DBC24C948C4",
      "name": "Axelar",
      "display": "axl",
      "symbol": "AXL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ]
    },
    {
      "description": "REBUS, the native coin of the Rebus chain.",
      "denom_units": [
        {
          "denom": "ibc/A93397ACD49C6CD81CD3500C1DC31A9334DC6ED1807BD1E10873FCAFFBCC4B81",
          "exponent": 0,
          "aliases": [
            "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9"
          ]
        },
        {
          "denom": "rebus",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A93397ACD49C6CD81CD3500C1DC31A9334DC6ED1807BD1E10873FCAFFBCC4B81",
      "name": "Rebus",
      "display": "rebus",
      "symbol": "REBUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
        }
      ]
    },
    {
      "description": "The native token of Teritori",
      "denom_units": [
        {
          "denom": "ibc/8211BFD66463B9F77ECB9DBD13066D52E729FA11FA0B70F2539BC69DEF2C92C9",
          "exponent": 0,
          "aliases": [
            "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC"
          ]
        },
        {
          "denom": "tori",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8211BFD66463B9F77ECB9DBD13066D52E729FA11FA0B70F2539BC69DEF2C92C9",
      "name": "Teritori",
      "display": "tori",
      "symbol": "TORI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "teritori",
            "base_denom": "utori"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9F23A3741EE660F71415CDD10BAE444C04B9847E414EA72A6D31B59B4420B2B2",
          "exponent": 0,
          "aliases": [
            "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE"
          ]
        },
        {
          "denom": "stjuno",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9F23A3741EE660F71415CDD10BAE444C04B9847E414EA72A6D31B59B4420B2B2",
      "name": "Stride Staked JUNO",
      "display": "stjuno",
      "symbol": "stJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/B43799D7D32AC0BA802DDD09824F8802B1AB0C58F20165CB6F1C4035845DDEDA",
          "exponent": 0,
          "aliases": [
            "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC"
          ]
        },
        {
          "denom": "stosmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B43799D7D32AC0BA802DDD09824F8802B1AB0C58F20165CB6F1C4035845DDEDA",
      "name": "Stride Staked OSMO",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "stride",
            "base_denom": "stuosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for MuseDAO on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/C8D0BAE49A73B56B97BF36D566ABCF28E04FD424DB097DEC5F17256A240EAC23",
          "exponent": 0,
          "aliases": [
            "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F"
          ]
        },
        {
          "denom": "muse",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C8D0BAE49A73B56B97BF36D566ABCF28E04FD424DB097DEC5F17256A240EAC23",
      "name": "MuseDAO",
      "display": "muse",
      "symbol": "MUSE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
        }
      ]
    },
    {
      "description": "The native token of Lambda",
      "denom_units": [
        {
          "denom": "ibc/344C365C3F9F3839BE8999A283640C957D12B7C1AFE13D86C4403F73D3559F47",
          "exponent": 0,
          "aliases": [
            "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB"
          ]
        },
        {
          "denom": "lamb",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/344C365C3F9F3839BE8999A283640C957D12B7C1AFE13D86C4403F73D3559F47",
      "name": "Lambda",
      "display": "lamb",
      "symbol": "LAMB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg"
        }
      ]
    },
    {
      "description": "The native over-collateralized stablecoin from the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/7F7E44C45442F6FF632B57E57463472B6669C6E6FFEF6B4324DB2327D8B7854C",
          "exponent": 0,
          "aliases": [
            "ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC"
          ]
        },
        {
          "denom": "usk",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7F7E44C45442F6FF632B57E57463472B6669C6E6FFEF6B4324DB2327D8B7854C",
      "name": "USK",
      "display": "usk",
      "symbol": "USK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
        }
      ]
    },
    {
      "description": "Staking and governance coin for the Unification Blockchain",
      "denom_units": [
        {
          "denom": "ibc/3EDF0556A9978EEBBDCAB8350603A83220869483F3DEC28425D59BDB6B59FC8A",
          "exponent": 0,
          "aliases": [
            "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC"
          ]
        },
        {
          "denom": "FUND",
          "exponent": 9
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3EDF0556A9978EEBBDCAB8350603A83220869483F3DEC28425D59BDB6B59FC8A",
      "name": "Unification",
      "display": "FUND",
      "symbol": "FUND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png"
        }
      ]
    },
    {
      "description": "The native staking and governance token of Jackal.",
      "denom_units": [
        {
          "denom": "ibc/501B06E8904C5E8EC8DF8DE94D3357F671C26CEC6C9E500F18577B5B7AE02F40",
          "exponent": 0,
          "aliases": [
            "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA"
          ]
        },
        {
          "denom": "jkl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/501B06E8904C5E8EC8DF8DE94D3357F671C26CEC6C9E500F18577B5B7AE02F40",
      "name": "Jackal",
      "display": "jkl",
      "symbol": "JKL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Alter on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/6B5BE73EF2DEE4150CCA5455FA188E6FE3D5D027BF9F60A12CEA8F218B182965",
          "exponent": 0,
          "aliases": [
            "ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3"
          ]
        },
        {
          "denom": "alter",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6B5BE73EF2DEE4150CCA5455FA188E6FE3D5D027BF9F60A12CEA8F218B182965",
      "name": "Alter",
      "display": "alter",
      "symbol": "ALTER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Button on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/DB53451E5326B8AD9128A8EE06453840D927207C3229B0666574E281C355C031",
          "exponent": 0,
          "aliases": [
            "ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8"
          ]
        },
        {
          "denom": "butt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DB53451E5326B8AD9128A8EE06453840D927207C3229B0666574E281C355C031",
      "name": "Button",
      "display": "butt",
      "symbol": "BUTT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Shade on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/C036AC4396AEC672DBFAB0B1B3F22A4228275297CB342CBEE6BDDC59AE04627D",
          "exponent": 0,
          "aliases": [
            "ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C"
          ]
        },
        {
          "denom": "shd",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C036AC4396AEC672DBFAB0B1B3F22A4228275297CB342CBEE6BDDC59AE04627D",
      "name": "Shade (old)",
      "display": "shd",
      "symbol": "SHD(old)",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for SIENNA on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/640C17575C1F94C40D0E613F926A7FF1C23DA518944D351350B5750CE219EE23",
          "exponent": 0,
          "aliases": [
            "ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213"
          ]
        },
        {
          "denom": "sienna",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/640C17575C1F94C40D0E613F926A7FF1C23DA518944D351350B5750CE219EE23",
      "name": "SIENNA",
      "display": "sienna",
      "symbol": "SIENNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for SCRT Staking Derivatives on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/155B2DF8C83BFCBBFE9DAC27533A4110E3F50F3FCE81073B43FDFF2A6BC484BD",
          "exponent": 0,
          "aliases": [
            "ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4"
          ]
        },
        {
          "denom": "stkd-scrt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/155B2DF8C83BFCBBFE9DAC27533A4110E3F50F3FCE81073B43FDFF2A6BC484BD",
      "name": "SCRT Staking Derivatives",
      "display": "stkd-scrt",
      "symbol": "stkd-SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg"
        }
      ]
    },
    {
      "description": "BeeZee native blockchain",
      "denom_units": [
        {
          "denom": "ibc/814C3F332749DEA7528ABC41A74F8A6B3DCA6C8F545C71C9782C9840BB637812",
          "exponent": 0,
          "aliases": [
            "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88"
          ]
        },
        {
          "denom": "bze",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/814C3F332749DEA7528ABC41A74F8A6B3DCA6C8F545C71C9782C9840BB637812",
      "name": "BeeZee",
      "display": "bze",
      "symbol": "BZE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Fanfury on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/5282BBFB9DA21FFB00D0469F1E6561B65FC4420540DFD521D12E11492EA7F82E",
          "exponent": 0,
          "aliases": [
            "ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF"
          ]
        },
        {
          "denom": "fury",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5282BBFB9DA21FFB00D0469F1E6561B65FC4420540DFD521D12E11492EA7F82E",
      "name": "Fanfury",
      "display": "fury",
      "symbol": "FURY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Acrechain",
      "denom_units": [
        {
          "denom": "ibc/6D3D361F8EE3834FE5E0220718F41AC536C9E7C829D90B28E598887EBA2884B3",
          "exponent": 0,
          "aliases": [
            "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06"
          ]
        },
        {
          "denom": "acre",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6D3D361F8EE3834FE5E0220718F41AC536C9E7C829D90B28E598887EBA2884B3",
      "name": "Acrechain",
      "display": "acre",
      "symbol": "ACRE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg"
        }
      ]
    },
    {
      "description": "Stable Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "ibc/200DD0A97EA3634D5F82F7688CDAE16924CBE05C95C1C6D92A5A4DAA3F41F560",
          "exponent": 0,
          "aliases": [
            "ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E"
          ]
        },
        {
          "denom": "cmst",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/200DD0A97EA3634D5F82F7688CDAE16924CBE05C95C1C6D92A5A4DAA3F41F560",
      "name": "CMST",
      "display": "cmst",
      "symbol": "CMST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Imversed",
      "denom_units": [
        {
          "denom": "ibc/D90E3BB623D66144BEDEA33B0F0B4F8E7EB22D58DF4315092FDF89A472157C58",
          "exponent": 0,
          "aliases": [
            "ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4"
          ]
        },
        {
          "denom": "imv",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D90E3BB623D66144BEDEA33B0F0B4F8E7EB22D58DF4315092FDF89A472157C58",
      "name": "Imversed",
      "display": "imv",
      "symbol": "IMV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
        }
      ]
    },
    {
      "description": "The native token of Medas Digital Network",
      "denom_units": [
        {
          "denom": "ibc/E8650025AFFFA092F60C99D3C2D480F2016667053EBF08331F23D4AC4A1BACE2",
          "exponent": 0,
          "aliases": [
            "ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C"
          ]
        },
        {
          "denom": "medas",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E8650025AFFFA092F60C99D3C2D480F2016667053EBF08331F23D4AC4A1BACE2",
      "name": "Medas Digital Network",
      "display": "medas",
      "symbol": "MEDAS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg"
        }
      ],
      "keywords": [
        "medas"
      ]
    },
    {
      "description": "The native token cw20 for PHMN on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/FBC7B5DAE0160CAA6F87383B1DCE14D855EEC80B51B750D13E3D6B5EF3B6143A",
          "exponent": 0,
          "aliases": [
            "ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B"
          ]
        },
        {
          "denom": "phmn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FBC7B5DAE0160CAA6F87383B1DCE14D855EEC80B51B750D13E3D6B5EF3B6143A",
      "name": "POSTHUMAN",
      "display": "phmn",
      "symbol": "PHMN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Amber on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/4BE0ABC7AA14F41DEAE65C82C2A69415027A054ED7EBDC57E95D56509C6A1D14",
          "exponent": 0,
          "aliases": [
            "ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55"
          ]
        },
        {
          "denom": "amber",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4BE0ABC7AA14F41DEAE65C82C2A69415027A054ED7EBDC57E95D56509C6A1D14",
      "name": "Amber",
      "display": "amber",
      "symbol": "AMBER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg"
        }
      ]
    },
    {
      "description": "The native token of Onomy Protocol",
      "denom_units": [
        {
          "denom": "ibc/207F51984314569804791BA6B4AB39152C2850732BC5F50A5B0EAD79D26F6138",
          "exponent": 0,
          "aliases": [
            "ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163"
          ]
        },
        {
          "denom": "nom",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/207F51984314569804791BA6B4AB39152C2850732BC5F50A5B0EAD79D26F6138",
      "name": "Onomy",
      "display": "nom",
      "symbol": "NOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg"
        }
      ],
      "keywords": [
        "dex",
        "stablecoin",
        "bridge",
        "staking"
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked ATOM",
      "denom_units": [
        {
          "denom": "ibc/577E692A5B838D7812EA556A01CBC2ECC3A9CBE77E99C9E56BBD374ED9497A48",
          "exponent": 0,
          "aliases": [
            "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC"
          ]
        },
        {
          "denom": "stkatom",
          "exponent": 6,
          "aliases": [
            "stk/atom"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/577E692A5B838D7812EA556A01CBC2ECC3A9CBE77E99C9E56BBD374ED9497A48",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "persistence",
            "base_denom": "stk/uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Dyson Protocol",
      "denom_units": [
        {
          "denom": "ibc/ED26457A32E131CA7EF5F392CF0B2942EB3DF29AAD3FA2121900E2772474215C",
          "exponent": 0,
          "aliases": [
            "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ED26457A32E131CA7EF5F392CF0B2942EB3DF29AAD3FA2121900E2772474215C",
      "name": "Dyson Protocol",
      "display": "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
      "symbol": "DYS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Hopers on Juno Chain",
      "denom_units": [
        {
          "denom": "ibc/C3BAC20527484E3298FC2DC35D747B8A8037921C7151014DFC4711167CC1A673",
          "exponent": 0,
          "aliases": [
            "ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099"
          ]
        },
        {
          "denom": "hopers",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C3BAC20527484E3298FC2DC35D747B8A8037921C7151014DFC4711167CC1A673",
      "name": "Hopers",
      "display": "hopers",
      "symbol": "HOPERS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
        }
      ]
    },
    {
      "description": "Overcollateralized stable coin for Arable derivatives v1",
      "denom_units": [
        {
          "denom": "ibc/E784F70750E585A54E9E6F3794C73818120D37091EB0FDC6AADF3505740FBC8A",
          "exponent": 0,
          "aliases": [
            "ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F"
          ]
        },
        {
          "denom": "arusd",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E784F70750E585A54E9E6F3794C73818120D37091EB0FDC6AADF3505740FBC8A",
      "name": "Arable USD",
      "display": "arusd",
      "symbol": "arUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Planq Network",
      "denom_units": [
        {
          "denom": "ibc/E12F4E05C6E823006C120F09FC239285E4B46EDF63DB0285D9A727729DC9C90D",
          "exponent": 0,
          "aliases": [
            "ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF"
          ]
        },
        {
          "denom": "planq",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E12F4E05C6E823006C120F09FC239285E4B46EDF63DB0285D9A727729DC9C90D",
      "name": "Planq",
      "display": "planq",
      "symbol": "PLQ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
        }
      ]
    },
    {
      "description": "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
      "denom_units": [
        {
          "denom": "ibc/0D5B7526DD28F05ED9C7B52454821DE75A9C8684B790DA67929519EE16C4B21D",
          "exponent": 0,
          "aliases": [
            "ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4"
          ]
        },
        {
          "denom": "ftm",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0D5B7526DD28F05ED9C7B52454821DE75A9C8684B790DA67929519EE16C4B21D",
      "name": "Fantom",
      "display": "ftm",
      "symbol": "FTM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg"
        }
      ]
    },
    {
      "description": "Canto is a Layer-1 blockchain built to deliver on the promise of DeFi",
      "denom_units": [
        {
          "denom": "ibc/0482F30DAFC277122182DA5A7D48D10E2BE33B7E77194BB1BB857CE29AB96DFE",
          "exponent": 0,
          "aliases": [
            "ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F"
          ]
        },
        {
          "denom": "canto",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0482F30DAFC277122182DA5A7D48D10E2BE33B7E77194BB1BB857CE29AB96DFE",
      "name": "Canto",
      "display": "canto",
      "symbol": "CANTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked STARS",
      "denom_units": [
        {
          "denom": "ibc/1313946C0AE926D050CB5142F8C535503B927676D5B24E4C0FD47401D2664D56",
          "exponent": 0,
          "aliases": [
            "ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83"
          ]
        },
        {
          "denom": "qstars",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1313946C0AE926D050CB5142F8C535503B927676D5B24E4C0FD47401D2664D56",
      "name": "Quicksilver Liquid Staked STARS",
      "display": "qstars",
      "symbol": "qSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg"
        }
      ]
    },
    {
      "description": "WYND DAO Governance Token",
      "denom_units": [
        {
          "denom": "ibc/5CB110C3038710737B4ADEC21556A429EBF8C21C5B05E0BB924E75747AACCD18",
          "exponent": 0,
          "aliases": [
            "ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3"
          ]
        },
        {
          "denom": "wynd",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5CB110C3038710737B4ADEC21556A429EBF8C21C5B05E0BB924E75747AACCD18",
      "name": "Wynd DAO Governance Token",
      "display": "wynd",
      "symbol": "WYND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
        }
      ]
    },
    {
      "description": "USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.",
      "denom_units": [
        {
          "denom": "ibc/3B7E18F8E22762404CE2A8D1B37E7F31EAD7E99A1110C740F71E4DC798F79F5C",
          "exponent": 0,
          "aliases": [
            "ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A"
          ]
        },
        {
          "denom": "polygon-usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3B7E18F8E22762404CE2A8D1B37E7F31EAD7E99A1110C740F71E4DC798F79F5C",
      "name": "USD Coin (Polygon)",
      "display": "polygon-usdc",
      "symbol": "polygon.USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg"
        }
      ]
    },
    {
      "description": "USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.",
      "denom_units": [
        {
          "denom": "ibc/BD36911E786EBBEC1603DAA23AC8B06F7588B5BF0414CD114909E37758B98895",
          "exponent": 0,
          "aliases": [
            "ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C"
          ]
        },
        {
          "denom": "avalanche-usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BD36911E786EBBEC1603DAA23AC8B06F7588B5BF0414CD114909E37758B98895",
      "name": "USD Coin (Avalanche)",
      "display": "avalanche-usdc",
      "symbol": "avalanche.USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg"
        }
      ]
    },
    {
      "description": "Mars protocol token",
      "denom_units": [
        {
          "denom": "ibc/7BE5081CBC347CB881CE5AAE7AD7682F418B3B425B07C9CA752719923D678C62",
          "exponent": 0,
          "aliases": [
            "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580"
          ]
        },
        {
          "denom": "mars",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7BE5081CBC347CB881CE5AAE7AD7682F418B3B425B07C9CA752719923D678C62",
      "name": "Mars Hub",
      "display": "mars",
      "symbol": "MARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg"
        }
      ]
    },
    {
      "description": "Ciento Exchange Token",
      "denom_units": [
        {
          "denom": "ibc/FF5A3F1CCF69A2A5BF4A1779856EFE58DD4D31231D01CFBACC19D6894714CAB0",
          "exponent": 0,
          "aliases": [
            "ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5"
          ]
        },
        {
          "denom": "cnto",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FF5A3F1CCF69A2A5BF4A1779856EFE58DD4D31231D01CFBACC19D6894714CAB0",
      "name": "Ciento Token",
      "display": "cnto",
      "symbol": "CNTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/B79AE3434DFEA63437BA87521752C44E71AA4DE40DE30DD2552C09A71C0DFCA2",
          "exponent": 0,
          "aliases": [
            "ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372"
          ]
        },
        {
          "denom": "stluna",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B79AE3434DFEA63437BA87521752C44E71AA4DE40DE30DD2552C09A71C0DFCA2",
      "name": "Stride Staked LUNA",
      "display": "stluna",
      "symbol": "stLUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/AC9673E962A3B0A311CC9270BF75CE84E37BA713D2DC89B9DC755373B4BC3D15",
          "exponent": 0,
          "aliases": [
            "ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01"
          ]
        },
        {
          "denom": "stevmos",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AC9673E962A3B0A311CC9270BF75CE84E37BA713D2DC89B9DC755373B4BC3D15",
      "name": "Stride Staked EVMOS",
      "display": "stevmos",
      "symbol": "stEVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
        }
      ]
    },
    {
      "description": "nRide Token",
      "denom_units": [
        {
          "denom": "ibc/87C80087A0E7E92BFEE015670DFE6417A8470C88AB971DA2667CA25AA84CF8F6",
          "exponent": 0,
          "aliases": [
            "ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C"
          ]
        },
        {
          "denom": "nride",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/87C80087A0E7E92BFEE015670DFE6417A8470C88AB971DA2667CA25AA84CF8F6",
      "name": "nRide Token",
      "display": "nride",
      "symbol": "NRIDE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
        }
      ]
    },
    {
      "description": "The native staking token of 8ball.",
      "denom_units": [
        {
          "denom": "ibc/6B30E688C4C5FE4BBE38F5B433097F8BC71F8B7AE8DEF52FB7AE93D0A81726B4",
          "exponent": 0,
          "aliases": [
            "ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F"
          ]
        },
        {
          "denom": "ebl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6B30E688C4C5FE4BBE38F5B433097F8BC71F8B7AE8DEF52FB7AE93D0A81726B4",
      "name": "8ball",
      "display": "ebl",
      "symbol": "EBL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked ATOM",
      "denom_units": [
        {
          "denom": "ibc/A41C34F001A24873A07973A01F684C33619865335D27085D3C933D65AAC27BD8",
          "exponent": 0,
          "aliases": [
            "ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC"
          ]
        },
        {
          "denom": "qatom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A41C34F001A24873A07973A01F684C33619865335D27085D3C933D65AAC27BD8",
      "name": "Quicksilver Liquid Staked ATOM",
      "display": "qatom",
      "symbol": "qATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg"
        }
      ]
    },
    {
      "description": "Governance Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "ibc/B2F8F619BE07F632782B64E04CEEA0AB1F1BE5738B6525DC1862EAD8C9D47B15",
          "exponent": 0,
          "aliases": [
            "ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A"
          ]
        },
        {
          "denom": "harbor",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B2F8F619BE07F632782B64E04CEEA0AB1F1BE5738B6525DC1862EAD8C9D47B15",
      "name": "Harbor",
      "display": "harbor",
      "symbol": "HARBOR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked REGEN",
      "denom_units": [
        {
          "denom": "ibc/850630A3CA08929FC79A012A08660629677EF48FF9D5836170869EBBB5459295",
          "exponent": 0,
          "aliases": [
            "ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206"
          ]
        },
        {
          "denom": "qregen",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/850630A3CA08929FC79A012A08660629677EF48FF9D5836170869EBBB5459295",
      "name": "Quicksilver Liquid Staked Regen",
      "display": "qregen",
      "symbol": "qREGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg"
        }
      ]
    },
    {
      "description": "Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.",
      "denom_units": [
        {
          "denom": "ibc/E6FD35A98BA0C6613F43F88F6BF61B4A25540356430FD1D51A5AEE9BC10514AD",
          "exponent": 0,
          "aliases": [
            "ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6"
          ]
        },
        {
          "denom": "fox",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E6FD35A98BA0C6613F43F88F6BF61B4A25540356430FD1D51A5AEE9BC10514AD",
      "name": "Juno Fox",
      "display": "fox",
      "symbol": "FOX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
        }
      ]
    },
    {
      "description": "QCK - native token of Quicksilver",
      "denom_units": [
        {
          "denom": "ibc/5371EAE54EA3838073737F5B3043EE1433334867B83A21A4A4C8FFF140C29436",
          "exponent": 0,
          "aliases": [
            "ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D"
          ]
        },
        {
          "denom": "qck",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5371EAE54EA3838073737F5B3043EE1433334867B83A21A4A4C8FFF140C29436",
      "name": "Quicksilver",
      "display": "qck",
      "symbol": "QCK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
        }
      ]
    },
    {
      "description": "The native token of Arkhadian",
      "denom_units": [
        {
          "denom": "ibc/FC9D7F8BDAE354C895794116D0A54445D46943C61274280C23B7CA0236E8804C",
          "exponent": 0,
          "aliases": [
            "ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28"
          ]
        },
        {
          "denom": "ARKH",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FC9D7F8BDAE354C895794116D0A54445D46943C61274280C23B7CA0236E8804C",
      "name": "Arkhadian",
      "display": "ARKH",
      "symbol": "ARKH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "Quicksilver Liquid Staked OSMO",
      "denom_units": [
        {
          "denom": "ibc/D29856310BA37B6C09DB19D6265FD9B2A6A992F830B9924216D4F39A3702B1DE",
          "exponent": 0,
          "aliases": [
            "ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC"
          ]
        },
        {
          "denom": "qosmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D29856310BA37B6C09DB19D6265FD9B2A6A992F830B9924216D4F39A3702B1DE",
      "name": "Quicksilver Liquid Staked OSMO",
      "display": "qosmo",
      "symbol": "qOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg"
        }
      ]
    },
    {
      "description": "Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.",
      "denom_units": [
        {
          "denom": "ibc/DEF6D9AB35E6E12AF1AB857B4DD897A95F0ABB736D40DE9567C397673B391EE7",
          "exponent": 0,
          "aliases": [
            "ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9"
          ]
        },
        {
          "denom": "frienzies",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DEF6D9AB35E6E12AF1AB857B4DD897A95F0ABB736D40DE9567C397673B391EE7",
      "name": "Frienzies",
      "display": "frienzies",
      "symbol": "FRNZ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
        }
      ]
    },
    {
      "description": "The native token of Migaloo Chain",
      "denom_units": [
        {
          "denom": "ibc/9DE1492DE5BFFA3E1664CFFAA6F6D99BECC267BE9923BB9FF07D2E8E3C3C19CD",
          "exponent": 0,
          "aliases": [
            "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D"
          ]
        },
        {
          "denom": "whale",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9DE1492DE5BFFA3E1664CFFAA6F6D99BECC267BE9923BB9FF07D2E8E3C3C19CD",
      "name": "Migaloo",
      "display": "whale",
      "symbol": "WHALE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
        }
      ]
    },
    {
      "description": "Evmos Guardians governance token.",
      "denom_units": [
        {
          "denom": "ibc/6C837B77BCA2C08278F2E8D0B43626498FA2B20C14EBAB3DA9B4DF84FEF9F945",
          "exponent": 0,
          "aliases": [
            "ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA"
          ]
        },
        {
          "denom": "grdn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6C837B77BCA2C08278F2E8D0B43626498FA2B20C14EBAB3DA9B4DF84FEF9F945",
      "name": "Guardian",
      "display": "grdn",
      "symbol": "GRDN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
        }
      ]
    },
    {
      "description": "Mini Punks Token",
      "denom_units": [
        {
          "denom": "ibc/B3E3257F0B6906C9968459FC437811303FAF120805672DEB972B5E3CF960F27D",
          "exponent": 0,
          "aliases": [
            "ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E"
          ]
        },
        {
          "denom": "mnpu",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B3E3257F0B6906C9968459FC437811303FAF120805672DEB972B5E3CF960F27D",
      "name": "Mini Punks",
      "display": "mnpu",
      "symbol": "MNPU",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
        }
      ]
    },
    {
      "description": "Shiba Cosmos",
      "denom_units": [
        {
          "denom": "ibc/FBA362554F400EB288AD781F845996966DFD27632D6513102E59A327E5DE5BDD",
          "exponent": 0,
          "aliases": [
            "ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8"
          ]
        },
        {
          "denom": "shibac",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FBA362554F400EB288AD781F845996966DFD27632D6513102E59A327E5DE5BDD",
      "name": "ShibaCosmos",
      "display": "shibac",
      "symbol": "SHIBAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
        }
      ]
    },
    {
      "description": "Sikoba Governance Token",
      "denom_units": [
        {
          "denom": "ibc/4329DEEF9A4E948384087B6586F4ED18CDB20AF7428F0E088713C9C676520ACE",
          "exponent": 0,
          "aliases": [
            "ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E"
          ]
        },
        {
          "denom": "sikoba",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4329DEEF9A4E948384087B6586F4ED18CDB20AF7428F0E088713C9C676520ACE",
      "name": "Sikoba Token",
      "display": "sikoba",
      "symbol": "SKOJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
        }
      ]
    },
    {
      "description": "Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.",
      "denom_units": [
        {
          "denom": "ibc/B0CE99C744D726BFB620A007DA7858FEEB80CB4EE939F95DED63D05ABD2A7EE9",
          "exponent": 0,
          "aliases": [
            "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68"
          ]
        },
        {
          "denom": "nct",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B0CE99C744D726BFB620A007DA7858FEEB80CB4EE939F95DED63D05ABD2A7EE9",
      "name": "Nature Carbon Ton",
      "display": "nct",
      "symbol": "NCT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg"
        }
      ]
    },
    {
      "description": "Celestims",
      "denom_units": [
        {
          "denom": "ibc/F45DDEF9C4E55CF34DC27B5D3BEB3E4FBACC1544F976CB967675E205C2DB1196",
          "exponent": 0,
          "aliases": [
            "ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA"
          ]
        },
        {
          "denom": "clst",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F45DDEF9C4E55CF34DC27B5D3BEB3E4FBACC1544F976CB967675E205C2DB1196",
      "name": "Celestims",
      "display": "clst",
      "symbol": "CLST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
        }
      ]
    },
    {
      "description": "The First Doge on Osmosis",
      "denom_units": [
        {
          "denom": "ibc/8BEA4FE9D73E7CD9E0C0FBF91577E38E2A84CF5511470DFFE5103B9924E92117",
          "exponent": 0,
          "aliases": [
            "ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156"
          ]
        },
        {
          "denom": "osdoge",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/8BEA4FE9D73E7CD9E0C0FBF91577E38E2A84CF5511470DFFE5103B9924E92117",
      "name": "Osmosis Doge",
      "display": "osdoge",
      "symbol": "OSDOGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
        }
      ]
    },
    {
      "description": "Apemos",
      "denom_units": [
        {
          "denom": "ibc/52D7B2DEA414F27E1EA55F39718E0B61B2D768A832FE22CA92FB1AB1C36B9B6F",
          "exponent": 0,
          "aliases": [
            "ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D"
          ]
        },
        {
          "denom": "apemos",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/52D7B2DEA414F27E1EA55F39718E0B61B2D768A832FE22CA92FB1AB1C36B9B6F",
      "name": "Apemos",
      "display": "apemos",
      "symbol": "APEMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
        }
      ]
    },
    {
      "description": "Evmos Guardians' Invaders DAO token.",
      "denom_units": [
        {
          "denom": "ibc/BF2B2703337E9A4990207762856CB6B74013EF33E6F9E45E441008D98F0AEDDC",
          "exponent": 0,
          "aliases": [
            "ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54"
          ]
        },
        {
          "denom": "invdrs",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BF2B2703337E9A4990207762856CB6B74013EF33E6F9E45E441008D98F0AEDDC",
      "name": "Invaders",
      "display": "invdrs",
      "symbol": "INVDRS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
        }
      ]
    },
    {
      "description": "Doge Apr",
      "denom_units": [
        {
          "denom": "ibc/F104DF437E9B40594C49E006BCC893A5A240F205EC1836155ADF9B214DB5B187",
          "exponent": 0,
          "aliases": [
            "ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250"
          ]
        },
        {
          "denom": "doga",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F104DF437E9B40594C49E006BCC893A5A240F205EC1836155ADF9B214DB5B187",
      "name": "Doge Apr",
      "display": "doga",
      "symbol": "DOGA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
        }
      ]
    },
    {
      "description": "Catmos",
      "denom_units": [
        {
          "denom": "ibc/E9B0A40DDD6E1858A9B81678883B0C56EEFD82BB30ADA8A06A05D16DC95C7453",
          "exponent": 0,
          "aliases": [
            "ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835"
          ]
        },
        {
          "denom": "catmos",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E9B0A40DDD6E1858A9B81678883B0C56EEFD82BB30ADA8A06A05D16DC95C7453",
      "name": "Catmos",
      "display": "catmos",
      "symbol": "CATMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
        }
      ]
    },
    {
      "description": "Social Impact DAO providing showers, meals, and vehicles to the homeless",
      "denom_units": [
        {
          "denom": "ibc/088ECDCD47B36DE270F09EB7FA3E38A7E7AD4BEC02DEC5B4B3D01B412DEFCFB5",
          "exponent": 0,
          "aliases": [
            "ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A"
          ]
        },
        {
          "denom": "summit",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/088ECDCD47B36DE270F09EB7FA3E38A7E7AD4BEC02DEC5B4B3D01B412DEFCFB5",
      "name": "Summit",
      "display": "summit",
      "symbol": "SUMMIT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
        }
      ]
    },
    {
      "description": "The native staking token of OmniFlix Hub.",
      "denom_units": [
        {
          "denom": "ibc/52FAFF85171C76F18C78FDDBB324890F136EA5F32CBB527C7D7D9ED86DE88072",
          "exponent": 0,
          "aliases": [
            "ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F"
          ]
        },
        {
          "denom": "flix",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/52FAFF85171C76F18C78FDDBB324890F136EA5F32CBB527C7D7D9ED86DE88072",
      "name": "OmniFlix",
      "display": "flix",
      "symbol": "FLIX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
        }
      ]
    },
    {
      "description": "Spacer",
      "denom_units": [
        {
          "denom": "ibc/BD2B8FAB404BAF9C091F58D846D97BB52B6A2C93B35669040BD917228797B146",
          "exponent": 0,
          "aliases": [
            "ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C"
          ]
        },
        {
          "denom": "spacer",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BD2B8FAB404BAF9C091F58D846D97BB52B6A2C93B35669040BD917228797B146",
      "name": "Spacer",
      "display": "spacer",
      "symbol": "SPACER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
        }
      ]
    },
    {
      "description": "Light: LumenX community DAO treasury token",
      "denom_units": [
        {
          "denom": "ibc/65855A2B848878A39D59515854452D22E14FFB81569BD6AF4CDD260B49103409",
          "exponent": 0,
          "aliases": [
            "ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29"
          ]
        },
        {
          "denom": "light",
          "exponent": 9
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/65855A2B848878A39D59515854452D22E14FFB81569BD6AF4CDD260B49103409",
      "name": "LIGHT",
      "display": "light",
      "symbol": "LIGHT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
        }
      ]
    },
    {
      "description": "The native token cw20 for Silk on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/DE20E3B21203764D29EC18D642883655EC91C2559986A328AC9E25451DDE3951",
          "exponent": 0,
          "aliases": [
            "ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7"
          ]
        },
        {
          "denom": "silk",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DE20E3B21203764D29EC18D642883655EC91C2559986A328AC9E25451DDE3951",
      "name": "Silk",
      "display": "silk",
      "symbol": "SILK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
        }
      ]
    },
    {
      "description": "Mille: the 1000th token on osmosis",
      "denom_units": [
        {
          "denom": "ibc/FDF8B16BC1086861D4CEB4225800F1B64E06D7CA03089B09EE7AD364D5E6A5A7",
          "exponent": 0,
          "aliases": [
            "ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF"
          ]
        },
        {
          "denom": "mile",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FDF8B16BC1086861D4CEB4225800F1B64E06D7CA03089B09EE7AD364D5E6A5A7",
      "name": "Mille",
      "display": "mile",
      "symbol": "MILE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
        }
      ]
    },
    {
      "description": "Social Impact DAO dedicated to combatting food insecurity and malnutrition",
      "denom_units": [
        {
          "denom": "ibc/A428E51F82068EBDAE47220B687F0B0922C18B60F8F1B84CE176C46BE8388814",
          "exponent": 0,
          "aliases": [
            "ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B"
          ]
        },
        {
          "denom": "manna",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A428E51F82068EBDAE47220B687F0B0922C18B60F8F1B84CE176C46BE8388814",
      "name": "Manna",
      "display": "manna",
      "symbol": "MANNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
        }
      ]
    },
    {
      "description": "Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin's model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.",
      "denom_units": [
        {
          "denom": "ibc/45ADAB9DA99ACF7E4DA9024883D8AFE21060E02B216D9753B2E1E9B063478830",
          "exponent": 0,
          "aliases": [
            "ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D"
          ]
        },
        {
          "denom": "fil",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/45ADAB9DA99ACF7E4DA9024883D8AFE21060E02B216D9753B2E1E9B063478830",
      "name": "Filecoin",
      "display": "fil",
      "symbol": "FIL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg"
        }
      ]
    },
    {
      "description": "Void",
      "denom_units": [
        {
          "denom": "ibc/97D117ACEF24AD29D3A185B55EBB8054D30BE9D82AD9FA85D0DB907D3445251D",
          "exponent": 0,
          "aliases": [
            "ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960"
          ]
        },
        {
          "denom": "void",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/97D117ACEF24AD29D3A185B55EBB8054D30BE9D82AD9FA85D0DB907D3445251D",
      "name": "Void",
      "display": "void",
      "symbol": "VOID",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
        }
      ]
    },
    {
      "description": "The native token cw20 for Shade on Secret Network",
      "denom_units": [
        {
          "denom": "ibc/EF02727400B48D4ADA833CF207A3DE2AF0ADF8C912EDC3E4AAC01026D12EFF3C",
          "exponent": 0,
          "aliases": [
            "ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A"
          ]
        },
        {
          "denom": "shd",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EF02727400B48D4ADA833CF207A3DE2AF0ADF8C912EDC3E4AAC01026D12EFF3C",
      "name": "Shade",
      "display": "shd",
      "symbol": "SHD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg"
        }
      ]
    },
    {
      "description": "The native token of Bluzelle",
      "denom_units": [
        {
          "denom": "ibc/EE0E3B2E1F792D29AA21C6D728BB4C796B96CDF17AB88FCB828507D590509ECB",
          "exponent": 0,
          "aliases": [
            "ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8"
          ]
        },
        {
          "denom": "bnt",
          "exponent": 6,
          "aliases": [
            "blz"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EE0E3B2E1F792D29AA21C6D728BB4C796B96CDF17AB88FCB828507D590509ECB",
      "name": "Bluzelle",
      "display": "bnt",
      "symbol": "BLZ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg"
        }
      ],
      "keywords": [
        "bluzelle",
        "game"
      ]
    },
    {
      "description": "Native token of Arbitrum",
      "denom_units": [
        {
          "denom": "ibc/72953F463DC77F707FE180D38204750B009DB8692E53B8C69824D89C91441D42",
          "exponent": 0,
          "aliases": [
            "ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6"
          ]
        },
        {
          "denom": "arb",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/72953F463DC77F707FE180D38204750B009DB8692E53B8C69824D89C91441D42",
      "name": "Arbitrum",
      "display": "arb",
      "symbol": "ARB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg"
        }
      ]
    },
    {
      "description": "Silica",
      "denom_units": [
        {
          "denom": "ibc/CF78B2AD68667218F3AC314A944D6D64B90375640FF93F2EF095774DE77C1E4B",
          "exponent": 0,
          "aliases": [
            "ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07"
          ]
        },
        {
          "denom": "silica",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CF78B2AD68667218F3AC314A944D6D64B90375640FF93F2EF095774DE77C1E4B",
      "name": "Silica",
      "display": "silica",
      "symbol": "SLCA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
        }
      ]
    },
    {
      "description": "Pepec",
      "denom_units": [
        {
          "denom": "ibc/C4AFC66DF76FCB3B0390005E96C4098B127A7CB2A11CBBE3B55FD276A79750A7",
          "exponent": 0,
          "aliases": [
            "ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93"
          ]
        },
        {
          "denom": "pepec",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C4AFC66DF76FCB3B0390005E96C4098B127A7CB2A11CBBE3B55FD276A79750A7",
      "name": "Pepec",
      "display": "pepec",
      "symbol": "PEPEC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
        }
      ]
    },
    {
      "description": "",
      "denom_units": [
        {
          "denom": "ibc/3C1BC4C0ABF2F2990DEC8D90D6D5E31EE611BE4539F31BDC91F519AD282DA6AD",
          "exponent": 0,
          "aliases": [
            "ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3C1BC4C0ABF2F2990DEC8D90D6D5E31EE611BE4539F31BDC91F519AD282DA6AD",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/156AFFB3B97697C6AB8EB63B16110F3136E99D9947525598BB8A604D10E348F7",
          "exponent": 0,
          "aliases": [
            "factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx"
          ]
        },
        {
          "denom": "ibcx",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm",
      "base": "ibc/156AFFB3B97697C6AB8EB63B16110F3136E99D9947525598BB8A604D10E348F7",
      "name": "IBC Index",
      "display": "ibcx",
      "symbol": "IBCX",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg"
        }
      ],
      "coingecko_id": "ibc-index",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.",
      "denom_units": [
        {
          "denom": "ibc/75130317B7CD3EAFC5B4F1DE51F5182C6FE2FE44E732FD63056D6F8BEE4C5BC3",
          "exponent": 0,
          "aliases": [
            "ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A"
          ]
        },
        {
          "denom": "cbeth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/75130317B7CD3EAFC5B4F1DE51F5182C6FE2FE44E732FD63056D6F8BEE4C5BC3",
      "name": "Coinbase Wrapped Staked ETH",
      "display": "cbeth",
      "symbol": "cbETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
        }
      ]
    },
    {
      "description": "Rocket Pool is a decentralised Ethereum Proof of Stake pool.",
      "denom_units": [
        {
          "denom": "ibc/E98AB048EE0779D4FE10DADB1FB0CFAA4F3DFC5ED90EE594AF57A13E30D6781F",
          "exponent": 0,
          "aliases": [
            "ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222"
          ]
        },
        {
          "denom": "reth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E98AB048EE0779D4FE10DADB1FB0CFAA4F3DFC5ED90EE594AF57A13E30D6781F",
      "name": "Rocket Pool Ether",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
        }
      ]
    },
    {
      "description": "sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become's eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.",
      "denom_units": [
        {
          "denom": "ibc/AB2F5522CC107943491C4730BC66F18329213AAFB8D984761C6D58AC5232A020",
          "exponent": 0,
          "aliases": [
            "ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46"
          ]
        },
        {
          "denom": "sfrxeth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AB2F5522CC107943491C4730BC66F18329213AAFB8D984761C6D58AC5232A020",
      "name": "Staked Frax Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/390BBC019BC231BDA32E29B55195434C3E8F3BAF7E8B021CCA8DCCEBBCE33CA7",
          "exponent": 0,
          "aliases": [
            "ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C"
          ]
        },
        {
          "denom": "wsteth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/390BBC019BC231BDA32E29B55195434C3E8F3BAF7E8B021CCA8DCCEBBCE33CA7",
      "name": "Wrapped Lido Staked Ether (Axelar)",
      "display": "wsteth",
      "symbol": "wstETH.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg"
        }
      ]
    },
    {
      "description": "The native token of Gitopia",
      "denom_units": [
        {
          "denom": "ibc/F7784168C053804B5BE2DA3239FEEA0E38CD05AAE449D6C288916D7717F823EE",
          "exponent": 0,
          "aliases": [
            "ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3"
          ]
        },
        {
          "denom": "LORE",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F7784168C053804B5BE2DA3239FEEA0E38CD05AAE449D6C288916D7717F823EE",
      "name": "Gitopia",
      "display": "LORE",
      "symbol": "LORE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png"
        }
      ]
    },
    {
      "description": "Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling",
      "denom_units": [
        {
          "denom": "ibc/FA680B5A2870A8DF2BAAB9435F7082D1E4530ACCDAD66D3A165D30E5AAA0A7FB",
          "exponent": 0,
          "aliases": [
            "ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0"
          ]
        },
        {
          "denom": "roar",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FA680B5A2870A8DF2BAAB9435F7082D1E4530ACCDAD66D3A165D30E5AAA0A7FB",
      "name": "Lion DAO",
      "display": "roar",
      "symbol": "ROAR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/D24FAB4EC5D29CC2E6C0CA26EE356150A7552A498822E6EECEDCD93470BFA5A1",
          "exponent": 0,
          "aliases": [
            "ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F"
          ]
        },
        {
          "denom": "stumee",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D24FAB4EC5D29CC2E6C0CA26EE356150A7552A498822E6EECEDCD93470BFA5A1",
      "name": "Stride Staked UMEE",
      "display": "stumee",
      "symbol": "stUMEE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/1E9EFD936CD9A42F297483CC08E79C8080E29558825804424D3928A53D35B57D",
          "exponent": 0,
          "aliases": [
            "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx"
          ]
        },
        {
          "denom": "stibcx",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k",
      "base": "ibc/1E9EFD936CD9A42F297483CC08E79C8080E29558825804424D3928A53D35B57D",
      "name": "Staked IBCX",
      "display": "stibcx",
      "symbol": "stIBCX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "The native token of Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/EAE240F8AD5D02349BDEB1D73CC25D317CE8F693FED810A24FC211F90C5C1A68",
          "exponent": 0,
          "aliases": [
            "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782"
          ]
        },
        {
          "denom": "nls",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EAE240F8AD5D02349BDEB1D73CC25D317CE8F693FED810A24FC211F90C5C1A68",
      "name": "Nolus",
      "display": "nls",
      "symbol": "NLS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "nolus",
            "base_denom": "unls"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
        }
      ]
    },
    {
      "description": "Lion Cub DAO is a useless meme community DAO on Terra",
      "denom_units": [
        {
          "denom": "ibc/7A504ABA05132BE333BE60A7EAE25737D9DD1BCAB4223E2F602A75C6B86DC1F2",
          "exponent": 0,
          "aliases": [
            "ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3"
          ]
        },
        {
          "denom": "cub",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7A504ABA05132BE333BE60A7EAE25737D9DD1BCAB4223E2F602A75C6B86DC1F2",
      "name": "Lion Cub DAO",
      "display": "cub",
      "symbol": "CUB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
        }
      ]
    },
    {
      "description": "BLUE CUB DAO is a community DAO on Terra",
      "denom_units": [
        {
          "denom": "ibc/5581E47908FF0B8FB3054C92653470AF4DB81E284FD28EF5223BC02E15526118",
          "exponent": 0,
          "aliases": [
            "ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E"
          ]
        },
        {
          "denom": "blue",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/5581E47908FF0B8FB3054C92653470AF4DB81E284FD28EF5223BC02E15526118",
      "name": "BLUE CUB DAO",
      "display": "blue",
      "symbol": "BLUE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
        }
      ]
    },
    {
      "description": "The native token of Neutron chain.",
      "denom_units": [
        {
          "denom": "ibc/BABD0CE58C3F4670B3152394C23ABF8E7337DA779D448DE95E826DE06BE811E3",
          "exponent": 0,
          "aliases": [
            "ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682"
          ]
        },
        {
          "denom": "ntrn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BABD0CE58C3F4670B3152394C23ABF8E7337DA779D448DE95E826DE06BE811E3",
      "name": "Neutron",
      "display": "ntrn",
      "symbol": "NTRN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg"
        }
      ]
    },
    {
      "description": "An innovative DAO dedicated to housing the most vulnerable",
      "denom_units": [
        {
          "denom": "ibc/DA8B78889D3A70252C1404ACE2FFB39A75ED9713EE9368E14EF21B8D8BEA5BBD",
          "exponent": 0,
          "aliases": [
            "ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE"
          ]
        },
        {
          "denom": "casa",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DA8B78889D3A70252C1404ACE2FFB39A75ED9713EE9368E14EF21B8D8BEA5BBD",
      "name": "Casa",
      "display": "casa",
      "symbol": "CASA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
        }
      ]
    },
    {
      "description": "The native staking and governance token of Composable.",
      "denom_units": [
        {
          "denom": "ibc/AEFE4B470B072BB4E570B083E90CDF976DEACEA1109915CA53118B3DB0CA1253",
          "exponent": 0,
          "aliases": [
            "ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516"
          ]
        },
        {
          "denom": "pica",
          "exponent": 12
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AEFE4B470B072BB4E570B083E90CDF976DEACEA1109915CA53118B3DB0CA1253",
      "name": "Composable",
      "display": "pica",
      "symbol": "PICA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "picasso",
            "base_denom": "ppica"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
        }
      ]
    },
    {
      "description": "The native fee, governance, staking, and bonding token of the Polkadot platform.",
      "denom_units": [
        {
          "denom": "ibc/A9E11A117279BBF164A3DDCA213887E8A0EB14DF116BBBC06A7C4022B015552C",
          "exponent": 0,
          "aliases": [
            "ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C"
          ]
        },
        {
          "denom": "ksm",
          "exponent": 12
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A9E11A117279BBF164A3DDCA213887E8A0EB14DF116BBBC06A7C4022B015552C",
      "name": "Kusama",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
        }
      ]
    },
    {
      "description": "The native fee, governance, staking, and bonding token of the Polkadot platform.",
      "denom_units": [
        {
          "denom": "ibc/DE9BF7943F5F984700CA26FCDFFA436AA824792C08442BA49A86B7759430E317",
          "exponent": 0,
          "aliases": [
            "ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DE9BF7943F5F984700CA26FCDFFA436AA824792C08442BA49A86B7759430E317",
      "name": "Polkadot",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
        }
      ]
    },
    {
      "description": "The native token of Quasar",
      "denom_units": [
        {
          "denom": "ibc/3E6459EB0C9D353C2D68F82874B55498E11E473F14F1E479FD83F57DAE40867F",
          "exponent": 0,
          "aliases": [
            "ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477"
          ]
        },
        {
          "denom": "qsr",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3E6459EB0C9D353C2D68F82874B55498E11E473F14F1E479FD83F57DAE40867F",
      "name": "Quasar",
      "display": "qsr",
      "symbol": "QSR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "quasar",
            "base_denom": "uqsr"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png"
        }
      ]
    },
    {
      "description": "The native token of Archway network",
      "denom_units": [
        {
          "denom": "ibc/9B2034ED7543B3D47DF84974624AC133CF4F2A05B3E747CFD70D6DB14C1702A6",
          "exponent": 0,
          "aliases": [
            "ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85"
          ]
        },
        {
          "denom": "uarch",
          "exponent": 12
        },
        {
          "denom": "arch",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9B2034ED7543B3D47DF84974624AC133CF4F2A05B3E747CFD70D6DB14C1702A6",
      "name": "Archway",
      "display": "arch",
      "symbol": "ARCH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of Empower.",
      "denom_units": [
        {
          "denom": "ibc/A72C4D07234AA37FE1BB510C47660174ED0D42A21B01B40DE493B7E3534B1E7C",
          "exponent": 0,
          "aliases": [
            "ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38"
          ]
        },
        {
          "denom": "mpwr",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A72C4D07234AA37FE1BB510C47660174ED0D42A21B01B40DE493B7E3534B1E7C",
      "name": "EmpowerChain",
      "display": "mpwr",
      "symbol": "MPWR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg"
        }
      ]
    },
    {
      "description": "A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!",
      "denom_units": [
        {
          "denom": "ibc/B2695920634FCF46CB91C7E79A2E6E8103AFBB0A968F0F6D34179001DBA648C4",
          "exponent": 0,
          "aliases": [
            "ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E"
          ]
        },
        {
          "denom": "watr",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B2695920634FCF46CB91C7E79A2E6E8103AFBB0A968F0F6D34179001DBA648C4",
      "name": "WATR",
      "display": "watr",
      "symbol": "WATR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
        }
      ]
    },
    {
      "description": "The native utility token of the KYVE network.",
      "denom_units": [
        {
          "denom": "ibc/4CDAF32F6CFC057BEC55B534C1175F515F3C312419677DBFBC6497F3D6938A0F",
          "exponent": 0,
          "aliases": [
            "ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13"
          ]
        },
        {
          "denom": "kyve",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4CDAF32F6CFC057BEC55B534C1175F515F3C312419677DBFBC6497F3D6938A0F",
      "name": "KYVE",
      "display": "kyve",
      "symbol": "KYVE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg"
        }
      ]
    },
    {
      "description": "Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.",
      "denom_units": [
        {
          "denom": "ibc/DA8A1CBA4EE61F380822C6D95930E3E52E0CE252413C8C513F8319AB44313CA3",
          "exponent": 0,
          "aliases": [
            "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DA8A1CBA4EE61F380822C6D95930E3E52E0CE252413C8C513F8319AB44313CA3",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ]
    },
    {
      "description": "ERIS liquid staked OSMO",
      "denom_units": [
        {
          "denom": "ibc/BEFB9AB13AB43157A0AF6214AD4B1F565AC0CA0C1760B8337BE7B9E2996F7752",
          "exponent": 0,
          "aliases": [
            "factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO"
          ]
        },
        {
          "denom": "ampOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9",
      "base": "ibc/BEFB9AB13AB43157A0AF6214AD4B1F565AC0CA0C1760B8337BE7B9E2996F7752",
      "name": "ERIS Amplified OSMO",
      "display": "ampOSMO",
      "symbol": "ampOSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "The native staking token of Sei.",
      "denom_units": [
        {
          "denom": "ibc/AF1239B9628391B0E88A4ADD2FCEAF933AB68A352566042B59D56975ABF70B72",
          "exponent": 0,
          "aliases": [
            "ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D"
          ]
        },
        {
          "denom": "sei",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AF1239B9628391B0E88A4ADD2FCEAF933AB68A352566042B59D56975ABF70B72",
      "name": "Sei",
      "display": "sei",
      "symbol": "SEI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked SOMM",
      "denom_units": [
        {
          "denom": "ibc/EDB59CE7EC993B82761708F8FF81AE12582877D9E3C67B5D65189F9A06D22175",
          "exponent": 0,
          "aliases": [
            "ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208"
          ]
        },
        {
          "denom": "qsomm",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EDB59CE7EC993B82761708F8FF81AE12582877D9E3C67B5D65189F9A06D22175",
      "name": "Quicksilver Liquid Staked SOMM",
      "display": "qsomm",
      "symbol": "qSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Passage chain.",
      "denom_units": [
        {
          "denom": "ibc/E5AD786DF243D114BDB18045DE52EF1B2F373EC903B5D146C8C9FC32C5F7B664",
          "exponent": 0,
          "aliases": [
            "ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED"
          ]
        },
        {
          "denom": "pasg",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E5AD786DF243D114BDB18045DE52EF1B2F373EC903B5D146C8C9FC32C5F7B664",
      "name": "Passage",
      "display": "pasg",
      "symbol": "PASG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/24C3ADF87A7773EBAF7A69EA9A2D08A60F50AFEB47E802343AC16B6DF2CA2EE0",
          "exponent": 0,
          "aliases": [
            "ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B"
          ]
        },
        {
          "denom": "stsomm",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/24C3ADF87A7773EBAF7A69EA9A2D08A60F50AFEB47E802343AC16B6DF2CA2EE0",
      "name": "Stride Staked SOMM",
      "display": "stsomm",
      "symbol": "stSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
        }
      ]
    },
    {
      "description": "Solana (SOL) is the native asset of the Solana blockchain.",
      "denom_units": [
        {
          "denom": "ibc/B464F8B09FA4940B0F7B5596BF5F5767E30F33AF447E1B4A8F3154335FC9218E",
          "exponent": 0,
          "aliases": [
            "ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA"
          ]
        },
        {
          "denom": "wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B464F8B09FA4940B0F7B5596BF5F5767E30F33AF447E1B4A8F3154335FC9218E",
      "name": "Solana",
      "display": "wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8",
      "symbol": "SOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
        }
      ]
    },
    {
      "description": "The Official Bonk Inu token",
      "denom_units": [
        {
          "denom": "ibc/1182D489624B6AEF3888F35DA2BF35F6C205CE894C70A781E18108C9B361233A",
          "exponent": 0,
          "aliases": [
            "ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E"
          ]
        },
        {
          "denom": "wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5",
          "exponent": 5,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1182D489624B6AEF3888F35DA2BF35F6C205CE894C70A781E18108C9B361233A",
      "name": "Bonk",
      "display": "wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5",
      "symbol": "BONK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png"
        }
      ]
    },
    {
      "description": "Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi",
      "denom_units": [
        {
          "denom": "ibc/3D57F20E9B29E2AE623F19C718A6DF23ACF72490F196BD630FA168C188D7EC86",
          "exponent": 0,
          "aliases": [
            "ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C"
          ]
        },
        {
          "denom": "wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3D57F20E9B29E2AE623F19C718A6DF23ACF72490F196BD630FA168C188D7EC86",
      "name": "Tether USD (Wormhole)",
      "display": "wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6",
      "symbol": "USDT.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg"
        }
      ]
    },
    {
      "description": "Sui’s native asset is called SUI.",
      "denom_units": [
        {
          "denom": "ibc/901E0CAC22CBF31958FBFEE8A92DAAD8B2ACBF2E2FC9AD137CA78FEF1AF7C832",
          "exponent": 0,
          "aliases": [
            "ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5"
          ]
        },
        {
          "denom": "wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/901E0CAC22CBF31958FBFEE8A92DAAD8B2ACBF2E2FC9AD137CA78FEF1AF7C832",
      "name": "Sui",
      "display": "wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8",
      "symbol": "SUI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg"
        }
      ]
    },
    {
      "description": "Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.",
      "denom_units": [
        {
          "denom": "ibc/6A6957D57036292E75242F1FE4DBDA7A9642261CA98AE2DC93D07CC7481DDE18",
          "exponent": 0,
          "aliases": [
            "ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE"
          ]
        },
        {
          "denom": "wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6A6957D57036292E75242F1FE4DBDA7A9642261CA98AE2DC93D07CC7481DDE18",
      "name": "Aptos Coin",
      "display": "wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8",
      "symbol": "APT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg",
          "theme": {
            "dark_mode": true
          }
        }
      ]
    },
    {
      "description": "MantaDAO Governance Token",
      "denom_units": [
        {
          "denom": "ibc/56928FB0B5E4A190BFF2904CA9CFF7CA213929F6C3DF2BFB78F107B22AAB5045",
          "exponent": 0,
          "aliases": [
            "ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B"
          ]
        },
        {
          "denom": "mnta",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/56928FB0B5E4A190BFF2904CA9CFF7CA213929F6C3DF2BFB78F107B22AAB5045",
      "name": "MantaDAO",
      "display": "mnta",
      "symbol": "MNTA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/3FA842EA01B6AEDF4D0C2B873EE6F1AFA47FEF8A3C2F4FDF2427D470BC8BB615",
          "exponent": 0,
          "aliases": [
            "ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9"
          ]
        },
        {
          "denom": "dgl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3FA842EA01B6AEDF4D0C2B873EE6F1AFA47FEF8A3C2F4FDF2427D470BC8BB615",
      "name": "Licorice",
      "display": "dgl",
      "symbol": "DGL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
        }
      ]
    },
    {
      "description": "USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt",
      "denom_units": [
        {
          "denom": "ibc/D04244775EDE5A3FB166A672F3F1ADA756DB37C6C5CAFA1776E94450F3E3BFFF",
          "exponent": 0,
          "aliases": [
            "ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695"
          ]
        },
        {
          "denom": "wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D04244775EDE5A3FB166A672F3F1ADA756DB37C6C5CAFA1776E94450F3E3BFFF",
      "name": "USD Coin (Wormhole)",
      "display": "wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6",
      "symbol": "USDC.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg"
        }
      ]
    },
    {
      "description": "Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp",
      "denom_units": [
        {
          "denom": "ibc/6584E342A6FA783710F67D7862E99A36C1ECF85EF1D7A3A998B9D2CEDCB9DCD6",
          "exponent": 0,
          "aliases": [
            "ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC"
          ]
        },
        {
          "denom": "wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6584E342A6FA783710F67D7862E99A36C1ECF85EF1D7A3A998B9D2CEDCB9DCD6",
      "name": "Wrapped Ether (Wormhole)",
      "display": "wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8",
      "symbol": "wETH.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg"
        }
      ]
    },
    {
      "description": "USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.",
      "denom_units": [
        {
          "denom": "ibc/87011191A408E791269307E8EC1D506737C6B48AE539C1CBCB40E70A7F35185B",
          "exponent": 0,
          "aliases": [
            "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/87011191A408E791269307E8EC1D506737C6B48AE539C1CBCB40E70A7F35185B",
      "name": "USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.",
      "denom_units": [
        {
          "denom": "ibc/B197A705078E4D962C5B89860C277B6DB7AD8673CCB47FEFF7B21CB0D64AD144",
          "exponent": 0,
          "aliases": [
            "ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668"
          ]
        },
        {
          "denom": "YieldETH",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B197A705078E4D962C5B89860C277B6DB7AD8673CCB47FEFF7B21CB0D64AD144",
      "name": "Real Yield ETH",
      "display": "YieldETH",
      "symbol": "YieldETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "axelar",
            "base_denom": "yieldeth-wei"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
        }
      ]
    },
    {
      "description": "The native staking token of XPLA.",
      "denom_units": [
        {
          "denom": "ibc/FEA821DF0C72C9907B4607D3D7C042D2D762E821B754295A8D2CAF27C6F3FCB8",
          "exponent": 0,
          "aliases": [
            "ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8"
          ]
        },
        {
          "denom": "xpla",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FEA821DF0C72C9907B4607D3D7C042D2D762E821B754295A8D2CAF27C6F3FCB8",
      "name": "XPLA",
      "display": "xpla",
      "symbol": "XPLA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg"
        }
      ]
    },
    {
      "description": "OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.",
      "denom_units": [
        {
          "denom": "ibc/70759C89227D2E86759A43ADCE6325CEA02E8395A3081E472E1AAA3CAD2C790C",
          "exponent": 0,
          "aliases": [
            "ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6"
          ]
        },
        {
          "denom": "oin",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/70759C89227D2E86759A43ADCE6325CEA02E8395A3081E472E1AAA3CAD2C790C",
      "name": "OIN STORE OF VALUE",
      "display": "oin",
      "symbol": "OIN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png"
        }
      ]
    },
    {
      "description": "The token of Neokingdom DAO.",
      "denom_units": [
        {
          "denom": "ibc/B8B516E26D520603DF210C271677A9E473D34F1F6B0B13F3F26A1FE7D7CCF22C",
          "exponent": 0,
          "aliases": [
            "ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71"
          ]
        },
        {
          "denom": "neok",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B8B516E26D520603DF210C271677A9E473D34F1F6B0B13F3F26A1FE7D7CCF22C",
      "name": "Neokingdom DAO",
      "display": "neok",
      "symbol": "NEOK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg"
        }
      ]
    },
    {
      "description": "The native currency of the Realio Network.",
      "denom_units": [
        {
          "denom": "ibc/0A1C0AA26A52288C1E14714DE6162025C8B423CD4D250D91421CE985F5708DC4",
          "exponent": 0,
          "aliases": [
            "ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF"
          ]
        },
        {
          "denom": "rio",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0A1C0AA26A52288C1E14714DE6162025C8B423CD4D250D91421CE985F5708DC4",
      "name": "Realio Network",
      "display": "rio",
      "symbol": "RIO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg"
        }
      ]
    },
    {
      "description": "Membrane's CDP-style stablecoin called CDT",
      "denom_units": [
        {
          "denom": "ibc/DC7915A31A20F00D003982FFC246BE5D68514DC5E297AA4F4EB33ACD355CDDE9",
          "exponent": 0,
          "aliases": [
            "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt"
          ]
        },
        {
          "denom": "cdt",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/DC7915A31A20F00D003982FFC246BE5D68514DC5E297AA4F4EB33ACD355CDDE9",
      "name": "CDT Stablecoin",
      "display": "cdt",
      "symbol": "CDT",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg"
        }
      ],
      "coingecko_id": "collateralized-debt-token",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Membrane's protocol token",
      "denom_units": [
        {
          "denom": "ibc/31712E7B1FE50FA6ECA8657FCA27CC8515EE8DE2EE215DCB74FC86D7E88B6CF4",
          "exponent": 0,
          "aliases": [
            "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn"
          ]
        },
        {
          "denom": "mbrn",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/31712E7B1FE50FA6ECA8657FCA27CC8515EE8DE2EE215DCB74FC86D7E88B6CF4",
      "name": "Membrane",
      "display": "mbrn",
      "symbol": "MBRN",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg"
        }
      ],
      "coingecko_id": "membrane",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "The native token of SGE Network",
      "denom_units": [
        {
          "denom": "ibc/446ED84BD36F7CF67F407D1AB96E263AB994B87283BF43B2EFF0673FF6577C3D",
          "exponent": 0,
          "aliases": [
            "ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA"
          ]
        },
        {
          "denom": "sge",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/446ED84BD36F7CF67F407D1AB96E263AB994B87283BF43B2EFF0673FF6577C3D",
      "name": "SGE",
      "display": "sge",
      "symbol": "SGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the StaFi Hub.",
      "denom_units": [
        {
          "denom": "ibc/D2DABBE6413A508AC129C169FB47E960D07389F87EFEC3F8A0420A751FE6954D",
          "exponent": 0,
          "aliases": [
            "ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862"
          ]
        },
        {
          "denom": "fis",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D2DABBE6413A508AC129C169FB47E960D07389F87EFEC3F8A0420A751FE6954D",
      "name": "StaFi Hub",
      "display": "fis",
      "symbol": "FIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg"
        }
      ]
    },
    {
      "description": "A liquid staking representation of staked ATOMs",
      "denom_units": [
        {
          "denom": "ibc/48FB79C5B5089DD30A0422CA3A1F263F9AC7D05B246BEF46F1F4FDAA395C534E",
          "exponent": 0,
          "aliases": [
            "ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7"
          ]
        },
        {
          "denom": "ratom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/48FB79C5B5089DD30A0422CA3A1F263F9AC7D05B246BEF46F1F4FDAA395C534E",
      "name": "rATOM",
      "display": "ratom",
      "symbol": "rATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg"
        }
      ]
    },
    {
      "description": "The native token of ohhNFT.",
      "denom_units": [
        {
          "denom": "ibc/ABA7F1619436CB0E5FCF68BE5BE4915E877F39579B8CD59FC25820712DCBE0C5",
          "exponent": 0,
          "aliases": [
            "ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B"
          ]
        },
        {
          "denom": "strdst",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ABA7F1619436CB0E5FCF68BE5BE4915E877F39579B8CD59FC25820712DCBE0C5",
      "name": "Stardust STRDST",
      "display": "strdst",
      "symbol": "STRDST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Theta testnet version of the Dora Vota.",
      "denom_units": [
        {
          "denom": "ibc/2B91FCFC07A328F502EF294B07ADE612A58E2120DAC18CC36EA3E5B09A69E0FD",
          "exponent": 0,
          "aliases": [
            "ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A"
          ]
        },
        {
          "denom": "DORA",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2B91FCFC07A328F502EF294B07ADE612A58E2120DAC18CC36EA3E5B09A69E0FD",
      "name": "Dora Vota",
      "display": "DORA",
      "symbol": "DORA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png"
        }
      ]
    },
    {
      "description": "The native token of Coreum",
      "denom_units": [
        {
          "denom": "ibc/C6B48C9FB5C3173EA327DF9BA7B93A43C52CB4D91D3FE5561C03BDFF5B97584C",
          "exponent": 0,
          "aliases": [
            "ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65"
          ]
        },
        {
          "denom": "core",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C6B48C9FB5C3173EA327DF9BA7B93A43C52CB4D91D3FE5561C03BDFF5B97584C",
      "name": "Coreum",
      "display": "core",
      "symbol": "COREUM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
        }
      ],
      "keywords": [
        "dex",
        "staking",
        "wasm",
        "assets",
        "nft"
      ]
    },
    {
      "description": "",
      "denom_units": [
        {
          "denom": "ibc/4CF8EAD03EFACF3BAED403F0AFA941FC79B3FF14F86A8C5093A1D6C2D67E9D4E",
          "exponent": 0,
          "aliases": [
            "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877"
          ]
        },
        {
          "denom": "tia",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4CF8EAD03EFACF3BAED403F0AFA941FC79B3FF14F86A8C5093A1D6C2D67E9D4E",
      "name": "Celestia",
      "display": "tia",
      "symbol": "TIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "celestia",
            "base_denom": "utia"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
        }
      ]
    },
    {
      "description": "The native staking token of dYdX Protocol.",
      "denom_units": [
        {
          "denom": "ibc/632681B755D6EAB5493B7C68738B2EA34FFB24894279417492FC1DA2456A809E",
          "exponent": 0,
          "aliases": [
            "ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C"
          ]
        },
        {
          "denom": "dydx",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/632681B755D6EAB5493B7C68738B2EA34FFB24894279417492FC1DA2456A809E",
      "name": "dYdX Protocol",
      "display": "dydx",
      "symbol": "DYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "dydx",
            "base_denom": "adydx"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
        },
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg"
        }
      ]
    },
    {
      "description": "The native staking token of the Function X",
      "denom_units": [
        {
          "denom": "ibc/2F277A917518A866F5CC7FFD23DA6EF8A931D94AD04D6D34533C9BADF6A6942F",
          "exponent": 0,
          "aliases": [
            "ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9"
          ]
        },
        {
          "denom": "WFX",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2F277A917518A866F5CC7FFD23DA6EF8A931D94AD04D6D34533C9BADF6A6942F",
      "name": "f(x)Core",
      "display": "WFX",
      "symbol": "FX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg"
        }
      ]
    },
    {
      "description": "Bitcoin. On Cosmos.",
      "denom_units": [
        {
          "denom": "ibc/F29DC9D6FB8BB9689255EB1E51ACE875536362D893A571AD08E7A1E1F2A3C158",
          "exponent": 0,
          "aliases": [
            "ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F"
          ]
        },
        {
          "denom": "nbtc",
          "exponent": 14
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F29DC9D6FB8BB9689255EB1E51ACE875536362D893A571AD08E7A1E1F2A3C158",
      "name": "Nomic Bitcoin",
      "display": "nbtc",
      "symbol": "nBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "nomic",
            "base_denom": "usat"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg"
        }
      ]
    },
    {
      "description": "The native token of Nois",
      "denom_units": [
        {
          "denom": "ibc/3C4644DCF1744415A092AF2E1FB7A4A592D6FDF795A79D49298DD6B4CB2612DB",
          "exponent": 0,
          "aliases": [
            "ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90"
          ]
        },
        {
          "denom": "nois",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3C4644DCF1744415A092AF2E1FB7A4A592D6FDF795A79D49298DD6B4CB2612DB",
      "name": "Nois",
      "display": "nois",
      "symbol": "NOIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "nois",
            "base_denom": "unois"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
        }
      ],
      "keywords": [
        "nois",
        "randomness",
        "drand",
        "wasm"
      ]
    },
    {
      "description": "Margined Power Token sqOSMO",
      "denom_units": [
        {
          "denom": "ibc/BCD7073ACAE14273E542178AEC2ACEBE399C850D867F22D07D8252CF5BB680CD",
          "exponent": 0,
          "aliases": [
            "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo"
          ]
        },
        {
          "denom": "sqosmo",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/BCD7073ACAE14273E542178AEC2ACEBE399C850D867F22D07D8252CF5BB680CD",
      "name": "OSMO Squared",
      "display": "sqosmo",
      "symbol": "sqOSMO",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "The Revenue & Governance token of Unstake.fi",
      "denom_units": [
        {
          "denom": "ibc/42891A1B15439DC38857FBB07CFF8E51111394A728738EEC35AB86C1DB13FCE4",
          "exponent": 0,
          "aliases": [
            "ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7"
          ]
        },
        {
          "denom": "nstk",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/42891A1B15439DC38857FBB07CFF8E51111394A728738EEC35AB86C1DB13FCE4",
      "name": "Unstake Fi",
      "display": "nstk",
      "symbol": "NSTK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
        }
      ]
    },
    {
      "description": "ohhNFT LP token.",
      "denom_units": [
        {
          "denom": "ibc/4961062A4B13EBFC5756953964C1020B210B13D533D56DBE76E7F74625E11990",
          "exponent": 0,
          "aliases": [
            "ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02"
          ]
        },
        {
          "denom": "BRNCH",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4961062A4B13EBFC5756953964C1020B210B13D533D56DBE76E7F74625E11990",
      "name": "Branch",
      "display": "BRNCH",
      "symbol": "BRNCH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg"
        }
      ]
    },
    {
      "description": "wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.",
      "denom_units": [
        {
          "denom": "ibc/0A0EDDEA5942D77E50F8892773D68FFC96D372D9128DB4AD793339F83D74A911",
          "exponent": 0,
          "aliases": [
            "ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5"
          ]
        },
        {
          "denom": "wstETH",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0A0EDDEA5942D77E50F8892773D68FFC96D372D9128DB4AD793339F83D74A911",
      "name": "Wrapped Lido Staked Ether",
      "display": "wstETH",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        }
      ]
    },
    {
      "description": "Margined Power Token sqATOM",
      "denom_units": [
        {
          "denom": "ibc/3C6AF3EB5B03C7D56712FDEE2BC609A4F34856945B6A97DD5C2F18FDB054BFD4",
          "exponent": 0,
          "aliases": [
            "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom"
          ]
        },
        {
          "denom": "sqatom",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/3C6AF3EB5B03C7D56712FDEE2BC609A4F34856945B6A97DD5C2F18FDB054BFD4",
      "name": "ATOM Squared",
      "display": "sqatom",
      "symbol": "sqATOM",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Margined Power Token sqBTC",
      "denom_units": [
        {
          "denom": "ibc/9317FAAA26AD861ECDC28A97EC95AB906ADA92901B72C0789B2FB421DFC0A2BC",
          "exponent": 0,
          "aliases": [
            "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc"
          ]
        },
        {
          "denom": "sqbtc",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/9317FAAA26AD861ECDC28A97EC95AB906ADA92901B72C0789B2FB421DFC0A2BC",
      "name": "BTC Squared",
      "display": "sqbtc",
      "symbol": "sqBTC",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "QWOYN is the native governance token for Qwoyn Network",
      "denom_units": [
        {
          "denom": "ibc/D7956E35543A7AD02C38F4BA402928A8B49A01FF05869ED23E98E94A4F052E99",
          "exponent": 0,
          "aliases": [
            "ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D"
          ]
        },
        {
          "denom": "qwoyn",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D7956E35543A7AD02C38F4BA402928A8B49A01FF05869ED23E98E94A4F052E99",
      "name": "Qwoyn",
      "display": "qwoyn",
      "symbol": "QWOYN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
        }
      ]
    },
    {
      "description": "The liquid staking token of Bostrom",
      "denom_units": [
        {
          "denom": "ibc/39A0E6BDDB644786DA2CC02A0554B95F8C9B57543674FF9AF73C3E179B7B3FD9",
          "exponent": 0,
          "aliases": [
            "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/39A0E6BDDB644786DA2CC02A0554B95F8C9B57543674FF9AF73C3E179B7B3FD9",
      "name": "Bostrom Hydrogen",
      "display": "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
      "symbol": "HYDROGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg"
        }
      ]
    },
    {
      "description": "The staking token of Cyber",
      "denom_units": [
        {
          "denom": "ibc/6E9CBFB81F0E1137DC9B3C791A37089F420CE453E9304A756A0EBDD58C78A39E",
          "exponent": 0,
          "aliases": [
            "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6E9CBFB81F0E1137DC9B3C791A37089F420CE453E9304A756A0EBDD58C78A39E",
      "name": "Bostrom Tocyb",
      "display": "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
      "symbol": "TOCYB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg"
        }
      ]
    },
    {
      "description": "The resource token of Bostrom",
      "denom_units": [
        {
          "denom": "ibc/EBC77180389CAE40C88AE861F7110713267DF05487789BB2CD775A10575D9D30",
          "exponent": 0,
          "aliases": [
            "ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA"
          ]
        },
        {
          "denom": "volt",
          "exponent": 3,
          "aliases": [
            "volt"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EBC77180389CAE40C88AE861F7110713267DF05487789BB2CD775A10575D9D30",
      "name": "Bostrom Volt",
      "display": "volt",
      "symbol": "V",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg"
        }
      ]
    },
    {
      "description": "The resource token of Bostrom",
      "denom_units": [
        {
          "denom": "ibc/1B65C8CE9135BBEB94CA841C0C1A779186B44DACC2E22EB2EA0D5C2002C4BAFC",
          "exponent": 0,
          "aliases": [
            "ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424"
          ]
        },
        {
          "denom": "ampere",
          "exponent": 3,
          "aliases": [
            "ampere"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1B65C8CE9135BBEB94CA841C0C1A779186B44DACC2E22EB2EA0D5C2002C4BAFC",
      "name": "Bostrom Ampere",
      "display": "ampere",
      "symbol": "A",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg"
        }
      ]
    },
    {
      "description": "The native token of SOURCE Chain",
      "denom_units": [
        {
          "denom": "ibc/D2FD66F65F711F5842710465210F7E0A6DFF585FCF9BBB9FC8EBC3DFB776CAF8",
          "exponent": 0,
          "aliases": [
            "ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7"
          ]
        },
        {
          "denom": "source",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D2FD66F65F711F5842710465210F7E0A6DFF585FCF9BBB9FC8EBC3DFB776CAF8",
      "name": "Source",
      "display": "source",
      "symbol": "SOURCE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg"
        }
      ]
    },
    {
      "description": "Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth's oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth's oracle program combines publishers' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth's oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.",
      "denom_units": [
        {
          "denom": "ibc/0AD66676305D849665C239D09A8F7E8C655B5A15F8BD9E61CE913C714867FE93",
          "exponent": 0,
          "aliases": [
            "ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5"
          ]
        },
        {
          "denom": "wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6",
          "exponent": 6,
          "aliases": [
            "pyth"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0AD66676305D849665C239D09A8F7E8C655B5A15F8BD9E61CE913C714867FE93",
      "name": "Pyth Network",
      "display": "wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6",
      "symbol": "PYTH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg"
        }
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked OSMO",
      "denom_units": [
        {
          "denom": "ibc/F21EA8987207E41A502E0AD8F3784FAD6E5349BCB3D42BD24C3914E4E3C2DE64",
          "exponent": 0,
          "aliases": [
            "ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E"
          ]
        },
        {
          "denom": "stkosmo",
          "exponent": 6,
          "aliases": [
            "stk/osmo"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F21EA8987207E41A502E0AD8F3784FAD6E5349BCB3D42BD24C3914E4E3C2DE64",
      "name": "PSTAKE staked OSMO",
      "display": "stkosmo",
      "symbol": "stkOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "persistence",
            "base_denom": "stk/uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg"
        }
      ]
    },
    {
      "description": "Levana native token",
      "denom_units": [
        {
          "denom": "ibc/A4C5A8E2A53B9875755283D6131185E701960783F9D2322771B3A8AFE3E0205F",
          "exponent": 0,
          "aliases": [
            "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn"
          ]
        },
        {
          "denom": "lvn",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/A4C5A8E2A53B9875755283D6131185E701960783F9D2322771B3A8AFE3E0205F",
      "name": "Levana",
      "display": "lvn",
      "symbol": "LVN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png"
        }
      ],
      "coingecko_id": "levana-protocol",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Puppy",
      "denom_units": [
        {
          "denom": "ibc/CA310630349773D311791D0DCBF13E95A854A4EE99AFE3D63CD8BEB17E3EB7BD",
          "exponent": 0,
          "aliases": [
            "ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963"
          ]
        },
        {
          "denom": "puppy",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CA310630349773D311791D0DCBF13E95A854A4EE99AFE3D63CD8BEB17E3EB7BD",
      "name": "Puppy",
      "display": "puppy",
      "symbol": "PUPPY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png"
        }
      ],
      "keywords": [
        "osmosis_unstable"
      ]
    },
    {
      "description": "The cutest NEWT token on Neutron chain.",
      "denom_units": [
        {
          "denom": "ibc/B613B5B338B3EA6D824FEA299F6B47EAC3CF82F81EC77FCCE380CC870D25E5F1",
          "exponent": 0,
          "aliases": [
            "ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD"
          ]
        },
        {
          "denom": "newt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B613B5B338B3EA6D824FEA299F6B47EAC3CF82F81EC77FCCE380CC870D25E5F1",
      "name": "Newt",
      "display": "newt",
      "symbol": "NEWT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png"
        }
      ]
    },
    {
      "description": "MilkyWay's liquid staked TIA",
      "denom_units": [
        {
          "denom": "ibc/022A6D9857D63A9D9C772B0DDD68A6CC0434211C8D6019B9617532C5FE8BEB85",
          "exponent": 0,
          "aliases": [
            "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA"
          ]
        },
        {
          "denom": "milkTIA",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/022A6D9857D63A9D9C772B0DDD68A6CC0434211C8D6019B9617532C5FE8BEB85",
      "name": "milkTIA",
      "display": "milkTIA",
      "symbol": "milkTIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg"
        }
      ],
      "coingecko_id": "milkyway-staked-tia"
    },
    {
      "description": "ASH",
      "denom_units": [
        {
          "denom": "ibc/AAF6B1B4FEEF4CC4CD1E3427EC3EAF4C2FFE2E29DEB5B1059B2782251B61EFB9",
          "exponent": 0,
          "aliases": [
            "ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC"
          ]
        },
        {
          "denom": "ASH",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AAF6B1B4FEEF4CC4CD1E3427EC3EAF4C2FFE2E29DEB5B1059B2782251B61EFB9",
      "name": "ASH",
      "display": "ASH",
      "symbol": "ASH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
        }
      ]
    },
    {
      "description": "RAC",
      "denom_units": [
        {
          "denom": "ibc/2F35CB10F0C0359B3651C468CC636BE61D0D972D4AF8B5FE738FFB97D56F1B0F",
          "exponent": 0,
          "aliases": [
            "ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493"
          ]
        },
        {
          "denom": "RAC",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2F35CB10F0C0359B3651C468CC636BE61D0D972D4AF8B5FE738FFB97D56F1B0F",
      "name": "RAC",
      "display": "RAC",
      "symbol": "RAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
        }
      ]
    },
    {
      "description": "GUPPY",
      "denom_units": [
        {
          "denom": "ibc/57F3F820A39DAAA50C7E53CFF50961DF4DCF95258D5EFD8D8683AAEA2F767CF4",
          "exponent": 0,
          "aliases": [
            "ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D"
          ]
        },
        {
          "denom": "GUPPY",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/57F3F820A39DAAA50C7E53CFF50961DF4DCF95258D5EFD8D8683AAEA2F767CF4",
      "name": "GUPPY",
      "display": "GUPPY",
      "symbol": "GUPPY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Haqq Network",
      "denom_units": [
        {
          "denom": "ibc/7770BCDF82260C2BFBBA5DE78C783B2AD3EF9D20B6E69A7C24390ECA42D3FFED",
          "exponent": 0,
          "aliases": [
            "ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA"
          ]
        },
        {
          "denom": "ISLM",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7770BCDF82260C2BFBBA5DE78C783B2AD3EF9D20B6E69A7C24390ECA42D3FFED",
      "name": "Haqq Network",
      "display": "ISLM",
      "symbol": "ISLM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg"
        }
      ]
    },
    {
      "description": "$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world",
      "denom_units": [
        {
          "denom": "ibc/12FE368739067A7940D379B4561DCB1C271D7D6C8B50621E036757E270493AAB",
          "exponent": 0,
          "aliases": [
            "ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D"
          ]
        },
        {
          "denom": "autism",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/12FE368739067A7940D379B4561DCB1C271D7D6C8B50621E036757E270493AAB",
      "name": "Autism",
      "display": "autism",
      "symbol": "AUTISM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "injective",
            "base_denom": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.",
      "denom_units": [
        {
          "denom": "ibc/64D56CBF3726B9E76AC0F3FB82E3D3FC8F4DE1A958F236530C12FDDA1602119E",
          "exponent": 0,
          "aliases": [
            "ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99"
          ]
        },
        {
          "denom": "page",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/64D56CBF3726B9E76AC0F3FB82E3D3FC8F4DE1A958F236530C12FDDA1602119E",
      "name": "Page",
      "display": "page",
      "symbol": "PAGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "gravitybridge",
            "base_denom": "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
        }
      ]
    },
    {
      "description": "PURSE Token",
      "denom_units": [
        {
          "denom": "ibc/9F38481813B3FF86D05A324F26AFA0255704647A2C85D3489ABB8AA3553322BA",
          "exponent": 0,
          "aliases": [
            "ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519"
          ]
        },
        {
          "denom": "PURSE",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9F38481813B3FF86D05A324F26AFA0255704647A2C85D3489ABB8AA3553322BA",
      "name": "PURSE Token (Function X)",
      "display": "PURSE",
      "symbol": "PURSE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "binancesmartchain",
            "base_denom": "0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "The first meme coin on Injective. It’s a dog, but he has nunchucks",
      "denom_units": [
        {
          "denom": "ibc/3E1348A211CBED941A883F930CC3CC09DAEE5A0D2ED389660CA7DC0305A7F0D5",
          "exponent": 0,
          "aliases": [
            "ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3"
          ]
        },
        {
          "denom": "NINJA",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3E1348A211CBED941A883F930CC3CC09DAEE5A0D2ED389660CA7DC0305A7F0D5",
      "name": "Dog wif nunchucks",
      "display": "NINJA",
      "symbol": "NINJA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
        }
      ]
    },
    {
      "description": "Kleomedes Token",
      "denom_units": [
        {
          "denom": "ibc/3A6240AA1CE24432CF4109FA321E653AEAA3A4F019BBD3440EE146D7D789744A",
          "exponent": 0,
          "aliases": [
            "ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF"
          ]
        },
        {
          "denom": "kleo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3A6240AA1CE24432CF4109FA321E653AEAA3A4F019BBD3440EE146D7D789744A",
      "name": "Kleomedes",
      "display": "kleo",
      "symbol": "KLEO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
        }
      ]
    },
    {
      "description": "NYX Token (NYX) is the Nym Network's native token.",
      "denom_units": [
        {
          "denom": "ibc/A5B517664E5BD675B9313119921F84215154F3B86B42C855138DA004F8015DD9",
          "exponent": 0,
          "aliases": [
            "ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317"
          ]
        },
        {
          "denom": "nyx",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A5B517664E5BD675B9313119921F84215154F3B86B42C855138DA004F8015DD9",
      "name": "Nym",
      "display": "nyx",
      "symbol": "NYX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
      "denom_units": [
        {
          "denom": "ibc/F24FCAED8395CDD28FB6252613645809C09220D5A43BDA1859FEFF53B14CC607",
          "exponent": 0,
          "aliases": [
            "ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539"
          ]
        },
        {
          "denom": "nym",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F24FCAED8395CDD28FB6252613645809C09220D5A43BDA1859FEFF53B14CC607",
      "name": "NYM",
      "display": "nym",
      "symbol": "NYM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png"
        }
      ]
    },
    {
      "description": "has a hat",
      "denom_units": [
        {
          "denom": "ibc/221E7FB20AE685C4D8349D9A124498AC62F9033095D29CA9E9DB3F35BF778A9F",
          "exponent": 0,
          "aliases": [
            "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7"
          ]
        },
        {
          "denom": "achihuahuawifhat",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/221E7FB20AE685C4D8349D9A124498AC62F9033095D29CA9E9DB3F35BF778A9F",
      "name": "Chihuahuawifhat",
      "display": "achihuahuawifhat",
      "symbol": "BADDOG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
        }
      ]
    },
    {
      "description": "clownmaxxed store of value",
      "denom_units": [
        {
          "denom": "ibc/D330D98FE3A0131FA596DCE3BD04A50E08BB42732031F9C510EF56EDF4823707",
          "exponent": 0,
          "aliases": [
            "ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C"
          ]
        },
        {
          "denom": "circus",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D330D98FE3A0131FA596DCE3BD04A50E08BB42732031F9C510EF56EDF4823707",
      "name": "AtomEconomicZone69JaeKwonInu",
      "display": "circus",
      "symbol": "CIRCUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png"
        }
      ]
    },
    {
      "description": "Governance and utility token for the Junø Apes NFT platform on Juno",
      "denom_units": [
        {
          "denom": "ibc/C8E88D334814062FF0C0EF285DB021815344623E76BEB226C8A8C5F81641C9EE",
          "exponent": 0,
          "aliases": [
            "ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE"
          ]
        },
        {
          "denom": "jape",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C8E88D334814062FF0C0EF285DB021815344623E76BEB226C8A8C5F81641C9EE",
      "name": "Junø Apes",
      "display": "jape",
      "symbol": "JAPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
        }
      ]
    },
    {
      "description": "Woof",
      "denom_units": [
        {
          "denom": "ibc/878D5C5010210313448550223024305D0228A25FDEAFABFA88156B7A9E1037A3",
          "exponent": 0,
          "aliases": [
            "ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53"
          ]
        },
        {
          "denom": "WOOF",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/878D5C5010210313448550223024305D0228A25FDEAFABFA88156B7A9E1037A3",
      "name": "WOOF",
      "display": "WOOF",
      "symbol": "WOOF",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
        }
      ]
    },
    {
      "description": "The native coin of Sneaky Productions.",
      "denom_units": [
        {
          "denom": "ibc/2EB8346E660842F2FBCB3BB6DEDD2859676C63344997A0273F3924597BED381A",
          "exponent": 0,
          "aliases": [
            "ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F"
          ]
        },
        {
          "denom": "sneaky",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2EB8346E660842F2FBCB3BB6DEDD2859676C63344997A0273F3924597BED381A",
      "name": "Sneaky Productions",
      "display": "sneaky",
      "symbol": "SNEAKY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "stargaze",
            "base_denom": "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/6E5BF71FE1BEBBD648C8A7CB7A790AEF0081120B2E5746E6563FC95764716D61",
          "exponent": 0,
          "aliases": [
            "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743",
      "base": "ibc/6E5BF71FE1BEBBD648C8A7CB7A790AEF0081120B2E5746E6563FC95764716D61",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
        }
      ]
    },
    {
      "description": "Baddest coin on Cosmos",
      "denom_units": [
        {
          "denom": "ibc/01D05575C2FDD245DAF3FC43C6A343F9A971614D05C7F02D6211C64FAFAA5CB8",
          "exponent": 0,
          "aliases": [
            "ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23"
          ]
        },
        {
          "denom": "bad",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/01D05575C2FDD245DAF3FC43C6A343F9A971614D05C7F02D6211C64FAFAA5CB8",
      "name": "Badcoin",
      "display": "bad",
      "symbol": "BAD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png"
        }
      ]
    },
    {
      "description": "Signal Art and Gaming on Juno",
      "denom_units": [
        {
          "denom": "ibc/E774D683717027D7A57803BBA2C0E9BB1DD710E50317F39D41B3489115BF6AFC",
          "exponent": 0,
          "aliases": [
            "ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A"
          ]
        },
        {
          "denom": "sgnl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E774D683717027D7A57803BBA2C0E9BB1DD710E50317F39D41B3489115BF6AFC",
      "name": "Signal",
      "display": "sgnl",
      "symbol": "SGNL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
        }
      ]
    },
    {
      "description": "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      "denom_units": [
        {
          "denom": "ibc/F382B8A097638B5383E49C7BEE593415A16544BFF13BF82F8F76D16C1D34E85F",
          "exponent": 0,
          "aliases": [
            "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          ]
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3",
      "base": "ibc/F382B8A097638B5383E49C7BEE593415A16544BFF13BF82F8F76D16C1D34E85F",
      "name": "WOSMO",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Margined Power Token sqTIA",
      "denom_units": [
        {
          "denom": "ibc/9A7A33C82020F0C4526CB1D1CC702B7AFDDC46C0EA15B67AB4F25C18503BEEE5",
          "exponent": 0,
          "aliases": [
            "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia"
          ]
        },
        {
          "denom": "sqtia",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "base": "ibc/9A7A33C82020F0C4526CB1D1CC702B7AFDDC46C0EA15B67AB4F25C18503BEEE5",
      "name": "TIA Squared",
      "display": "sqtia",
      "symbol": "sqTIA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "The deflationary utility token of the Apollo DAO project",
      "denom_units": [
        {
          "denom": "ibc/2D91C333BB9F0E08EB97D35005E3E8486C2780471AE6AF80C6527FF144A83794",
          "exponent": 0,
          "aliases": [
            "ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1"
          ]
        },
        {
          "denom": "apollo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2D91C333BB9F0E08EB97D35005E3E8486C2780471AE6AF80C6527FF144A83794",
      "name": "Apollo DAO",
      "display": "apollo",
      "symbol": "APOLLO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked DYDX",
      "denom_units": [
        {
          "denom": "ibc/B25DDFC300FE9210020528DEC230F1CBF003F6914DC1D4E804287AEC155EAABD",
          "exponent": 0,
          "aliases": [
            "ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C"
          ]
        },
        {
          "denom": "stDYDX",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B25DDFC300FE9210020528DEC230F1CBF003F6914DC1D4E804287AEC155EAABD",
      "name": "Stride Staked DYDX",
      "display": "stDYDX",
      "symbol": "stDYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked TIA",
      "denom_units": [
        {
          "denom": "ibc/CA6305C4DAE28A7B51766824D6FA841E0AD88FFBBC25BD2EB308E53B4F043518",
          "exponent": 0,
          "aliases": [
            "ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9"
          ]
        },
        {
          "denom": "stTIA",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CA6305C4DAE28A7B51766824D6FA841E0AD88FFBBC25BD2EB308E53B4F043518",
      "name": "Stride Staked TIA",
      "display": "stTIA",
      "symbol": "stTIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg"
        }
      ]
    },
    {
      "description": "GLTO-ERC20 on injective",
      "denom_units": [
        {
          "denom": "ibc/1E751586D08F51AF8B9FC6DD6ABF62811F6036E25127EDB514D7985FB0C331D0",
          "exponent": 0,
          "aliases": [
            "ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7"
          ]
        },
        {
          "denom": "glto",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1E751586D08F51AF8B9FC6DD6ABF62811F6036E25127EDB514D7985FB0C331D0",
      "name": "Gelotto (Injective)",
      "display": "glto",
      "symbol": "injective.GLTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ]
    },
    {
      "description": "The native governance and staking token of the Dymension Hub",
      "denom_units": [
        {
          "denom": "ibc/3E039E6F6B10D2062BB1C248E1C8D14FC0D380D809D4BAD216C835323C2AF839",
          "exponent": 0,
          "aliases": [
            "ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110"
          ]
        },
        {
          "denom": "dym",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3E039E6F6B10D2062BB1C248E1C8D14FC0D380D809D4BAD216C835323C2AF839",
      "name": "Dymension Hub",
      "display": "dym",
      "symbol": "DYM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
        }
      ]
    },
    {
      "description": "Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.",
      "denom_units": [
        {
          "denom": "ibc/A414C61D3BDBDA63B1A645922793DF3A5B6007AE96DB26DDA8E020826B3C7681",
          "exponent": 0,
          "aliases": [
            "factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR"
          ]
        },
        {
          "denom": "RAPTR",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo1279xudevmf5cw83vkhglct7jededp86k90k2le",
      "base": "ibc/A414C61D3BDBDA63B1A645922793DF3A5B6007AE96DB26DDA8E020826B3C7681",
      "name": "RAPTR",
      "display": "RAPTR",
      "symbol": "RAPTR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png"
        }
      ],
      "keywords": [
        "osmosis_unlisted"
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/1E98702978389A5127537E7B8351B4FA49B5FAC4E32F15B0757CDE1A5D9276D0",
          "exponent": 0,
          "aliases": [
            "ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43"
          ]
        },
        {
          "denom": "avalanche-usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1E98702978389A5127537E7B8351B4FA49B5FAC4E32F15B0757CDE1A5D9276D0",
      "name": "Wormhole USDC(Avalanche)",
      "display": "avalanche-usdc",
      "symbol": "avalanche.USDC.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg"
      }
    },
    {
      "description": "Sail DAO Token",
      "denom_units": [
        {
          "denom": "ibc/0E326E0BEDE1238C88EF5B26C42473B5CCE824C6733000A41A46D292D4A2B50B",
          "exponent": 0,
          "aliases": [
            "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail"
          ]
        },
        {
          "denom": "sail",
          "exponent": 6
        }
      ],
      "base": "ibc/0E326E0BEDE1238C88EF5B26C42473B5CCE824C6733000A41A46D292D4A2B50B",
      "name": "Sail",
      "display": "sail",
      "symbol": "SAIL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    },
    {
      "description": "Nomic's native token.",
      "denom_units": [
        {
          "denom": "ibc/E8D6F7132FA68E9EA60C452F6075339080AD8EB668B5AF93E57C14FEF4672C44",
          "exponent": 0,
          "aliases": [
            "ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C"
          ]
        },
        {
          "denom": "nom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E8D6F7132FA68E9EA60C452F6075339080AD8EB668B5AF93E57C14FEF4672C44",
      "name": "Nomic",
      "display": "nomic",
      "symbol": "nomic.NOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "nomic",
            "base_denom": "unom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg"
      }
    },
    {
      "description": "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      "denom_units": [
        {
          "denom": "ibc/3A80FD3FE108FD8E47A9FD139411637449542EF03C92DA51A95782188D05DF6F",
          "exponent": 0,
          "aliases": [
            "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID"
          ]
        },
        {
          "denom": "BADKID",
          "exponent": 6
        }
      ],
      "type_asset": "sdk.coin",
      "address": "osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8",
      "base": "ibc/3A80FD3FE108FD8E47A9FD139411637449542EF03C92DA51A95782188D05DF6F",
      "name": "BADKID",
      "display": "BADKID",
      "symbol": "BADKID",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-550",
            "base_denom": "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-5"
          }
        }
      ]
    }
  ]
};
export default assets;
    