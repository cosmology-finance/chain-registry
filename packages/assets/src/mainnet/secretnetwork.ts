import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "secretnetwork",
  "assets": [
    {
      "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
      "denom_units": [
        {
          "denom": "ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C",
          "exponent": 0,
          "aliases": [
            "ubld"
          ]
        },
        {
          "denom": "bld",
          "exponent": 6
        }
      ],
      "base": "ibc/CDEA201B61DF09C2456A91A60A87856796E6B40FAF41FC64E3482D4EF07DE26C",
      "name": "Agoric",
      "display": "bld",
      "symbol": "BLD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg"
      },
      "coingecko_id": "agoric",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ubld",
            "chain_name": "agoric"
          },
          "chain": {
            "channel_id": "channel-51"
          }
        }
      ]
    },
    {
      "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
      "denom_units": [
        {
          "denom": "ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414",
          "exponent": 0,
          "aliases": [
            "uist"
          ]
        },
        {
          "denom": "ist",
          "exponent": 6
        }
      ],
      "base": "ibc/5BE3E5E08E949BDF29EE93E81BF2CBD66347C86CE3D5D99A6E6FB487E62D8414",
      "name": "Inter Stable Token",
      "display": "ist",
      "symbol": "IST",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
      },
      "coingecko_id": "inter-stable-token",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "uist",
            "chain_name": "agoric"
          },
          "chain": {
            "channel_id": "channel-51"
          }
        }
      ]
    },
    {
      "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "denom_units": [
        {
          "denom": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
          "exponent": 0,
          "aliases": [
            "uakt"
          ]
        },
        {
          "denom": "akt",
          "exponent": 6
        }
      ],
      "base": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
      "name": "Akash Network",
      "display": "akt",
      "symbol": "AKT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      },
      "coingecko_id": "akash-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-43",
            "base_denom": "uakt",
            "chain_name": "akash"
          },
          "chain": {
            "channel_id": "channel-21"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on Akash",
      "denom_units": [
        {
          "denom": "ibc/DA182B98898DA7F51325771FD7889D5B16C78F948D8DEE333DB34F95E5A2C0B5",
          "exponent": 0,
          "aliases": [
            "ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DA182B98898DA7F51325771FD7889D5B16C78F948D8DEE333DB34F95E5A2C0B5",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-43",
            "base_denom": "ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5",
            "chain_name": "akash"
          },
          "chain": {
            "channel_id": "channel-21"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "The native staking and governance token of Andromeda",
      "denom_units": [
        {
          "denom": "ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1",
          "exponent": 0,
          "aliases": [
            "uandr"
          ]
        },
        {
          "denom": "andr",
          "exponent": 6
        }
      ],
      "coingecko_id": "andromeda-2",
      "base": "ibc/55D94A32095A766971637425D998AAABF8357A1ABCB1CAC8614887BE51BF1FB1",
      "name": "Andr",
      "display": "andr",
      "symbol": "ANDR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-2",
            "base_denom": "uandr",
            "chain_name": "andromeda"
          },
          "chain": {
            "channel_id": "channel-97"
          }
        }
      ]
    },
    {
      "description": "The native token of Archway network",
      "denom_units": [
        {
          "denom": "ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618",
          "exponent": 0,
          "aliases": [
            "aarch"
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
      "base": "ibc/64C032841EC8FEDFEA08C89B1AE8CEB5D616533C7CFC02158B83F221D8AE5618",
      "name": "Archway",
      "display": "arch",
      "symbol": "ARCH",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
      },
      "coingecko_id": "archway",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-21",
            "base_denom": "aarch",
            "chain_name": "archway"
          },
          "chain": {
            "channel_id": "channel-84"
          }
        }
      ]
    },
    {
      "description": "The first memecoin on osmosis.",
      "denom_units": [
        {
          "denom": "ibc/63BAC1AFC85BF55FC834337E3705E5AF253EAD3018C0CE4EB8179F1AFBCF6292",
          "exponent": 0,
          "aliases": [
            "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278"
          ]
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/63BAC1AFC85BF55FC834337E3705E5AF253EAD3018C0CE4EB8179F1AFBCF6292",
      "name": "Wosmo",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-21",
            "base_denom": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
            "chain_name": "archway"
          },
          "chain": {
            "channel_id": "channel-84"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png"
      }
    },
    {
      "description": "The native token of Vidulum",
      "denom_units": [
        {
          "denom": "ibc/552E4B8912D950AD3D75A491E756C53D95167DAAA4A319BF193CD569075EA880",
          "exponent": 0,
          "aliases": [
            "ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1"
          ]
        },
        {
          "denom": "vdl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/552E4B8912D950AD3D75A491E756C53D95167DAAA4A319BF193CD569075EA880",
      "name": "Vidulum",
      "display": "vdl",
      "symbol": "VDL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-21",
            "base_denom": "ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1",
            "chain_name": "archway"
          },
          "chain": {
            "channel_id": "channel-84"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "vidulum",
            "base_denom": "uvdl"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
        }
      ]
    },
    {
      "description": "The native token of Axelar",
      "denom_units": [
        {
          "denom": "ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E",
          "exponent": 0,
          "aliases": [
            "uaxl"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6
        }
      ],
      "base": "ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E",
      "name": "Axelar",
      "display": "axl",
      "symbol": "AXL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      },
      "coingecko_id": "axelar",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "uaxl",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ]
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/CD7B6B7D85FDF5F72A78E806BCFB8060B561EEF27677B111E0A610626056451E",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "base": "ibc/CD7B6B7D85FDF5F72A78E806BCFB8060B561EEF27677B111E0A610626056451E",
      "name": "USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "uusdc",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "coingecko_id": "axlusdc",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Frax's fractional-algorithmic stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/C22245B8F7F154020A352A2721421218CD251B013B21954FBB6A5D7B655D88F6",
          "exponent": 0,
          "aliases": [
            "frax-wei"
          ]
        },
        {
          "denom": "frax",
          "exponent": 18
        }
      ],
      "base": "ibc/C22245B8F7F154020A352A2721421218CD251B013B21954FBB6A5D7B655D88F6",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "frax-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      "description": "Dai stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/8161CB553A9AF7494CA20237CD7A52027409AA1A3B55A37F968CCE99C7C5BDF2",
          "exponent": 0,
          "aliases": [
            "dai-wei"
          ]
        },
        {
          "denom": "dai",
          "exponent": 18
        }
      ],
      "base": "ibc/8161CB553A9AF7494CA20237CD7A52027409AA1A3B55A37F968CCE99C7C5BDF2",
      "name": "Dai Stablecoin",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "dai-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg"
        }
      ]
    },
    {
      "description": "Tether's USD stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/BFB5BBB93D43AC6458BA9C8871B3F3FE5D4B81301A1BEA2BDA2297C1D6A5D47F",
          "exponent": 0,
          "aliases": [
            "uusdt"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "base": "ibc/BFB5BBB93D43AC6458BA9C8871B3F3FE5D4B81301A1BEA2BDA2297C1D6A5D47F",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "uusdt",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg"
        }
      ]
    },
    {
      "description": "Wrapped Ether on Axelar",
      "denom_units": [
        {
          "denom": "ibc/3665ACBA97B115133C35F060DB67E9671035E9ED48B2FC9140260C122D0C4E03",
          "exponent": 0,
          "aliases": [
            "weth-wei"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "base": "ibc/3665ACBA97B115133C35F060DB67E9671035E9ED48B2FC9140260C122D0C4E03",
      "name": "Wrapped Ether",
      "display": "weth",
      "symbol": "WETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "weth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ]
    },
    {
      "description": "Wrapped Bitcoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/1B26C5CEE7509C05EDFB4AED90997C84A4F9E8DCED7E544C8D2C630486686405",
          "exponent": 0,
          "aliases": [
            "wbtc-satoshi"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8
        }
      ],
      "base": "ibc/1B26C5CEE7509C05EDFB4AED90997C84A4F9E8DCED7E544C8D2C630486686405",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wbtc-satoshi",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ]
    },
    {
      "description": "Aave on Axelar",
      "denom_units": [
        {
          "denom": "ibc/C59C40DF5B210194B7E6E0652978967975374A0849DD30583006BDEFFB59312B",
          "exponent": 0,
          "aliases": [
            "aave-wei"
          ]
        },
        {
          "denom": "aave",
          "exponent": 18
        }
      ],
      "base": "ibc/C59C40DF5B210194B7E6E0652978967975374A0849DD30583006BDEFFB59312B",
      "name": "Aave",
      "display": "aave",
      "symbol": "AAVE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "aave-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      ]
    },
    {
      "description": "ApeCoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/DFE7E0AE42D8D58D7D06D9D6538C66F4090B793CC3766B69A6A0F0DE25F00413",
          "exponent": 0,
          "aliases": [
            "ape-wei"
          ]
        },
        {
          "denom": "ape",
          "exponent": 18
        }
      ],
      "base": "ibc/DFE7E0AE42D8D58D7D06D9D6538C66F4090B793CC3766B69A6A0F0DE25F00413",
      "name": "ApeCoin",
      "display": "ape",
      "symbol": "APE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ape-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      ]
    },
    {
      "description": "Axie Infinity Shard on Axelar",
      "denom_units": [
        {
          "denom": "ibc/7A90E412F1C37262762E7BF61342FA206A1A6F7D226181CCD0507782C61C4A9A",
          "exponent": 0,
          "aliases": [
            "axs-wei"
          ]
        },
        {
          "denom": "axs",
          "exponent": 18
        }
      ],
      "base": "ibc/7A90E412F1C37262762E7BF61342FA206A1A6F7D226181CCD0507782C61C4A9A",
      "name": "Axie Infinity Shard",
      "display": "axs",
      "symbol": "AXS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "axs-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        }
      ]
    },
    {
      "description": "Chainlink on Axelar",
      "denom_units": [
        {
          "denom": "ibc/E7B98666AD9E785812DE11447FBA1FF2BDE74CDB49BBBB6D150A7DCD971A502E",
          "exponent": 0,
          "aliases": [
            "link-wei"
          ]
        },
        {
          "denom": "link",
          "exponent": 18
        }
      ],
      "base": "ibc/E7B98666AD9E785812DE11447FBA1FF2BDE74CDB49BBBB6D150A7DCD971A502E",
      "name": "Chainlink",
      "display": "link",
      "symbol": "LINK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "link-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      "description": "Maker on Axelar",
      "denom_units": [
        {
          "denom": "ibc/C37FA4F2EE90032E5648573E6C56511B1DBC9936BD9FA27DBD673E9E9D7728CF",
          "exponent": 0,
          "aliases": [
            "mkr-wei"
          ]
        },
        {
          "denom": "mkr",
          "exponent": 18
        }
      ],
      "base": "ibc/C37FA4F2EE90032E5648573E6C56511B1DBC9936BD9FA27DBD673E9E9D7728CF",
      "name": "Maker",
      "display": "mkr",
      "symbol": "MKR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "mkr-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      "description": "Rai Reflex Index on Axelar",
      "denom_units": [
        {
          "denom": "ibc/18EF59597C5230BFAE79EBEE4248556298A4FDB5B0DA8AAAD54C247B0011998B",
          "exponent": 0,
          "aliases": [
            "rai-wei"
          ]
        },
        {
          "denom": "rai",
          "exponent": 18
        }
      ],
      "base": "ibc/18EF59597C5230BFAE79EBEE4248556298A4FDB5B0DA8AAAD54C247B0011998B",
      "name": "Rai Reflex Index",
      "display": "rai",
      "symbol": "RAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "rai-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      ]
    },
    {
      "description": "Shiba Inu on Axelar",
      "denom_units": [
        {
          "denom": "ibc/32D4AEE974D7B47A96BC539C796A38AA6CF65B3B2C36FDA621A326DC08E736D5",
          "exponent": 0,
          "aliases": [
            "shib-wei"
          ]
        },
        {
          "denom": "shib",
          "exponent": 18
        }
      ],
      "base": "ibc/32D4AEE974D7B47A96BC539C796A38AA6CF65B3B2C36FDA621A326DC08E736D5",
      "name": "Shiba Inu",
      "display": "shib",
      "symbol": "SHIB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "shib-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      ]
    },
    {
      "description": "Lido Staked Ether on Axelar",
      "denom_units": [
        {
          "denom": "ibc/25FE726817716360DC551E7BB648D3BE44F4130C710C1BC68C4B777A9A3EEDD0",
          "exponent": 0,
          "aliases": [
            "steth-wei"
          ]
        },
        {
          "denom": "steth",
          "exponent": 18
        }
      ],
      "base": "ibc/25FE726817716360DC551E7BB648D3BE44F4130C710C1BC68C4B777A9A3EEDD0",
      "name": "Lido Staked Ether",
      "display": "steth",
      "symbol": "stETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "steth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        }
      ]
    },
    {
      "description": "Uniswap on Axelar",
      "denom_units": [
        {
          "denom": "ibc/A68DABF68FD9B27FA921C984DFB9B646478C68C0A8DF6E19AA2C0DD3CF2469F8",
          "exponent": 0,
          "aliases": [
            "uni-wei"
          ]
        },
        {
          "denom": "uni",
          "exponent": 18
        }
      ],
      "base": "ibc/A68DABF68FD9B27FA921C984DFB9B646478C68C0A8DF6E19AA2C0DD3CF2469F8",
      "name": "Uniswap",
      "display": "uni",
      "symbol": "UNI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "uni-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        }
      ]
    },
    {
      "description": "Chain on Axelar",
      "denom_units": [
        {
          "denom": "ibc/8EEF67E351D187781488147142FE79C947E28715CB659038F4071F3D5D483354",
          "exponent": 0,
          "aliases": [
            "xcn-wei"
          ]
        },
        {
          "denom": "xcn",
          "exponent": 18
        }
      ],
      "base": "ibc/8EEF67E351D187781488147142FE79C947E28715CB659038F4071F3D5D483354",
      "name": "Chain",
      "display": "xcn",
      "symbol": "XCN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "xcn-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        }
      ]
    },
    {
      "description": "Wrapped Polkadot on Axelar",
      "denom_units": [
        {
          "denom": "ibc/C1B6DD96E2344095412DE3CD11FF0DE78572C671AC7EBFEFC18D54EBF2D7DCA7",
          "exponent": 0,
          "aliases": [
            "dot-planck"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "base": "ibc/C1B6DD96E2344095412DE3CD11FF0DE78572C671AC7EBFEFC18D54EBF2D7DCA7",
      "name": "Wrapped Polkadot",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "dot-planck",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
        }
      ]
    },
    {
      "description": "Wrapped Moonbeam on Axelar",
      "denom_units": [
        {
          "denom": "ibc/A79A703A34F0F6F3316FBF80D31F2D1070C0B61F0945DA91D89D0F0923243B60",
          "exponent": 0,
          "aliases": [
            "wglmr-wei"
          ]
        },
        {
          "denom": "wglmr",
          "exponent": 18
        }
      ],
      "base": "ibc/A79A703A34F0F6F3316FBF80D31F2D1070C0B61F0945DA91D89D0F0923243B60",
      "name": "Wrapped Moonbeam",
      "display": "wglmr",
      "symbol": "WGLMR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wglmr-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
        }
      ]
    },
    {
      "description": "Wrapped Matic on Axelar",
      "denom_units": [
        {
          "denom": "ibc/044FB7DDE7236498107023152F9F235E5DB50D9E999761CB3D4CF8C217F938F6",
          "exponent": 0,
          "aliases": [
            "wmatic-wei"
          ]
        },
        {
          "denom": "wmatic",
          "exponent": 18
        }
      ],
      "base": "ibc/044FB7DDE7236498107023152F9F235E5DB50D9E999761CB3D4CF8C217F938F6",
      "name": "Wrapped Matic",
      "display": "wmatic",
      "symbol": "WMATIC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wmatic-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        }
      ]
    },
    {
      "description": "Wrapped BNB on Axelar",
      "denom_units": [
        {
          "denom": "ibc/4870D3BE3BD3C44C7069588BEC579928D399D983E9D02F0113A4878DAF135F0A",
          "exponent": 0,
          "aliases": [
            "wbnb-wei"
          ]
        },
        {
          "denom": "wbnb",
          "exponent": 18
        }
      ],
      "base": "ibc/4870D3BE3BD3C44C7069588BEC579928D399D983E9D02F0113A4878DAF135F0A",
      "name": "Wrapped BNB",
      "display": "wbnb",
      "symbol": "WBNB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wbnb-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
        }
      ]
    },
    {
      "description": "Binance USD on Axelar.",
      "denom_units": [
        {
          "denom": "ibc/ABC6463CAA1EA8C15167DBD278C82B1E6193D9D7847DEC458DE87E12A5BE978E",
          "exponent": 0,
          "aliases": [
            "busd-wei"
          ]
        },
        {
          "denom": "busd",
          "exponent": 18
        }
      ],
      "base": "ibc/ABC6463CAA1EA8C15167DBD278C82B1E6193D9D7847DEC458DE87E12A5BE978E",
      "name": "Binance USD",
      "display": "busd",
      "symbol": "BUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "busd-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      "description": "Wrapped AVAX on Axelar.",
      "denom_units": [
        {
          "denom": "ibc/045E01C8D691C2E404F6D2CCBB7722A8ED511F0818E180E029143D58E72EA5F7",
          "exponent": 0,
          "aliases": [
            "wavax-wei"
          ]
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "base": "ibc/045E01C8D691C2E404F6D2CCBB7722A8ED511F0818E180E029143D58E72EA5F7",
      "name": "Wrapped AVAX",
      "display": "avax",
      "symbol": "WAVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wavax-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
        }
      ]
    },
    {
      "description": "Wrapped FTM on Axelar.",
      "denom_units": [
        {
          "denom": "ibc/6B9DEBE62EBA182F2AD66E1CEAE506B8F3046F86968F938DC797438014622D85",
          "exponent": 0,
          "aliases": [
            "wftm-wei"
          ]
        },
        {
          "denom": "ftm",
          "exponent": 18
        }
      ],
      "base": "ibc/6B9DEBE62EBA182F2AD66E1CEAE506B8F3046F86968F938DC797438014622D85",
      "name": "Wrapped FTM",
      "display": "ftm",
      "symbol": "WFTM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wftm-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
        }
      ]
    },
    {
      "description": "Circle's stablecoin from Polygon on Axelar",
      "denom_units": [
        {
          "denom": "ibc/64549E1102F3257C55DBA0F02FA9CF00A6EBBFECDAC31202CBD14D19EF63F7E1",
          "exponent": 0,
          "aliases": [
            "polygon-uusdc"
          ]
        },
        {
          "denom": "polygon-usdc",
          "exponent": 6
        }
      ],
      "base": "ibc/64549E1102F3257C55DBA0F02FA9CF00A6EBBFECDAC31202CBD14D19EF63F7E1",
      "name": "USD Coin from Polygon",
      "display": "polygon-usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "polygon-uusdc",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Circle's stablecoin from Avalanche on Axelar",
      "denom_units": [
        {
          "denom": "ibc/65B848F3B851F251CEA8429AAF4908DC00933ABA6A0628B680762EDAC4322280",
          "exponent": 0,
          "aliases": [
            "avalanche-uusdc"
          ]
        },
        {
          "denom": "avalanche-usdc",
          "exponent": 6
        }
      ],
      "base": "ibc/65B848F3B851F251CEA8429AAF4908DC00933ABA6A0628B680762EDAC4322280",
      "name": "USD Coin from Avalanche",
      "display": "avalanche-usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "avalanche-uusdc",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Wrapped FIL on Axelar",
      "denom_units": [
        {
          "denom": "ibc/5641EAC324DADD2C59ABB0E9E4F8C74763AD377EAC1BB43E02E849A5AC343084",
          "exponent": 0,
          "aliases": [
            "wfil-wei"
          ]
        },
        {
          "denom": "fil",
          "exponent": 18
        }
      ],
      "base": "ibc/5641EAC324DADD2C59ABB0E9E4F8C74763AD377EAC1BB43E02E849A5AC343084",
      "name": "Wrapped FIL from Filecoin",
      "display": "fil",
      "symbol": "axlFIL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wfil-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg"
        }
      ]
    },
    {
      "description": "Arbitrum on Axelar",
      "denom_units": [
        {
          "denom": "ibc/FFEB0AEBC009ECA744CA62E3A1EE58FA163B20A8C51C7B972970793EC11FF750",
          "exponent": 0,
          "aliases": [
            "arb-wei"
          ]
        },
        {
          "denom": "arb",
          "exponent": 18
        }
      ],
      "base": "ibc/FFEB0AEBC009ECA744CA62E3A1EE58FA163B20A8C51C7B972970793EC11FF750",
      "name": "Arbitrum",
      "display": "arb",
      "symbol": "ARB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "arb-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
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
      "denom_units": [
        {
          "denom": "ibc/C513CEBEE2440947DFBCFC11CD8FBAD8A15D5415949EB676849DD4A2ABD428D1",
          "exponent": 0,
          "aliases": [
            "pepe-wei"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 18
        }
      ],
      "base": "ibc/C513CEBEE2440947DFBCFC11CD8FBAD8A15D5415949EB676849DD4A2ABD428D1",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "pepe-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/6FEB4911852BA5F9E5CBDB557C1EEAAD94FC2F3DB2A333BA6F7FC790E383D4F8",
          "exponent": 0,
          "aliases": [
            "cbeth-wei"
          ]
        },
        {
          "denom": "cbeth",
          "exponent": 18
        }
      ],
      "base": "ibc/6FEB4911852BA5F9E5CBDB557C1EEAAD94FC2F3DB2A333BA6F7FC790E383D4F8",
      "name": "Coinbase Wrapped Staked ETH",
      "display": "cbeth",
      "symbol": "cbETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "cbeth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xbe9895146f7af43049ca1c1ae358b0541ea49704"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/8F051098A3B77D7BFA0E4F6C6A68A0E8857AC6C00A36414B0F98A12CEE31BCC6",
          "exponent": 0,
          "aliases": [
            "reth-wei"
          ]
        },
        {
          "denom": "reth",
          "exponent": 18
        }
      ],
      "base": "ibc/8F051098A3B77D7BFA0E4F6C6A68A0E8857AC6C00A36414B0F98A12CEE31BCC6",
      "name": "Rocket Pool Ether",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "reth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xae78736cd615f374d3085123a210448e74fc6393"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/120E171BDE0E4BF1BF351D5A741C5C60D49921866C3C421C9F435392C9F412F4",
          "exponent": 0,
          "aliases": [
            "sfrxeth-wei"
          ]
        },
        {
          "denom": "sfrxeth",
          "exponent": 18
        }
      ],
      "base": "ibc/120E171BDE0E4BF1BF351D5A741C5C60D49921866C3C421C9F435392C9F412F4",
      "name": "Staked Frax Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "sfrxeth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xac3e018457b222d93114458476f3e3416abbe38f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/D690CBA4D218BDECACC696182D938F5898D76A1DFAEA4BC9FAAAC93AFBFFAFAB",
          "exponent": 0,
          "aliases": [
            "wsteth-wei"
          ]
        },
        {
          "denom": "wsteth",
          "exponent": 18
        }
      ],
      "base": "ibc/D690CBA4D218BDECACC696182D938F5898D76A1DFAEA4BC9FAAAC93AFBFFAFAB",
      "name": "Wrapped Lido Staked Ether",
      "display": "wsteth",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "wsteth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/5A269250DE181DD85E24D029A1CE0FF239E0BB85C7F59D8EE421DA30443FCDCF",
          "exponent": 0,
          "aliases": [
            "yieldeth-wei"
          ]
        },
        {
          "denom": "YieldETH",
          "exponent": 18
        }
      ],
      "base": "ibc/5A269250DE181DD85E24D029A1CE0FF239E0BB85C7F59D8EE421DA30443FCDCF",
      "name": "Real Yield Eth",
      "display": "YieldETH",
      "symbol": "YieldETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "yieldeth-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/5CBA3CC9A04EDE8C7E8EC623F5909E04E1564E291AE5E58180B13B01908D60B2",
          "exponent": 0,
          "aliases": [
            "ox-wei"
          ]
        },
        {
          "denom": "ox",
          "exponent": 18
        }
      ],
      "base": "ibc/5CBA3CC9A04EDE8C7E8EC623F5909E04E1564E291AE5E58180B13B01908D60B2",
      "name": "Open Exchange Token",
      "display": "ox",
      "symbol": "OX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-12",
            "base_denom": "ox-wei",
            "chain_name": "axelar"
          },
          "chain": {
            "channel_id": "channel-20"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg"
      }
    },
    {
      "description": "",
      "denom_units": [
        {
          "denom": "ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB",
          "exponent": 0,
          "aliases": [
            "utia"
          ]
        },
        {
          "denom": "tia",
          "exponent": 6
        }
      ],
      "base": "ibc/8E31B43C53FA68AFEB6A0A4A61DA67F357A6BD757F745A3CB65B97CD9D9DA1BB",
      "name": "Celestia",
      "display": "tia",
      "symbol": "TIA",
      "coingecko_id": "celestia",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-14",
            "base_denom": "utia",
            "chain_name": "celestia"
          },
          "chain": {
            "channel_id": "channel-91"
          }
        }
      ]
    },
    {
      "description": "The native token of Chihuahua Chain",
      "denom_units": [
        {
          "denom": "ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E",
          "exponent": 0,
          "aliases": [
            "uhuahua"
          ]
        },
        {
          "denom": "huahua",
          "exponent": 6
        }
      ],
      "base": "ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E",
      "name": "Chihuahua",
      "display": "huahua",
      "symbol": "HUAHUA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
      },
      "coingecko_id": "chihuahua-token",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uhuahua",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "has a hat",
      "denom_units": [
        {
          "denom": "ibc/3E8411A53722F1A6C7EF6D85188506245C259318F3633177DD02F75A50ABE04B",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat"
          ]
        },
        {
          "denom": "achihuahuawifhat",
          "exponent": 6
        }
      ],
      "base": "ibc/3E8411A53722F1A6C7EF6D85188506245C259318F3633177DD02F75A50ABE04B",
      "name": "Chihuahuawifhat",
      "display": "achihuahuawifhat",
      "symbol": "BADDOG",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "Woof",
      "denom_units": [
        {
          "denom": "ibc/E63DEB45A1F3073EE6663881A17869033441CEEB453D7C85985C7005879A1B8B",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof"
          ]
        },
        {
          "denom": "WOOF",
          "exponent": 6
        }
      ],
      "base": "ibc/E63DEB45A1F3073EE6663881A17869033441CEEB453D7C85985C7005879A1B8B",
      "name": "WOOF",
      "display": "WOOF",
      "symbol": "WOOF",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "Tacos",
      "denom_units": [
        {
          "denom": "ibc/0C1D244B983A5C8A8605926D0C6644FC6AC07647C1629CB3F88BBDD6809086F3",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos"
          ]
        },
        {
          "denom": "TACOS",
          "exponent": 6
        }
      ],
      "base": "ibc/0C1D244B983A5C8A8605926D0C6644FC6AC07647C1629CB3F88BBDD6809086F3",
      "name": "TACOS",
      "display": "TACOS",
      "symbol": "TACOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "Weed",
      "denom_units": [
        {
          "denom": "ibc/D02ECE6F745AEDA5E3626D41B48AE38659F0D20ECF7F2419BD53620301C138BE",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed"
          ]
        },
        {
          "denom": "WEED",
          "exponent": 6
        }
      ],
      "base": "ibc/D02ECE6F745AEDA5E3626D41B48AE38659F0D20ECF7F2419BD53620301C138BE",
      "name": "WEED",
      "display": "WEED",
      "symbol": "WEED",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "Bulldog",
      "denom_units": [
        {
          "denom": "ibc/942E80D65A88B373046F6E6A7F8293E4B7E78CFDB6E8D2B733A9ED76AF981005",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog"
          ]
        },
        {
          "denom": "BDOG",
          "exponent": 6
        }
      ],
      "base": "ibc/942E80D65A88B373046F6E6A7F8293E4B7E78CFDB6E8D2B733A9ED76AF981005",
      "name": "BDOG",
      "display": "BDOG",
      "symbol": "BDOG",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "CaneCorso",
      "denom_units": [
        {
          "denom": "ibc/947F4FF13E635F73F3A5D1BF9CB90C5994A9FA7845409FB33C552C97C7CC3B9F",
          "exponent": 0,
          "aliases": [
            "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso"
          ]
        },
        {
          "denom": "CORSO",
          "exponent": 6
        }
      ],
      "base": "ibc/947F4FF13E635F73F3A5D1BF9CB90C5994A9FA7845409FB33C552C97C7CC3B9F",
      "name": "CORSO",
      "display": "CORSO",
      "symbol": "CORSO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso",
            "chain_name": "chihuahua"
          },
          "chain": {
            "channel_id": "channel-11"
          }
        }
      ]
    },
    {
      "description": "Native Token of Comdex Protocol",
      "denom_units": [
        {
          "denom": "ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491",
          "exponent": 0,
          "aliases": [
            "ucmdx"
          ]
        },
        {
          "denom": "cmdx",
          "exponent": 6
        }
      ],
      "base": "ibc/DFBDE185EC916F4933DF02D3A282FA801BC9EE77FE0B768FB517407730105491",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      },
      "coingecko_id": "comdex",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-65",
            "base_denom": "ucmdx",
            "chain_name": "comdex"
          },
          "chain": {
            "channel_id": "channel-63"
          }
        }
      ]
    },
    {
      "description": "Governance Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829",
          "exponent": 0,
          "aliases": [
            "uharbor"
          ]
        },
        {
          "denom": "harbor",
          "exponent": 6
        }
      ],
      "base": "ibc/33E509EAF84ED39E60F746CCAF89130B386A11FDD3B76A77377FB3946BC9D829",
      "name": "Harbor",
      "display": "harbor",
      "symbol": "HARBOR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
      },
      "coingecko_id": "harbor-2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-65",
            "base_denom": "uharbor",
            "chain_name": "comdex"
          },
          "chain": {
            "channel_id": "channel-63"
          }
        }
      ]
    },
    {
      "description": "Stable Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86",
          "exponent": 0,
          "aliases": [
            "ucmst"
          ]
        },
        {
          "denom": "cmst",
          "exponent": 6
        }
      ],
      "base": "ibc/B8CA0EBE2C9D8800390CE4256DF6C194CF6740CB0AEE140EEE60C1CE288CDB86",
      "name": "CMST",
      "display": "cmst",
      "symbol": "CMST",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
      },
      "coingecko_id": "composite",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-65",
            "base_denom": "ucmst",
            "chain_name": "comdex"
          },
          "chain": {
            "channel_id": "channel-63"
          }
        }
      ]
    },
    {
      "description": "The native staking and governance token of Composable.",
      "denom_units": [
        {
          "denom": "ibc/7E8714E75B6A303CB074576F08D6FB3FB064C7E936F59AFE273CBB05DECE7151",
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
      "base": "ibc/7E8714E75B6A303CB074576F08D6FB3FB064C7E936F59AFE273CBB05DECE7151",
      "name": "Pica",
      "display": "pica",
      "symbol": "PICA",
      "coingecko_id": "picasso",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-14",
            "base_denom": "ppica",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-80"
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
          "denom": "ibc/B776D45AA5F28ACD82F3E03D258B8386DA7D0622120991110849A6C40FEB911E",
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
      "base": "ibc/B776D45AA5F28ACD82F3E03D258B8386DA7D0622120991110849A6C40FEB911E",
      "name": "KSM",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-14",
            "base_denom": "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-80"
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
          "denom": "ibc/78F0983CCA5E2A9E4950CBF4BECDAD16289D70B5A093BEE272A1FD05EC2E8E82",
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
      "base": "ibc/78F0983CCA5E2A9E4950CBF4BECDAD16289D70B5A093BEE272A1FD05EC2E8E82",
      "name": "DOT",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-14",
            "base_denom": "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-80"
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
          "denom": "ibc/41C9B4FC4406379E4E67C7E01CB8A9FE321E5C7E1D8E881B3D6ADE6AB15EDF8D",
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
      "base": "ibc/41C9B4FC4406379E4E67C7E01CB8A9FE321E5C7E1D8E881B3D6ADE6AB15EDF8D",
      "name": "USDT",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-14",
            "base_denom": "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265",
            "chain_name": "composable"
          },
          "chain": {
            "channel_id": "channel-80"
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
      "description": "The native token of Coreum",
      "denom_units": [
        {
          "denom": "ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C",
          "exponent": 0,
          "aliases": [
            "ucore"
          ]
        },
        {
          "denom": "core",
          "exponent": 6
        }
      ],
      "base": "ibc/3EA9790C386BD0FE422C9F9DB4BE162C130B9200D6D8245472F66E27AA82789C",
      "name": "Coreum",
      "display": "core",
      "symbol": "COREUM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
      },
      "coingecko_id": "coreum",
      "keywords": [
        "dex",
        "staking",
        "wasm",
        "assets",
        "nft"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-25",
            "base_denom": "ucore",
            "chain_name": "coreum"
          },
          "chain": {
            "channel_id": "channel-101"
          }
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Cosmos Hub.",
      "denom_units": [
        {
          "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
          "exponent": 0,
          "aliases": [
            "uatom"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "coingecko_id": "cosmos",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-235",
            "base_denom": "uatom",
            "chain_name": "cosmoshub"
          },
          "chain": {
            "channel_id": "channel-0"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on the Cosmos Hub",
      "denom_units": [
        {
          "denom": "ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB",
          "exponent": 0,
          "aliases": [
            "ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-235",
            "base_denom": "ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0",
            "chain_name": "cosmoshub"
          },
          "chain": {
            "channel_id": "channel-0"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "FX on Cosmos Hub",
      "denom_units": [
        {
          "denom": "ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE",
          "exponent": 0,
          "aliases": [
            "ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE",
      "name": "Function X",
      "display": "FX",
      "symbol": "FX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-235",
            "base_denom": "ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729",
            "chain_name": "cosmoshub"
          },
          "chain": {
            "channel_id": "channel-0"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "fxcore",
            "base_denom": "FX"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg"
      }
    },
    {
      "description": "The native token of Crescent",
      "denom_units": [
        {
          "denom": "ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE",
          "exponent": 0,
          "aliases": [
            "ucre"
          ]
        },
        {
          "denom": "cre",
          "exponent": 6
        }
      ],
      "base": "ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE",
      "name": "Crescent",
      "display": "cre",
      "symbol": "CRE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
      },
      "coingecko_id": "crescent-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ucre",
            "chain_name": "crescent"
          },
          "chain": {
            "channel_id": "channel-24"
          }
        }
      ]
    },
    {
      "description": "The bonded token of Crescent",
      "denom_units": [
        {
          "denom": "ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5",
          "exponent": 0,
          "aliases": [
            "ubcre"
          ]
        },
        {
          "denom": "bcre",
          "exponent": 6
        }
      ],
      "base": "ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5",
      "name": "Bonded Crescent",
      "display": "bcre",
      "symbol": "bCRE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
      },
      "coingecko_id": "liquid-staking-crescent",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ubcre",
            "chain_name": "crescent"
          },
          "chain": {
            "channel_id": "channel-24"
          }
        }
      ]
    },
    {
      "description": "The native governance and staking token of the Dymension Hub",
      "denom_units": [
        {
          "denom": "ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE",
          "exponent": 0,
          "aliases": [
            "adym"
          ]
        },
        {
          "denom": "dym",
          "exponent": 18
        }
      ],
      "base": "ibc/6F3AC063885E799319E49C0F5D984C5DB1FC6542558225B87653023342DDD2CE",
      "name": "Dymension",
      "display": "dym",
      "symbol": "DYM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
      },
      "coingecko_id": "dymension",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-35",
            "base_denom": "adym",
            "chain_name": "dymension"
          },
          "chain": {
            "channel_id": "channel-130"
          }
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Evmos Hub",
      "denom_units": [
        {
          "denom": "ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59",
          "exponent": 0,
          "aliases": [
            "aevmos"
          ]
        },
        {
          "denom": "evmos",
          "exponent": 18
        }
      ],
      "base": "ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59",
      "name": "Evmos",
      "display": "evmos",
      "symbol": "EVMOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      },
      "coingecko_id": "evmos",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-15",
            "base_denom": "aevmos",
            "chain_name": "evmos"
          },
          "chain": {
            "channel_id": "channel-18"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on Evmos",
      "denom_units": [
        {
          "denom": "ibc/BEC5E8F80A65012E3B7C3CCBF60860FAC6E42BC87FF68741F6257EE4F4A6122D",
          "exponent": 0,
          "aliases": [
            "ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BEC5E8F80A65012E3B7C3CCBF60860FAC6E42BC87FF68741F6257EE4F4A6122D",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-15",
            "base_denom": "ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5",
            "chain_name": "evmos"
          },
          "chain": {
            "channel_id": "channel-18"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "The token of Neokingdom DAO.",
      "denom_units": [
        {
          "denom": "ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333",
          "exponent": 0,
          "aliases": [
            "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9"
          ]
        },
        {
          "denom": "neok",
          "exponent": 18
        }
      ],
      "base": "ibc/33C9A99DC2449A458ECD4F7BD25A872F648374CD38351B3AF8583B864EC4C333",
      "name": "Neokingdom DAO",
      "display": "neok",
      "symbol": "NEOK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-15",
            "base_denom": "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9",
            "chain_name": "evmos"
          },
          "chain": {
            "channel_id": "channel-18"
          }
        }
      ]
    },
    {
      "description": "The token of Teledisko DAO.",
      "denom_units": [
        {
          "denom": "ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB",
          "exponent": 0,
          "aliases": [
            "erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280"
          ]
        },
        {
          "denom": "berlin",
          "exponent": 18
        }
      ],
      "base": "ibc/A8976C44C75CF938B7FF37AE4E4A6C67A948E9FC7B3C180EB388DA9027C88ADB",
      "name": "Teledisko DAO",
      "display": "berlin",
      "symbol": "BERLIN",
      "type_asset": "erc20",
      "address": "0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-15",
            "base_denom": "erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280",
            "chain_name": "evmos"
          },
          "chain": {
            "channel_id": "channel-18"
          }
        }
      ]
    },
    {
      "description": "The native token of Gravity Bridge",
      "denom_units": [
        {
          "denom": "ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67",
          "exponent": 0,
          "aliases": [
            "ugraviton"
          ]
        },
        {
          "denom": "graviton",
          "exponent": 6
        }
      ],
      "base": "ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67",
      "name": "Graviton",
      "display": "graviton",
      "symbol": "GRAV",
      "coingecko_id": "graviton",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "ugraviton",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ]
    },
    {
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
      "denom_units": [
        {
          "denom": "ibc/48B753EAF5C3CB2D780EB596DB4391DBB0CD8E15B99E8846A9A9D75F140B8043",
          "exponent": 0,
          "aliases": [
            "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
          ]
        },
        {
          "denom": "pstake",
          "exponent": 18
        }
      ],
      "base": "ibc/48B753EAF5C3CB2D780EB596DB4391DBB0CD8E15B99E8846A9A9D75F140B8043",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WETH",
      "denom_units": [
        {
          "denom": "ibc/01FD9A46F4B9ED5A01BFA9DA7A039A8D3B3A8BA5EAA4333520DBF43C6B8028D7",
          "exponent": 0,
          "aliases": [
            "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
          ]
        },
        {
          "denom": "gweth",
          "exponent": 18
        }
      ],
      "base": "ibc/01FD9A46F4B9ED5A01BFA9DA7A039A8D3B3A8BA5EAA4333520DBF43C6B8028D7",
      "name": "Wrapped Ethereum",
      "display": "gweth",
      "symbol": "WETH",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDC",
      "denom_units": [
        {
          "denom": "ibc/38FB1A3DA004C5F0E013432DC6CEF632000AE1387F41E09809A10DC234DE9C49",
          "exponent": 0,
          "aliases": [
            "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          ]
        },
        {
          "denom": "gusdc",
          "exponent": 6
        }
      ],
      "base": "ibc/38FB1A3DA004C5F0E013432DC6CEF632000AE1387F41E09809A10DC234DE9C49",
      "name": "USD Coin",
      "display": "gusdc",
      "symbol": "USDC",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDT",
      "denom_units": [
        {
          "denom": "ibc/3615C32EDF0886E6B8692404484DA43AFE4F497E86FC4EB77684CF292A0CFCCF",
          "exponent": 0,
          "aliases": [
            "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7"
          ]
        },
        {
          "denom": "gusdt",
          "exponent": 6
        }
      ],
      "base": "ibc/3615C32EDF0886E6B8692404484DA43AFE4F497E86FC4EB77684CF292A0CFCCF",
      "name": "Tether USD",
      "display": "gusdt",
      "symbol": "USDT",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WBTC",
      "denom_units": [
        {
          "denom": "ibc/204D91CB4CAB9942E50A4062A049D197F76DC7BDCCAEA3FD1F6E1B514A4DD7C3",
          "exponent": 0,
          "aliases": [
            "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
          ]
        },
        {
          "denom": "gwbtc",
          "exponent": 8
        }
      ],
      "base": "ibc/204D91CB4CAB9942E50A4062A049D197F76DC7BDCCAEA3FD1F6E1B514A4DD7C3",
      "name": "Wrapped Bitcoin",
      "display": "gwbtc",
      "symbol": "WBTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge DAI",
      "denom_units": [
        {
          "denom": "ibc/C42A8CCEFE62BE36B73506C0C0E31FD1283E101E3E007C32144F97161906D4B7",
          "exponent": 0,
          "aliases": [
            "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F"
          ]
        },
        {
          "denom": "gdai",
          "exponent": 18
        }
      ],
      "base": "ibc/C42A8CCEFE62BE36B73506C0C0E31FD1283E101E3E007C32144F97161906D4B7",
      "name": "Dai Stablecoin",
      "display": "gdai",
      "symbol": "DAI",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge sDAI",
      "denom_units": [
        {
          "denom": "ibc/80B30587327F6D307E415B3B272B2DCD10F534725A604A2C84E7329541AD3540",
          "exponent": 0,
          "aliases": [
            "gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA"
          ]
        },
        {
          "denom": "gsdai",
          "exponent": 18
        }
      ],
      "base": "ibc/80B30587327F6D307E415B3B272B2DCD10F534725A604A2C84E7329541AD3540",
      "name": "Savings Dai",
      "display": "gsdai",
      "symbol": "sDAI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "base_denom": "ethereum",
            "chain_name": "0x83F20F44975D03b1b09e64809B757c47f942BEeA"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge OCC",
      "denom_units": [
        {
          "denom": "ibc/B9678F583A2CCD59B1EBD432AC62EA6EB86FC621919498E234001C857D5F7E50",
          "exponent": 0,
          "aliases": [
            "gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207"
          ]
        },
        {
          "denom": "gocc",
          "exponent": 18
        }
      ],
      "base": "ibc/B9678F583A2CCD59B1EBD432AC62EA6EB86FC621919498E234001C857D5F7E50",
      "name": "OccamFi",
      "display": "gocc",
      "symbol": "OCC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x2F109021aFe75B949429fe30523Ee7C0D5B27207"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png"
        }
      ]
    },
    {
      "description": "The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.",
      "denom_units": [
        {
          "denom": "ibc/F8C99EE495085DED2F11728CAEFE48CF144FEE7862DDBF57809B3DA24AA64E93",
          "exponent": 0,
          "aliases": [
            "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e"
          ]
        },
        {
          "denom": "page",
          "exponent": 8
        }
      ],
      "base": "ibc/F8C99EE495085DED2F11728CAEFE48CF144FEE7862DDBF57809B3DA24AA64E93",
      "name": "Page",
      "display": "page",
      "symbol": "PAGE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
      },
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-79",
            "base_denom": "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
            "chain_name": "gravitybridge"
          },
          "chain": {
            "channel_id": "channel-17"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
        }
      ]
    },
    {
      "description": "The INJ token is the native governance token for the Injective chain.",
      "denom_units": [
        {
          "denom": "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
          "exponent": 0,
          "aliases": [
            "inj"
          ]
        },
        {
          "denom": "INJ",
          "exponent": 18
        }
      ],
      "base": "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
      "name": "Injective",
      "display": "INJ",
      "symbol": "INJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
      },
      "coingecko_id": "injective-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "inj",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on Injective",
      "denom_units": [
        {
          "denom": "ibc/FAC020C6C042F74AAF2959B19817356E6BEA8F88AE2BA6A8BDCB1D1085202AA2",
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
      "base": "ibc/FAC020C6C042F74AAF2959B19817356E6BEA8F88AE2BA6A8BDCB1D1085202AA2",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "ERIS liquid staked INJ",
      "denom_units": [
        {
          "denom": "ibc/47897DC0D3FC4343EB3DAAE1EE8337267E5555DF4669813B975031A595D11056",
          "exponent": 0,
          "aliases": [
            "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ"
          ]
        },
        {
          "denom": "ampINJ",
          "exponent": 6
        }
      ],
      "base": "ibc/47897DC0D3FC4343EB3DAAE1EE8337267E5555DF4669813B975031A595D11056",
      "name": "ERIS Amplified INJ",
      "display": "ampINJ",
      "symbol": "ampINJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world",
      "denom_units": [
        {
          "denom": "ibc/D41B902B4702503E90B345A66B6B9630AAA1B31574F5DF30717EF2649E1A84D3",
          "exponent": 0,
          "aliases": [
            "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism"
          ]
        },
        {
          "denom": "autism",
          "exponent": 6
        }
      ],
      "base": "ibc/D41B902B4702503E90B345A66B6B9630AAA1B31574F5DF30717EF2649E1A84D3",
      "name": "Autism",
      "display": "autism",
      "symbol": "AUTISM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
      },
      "coingecko_id": "autism",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "The first meme coin on Injective. It’s a dog, but he has nunchucks",
      "denom_units": [
        {
          "denom": "ibc/BB7DEE424437F01D67BE86BD4E890B909342933F5AC0CC0BD4657014A5F0D800",
          "exponent": 0,
          "aliases": [
            "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja"
          ]
        },
        {
          "denom": "NINJA",
          "exponent": 6
        }
      ],
      "base": "ibc/BB7DEE424437F01D67BE86BD4E890B909342933F5AC0CC0BD4657014A5F0D800",
      "name": "Dog wif nunchucks",
      "display": "NINJA",
      "symbol": "NINJA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
      },
      "coingecko_id": "dog-wif-nuchucks",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "The $WGMI Token - We Gonna Make It. Are you ready?",
      "denom_units": [
        {
          "denom": "ibc/4FFDBCA91B770286F522E7F05A8A0B3624055B080BA24ACC1B4F79FF54903E5F",
          "exponent": 0,
          "aliases": [
            "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI"
          ]
        },
        {
          "denom": "WGMI",
          "exponent": 6
        }
      ],
      "base": "ibc/4FFDBCA91B770286F522E7F05A8A0B3624055B080BA24ACC1B4F79FF54903E5F",
      "name": "WGMI",
      "display": "WGMI",
      "symbol": "WGMI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "The first memecoin on osmosis.",
      "denom_units": [
        {
          "denom": "ibc/B7876D3368F9820A5FBAA00D677F4AF1572702E5EA44B4B845D12E4D21736196",
          "exponent": 0,
          "aliases": [
            "ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3"
          ]
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B7876D3368F9820A5FBAA00D677F4AF1572702E5EA44B4B845D12E4D21736196",
      "name": "Wosmo",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
      }
    },
    {
      "description": "GLTO-ERC20 on injective",
      "denom_units": [
        {
          "denom": "ibc/0F36BAAA1A740C5912EA7B74542F13571CB9AC4FA04EDE9B53811CB675B8366B",
          "exponent": 0,
          "aliases": [
            "peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2"
          ]
        },
        {
          "denom": "glto",
          "exponent": 6
        }
      ],
      "base": "ibc/0F36BAAA1A740C5912EA7B74542F13571CB9AC4FA04EDE9B53811CB675B8366B",
      "name": "Gelotto",
      "display": "glto",
      "symbol": "GLTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
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
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
      }
    },
    {
      "description": "Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/",
      "denom_units": [
        {
          "denom": "ibc/D735C4779D4E701D55972E10CA5A0AA98B890E48269E60A4220F3605A431750B",
          "exponent": 0,
          "aliases": [
            "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava"
          ]
        },
        {
          "denom": "hava",
          "exponent": 6
        }
      ],
      "base": "ibc/D735C4779D4E701D55972E10CA5A0AA98B890E48269E60A4220F3605A431750B",
      "name": "Hava Coin",
      "display": "hava",
      "symbol": "HAVA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      "denom_units": [
        {
          "denom": "ibc/E09B7861EB22BEC0B06BC13A9E715212B99D7BF950AB15AEBF896D3A4FB9701B",
          "exponent": 0,
          "aliases": [
            "ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8"
          ]
        },
        {
          "denom": "BADKID",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E09B7861EB22BEC0B06BC13A9E715212B99D7BF950AB15AEBF896D3A4FB9701B",
      "name": "Badkid",
      "display": "BADKID",
      "symbol": "BADKID",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
      }
    },
    {
      "description": "The second meme coin on Injective.",
      "denom_units": [
        {
          "denom": "ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85",
          "exponent": 0,
          "aliases": [
            "inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88"
          ]
        },
        {
          "denom": "NINPO",
          "exponent": 6
        }
      ],
      "base": "ibc/30760A17E6DFAF0FCAD4950AB150B054A7512BF79B7A2BDE53A030A0CC853C85",
      "name": "Ninpo",
      "display": "NINPO",
      "symbol": "NINPO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "JUDO is a very futuristic meme token.",
      "denom_units": [
        {
          "denom": "ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D",
          "exponent": 0,
          "aliases": [
            "inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h"
          ]
        },
        {
          "denom": "JUDO",
          "exponent": 6
        }
      ],
      "base": "ibc/0C78F79BFC5318B4D8CEDB93B653341C5FA6DF938E196397582C00D17A1FCE9D",
      "name": "Judo",
      "display": "JUDO",
      "symbol": "JUDO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h",
            "chain_name": "injective"
          },
          "chain": {
            "channel_id": "channel-23"
          }
        }
      ]
    },
    {
      "description": "The native staking and governance token of Jackal.",
      "denom_units": [
        {
          "denom": "ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB",
          "exponent": 0,
          "aliases": [
            "ujkl"
          ]
        },
        {
          "denom": "jkl",
          "exponent": 6
        }
      ],
      "base": "ibc/B6E97E0FB88FF4660A677B27CE0CD03E5F74E0DE1B9D2B65F107249A3CE5C8FB",
      "name": "Jackal",
      "display": "jkl",
      "symbol": "JKL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
      },
      "coingecko_id": "jackal-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-2",
            "base_denom": "ujkl",
            "chain_name": "jackal"
          },
          "chain": {
            "channel_id": "channel-62"
          }
        }
      ]
    },
    {
      "description": "The native token of JUNO Chain",
      "denom_units": [
        {
          "denom": "ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006",
          "exponent": 0,
          "aliases": [
            "ujuno"
          ]
        },
        {
          "denom": "juno",
          "exponent": 6
        }
      ],
      "base": "ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006",
      "name": "Juno",
      "display": "juno",
      "symbol": "JUNO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      },
      "coingecko_id": "juno-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "ujuno",
            "chain_name": "juno"
          },
          "chain": {
            "channel_id": "channel-8"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/B77705179C4A73A08114A4CAAF2AD159DCA8D678D34553F236840939E30F3850",
          "exponent": 0,
          "aliases": [
            "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B77705179C4A73A08114A4CAAF2AD159DCA8D678D34553F236840939E30F3850",
      "name": "ATOM on Juno",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "chain_name": "juno"
          },
          "chain": {
            "channel_id": "channel-8"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "description": "Bored APE IBC club token",
      "type_asset": "cw20",
      "address": "juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
      "denom_units": [
        {
          "denom": "cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
          "exponent": 0
        },
        {
          "denom": "banana",
          "exponent": 6
        }
      ],
      "base": "ibc/10EEC77B3C96B6C38D730726E86B374C02F1C0B1BB75CB0D99133F47B2BEE781",
      "name": "Banana Token",
      "display": "banana",
      "symbol": "BANANA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
            "chain_name": "juno"
          },
          "chain": {
            "channel_id": "channel-8"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E90C8CB502D721874F2CB7FAF2466E2564D9B40B8E7612415D012AAB72C19195",
          "exponent": 0,
          "aliases": [
            "factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX"
          ]
        },
        {
          "denom": "nexx",
          "exponent": 6
        }
      ],
      "address": "juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh",
      "base": "ibc/E90C8CB502D721874F2CB7FAF2466E2564D9B40B8E7612415D012AAB72C19195",
      "name": "NEXX GEN AI",
      "display": "nexx",
      "symbol": "NEXX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX",
            "chain_name": "juno"
          },
          "chain": {
            "channel_id": "channel-8"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/099CD95C2CF01E90B4271A92A2A88DF2019AE52E3E4B81E603DD20B5EB6F30E3",
          "exponent": 0,
          "aliases": [
            "factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL"
          ]
        },
        {
          "denom": "dgl",
          "exponent": 6
        }
      ],
      "address": "juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e",
      "base": "ibc/099CD95C2CF01E90B4271A92A2A88DF2019AE52E3E4B81E603DD20B5EB6F30E3",
      "name": "Licorice",
      "display": "dgl",
      "symbol": "DGL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL",
            "chain_name": "juno"
          },
          "chain": {
            "channel_id": "channel-8"
          }
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A",
          "exponent": 0,
          "aliases": [
            "ukuji"
          ]
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "base": "ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "coingecko_id": "kujira",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ukuji",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "The native over-collateralized stablecoin from the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/8FD3540DCA9DCDA306BDE5208608DAE7AB3DBBF67A1ADB3FB5D8B0D51613AA43",
          "exponent": 0,
          "aliases": [
            "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk"
          ]
        },
        {
          "denom": "usk",
          "exponent": 6
        }
      ],
      "base": "ibc/8FD3540DCA9DCDA306BDE5208608DAE7AB3DBBF67A1ADB3FB5D8B0D51613AA43",
      "name": "USK",
      "display": "usk",
      "symbol": "USK",
      "coingecko_id": "usk",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Quark's auto-compounding KUJI derivative",
      "denom_units": [
        {
          "denom": "ibc/693FFC098D2D78B6D9C7B96731B0BD4B25D6CF23E2412420B5D37D08FC578E67",
          "exponent": 0,
          "aliases": [
            "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt"
          ]
        },
        {
          "denom": "qcKUJI",
          "exponent": 6
        }
      ],
      "base": "ibc/693FFC098D2D78B6D9C7B96731B0BD4B25D6CF23E2412420B5D37D08FC578E67",
      "name": "qcKUJI",
      "display": "qcKUJI",
      "symbol": "qcKUJI",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "ampKUJI",
      "denom_units": [
        {
          "denom": "ibc/5BA4E49BB05D6FD6526B4465A40016B2817970C15C4962DE06C7BECE15BF6A4D",
          "exponent": 0,
          "aliases": [
            "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI"
          ]
        },
        {
          "denom": "ampKUJI",
          "exponent": 6
        }
      ],
      "base": "ibc/5BA4E49BB05D6FD6526B4465A40016B2817970C15C4962DE06C7BECE15BF6A4D",
      "name": "ampKUJI",
      "display": "ampKUJI",
      "symbol": "ampKUJI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "MantaDAO Governance Token",
      "denom_units": [
        {
          "denom": "ibc/AE3CA2AA2A7880470E22B0479860F8B15031E7C20CA73709FF4EF46DF21FFC1B",
          "exponent": 0,
          "aliases": [
            "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta"
          ]
        },
        {
          "denom": "mnta",
          "exponent": 6
        }
      ],
      "base": "ibc/AE3CA2AA2A7880470E22B0479860F8B15031E7C20CA73709FF4EF46DF21FFC1B",
      "name": "MantaDAO",
      "display": "mnta",
      "symbol": "MNTA",
      "coingecko_id": "mantadao",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Quark's auto-compounding MNTA derivative",
      "denom_units": [
        {
          "denom": "ibc/4E649DA0630925991EFB0F3D58154BBD53C984F52968949251666AB0D182F905",
          "exponent": 0,
          "aliases": [
            "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt"
          ]
        },
        {
          "denom": "qcMNTA",
          "exponent": 6
        }
      ],
      "base": "ibc/4E649DA0630925991EFB0F3D58154BBD53C984F52968949251666AB0D182F905",
      "name": "qcMNTA",
      "display": "qcMNTA",
      "symbol": "qcMNTA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "ERIS Liquid Staked MNTA",
      "denom_units": [
        {
          "denom": "ibc/5F68A910EBFBCBB5C94474F57F1A9C3916E242BA6F14A39AC0B78DB6F59BBBC6",
          "exponent": 0,
          "aliases": [
            "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA"
          ]
        },
        {
          "denom": "ampMNTA",
          "exponent": 6
        }
      ],
      "base": "ibc/5F68A910EBFBCBB5C94474F57F1A9C3916E242BA6F14A39AC0B78DB6F59BBBC6",
      "name": "ERIS Amplified MNTA",
      "display": "ampMNTA",
      "symbol": "ampMNTA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "The content house of Kujira",
      "denom_units": [
        {
          "denom": "ibc/6C5CA7FE5EF30AE1B5F01C45482DB7C01045FE45650B61577B8E8C520BDAFC9A",
          "exponent": 0,
          "aliases": [
            "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink"
          ]
        },
        {
          "denom": "wink",
          "exponent": 6
        }
      ],
      "base": "ibc/6C5CA7FE5EF30AE1B5F01C45482DB7C01045FE45650B61577B8E8C520BDAFC9A",
      "name": "WINK",
      "display": "wink",
      "symbol": "WINK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Blend Token",
      "denom_units": [
        {
          "denom": "ibc/1109E526206C1312E3CCF84C11090F5A183198124927D75B06D6FD9CEC5DEA80",
          "exponent": 0,
          "aliases": [
            "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend"
          ]
        },
        {
          "denom": "blend",
          "exponent": 6
        }
      ],
      "base": "ibc/1109E526206C1312E3CCF84C11090F5A183198124927D75B06D6FD9CEC5DEA80",
      "name": "BLEND",
      "display": "blend",
      "symbol": "BLEND",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on Kujira",
      "denom_units": [
        {
          "denom": "ibc/10C0512AEDB31683E3E562FF0336AF94405C32599DB9B419C762E214F817D81E",
          "exponent": 0,
          "aliases": [
            "ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/10C0512AEDB31683E3E562FF0336AF94405C32599DB9B419C762E214F817D81E",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "The staking and governance token of Fuzion",
      "denom_units": [
        {
          "denom": "ibc/23510A74AB0B95081654810E80A22BCDD6F6D8248B49D526FEA473B356828E6B",
          "exponent": 0,
          "aliases": [
            "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn"
          ]
        },
        {
          "denom": "fuzn",
          "exponent": 6
        }
      ],
      "base": "ibc/23510A74AB0B95081654810E80A22BCDD6F6D8248B49D526FEA473B356828E6B",
      "name": "Fuzion",
      "display": "fuzn",
      "symbol": "FUZN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "The receipt token of Fuzion",
      "denom_units": [
        {
          "denom": "ibc/A86E2061C886008D25486A58B1BC0A94B83E48C451B588E7381B19D6D3347834",
          "exponent": 0,
          "aliases": [
            "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn"
          ]
        },
        {
          "denom": "rfuzn",
          "exponent": 6
        }
      ],
      "base": "ibc/A86E2061C886008D25486A58B1BC0A94B83E48C451B588E7381B19D6D3347834",
      "name": "Fuzion Receipt",
      "display": "rfuzn",
      "symbol": "rFUZN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "The yield token of Fuzion",
      "denom_units": [
        {
          "denom": "ibc/103068D23BC24FD7A7C3521177E8C9FC89B85833A2F0302A6B494391DD4E8AD3",
          "exponent": 0,
          "aliases": [
            "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn"
          ]
        },
        {
          "denom": "yfuzn",
          "exponent": 6
        }
      ],
      "base": "ibc/103068D23BC24FD7A7C3521177E8C9FC89B85833A2F0302A6B494391DD4E8AD3",
      "name": "Fuzion Yield",
      "display": "yfuzn",
      "symbol": "yFUZN",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Quark's auto-compounding FUZN derivative",
      "denom_units": [
        {
          "denom": "ibc/8AEB2C1705465255A5221FBC6214070B433064FD32CA3384E90011CAAB4C83BC",
          "exponent": 0,
          "aliases": [
            "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt"
          ]
        },
        {
          "denom": "qcFUZN",
          "exponent": 6
        }
      ],
      "base": "ibc/8AEB2C1705465255A5221FBC6214070B433064FD32CA3384E90011CAAB4C83BC",
      "name": "qcFUZN",
      "display": "qcFUZN",
      "symbol": "qcFUZN",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "The Revenue & Governance token of Unstake.fi",
      "denom_units": [
        {
          "denom": "ibc/D3A64199D4676EB53ECD82E4A47194B344BE121D697FFD2133FFD7D364914F16",
          "exponent": 0,
          "aliases": [
            "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk"
          ]
        },
        {
          "denom": "nstk",
          "exponent": 6
        }
      ],
      "base": "ibc/D3A64199D4676EB53ECD82E4A47194B344BE121D697FFD2133FFD7D364914F16",
      "name": "Unstake Fi",
      "display": "nstk",
      "symbol": "NSTK",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
      },
      "coingecko_id": "unstake-fi",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Local Money",
      "denom_units": [
        {
          "denom": "ibc/83BD79CB7F26CAFF9B755BEE880858B45835C8A8D6CD913C98B6ECD081353D54",
          "exponent": 0,
          "aliases": [
            "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local"
          ]
        },
        {
          "denom": "local",
          "exponent": 6
        }
      ],
      "base": "ibc/83BD79CB7F26CAFF9B755BEE880858B45835C8A8D6CD913C98B6ECD081353D54",
      "name": "LOCAL",
      "display": "local",
      "symbol": "LOCAL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "description": "Food for whales",
      "denom_units": [
        {
          "denom": "ibc/864236920F222430414985F7A318E3637D131D2E5309A7DD2FD03FB405176431",
          "exponent": 0,
          "aliases": [
            "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk"
          ]
        },
        {
          "denom": "PLNK",
          "exponent": 6
        }
      ],
      "base": "ibc/864236920F222430414985F7A318E3637D131D2E5309A7DD2FD03FB405176431",
      "name": "Plankton",
      "display": "PLNK",
      "symbol": "PLNK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9A4A915BE990D4F102B7D8877E2916E2A111231DD9AA822F148C68D34F663AA3",
          "exponent": 0,
          "aliases": [
            "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3"
          ]
        },
        {
          "denom": "sol",
          "exponent": 8
        }
      ],
      "base": "ibc/9A4A915BE990D4F102B7D8877E2916E2A111231DD9AA822F148C68D34F663AA3",
      "name": "Wormhole Solana",
      "display": "sol",
      "symbol": "whSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "gateway",
            "base_denom": "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/324E1E1F571BE0233FDC21D2DC5DB81C17F1D4D9B4E8EE3151CAA3A25F1E52AD",
          "exponent": 0,
          "aliases": [
            "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10"
          ]
        },
        {
          "denom": "evmos",
          "exponent": 18
        }
      ],
      "base": "ibc/324E1E1F571BE0233FDC21D2DC5DB81C17F1D4D9B4E8EE3151CAA3A25F1E52AD",
      "name": "Evmos",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "evmos",
            "base_denom": "aevmos"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/972F90296D62701C6B8673F4F8D87CCF6FC9AE0DA95961648BD9909AAFEEE94F",
          "exponent": 0,
          "aliases": [
            "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
          ]
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/972F90296D62701C6B8673F4F8D87CCF6FC9AE0DA95961648BD9909AAFEEE94F",
      "name": "Axelar Wrapped AVAX",
      "display": "avax",
      "symbol": "wAVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/947DC76C8A0B90B93B8057ED2E2D822A0B0882C8368B475A3395CC53A2847FC2",
          "exponent": 0,
          "aliases": [
            "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/947DC76C8A0B90B93B8057ED2E2D822A0B0882C8368B475A3395CC53A2847FC2",
      "name": "Noble USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E8F7B69E6AAA44C145EDDE64AC5D5F764B142C0F0132E4922BB3268E451F8DD4",
          "exponent": 0,
          "aliases": [
            "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E8F7B69E6AAA44C145EDDE64AC5D5F764B142C0F0132E4922BB3268E451F8DD4",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/7364FBFA5E46B324447C4B3799A715DD59B1107A1CC6EC5032E017962ABCDBCA",
          "exponent": 0,
          "aliases": [
            "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7364FBFA5E46B324447C4B3799A715DD59B1107A1CC6EC5032E017962ABCDBCA",
      "name": "Axelar USD Coin",
      "display": "usdc",
      "symbol": "axlUSDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "axelar",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/2B4D9D555D0C081AF25FD53A23317F1588B1C20A61CFB90DE4F0410CCE4B4583",
          "exponent": 0,
          "aliases": [
            "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07"
          ]
        },
        {
          "denom": "cmdx",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2B4D9D555D0C081AF25FD53A23317F1588B1C20A61CFB90DE4F0410CCE4B4583",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "comdex",
            "base_denom": "ucmdx"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/33EFCFC14AB0EC99DCFCCBE5E925D5ACDDC994041FDEC1088A63EA40FF4DE79F",
          "exponent": 0,
          "aliases": [
            "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5"
          ]
        },
        {
          "denom": "juno",
          "exponent": 6
        }
      ],
      "base": "ibc/33EFCFC14AB0EC99DCFCCBE5E925D5ACDDC994041FDEC1088A63EA40FF4DE79F",
      "name": "Juno",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "juno",
            "base_denom": "ujuno"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/1BACA10559C9ECA55A867F8DB763E60512CDE1A98AE1B760A2F73C78379C6BA0",
          "exponent": 0,
          "aliases": [
            "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1BACA10559C9ECA55A867F8DB763E60512CDE1A98AE1B760A2F73C78379C6BA0",
      "name": "Axelar Wrapped Ether",
      "display": "weth",
      "symbol": "wETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/7D5ABAB117B0B358C6B52DF2566D0B4A4A828F9C964F147AF50511D925E90E1C",
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
      "base": "ibc/7D5ABAB117B0B358C6B52DF2566D0B4A4A828F9C964F147AF50511D925E90E1C",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/76AA63BD251BF660ACBD5D55FE3FC07B7028983580D192123292AF3BF09BA137",
          "exponent": 0,
          "aliases": [
            "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
          ]
        },
        {
          "denom": "luna",
          "exponent": 6
        }
      ],
      "base": "ibc/76AA63BD251BF660ACBD5D55FE3FC07B7028983580D192123292AF3BF09BA137",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "luna",
            "base_denom": "uluna"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E2E45F9919E450AF8F9E8FA1288828FB532E404CCFA98208DD606FDB205494A4",
          "exponent": 0,
          "aliases": [
            "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602"
          ]
        },
        {
          "denom": "stars",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E2E45F9919E450AF8F9E8FA1288828FB532E404CCFA98208DD606FDB205494A4",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "stargaze",
            "base_denom": "ustars"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/25D3A4AC775D2FEA740FB12BD815C20D67B0E74821AB1ADD88E8069BD8D1FB58",
          "exponent": 0,
          "aliases": [
            "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5"
          ]
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "base": "ibc/25D3A4AC775D2FEA740FB12BD815C20D67B0E74821AB1ADD88E8069BD8D1FB58",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "scrt",
            "base_denom": "uscrt"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/60435EB32E08C968469E7E56456382DFA9AE09DBA6F3D899D48C2430A6B0ECDB",
          "exponent": 0,
          "aliases": [
            "ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8"
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
      "base": "ibc/60435EB32E08C968469E7E56456382DFA9AE09DBA6F3D899D48C2430A6B0ECDB",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-10",
            "base_denom": "ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8",
            "chain_name": "kujira"
          },
          "chain": {
            "channel_id": "channel-22"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "persistence",
            "base_denom": "stk/uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      }
    },
    {
      "description": "The native token of Migaloo Chain",
      "denom_units": [
        {
          "denom": "ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E",
          "exponent": 0,
          "aliases": [
            "uwhale"
          ]
        },
        {
          "denom": "whale",
          "exponent": 6
        }
      ],
      "base": "ibc/1D5E074747E7E5B67DE2CDD360FD5581640591FAEDB7EEFFF9E4CA5AAE3FEF9E",
      "name": "Whale",
      "display": "whale",
      "symbol": "WHALE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
      },
      "coingecko_id": "white-whale",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "uwhale",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "ampWHALE",
      "denom_units": [
        {
          "denom": "ibc/3EFE4B646CE2EFCA3787ED861AFDC5A37BAEDB3B905A64BAE796D2366D1AB473",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE"
          ]
        },
        {
          "denom": "ampWHALE",
          "exponent": 6
        }
      ],
      "base": "ibc/3EFE4B646CE2EFCA3787ED861AFDC5A37BAEDB3B905A64BAE796D2366D1AB473",
      "name": "ampWHALE",
      "display": "ampWHALE",
      "symbol": "ampWHALE",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "boneWHALE",
      "denom_units": [
        {
          "denom": "ibc/0218191FB58C108D9D211DC604C2FD717097ECD3C49D04218BF0C933B937F8B2",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale"
          ]
        },
        {
          "denom": "boneWHALE",
          "exponent": 6
        }
      ],
      "base": "ibc/0218191FB58C108D9D211DC604C2FD717097ECD3C49D04218BF0C933B937F8B2",
      "name": "boneWHALE",
      "display": "boneWHALE",
      "symbol": "bWHALE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "FABLE",
      "denom_units": [
        {
          "denom": "ibc/AF797E3E937316B22EBCCE597DF4E5627C778BF40BB3FD8C11DC711E315FABB9",
          "exponent": 0,
          "aliases": [
            "factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable"
          ]
        },
        {
          "denom": "fable",
          "exponent": 6
        }
      ],
      "base": "ibc/AF797E3E937316B22EBCCE597DF4E5627C778BF40BB3FD8C11DC711E315FABB9",
      "name": "FABLE",
      "display": "fable",
      "symbol": "FABLE",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "boneLUNA are autocompounding LUNA tokens",
      "denom_units": [
        {
          "denom": "ibc/1F0C040BB32C6CC3ADA10C1C498F246B9CAC4999767397D4215324D26FEEB964",
          "exponent": 0,
          "aliases": [
            "ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708"
          ]
        },
        {
          "denom": "bluna",
          "exponent": 6
        }
      ],
      "base": "ibc/1F0C040BB32C6CC3ADA10C1C498F246B9CAC4999767397D4215324D26FEEB964",
      "address": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      "type_asset": "ics20",
      "name": "boneLuna",
      "display": "bluna",
      "symbol": "bLUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
        }
      ]
    },
    {
      "description": "RAC",
      "denom_units": [
        {
          "denom": "ibc/EE971CC8B7C20A796B40EB9AB8C6FF73AAF834302088D934A953CC2F70D1A115",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac"
          ]
        },
        {
          "denom": "RAC",
          "exponent": 6
        }
      ],
      "base": "ibc/EE971CC8B7C20A796B40EB9AB8C6FF73AAF834302088D934A953CC2F70D1A115",
      "name": "RAC",
      "display": "RAC",
      "symbol": "RAC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "ASH",
      "denom_units": [
        {
          "denom": "ibc/07D49BFFE3E9C4017DA6BD604B728EE024F4BF954AC6D36ECCF73FABF33BFE80",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash"
          ]
        },
        {
          "denom": "ASH",
          "exponent": 6
        }
      ],
      "base": "ibc/07D49BFFE3E9C4017DA6BD604B728EE024F4BF954AC6D36ECCF73FABF33BFE80",
      "name": "ASH",
      "display": "ASH",
      "symbol": "ASH",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "Tether USDt on Migaloo",
      "denom_units": [
        {
          "denom": "ibc/DF734ECA6BA33E488C6707F1CE27CAA77BDBDC794C457D04CA4F774E0D66FC1C",
          "exponent": 0,
          "aliases": [
            "ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DF734ECA6BA33E488C6707F1CE27CAA77BDBDC794C457D04CA4F774E0D66FC1C",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "GUPPY",
      "denom_units": [
        {
          "denom": "ibc/432F836FDF2021B8004CA6E3DC700BAF8215BF3ECFA2D54FD4FC9F080422016E",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy"
          ]
        },
        {
          "denom": "GUPPY",
          "exponent": 6
        }
      ],
      "base": "ibc/432F836FDF2021B8004CA6E3DC700BAF8215BF3ECFA2D54FD4FC9F080422016E",
      "name": "GUPPY",
      "display": "GUPPY",
      "symbol": "GUPPY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "OPHIR is a Cosmos Treasury DAO established on Migaloo.",
      "denom_units": [
        {
          "denom": "ibc/4566DB882C5219FC6A3760CC9B3B7E84E0C5605CE6E21660D3F072A950DCB15E",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir"
          ]
        },
        {
          "denom": "OPHIR",
          "exponent": 6
        }
      ],
      "base": "ibc/4566DB882C5219FC6A3760CC9B3B7E84E0C5605CE6E21660D3F072A950DCB15E",
      "name": "OPHIR",
      "display": "OPHIR",
      "symbol": "OPHIR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "SHARK is the apex price prediction market within Cosmos.",
      "denom_units": [
        {
          "denom": "ibc/AF19217598DCB319F129EA68AFE34ECF5212902602553AF4B1F05CCCEE6007F3",
          "exponent": 0,
          "aliases": [
            "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark"
          ]
        },
        {
          "denom": "SHARK",
          "exponent": 6
        }
      ],
      "base": "ibc/AF19217598DCB319F129EA68AFE34ECF5212902602553AF4B1F05CCCEE6007F3",
      "name": "SHARK",
      "display": "SHARK",
      "symbol": "SHARK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4",
            "base_denom": "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark",
            "chain_name": "migaloo"
          },
          "chain": {
            "channel_id": "channel-57"
          }
        }
      ]
    },
    {
      "description": "The permissioned staking asset for Noble Chain",
      "denom_units": [
        {
          "denom": "ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6",
          "exponent": 0,
          "aliases": [
            "ustake"
          ]
        },
        {
          "denom": "stake",
          "exponent": 6
        }
      ],
      "base": "ibc/8407AF0CE255CF5440D1CB2AE8E8BFBEE2B8077939B6DC0AFE5C22BC904A3AC6",
      "name": "Stake",
      "display": "stake",
      "symbol": "STAKE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-17",
            "base_denom": "ustake",
            "chain_name": "noble"
          },
          "chain": {
            "channel_id": "channel-88"
          }
        }
      ]
    },
    {
      "description": "Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.",
      "denom_units": [
        {
          "denom": "ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F",
          "exponent": 0,
          "aliases": [
            "ufrienzies"
          ]
        },
        {
          "denom": "frienzies",
          "exponent": 6
        }
      ],
      "base": "ibc/4AB95C381D3BE19CE572B72D540F7652DA320C23F497D0BCBBD163D6B849235F",
      "display": "frienzies",
      "name": "Frienzies",
      "symbol": "FRNZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-17",
            "base_denom": "ufrienzies",
            "chain_name": "noble"
          },
          "chain": {
            "channel_id": "channel-88"
          }
        }
      ]
    },
    {
      "description": "ATOM token on Noble",
      "denom_units": [
        {
          "denom": "ibc/CC4AF00B86CC1C1E3E90FE41BAFA48AC5BACE83BC75066E996155F34DAC69641",
          "exponent": 0,
          "aliases": [
            "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6,
          "aliases": [
            "ATOM"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/CC4AF00B86CC1C1E3E90FE41BAFA48AC5BACE83BC75066E996155F34DAC69641",
      "name": "Atom Staking Coin",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-17",
            "base_denom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
            "chain_name": "noble"
          },
          "chain": {
            "channel_id": "channel-88"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ]
    },
    {
      "description": "USD Coin",
      "denom_units": [
        {
          "denom": "ibc/9162FF8AC138FFAB8723606E1FD726A95A2A153831ED6786396C374004AC28F8",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "base": "ibc/9162FF8AC138FFAB8723606E1FD726A95A2A153831ED6786396C374004AC28F8",
      "display": "usdc",
      "name": "USD Coin",
      "symbol": "USDC",
      "coingecko_id": "usd-coin",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-17",
            "base_denom": "uusdc",
            "chain_name": "noble"
          },
          "chain": {
            "channel_id": "channel-88"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ]
    },
    {
      "description": "The native token of Oraichain",
      "denom_units": [
        {
          "denom": "ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305",
          "exponent": 0,
          "aliases": [
            "orai"
          ]
        },
        {
          "denom": "ORAI",
          "exponent": 6
        }
      ],
      "base": "ibc/C3515C07AFFA077FA302B02BC71BE165342311F52C03D03E4985A74F81801305",
      "name": "Oraichain",
      "display": "ORAI",
      "symbol": "ORAI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg"
      },
      "coingecko_id": "oraichain-token",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-135",
            "base_denom": "orai",
            "chain_name": "oraichain"
          },
          "chain": {
            "channel_id": "channel-217"
          }
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
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
      "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
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
            "channel_id": "channel-88",
            "base_denom": "uosmo",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
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
      "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
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
            "channel_id": "channel-88",
            "base_denom": "uion",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
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
      "base": "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      "name": "USD Coin (Axelar)",
      "display": "usdc",
      "symbol": "USDC.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/37B7C1AABC243067278C28C77973A28D7844EF5465ACD0EBE6E506BE4C6816C2",
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
      "base": "ibc/37B7C1AABC243067278C28C77973A28D7844EF5465ACD0EBE6E506BE4C6816C2",
      "name": "Ether",
      "display": "weth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DA1BE182A23423A7031255C608B68D1E54AD30087AEB7F25B48D2CF8A5FE1DDB",
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
      "base": "ibc/DA1BE182A23423A7031255C608B68D1E54AD30087AEB7F25B48D2CF8A5FE1DDB",
      "name": "Wrapped Bitcoin (Axelar)",
      "display": "wbtc",
      "symbol": "WBTC.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/06C84FFAEBCB82E8E6E96CB069E1884DF2986C7682A661772D30141ED93C7B4A",
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
      "base": "ibc/06C84FFAEBCB82E8E6E96CB069E1884DF2986C7682A661772D30141ED93C7B4A",
      "name": "Tether USD (Axelar)",
      "display": "usdt",
      "symbol": "USDT.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F63DEC0CD762E1B258767C2D8E91362315483A638FFF8B30DCEE81C49C9725B1",
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
      "base": "ibc/F63DEC0CD762E1B258767C2D8E91362315483A638FFF8B30DCEE81C49C9725B1",
      "name": "Dai Stablecoin",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8ECC3F9305795023FE1F7AB4C67B338BB1A1705A298E167269626D012E467110",
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
      "base": "ibc/8ECC3F9305795023FE1F7AB4C67B338BB1A1705A298E167269626D012E467110",
      "name": "Binance USD",
      "display": "busd",
      "symbol": "BUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
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
      "base": "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
      "name": "Cosmos Hub",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FBA34C2BCE61066AED99D1797EB05A419F5FDB523E36F30F6C254BE61BCCAE29",
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
      "base": "ibc/FBA34C2BCE61066AED99D1797EB05A419F5FDB523E36F30F6C254BE61BCCAE29",
      "name": "Cronos POS Chain",
      "display": "cro",
      "symbol": "CRO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7A115794740AAA20DF614362C13A08500064A39BEDB506281F51B270EF91C883",
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
      "base": "ibc/7A115794740AAA20DF614362C13A08500064A39BEDB506281F51B270EF91C883",
      "name": "Binance Coin",
      "display": "wbnb",
      "symbol": "BNB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BB2299E1B33282B292D53764B0A121CEB7E89280E7494C22A531EAB7B741D9A4",
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
      "base": "ibc/BB2299E1B33282B292D53764B0A121CEB7E89280E7494C22A531EAB7B741D9A4",
      "name": "Polygon",
      "display": "wmatic",
      "symbol": "MATIC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7FB69AF41937DB7B6BAE96979F59C8F5D838E7CA9C5D713B6663510E473DA08B",
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
      "base": "ibc/7FB69AF41937DB7B6BAE96979F59C8F5D838E7CA9C5D713B6663510E473DA08B",
      "name": "Avalanche",
      "display": "avax",
      "symbol": "AVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/815FC81EB6BD612206BD9A9909A02F7691D24A5B97CDFE2124B1BDCA9D4AB14C",
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
      "base": "ibc/815FC81EB6BD612206BD9A9909A02F7691D24A5B97CDFE2124B1BDCA9D4AB14C",
      "name": "Luna Classic",
      "display": "luna",
      "symbol": "LUNC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8C585AA7388BCD1E05DD39BFC0B1DDD12024397EC68EA6B52FB38716C3A64790",
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
      "base": "ibc/8C585AA7388BCD1E05DD39BFC0B1DDD12024397EC68EA6B52FB38716C3A64790",
      "name": "Juno",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C1317B408C60771EBD2C20F248FAD2246ED9AD6133F4FCE75C2B20BFD5DC3FCF",
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
      "base": "ibc/C1317B408C60771EBD2C20F248FAD2246ED9AD6133F4FCE75C2B20BFD5DC3FCF",
      "name": "Wrapped Polkadot (Axelar)",
      "display": "dot",
      "symbol": "DOT.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D033E88EB94ADB1845E0EF65FAECB9269846EBA5B1C32831FFCFB5B270759DCD",
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
      "base": "ibc/D033E88EB94ADB1845E0EF65FAECB9269846EBA5B1C32831FFCFB5B270759DCD",
      "name": "Evmos",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D171E56737981CAD5DC9EA0A931B1B89BF3AD1226FAE441350EF8D6278D27B03",
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
      "base": "ibc/D171E56737981CAD5DC9EA0A931B1B89BF3AD1226FAE441350EF8D6278D27B03",
      "name": "Kava",
      "display": "kava",
      "symbol": "KAVA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2BBF3EEB88F4BB5285A5075DE1B40EF65E5028947B7751096FFF9D05585ACFD1",
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
      "base": "ibc/2BBF3EEB88F4BB5285A5075DE1B40EF65E5028947B7751096FFF9D05585ACFD1",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/30C9FA3DF80892CF4615A84845349EAD427670CB38C6B03B0388BE8543B2AB4D",
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
      "base": "ibc/30C9FA3DF80892CF4615A84845349EAD427670CB38C6B03B0388BE8543B2AB4D",
      "name": "TerraClassicUSD",
      "display": "ust",
      "symbol": "USTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BE9116F49581FF59F018C64FB4A445B307332F77381640AAB05380473D0D7642",
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
      "base": "ibc/BE9116F49581FF59F018C64FB4A445B307332F77381640AAB05380473D0D7642",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D43715C51D81CBCDCE72F94476EE539BC511991EF8D65FC7E4EDA982EE6CF1E2",
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
      "base": "ibc/D43715C51D81CBCDCE72F94476EE539BC511991EF8D65FC7E4EDA982EE6CF1E2",
      "name": "Chihuahua",
      "display": "huahua",
      "symbol": "HUAHUA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CB77DC79F829E7F15A04C34A985DDD0E77CFBB7B6887552A10FCF8028A007234",
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
      "base": "ibc/CB77DC79F829E7F15A04C34A985DDD0E77CFBB7B6887552A10FCF8028A007234",
      "name": "Persistence",
      "display": "xprt",
      "symbol": "XPRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D8E6DBAF07B6E5588FF589D0FE6515B1D43C9E4D949C79A0506FCEEC55C630E4",
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
      "base": "ibc/D8E6DBAF07B6E5588FF589D0FE6515B1D43C9E4D949C79A0506FCEEC55C630E4",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7AE2B0FD4D084438C7910E6B294E0979A422936B65EC1F4BF67DEE4EC311741B",
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
      "base": "ibc/7AE2B0FD4D084438C7910E6B294E0979A422936B65EC1F4BF67DEE4EC311741B",
      "name": "Akash",
      "display": "akt",
      "symbol": "AKT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DB9E002E57F5ED443D21D292844F9D177927DC22E59D477B03D4979E118E80F2",
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
      "base": "ibc/DB9E002E57F5ED443D21D292844F9D177927DC22E59D477B03D4979E118E80F2",
      "name": "Regen",
      "display": "regen",
      "symbol": "REGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C986CD6163D211958B8E5CAF35E4531962B799135C4CA615F31B8692034B2538",
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
      "base": "ibc/C986CD6163D211958B8E5CAF35E4531962B799135C4CA615F31B8692034B2538",
      "name": "Sentinel",
      "display": "dvpn",
      "symbol": "DVPN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1EBD0791A5F074E852E379C5AA6B5FA1A85507597C7CD908E89BC86FE8422CE3",
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
      "base": "ibc/1EBD0791A5F074E852E379C5AA6B5FA1A85507597C7CD908E89BC86FE8422CE3",
      "name": "IRISnet",
      "display": "iris",
      "symbol": "IRIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8499DCD3CC54614A508C22E3F98003B533549E3D361162C700DC9B62E6343133",
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
      "base": "ibc/8499DCD3CC54614A508C22E3F98003B533549E3D361162C700DC9B62E6343133",
      "name": "Starname",
      "display": "iov",
      "symbol": "IOV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3B04FAB1869B7F4CAC1093E113AB2EB15AC8E0B8D76F40A4A7D5D7E1F1E6EA8C",
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
      "base": "ibc/3B04FAB1869B7F4CAC1093E113AB2EB15AC8E0B8D76F40A4A7D5D7E1F1E6EA8C",
      "name": "e-Money",
      "display": "ngm",
      "symbol": "NGM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1688228D9E7F3A7CFE7E09B3F7F3E3000E8D86675CFC8C8F313ACEDEB2FE2493",
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
      "base": "ibc/1688228D9E7F3A7CFE7E09B3F7F3E3000E8D86675CFC8C8F313ACEDEB2FE2493",
      "name": "e-Money EUR",
      "display": "eur",
      "symbol": "EEUR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9E23CCACE78F6D57407DDD8878B8C2144E6CC775C8CC8D4806BE80222999D245",
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
      "base": "ibc/9E23CCACE78F6D57407DDD8878B8C2144E6CC775C8CC8D4806BE80222999D245",
      "name": "LikeCoin",
      "display": "like",
      "symbol": "LIKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A9617497CC1AC77B54D6FE98A3412F3BDEEA189178F513B969658AB3A9A358BD",
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
      "base": "ibc/A9617497CC1AC77B54D6FE98A3412F3BDEEA189178F513B969658AB3A9A358BD",
      "name": "ixo",
      "display": "ixo",
      "symbol": "IXO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/984C71F28AC1BE4E8D818CA66CECD7208616D25A4AC99780074ED346B92329E9",
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
      "base": "ibc/984C71F28AC1BE4E8D818CA66CECD7208616D25A4AC99780074ED346B92329E9",
      "name": "BitCanna",
      "display": "bcna",
      "symbol": "BCNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8FC22AC4417B45142373DA76FC4FC59AD4E08493C1CEA04F5CF2BE5CAEE7F2C0",
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
      "base": "ibc/8FC22AC4417B45142373DA76FC4FC59AD4E08493C1CEA04F5CF2BE5CAEE7F2C0",
      "name": "BitSong",
      "display": "btsg",
      "symbol": "BTSG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9C47E3943643B9F9B60FE699832EC09F6A1EE113D140EE6BEDF8381D5CB53515",
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
      "base": "ibc/9C47E3943643B9F9B60FE699832EC09F6A1EE113D140EE6BEDF8381D5CB53515",
      "name": "Ki",
      "display": "xki",
      "symbol": "XKI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/22040E16543BD3C4A44DE608944B8823E5C893890F8A736896736195B205EBF5",
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
      "base": "ibc/22040E16543BD3C4A44DE608944B8823E5C893890F8A736896736195B205EBF5",
      "name": "Medibloc",
      "display": "med",
      "symbol": "MED",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3E83703D985D6EF99332CF86E79A65E4C8F856CFE7D74EBB606EF6D405762438",
          "exponent": 0,
          "aliases": [
            "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3E83703D985D6EF99332CF86E79A65E4C8F856CFE7D74EBB606EF6D405762438",
      "name": "bostrom",
      "display": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
      "symbol": "BOOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/448F9F5170C08F88D2ED1C6394D9EF08F16444EF6F08E6978DB82ABAEEAC199B",
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
      "base": "ibc/448F9F5170C08F88D2ED1C6394D9EF08F16444EF6F08E6978DB82ABAEEAC199B",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C8E216C59344A5288BF0E5489DC76084736A3C396AB1DB3039C4E0026282B31A",
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
      "base": "ibc/C8E216C59344A5288BF0E5489DC76084736A3C396AB1DB3039C4E0026282B31A",
      "name": "Cheqd",
      "display": "cheq",
      "symbol": "CHEQ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FB2B636BC58823E03B61141B8358D2F2505530D708E9254B8042655947D4F774",
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
      "base": "ibc/FB2B636BC58823E03B61141B8358D2F2505530D708E9254B8042655947D4F774",
      "name": "Lum Network",
      "display": "lum",
      "symbol": "LUM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6511CC20E9FAA95AFDFBBA8359442EDB6910E6AE842538FB078BB6EBC740F64B",
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
      "base": "ibc/6511CC20E9FAA95AFDFBBA8359442EDB6910E6AE842538FB078BB6EBC740F64B",
      "name": "Vidulum",
      "display": "vdl",
      "symbol": "VDL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/29025E8653042A0D5090D9179A3593208FDB1984C772CBA8B90C80E0650696E9",
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
      "base": "ibc/29025E8653042A0D5090D9179A3593208FDB1984C772CBA8B90C80E0650696E9",
      "name": "Desmos",
      "display": "dsm",
      "symbol": "DSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F6F6CF3400D3392954448F04BE45666FDBCF439F462C7796A8BD489E0A411E0A",
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
      "base": "ibc/F6F6CF3400D3392954448F04BE45666FDBCF439F462C7796A8BD489E0A411E0A",
      "name": "Dig Chain",
      "display": "dig",
      "symbol": "DIG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/4E798A14E81E318B8DE19859FFAA81B2DFEE58B47A82805748C29D7E062F6218",
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
      "base": "ibc/4E798A14E81E318B8DE19859FFAA81B2DFEE58B47A82805748C29D7E062F6218",
      "name": "Sommelier",
      "display": "somm",
      "symbol": "SOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D288275376CA67229F260CBDCE5C8D996889987A40685B1112F56788B04D3488",
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
      "base": "ibc/D288275376CA67229F260CBDCE5C8D996889987A40685B1112F56788B04D3488",
      "name": "Band Protocol",
      "display": "band",
      "symbol": "BAND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E72C42550ACDD0E24BE48EB660F8F09F8FEC12F23692D8BF31BB9F67F26DCA60",
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
      "base": "ibc/E72C42550ACDD0E24BE48EB660F8F09F8FEC12F23692D8BF31BB9F67F26DCA60",
      "name": "Konstellation",
      "display": "darc",
      "symbol": "DARC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/83C54E9E58122B40C483E4CA7889BB8CE168D4B88CBF46AEA94466B62A7951E6",
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
      "base": "ibc/83C54E9E58122B40C483E4CA7889BB8CE168D4B88CBF46AEA94466B62A7951E6",
      "name": "Umee",
      "display": "umee",
      "symbol": "UMEE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8EE22EF8D99ABF405B2E1FE3746263F6373B5A4062FFA90590F67AC10E4A4530",
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
      "base": "ibc/8EE22EF8D99ABF405B2E1FE3746263F6373B5A4062FFA90590F67AC10E4A4530",
      "name": "Gravity Bridge",
      "display": "graviton",
      "symbol": "GRAV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/73E5E6F833C5D4CFFDB411731DD8813D1E10AA7FEB319C427A35DC0B50F0A5A6",
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
      "base": "ibc/73E5E6F833C5D4CFFDB411731DD8813D1E10AA7FEB319C427A35DC0B50F0A5A6",
      "name": "Decentr",
      "display": "dec",
      "symbol": "DEC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0C4C1514001A38D72DFB716D77CD5F3AD20C95478780122FEE4BE7B8645D5828",
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
      "base": "ibc/0C4C1514001A38D72DFB716D77CD5F3AD20C95478780122FEE4BE7B8645D5828",
      "name": "Marble",
      "display": "marble",
      "symbol": "MARBLE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FA3EBB828D88D91AC8CF3BAB1FAECDAB1C21916020291851E7AFEDD215EBA346",
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
      "base": "ibc/FA3EBB828D88D91AC8CF3BAB1FAECDAB1C21916020291851E7AFEDD215EBA346",
      "name": "Carbon",
      "display": "dswth",
      "symbol": "SWTH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7A6428206CBDE7B47F78A7A8CF4587CDCFD2B3BF06DD0352CEF678E88F1A501D",
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
      "base": "ibc/7A6428206CBDE7B47F78A7A8CF4587CDCFD2B3BF06DD0352CEF678E88F1A501D",
      "name": "Cerberus",
      "display": "crbrus",
      "symbol": "CRBRUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/106DF673CFB54A8674DCB3FCCA7AE7DBF2A73E8E676752DC4891C97F10947338",
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
      "base": "ibc/106DF673CFB54A8674DCB3FCCA7AE7DBF2A73E8E676752DC4891C97F10947338",
      "name": "Fetch.ai",
      "display": "fet",
      "symbol": "FET",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3AD5B09B0681A6AE10EE30DBF0DBA3250ED2EDF4287FC4C46013E0623F6C7CD0",
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
      "base": "ibc/3AD5B09B0681A6AE10EE30DBF0DBA3250ED2EDF4287FC4C46013E0623F6C7CD0",
      "name": "AssetMantle",
      "display": "mntl",
      "symbol": "MNTL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/AB24556335E872F30A84D57783387643399C61642E5E26B0330F7A6D4CAFE4F5",
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
      "base": "ibc/AB24556335E872F30A84D57783387643399C61642E5E26B0330F7A6D4CAFE4F5",
      "name": "Neta",
      "display": "neta",
      "symbol": "NETA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C43141A8F6E9CEDBFA89601B2BA910C9F58A628BF0FE67DEC8096FDCAE4214A8",
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
      "base": "ibc/C43141A8F6E9CEDBFA89601B2BA910C9F58A628BF0FE67DEC8096FDCAE4214A8",
      "name": "Injective",
      "display": "INJ",
      "symbol": "INJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8DB926E5A7B6631C3E952FCE6082F5527E96746415DD347A7737990338AE8BE7",
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
      "base": "ibc/8DB926E5A7B6631C3E952FCE6082F5527E96746415DD347A7737990338AE8BE7",
      "name": "TerraClassicKRW",
      "display": "krt",
      "symbol": "KRTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/22F44834C7D29138B0C62C4828C0298FB09450BDF1A2494FD35DF1505622F18D",
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
      "base": "ibc/22F44834C7D29138B0C62C4828C0298FB09450BDF1A2494FD35DF1505622F18D",
      "name": "Microtick",
      "display": "tick",
      "symbol": "TICK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EED337375E957B2E3C8675A33F5D430377594C859E93903077FAADBB530B00C8",
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
      "base": "ibc/EED337375E957B2E3C8675A33F5D430377594C859E93903077FAADBB530B00C8",
      "name": "Sifchain",
      "display": "ROWAN",
      "symbol": "ROWAN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/62231F8971DF8C87B4E56510DCA49C7407C031801971A37CCAA527C4442D63ED",
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
      "base": "ibc/62231F8971DF8C87B4E56510DCA49C7407C031801971A37CCAA527C4442D63ED",
      "name": "Shentu",
      "display": "ctk",
      "symbol": "CTK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/83AD4CEC83F62C1418F54F0D000C08514E0F09A012BB38747F723EE4F2FA5640",
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
      "base": "ibc/83AD4CEC83F62C1418F54F0D000C08514E0F09A012BB38747F723EE4F2FA5640",
      "name": "Hope Galaxy",
      "display": "hope",
      "symbol": "HOPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A1752490658F35A1577949DC7FFC5D63F4A2F600E5042F91B3F00D7A72A355B5",
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
      "base": "ibc/A1752490658F35A1577949DC7FFC5D63F4A2F600E5042F91B3F00D7A72A355B5",
      "name": "Racoon",
      "display": "rac",
      "symbol": "juno.RAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/064DADC867DF6A15EE437D6B17584DD688CDBE9E3DD1B28C63070B74E5E71944",
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
      "base": "ibc/064DADC867DF6A15EE437D6B17584DD688CDBE9E3DD1B28C63070B74E5E71944",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C50A1074819C257326AB683ED98A9A39DE8574F87319E478F894EAC2B19B4C58",
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
      "base": "ibc/C50A1074819C257326AB683ED98A9A39DE8574F87319E478F894EAC2B19B4C58",
      "name": "Wrapped Bitcoin (Gravity Bridge)",
      "display": "gwbtc",
      "symbol": "WBTC.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/24CC85FA48AF27F07FB00FC2A08EE73C9EE16DD1A8C3A222375A9E3A7425D81A",
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
      "base": "ibc/24CC85FA48AF27F07FB00FC2A08EE73C9EE16DD1A8C3A222375A9E3A7425D81A",
      "name": "Ether (Gravity Bridge)",
      "display": "gweth",
      "symbol": "WETH.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D43874D0F31CF9A58F40301ABC1ABD6B1EE3928F8223F854BF495D61908EC942",
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
      "base": "ibc/D43874D0F31CF9A58F40301ABC1ABD6B1EE3928F8223F854BF495D61908EC942",
      "name": "USD Coin (Gravity Bridge)",
      "display": "gusdc",
      "symbol": "USDC.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F63C494B8936EB418C2C4B4FE7DA9D9A455ABD8E38113D377FB836AAFD26909A",
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
      "base": "ibc/F63C494B8936EB418C2C4B4FE7DA9D9A455ABD8E38113D377FB836AAFD26909A",
      "name": "DAI Stablecoin (Gravity Bridge)",
      "display": "gdai",
      "symbol": "DAI.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E9E47344C7D078D45372EF138E8609DE9C39FDE454E665F35F3CD990CE920C8C",
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
      "base": "ibc/E9E47344C7D078D45372EF138E8609DE9C39FDE454E665F35F3CD990CE920C8C",
      "name": "Tether USD (Gravity Bridge)",
      "display": "gusdt",
      "symbol": "USDT.grv",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EFEBA801AD827EB5D8C524342796F0713EBAD27C7F7800F040B8DD34C778870C",
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
      "base": "ibc/EFEBA801AD827EB5D8C524342796F0713EBAD27C7F7800F040B8DD34C778870C",
      "name": "Block",
      "display": "block",
      "symbol": "BLOCK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/00A6285B20010D443BA2DDF0203D29B4FC5E2582D670181BBCAC1583744BA13B",
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
      "base": "ibc/00A6285B20010D443BA2DDF0203D29B4FC5E2582D670181BBCAC1583744BA13B",
      "name": "Provenance",
      "display": "hash",
      "symbol": "HASH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0B9C892A582ABD9D948D224514CFCD9D13832F95E08F9F37CE76EEE89B61C9EB",
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
      "base": "ibc/0B9C892A582ABD9D948D224514CFCD9D13832F95E08F9F37CE76EEE89B61C9EB",
      "name": "Galaxy",
      "display": "glx",
      "symbol": "GLX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F8F31D0F01C301D0A9C075B79F1A3BEDBBA48F080C6F06D768E7A1D21FBA5E22",
          "exponent": 0,
          "aliases": [
            "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/F8F31D0F01C301D0A9C075B79F1A3BEDBBA48F080C6F06D768E7A1D21FBA5E22",
      "name": "DHK",
      "display": "dhk",
      "symbol": "DHK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/216D1863BD3BD82C18FC90DF20DB2F2105B5EA3009B0C13606F15FA91AFFFDBA",
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
      "base": "ibc/216D1863BD3BD82C18FC90DF20DB2F2105B5EA3009B0C13606F15FA91AFFFDBA",
      "name": "JunoSwap",
      "display": "raw",
      "symbol": "RAW",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/5BF01E8DF7D10DE632A27AC65DA8AB60F5A1FE7A548F554EDB1AC8E27F3FAEC7",
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
      "base": "ibc/5BF01E8DF7D10DE632A27AC65DA8AB60F5A1FE7A548F554EDB1AC8E27F3FAEC7",
      "name": "MEME",
      "display": "meme",
      "symbol": "MEME",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F33D73E8A6FCEEF8825C2CE7034DF844E1D43242FEC51FE03422A25EB6A0C9D5",
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
      "base": "ibc/F33D73E8A6FCEEF8825C2CE7034DF844E1D43242FEC51FE03422A25EB6A0C9D5",
      "name": "Another.Software Validator Token",
      "display": "asvt",
      "symbol": "ASVT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6C31DBBDB5BC133BFF5CC436E8B4A8F6311E06C9FE21612FFB9413528E0E302F",
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
      "base": "ibc/6C31DBBDB5BC133BFF5CC436E8B4A8F6311E06C9FE21612FFB9413528E0E302F",
      "name": "JoeDAO",
      "display": "joe",
      "symbol": "JOE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A2FAE707F2026CBF2B2C7E5FBACCB420F7B7548B4CD6B106EBE119174155DF03",
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
      "base": "ibc/A2FAE707F2026CBF2B2C7E5FBACCB420F7B7548B4CD6B106EBE119174155DF03",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/4C9AB1A191F71079726CFE9DEB1541212E1F4F0A392003FF241597D5EC6326F1",
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
      "base": "ibc/4C9AB1A191F71079726CFE9DEB1541212E1F4F0A392003FF241597D5EC6326F1",
      "name": "Rizon",
      "display": "atolo",
      "symbol": "ATOLO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/30D694C5D707233F36735273C998C896AECC765AF3BB43CAADDC9BD07BB09CBC",
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
      "base": "ibc/30D694C5D707233F36735273C998C896AECC765AF3BB43CAADDC9BD07BB09CBC",
      "name": "Kava Hard",
      "display": "HARD",
      "symbol": "HARD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/76C119B89290360BEC0F5275D43C563958ACE22823C249C80660578BC7DE4965",
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
      "base": "ibc/76C119B89290360BEC0F5275D43C563958ACE22823C249C80660578BC7DE4965",
      "name": "Kava Swap",
      "display": "SWP",
      "symbol": "SWP",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CDB21529B104D66BA2BBDBF79319A09483EC2F7A8BA4C040373DFB456B914BF2",
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
      "base": "ibc/CDB21529B104D66BA2BBDBF79319A09483EC2F7A8BA4C040373DFB456B914BF2",
      "name": "Chainlink",
      "display": "link",
      "symbol": "LINK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/81C56D9DCB635C5363379D6B3E617B855EC1D437D45153C744534A1B2A9F7B28",
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
      "base": "ibc/81C56D9DCB635C5363379D6B3E617B855EC1D437D45153C744534A1B2A9F7B28",
      "name": "GenesisL1",
      "display": "l1",
      "symbol": "L1",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7A06A8A636E2AC0DE06C6D638DCBBC434687A5846E2B5CA38FE8680B641D366D",
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
      "base": "ibc/7A06A8A636E2AC0DE06C6D638DCBBC434687A5846E2B5CA38FE8680B641D366D",
      "name": "Aave",
      "display": "aave",
      "symbol": "AAVE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/19A8EDFB5DDD861E3A16D066599BF29C262EE003377FE5A8DD528E7FAEE30FB6",
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
      "base": "ibc/19A8EDFB5DDD861E3A16D066599BF29C262EE003377FE5A8DD528E7FAEE30FB6",
      "name": "ApeCoin",
      "display": "ape",
      "symbol": "APE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/96E3007D364A8A23B391DA75EEB111492DDE85E95A01A5AFCDCA8BBC9C2483CC",
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
      "base": "ibc/96E3007D364A8A23B391DA75EEB111492DDE85E95A01A5AFCDCA8BBC9C2483CC",
      "name": "Maker",
      "display": "mkr",
      "symbol": "MKR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/14614DAE0AA07826A3480314BCC7BAA6E6CFFC63A934583521077FA35423BCF3",
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
      "base": "ibc/14614DAE0AA07826A3480314BCC7BAA6E6CFFC63A934583521077FA35423BCF3",
      "name": "Rai Reflex Index",
      "display": "rai",
      "symbol": "RAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/171B4F5B17E0DA923FB24C6B6BF356C4BAE510529098D18D81FCB1243373E51E",
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
      "base": "ibc/171B4F5B17E0DA923FB24C6B6BF356C4BAE510529098D18D81FCB1243373E51E",
      "name": "Shiba Inu",
      "display": "shib",
      "symbol": "SHIB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8BCCE28138180F7F7D7B9F3327DD97DE595A0DD66449FAA90D77EDC00D7F5B18",
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
      "base": "ibc/8BCCE28138180F7F7D7B9F3327DD97DE595A0DD66449FAA90D77EDC00D7F5B18",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/4075E573BB480BF9B61EFBF3820E1DC50EA6AE676F2119212B9E665D6CDE3094",
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
      "base": "ibc/4075E573BB480BF9B61EFBF3820E1DC50EA6AE676F2119212B9E665D6CDE3094",
      "name": "Tgrade",
      "display": "tgd",
      "symbol": "TGD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1079935F1E1E046B66E461498119923DDC32E7AFCB6828E2736D5384552B8DAA",
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
      "base": "ibc/1079935F1E1E046B66E461498119923DDC32E7AFCB6828E2736D5384552B8DAA",
      "name": "Echelon",
      "display": "echelon",
      "symbol": "ECH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/73E178692DD9B98F6DF928B2DD88F4FFFE3CCE4BC64EC9F2B599DCCE7EC83DFB",
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
      "base": "ibc/73E178692DD9B98F6DF928B2DD88F4FFFE3CCE4BC64EC9F2B599DCCE7EC83DFB",
      "name": "Odin Protocol",
      "display": "odin",
      "symbol": "ODIN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F5C682B9E1AEE4D496EDA093CC5D6D3987FC33ABDCAEA75AA59EC2ADE5761C24",
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
      "base": "ibc/F5C682B9E1AEE4D496EDA093CC5D6D3987FC33ABDCAEA75AA59EC2ADE5761C24",
      "name": "GEO",
      "display": "geo",
      "symbol": "GEO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DF44EB468CE1AF2B1EA38134656C905959EA8533F10E5FF96476700F707E06F2",
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
      "base": "ibc/DF44EB468CE1AF2B1EA38134656C905959EA8533F10E5FF96476700F707E06F2",
      "name": "O9W",
      "display": "O9W",
      "symbol": "O9W",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F090AAD85063039F88CF80B9D866F3C22BFFEFA72D6192F718199B05560B1E3D",
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
      "base": "ibc/F090AAD85063039F88CF80B9D866F3C22BFFEFA72D6192F718199B05560B1E3D",
      "name": "LVN",
      "display": "lvn",
      "symbol": "kichain.LVN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F2C20F6FD981F9D50CBFB614FB802E9914BCEFABBC9DDE5F47E9F41BEC07E6BC",
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
      "base": "ibc/F2C20F6FD981F9D50CBFB614FB802E9914BCEFABBC9DDE5F47E9F41BEC07E6BC",
      "name": "Moonbeam",
      "display": "wglmr",
      "symbol": "GLMR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8BC1A5D8DC754EE90568DB13D13E282D3F0BBB9B2708BC3F9F7632BC088337BD",
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
      "base": "ibc/8BC1A5D8DC754EE90568DB13D13E282D3F0BBB9B2708BC3F9F7632BC088337BD",
      "name": "Gelotto",
      "display": "glto",
      "symbol": "GLTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DC5DCA7F3B6A126A44A9B8A61BB12EBE79D166E58183251545B74B2D70919481",
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
      "base": "ibc/DC5DCA7F3B6A126A44A9B8A61BB12EBE79D166E58183251545B74B2D70919481",
      "name": "GKey",
      "display": "gkey",
      "symbol": "GKEY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B35EFEE70C958DCD8D94457542716A3FABACCCC2C9441A3BA5CBDB7C9AE55DEC",
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
      "base": "ibc/B35EFEE70C958DCD8D94457542716A3FABACCCC2C9441A3BA5CBDB7C9AE55DEC",
      "name": "Crescent",
      "display": "cre",
      "symbol": "CRE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/09FF201F2B4C9577776688275816C4030ACDE61F9A8465FCC810259621F700F7",
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
      "base": "ibc/09FF201F2B4C9577776688275816C4030ACDE61F9A8465FCC810259621F700F7",
      "name": "LumenX",
      "display": "lumen",
      "symbol": "LUMEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F5C7B698AE91E06541F6CD512D587638F2C6ABC7C474346FD0A34889B3C24841",
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
      "base": "ibc/F5C7B698AE91E06541F6CD512D587638F2C6ABC7C474346FD0A34889B3C24841",
      "name": "Oraichain",
      "display": "ORAI",
      "symbol": "ORAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/77A0411E8DF84F6A275F1E338AB57A4F47D125ED90F0A3FEDDF5F356E1FF4389",
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
      "base": "ibc/77A0411E8DF84F6A275F1E338AB57A4F47D125ED90F0A3FEDDF5F356E1FF4389",
      "name": "Cudos",
      "display": "cudos",
      "symbol": "CUDOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0A660D078FD76E30C23135BBE62C475502D76C996B271445F1DAD830B94EC25E",
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
      "base": "ibc/0A660D078FD76E30C23135BBE62C475502D76C996B271445F1DAD830B94EC25E",
      "name": "Kava USDX",
      "display": "USDX",
      "symbol": "USDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EA9AF6CB40E50826EC6CD37714805BA77A4AC70C9C06F3049D91EA4814BFA84B",
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
      "base": "ibc/EA9AF6CB40E50826EC6CD37714805BA77A4AC70C9C06F3049D91EA4814BFA84B",
      "name": "Agoric",
      "display": "bld",
      "symbol": "BLD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7DADDE195EB29C2479384C896DAF7543732D5991FF283F905F30C7FCA6AFAE7D",
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
      "base": "ibc/7DADDE195EB29C2479384C896DAF7543732D5991FF283F905F30C7FCA6AFAE7D",
      "name": "Inter Stable Token",
      "display": "ist",
      "symbol": "IST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/61503E1AD4DE6E271E35857830F5D0AC6F78E77CFA7A1A3EC46B0F77D8B12308",
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
      "base": "ibc/61503E1AD4DE6E271E35857830F5D0AC6F78E77CFA7A1A3EC46B0F77D8B12308",
      "name": "StakeEasy seJUNO",
      "display": "sejuno",
      "symbol": "SEJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2CCE060BA08D0E41EC234A58C9878F0689E23927E33F5025B0B543B54ADE2BA5",
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
      "base": "ibc/2CCE060BA08D0E41EC234A58C9878F0689E23927E33F5025B0B543B54ADE2BA5",
      "name": "StakeEasy bJUNO",
      "display": "bjuno",
      "symbol": "BJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/38B29F6563DDADC81C9399EB5CDF140492CC2C58FB70048BC4430567A26ED193",
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
      "base": "ibc/38B29F6563DDADC81C9399EB5CDF140492CC2C58FB70048BC4430567A26ED193",
      "name": "Stride",
      "display": "strd",
      "symbol": "STRD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/74B0BDD3C0941166F5E96BFBC847219BBE609535F3A0D941C22342A60BD43A08",
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
      "base": "ibc/74B0BDD3C0941166F5E96BFBC847219BBE609535F3A0D941C22342A60BD43A08",
      "name": "Stride Staked ATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9EC903850D6BD5CB2AAAC2012FC6A2AFE084998A69A791495596B5C1A02D6F23",
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
      "base": "ibc/9EC903850D6BD5CB2AAAC2012FC6A2AFE084998A69A791495596B5C1A02D6F23",
      "name": "Stride Staked STARS",
      "display": "ststars",
      "symbol": "stSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3ADD67F89E78DE5009961330F1327DB6DC88165BBD6882D88623C142621FA82A",
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
      "base": "ibc/3ADD67F89E78DE5009961330F1327DB6DC88165BBD6882D88623C142621FA82A",
      "name": "Solarbank DAO",
      "display": "solar",
      "symbol": "SOLAR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/81B937923DB3D0413F5B44CDEECB251E59E32D26D5377E0DE9A3727766AB8567",
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
      "base": "ibc/81B937923DB3D0413F5B44CDEECB251E59E32D26D5377E0DE9A3727766AB8567",
      "name": "StakeEasy SEASY",
      "display": "seasy",
      "symbol": "SEASY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D9C8D7AC0DF7199BEFAE84305B070B1EC38F8AF3DA983444318CE850468C5489",
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
      "base": "ibc/D9C8D7AC0DF7199BEFAE84305B070B1EC38F8AF3DA983444318CE850468C5489",
      "name": "Axelar",
      "display": "axl",
      "symbol": "AXL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D957263097D25225C4D91A70845C10EAC51E7B537522AEC08687D23B306F4F7B",
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
      "base": "ibc/D957263097D25225C4D91A70845C10EAC51E7B537522AEC08687D23B306F4F7B",
      "name": "Rebus",
      "display": "rebus",
      "symbol": "REBUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EFF2A9F8FB4ADC6E384041D00C10403FEEC6E0534C717807DF6B43736E25F577",
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
      "base": "ibc/EFF2A9F8FB4ADC6E384041D00C10403FEEC6E0534C717807DF6B43736E25F577",
      "name": "Teritori",
      "display": "tori",
      "symbol": "TORI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B3D5CE13787F37533CF7A87D95BBF62F3D027815304A6CC7B6EA7030BD9709B7",
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
      "base": "ibc/B3D5CE13787F37533CF7A87D95BBF62F3D027815304A6CC7B6EA7030BD9709B7",
      "name": "Stride Staked JUNO",
      "display": "stjuno",
      "symbol": "stJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9E58E47857A51FFB728EDB7DD54CDFC2AB5E8FF358B9B010BF0A92AB18930BEA",
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
      "base": "ibc/9E58E47857A51FFB728EDB7DD54CDFC2AB5E8FF358B9B010BF0A92AB18930BEA",
      "name": "Stride Staked OSMO",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/18CD772EE2D231E26DA049B70A73BA674C8A35D991E52E3AC1F5451BFEC4AF40",
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
      "base": "ibc/18CD772EE2D231E26DA049B70A73BA674C8A35D991E52E3AC1F5451BFEC4AF40",
      "name": "MuseDAO",
      "display": "muse",
      "symbol": "MUSE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1B60E4060369045D198CD73F74DE6F7E1AD608C5FB6709C1D2B6F28D88BF4891",
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
      "base": "ibc/1B60E4060369045D198CD73F74DE6F7E1AD608C5FB6709C1D2B6F28D88BF4891",
      "name": "Lambda",
      "display": "lamb",
      "symbol": "LAMB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CC35C0E6612E2A3568DC4C2A75F933751564AEA45B8CE5C23F08777D3E773D1B",
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
      "base": "ibc/CC35C0E6612E2A3568DC4C2A75F933751564AEA45B8CE5C23F08777D3E773D1B",
      "name": "USK",
      "display": "usk",
      "symbol": "USK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9481CBCEFA8486819A66152E02A2653680978947A495FA489DFFD5603A8D7595",
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
      "base": "ibc/9481CBCEFA8486819A66152E02A2653680978947A495FA489DFFD5603A8D7595",
      "name": "Unification",
      "display": "FUND",
      "symbol": "FUND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CD1F9CEE1189E4E7B2FB1F2B83211B9E49C1DE591B998D3D0DA680A1018EB80D",
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
      "base": "ibc/CD1F9CEE1189E4E7B2FB1F2B83211B9E49C1DE591B998D3D0DA680A1018EB80D",
      "name": "Jackal",
      "display": "jkl",
      "symbol": "JKL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E4515B969CFD2DD84ED80C3DC834261D478B8ADA6C157249003998483B6943C6",
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
      "base": "ibc/E4515B969CFD2DD84ED80C3DC834261D478B8ADA6C157249003998483B6943C6",
      "name": "Alter",
      "display": "alter",
      "symbol": "ALTER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1DCA7A1A3F61552E4A0932AF9EF9EC967CF67406B4E206645E4F94AF44873EB1",
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
      "base": "ibc/1DCA7A1A3F61552E4A0932AF9EF9EC967CF67406B4E206645E4F94AF44873EB1",
      "name": "Button",
      "display": "butt",
      "symbol": "BUTT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3F0A0C7EBDEE61C9652B8A6154D27F62483F7E60813A3ADE87D61BE751A138EF",
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
      "base": "ibc/3F0A0C7EBDEE61C9652B8A6154D27F62483F7E60813A3ADE87D61BE751A138EF",
      "name": "Shade (old)",
      "display": "shd",
      "symbol": "SHD(old)",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/50A08F06A48FAEBF6428ED99022E3097A2CB1CB2018168D325CA25297E9860CC",
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
      "base": "ibc/50A08F06A48FAEBF6428ED99022E3097A2CB1CB2018168D325CA25297E9860CC",
      "name": "SIENNA",
      "display": "sienna",
      "symbol": "SIENNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/57D9A0BFC996E8B8EE05E4092C043F1AF92621B5B33FE1AE734252E0FFC2AE84",
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
      "base": "ibc/57D9A0BFC996E8B8EE05E4092C043F1AF92621B5B33FE1AE734252E0FFC2AE84",
      "name": "SCRT Staking Derivatives",
      "display": "stkd-scrt",
      "symbol": "stkd-SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/09CE9524B2ED24958C48673EDB155D72E2F55A9A2C72127489AE359DEC82D102",
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
      "base": "ibc/09CE9524B2ED24958C48673EDB155D72E2F55A9A2C72127489AE359DEC82D102",
      "name": "BeeZee",
      "display": "bze",
      "symbol": "BZE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B404E805113599D269F95F1C209FA6C4EA6C0739FFF7D475108ECA4A67554748",
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
      "base": "ibc/B404E805113599D269F95F1C209FA6C4EA6C0739FFF7D475108ECA4A67554748",
      "name": "Fanfury",
      "display": "fury",
      "symbol": "FURY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E6D1EFD44586EFA378320D33FB45DE923941DF524065BA936FE121BED32E8CF1",
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
      "base": "ibc/E6D1EFD44586EFA378320D33FB45DE923941DF524065BA936FE121BED32E8CF1",
      "name": "Acrechain",
      "display": "acre",
      "symbol": "ACRE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/ECA2D2209BD5EA3FF7D25F25BDC5BBB50A0956713279636FF1959C6E9CBEF7CF",
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
      "base": "ibc/ECA2D2209BD5EA3FF7D25F25BDC5BBB50A0956713279636FF1959C6E9CBEF7CF",
      "name": "CMST",
      "display": "cmst",
      "symbol": "CMST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3B48D03641E4522A761584D994A1FFB047F0B3317EE80AB82B0E9C5B78D89947",
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
      "base": "ibc/3B48D03641E4522A761584D994A1FFB047F0B3317EE80AB82B0E9C5B78D89947",
      "name": "Imversed",
      "display": "imv",
      "symbol": "IMV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FB2C72C4D53AF7375223625ADC4DAD7DEC280F4DBFD3E2E44A140DB7D9DC1F07",
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
      "base": "ibc/FB2C72C4D53AF7375223625ADC4DAD7DEC280F4DBFD3E2E44A140DB7D9DC1F07",
      "name": "Medas Digital Network",
      "display": "medas",
      "symbol": "MEDAS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CE084E848EE293441496973583E2BF14D61A208CCEA33BE204332BE12DC42110",
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
      "base": "ibc/CE084E848EE293441496973583E2BF14D61A208CCEA33BE204332BE12DC42110",
      "name": "POSTHUMAN",
      "display": "phmn",
      "symbol": "PHMN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F27FD8847ED7B19D67F586E9C81B9F562732AEFEB4FE73F4317D60D0D12132B4",
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
      "base": "ibc/F27FD8847ED7B19D67F586E9C81B9F562732AEFEB4FE73F4317D60D0D12132B4",
      "name": "Amber",
      "display": "amber",
      "symbol": "AMBER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/700863F83F00B418CF178ABA52ECBCDB2FB2E63CD1B53F55F20FE4C256922F0E",
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
      "base": "ibc/700863F83F00B418CF178ABA52ECBCDB2FB2E63CD1B53F55F20FE4C256922F0E",
      "name": "Onomy",
      "display": "nom",
      "symbol": "NOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/645C92C91742A3D0B1DBBACA4083AE89EEA833F90A7031CDB549ACD0996ED358",
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
      "base": "ibc/645C92C91742A3D0B1DBBACA4083AE89EEA833F90A7031CDB549ACD0996ED358",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B38CBC5B312E7A4ECE74183FCDD53BE5643264063D10AAABD44B2E7B531A294F",
          "exponent": 0,
          "aliases": [
            "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/B38CBC5B312E7A4ECE74183FCDD53BE5643264063D10AAABD44B2E7B531A294F",
      "name": "Dyson Protocol",
      "display": "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
      "symbol": "DYS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/337AF21DD5D4596D335F2365BB1A8EE3D5DA591796E489C2305527AB350E95D3",
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
      "base": "ibc/337AF21DD5D4596D335F2365BB1A8EE3D5DA591796E489C2305527AB350E95D3",
      "name": "Hopers",
      "display": "hopers",
      "symbol": "HOPERS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/089840DAB65415404C744F09D674E2C0EC88AE3C03F60ED61C963AE2B9273C60",
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
      "base": "ibc/089840DAB65415404C744F09D674E2C0EC88AE3C03F60ED61C963AE2B9273C60",
      "name": "Arable USD",
      "display": "arusd",
      "symbol": "arUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/22D2E699211C72D735BB0720C11BB563602BD42251AD55729FF46501ECC63101",
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
      "base": "ibc/22D2E699211C72D735BB0720C11BB563602BD42251AD55729FF46501ECC63101",
      "name": "Planq",
      "display": "planq",
      "symbol": "PLQ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C5A6B499ED07C0960F351511061C261F6BFAB6EBDFF7F92F9C1B7B78615A1AD4",
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
      "base": "ibc/C5A6B499ED07C0960F351511061C261F6BFAB6EBDFF7F92F9C1B7B78615A1AD4",
      "name": "Fantom",
      "display": "ftm",
      "symbol": "FTM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9102B73AB24C6B7DFEDA59AE3C65C308F3E7205CA89830CDE0079C1E4497AA4E",
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
      "base": "ibc/9102B73AB24C6B7DFEDA59AE3C65C308F3E7205CA89830CDE0079C1E4497AA4E",
      "name": "Canto",
      "display": "canto",
      "symbol": "CANTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/70D9646588FC4C0A82B29E44107D23D3E1AEE6385BF6207B39C6ED560EA5E1CE",
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
      "base": "ibc/70D9646588FC4C0A82B29E44107D23D3E1AEE6385BF6207B39C6ED560EA5E1CE",
      "name": "Quicksilver Liquid Staked STARS",
      "display": "qstars",
      "symbol": "qSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/93ABF66E09207040EC1A574F5561853DE5530DEDBDC903953EEDC987F9F02591",
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
      "base": "ibc/93ABF66E09207040EC1A574F5561853DE5530DEDBDC903953EEDC987F9F02591",
      "name": "Wynd DAO Governance Token",
      "display": "wynd",
      "symbol": "WYND",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BF2AD03674045A1F1AA3B1456C60D52AFA141B5C097EF45BBE5C2139FD2ED701",
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
      "base": "ibc/BF2AD03674045A1F1AA3B1456C60D52AFA141B5C097EF45BBE5C2139FD2ED701",
      "name": "USD Coin (Polygon)",
      "display": "polygon-usdc",
      "symbol": "polygon.USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/524D1BD0F934193640C694FE47CE4A817EF342B774E6E4BB30B3E3A9DBAD2790",
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
      "base": "ibc/524D1BD0F934193640C694FE47CE4A817EF342B774E6E4BB30B3E3A9DBAD2790",
      "name": "USD Coin (Avalanche)",
      "display": "avalanche-usdc",
      "symbol": "avalanche.USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F018FA30AADFFBA09E5B7534DD3F7C1CD94091552E907741A65D98CAD941202D",
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
      "base": "ibc/F018FA30AADFFBA09E5B7534DD3F7C1CD94091552E907741A65D98CAD941202D",
      "name": "Mars Hub",
      "display": "mars",
      "symbol": "MARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C65036C67CDB17BBEF6DE0E0A5B8DF7E79799766EB8A3BB3AC96981A6CC22CDD",
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
      "base": "ibc/C65036C67CDB17BBEF6DE0E0A5B8DF7E79799766EB8A3BB3AC96981A6CC22CDD",
      "name": "Ciento Token",
      "display": "cnto",
      "symbol": "CNTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C50A0C7F7B66DE2A0646F0AE33AF97C6E3A7F6AEBDF02139E25B964241ACDAC5",
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
      "base": "ibc/C50A0C7F7B66DE2A0646F0AE33AF97C6E3A7F6AEBDF02139E25B964241ACDAC5",
      "name": "Stride Staked LUNA",
      "display": "stluna",
      "symbol": "stLUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BCBAC8643C4F9F32C579783CC06C26D9EA2BBA8BA61FDDCD8353900A14373A48",
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
      "base": "ibc/BCBAC8643C4F9F32C579783CC06C26D9EA2BBA8BA61FDDCD8353900A14373A48",
      "name": "Stride Staked EVMOS",
      "display": "stevmos",
      "symbol": "stEVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/57D61C7ADD13CA5D92A52AB82C6A7F8AC528FBAD6DCB59E42627153E1636A2EF",
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
      "base": "ibc/57D61C7ADD13CA5D92A52AB82C6A7F8AC528FBAD6DCB59E42627153E1636A2EF",
      "name": "nRide Token",
      "display": "nride",
      "symbol": "NRIDE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/92540469D61D91C858A301E1AA69561E0214206E1810A05C1DF3094451ABCBEA",
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
      "base": "ibc/92540469D61D91C858A301E1AA69561E0214206E1810A05C1DF3094451ABCBEA",
      "name": "8ball",
      "display": "ebl",
      "symbol": "EBL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B503253D24ADBC5A9508AF47CAD6E912A856CB11B09279252ABBC2DD2C210E04",
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
      "base": "ibc/B503253D24ADBC5A9508AF47CAD6E912A856CB11B09279252ABBC2DD2C210E04",
      "name": "Quicksilver Liquid Staked ATOM",
      "display": "qatom",
      "symbol": "qATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8CB5A08BCDC4AE6738AFBFC3AD1A35D673F7A67E105B7A0E9DD668E40A47A0B5",
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
      "base": "ibc/8CB5A08BCDC4AE6738AFBFC3AD1A35D673F7A67E105B7A0E9DD668E40A47A0B5",
      "name": "Harbor",
      "display": "harbor",
      "symbol": "HARBOR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F9F40CB526C1B8EECE538F5F9A920153B6C5B31655E020ED35EC0FA646918F2B",
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
      "base": "ibc/F9F40CB526C1B8EECE538F5F9A920153B6C5B31655E020ED35EC0FA646918F2B",
      "name": "Quicksilver Liquid Staked Regen",
      "display": "qregen",
      "symbol": "qREGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0C2D0BAF7C6F6F312A9010203494E8AA89585E89E9F3EE3417F2A5AC276774FC",
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
      "base": "ibc/0C2D0BAF7C6F6F312A9010203494E8AA89585E89E9F3EE3417F2A5AC276774FC",
      "name": "Juno Fox",
      "display": "fox",
      "symbol": "FOX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/21899A4BFC610CDF2F4C02EA125992E878DA50AA3443666022EBC28CCF079425",
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
      "base": "ibc/21899A4BFC610CDF2F4C02EA125992E878DA50AA3443666022EBC28CCF079425",
      "name": "Quicksilver",
      "display": "qck",
      "symbol": "QCK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9BCAFB4930A8AE44F1BAB2F2D9AC8DC14797C67E79D024169CF736818752044F",
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
      "base": "ibc/9BCAFB4930A8AE44F1BAB2F2D9AC8DC14797C67E79D024169CF736818752044F",
      "name": "Arkhadian",
      "display": "ARKH",
      "symbol": "ARKH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2C4D40662C62AB77A5D5C05229E57B15B2BAD8F9699AF9874F09DABD4B86DC23",
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
      "base": "ibc/2C4D40662C62AB77A5D5C05229E57B15B2BAD8F9699AF9874F09DABD4B86DC23",
      "name": "Quicksilver Liquid Staked OSMO",
      "display": "qosmo",
      "symbol": "qOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/5BAA588DBAC6E9BF751A0BD8278DCA9B1E26D02B4C6FE436D55E8847BD207554",
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
      "base": "ibc/5BAA588DBAC6E9BF751A0BD8278DCA9B1E26D02B4C6FE436D55E8847BD207554",
      "name": "Frienzies",
      "display": "frienzies",
      "symbol": "FRNZ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CC37248F74915D5B30B8C02F38147DA22680F0F462C9C5CBC434F535FF8E542F",
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
      "base": "ibc/CC37248F74915D5B30B8C02F38147DA22680F0F462C9C5CBC434F535FF8E542F",
      "name": "Migaloo",
      "display": "whale",
      "symbol": "WHALE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2A11182234F42FF340F0AE3A50AEFF1A2F7DACF2383F623215F4F497FE59521C",
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
      "base": "ibc/2A11182234F42FF340F0AE3A50AEFF1A2F7DACF2383F623215F4F497FE59521C",
      "name": "Guardian",
      "display": "grdn",
      "symbol": "GRDN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/95A003804B0BD4DED1251D4D76D7823D08ED19FA12910B7F2A8D604C7B2244BA",
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
      "base": "ibc/95A003804B0BD4DED1251D4D76D7823D08ED19FA12910B7F2A8D604C7B2244BA",
      "name": "Mini Punks",
      "display": "mnpu",
      "symbol": "MNPU",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3202E4FFC4C608CFB2C5824573D5838139F993EA81E70811287599013AC095F0",
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
      "base": "ibc/3202E4FFC4C608CFB2C5824573D5838139F993EA81E70811287599013AC095F0",
      "name": "ShibaCosmos",
      "display": "shibac",
      "symbol": "SHIBAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D17CA03604F1FBB6DCB3368499AE872775E0DFBFE1E8944424F41A133123A4A8",
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
      "base": "ibc/D17CA03604F1FBB6DCB3368499AE872775E0DFBFE1E8944424F41A133123A4A8",
      "name": "Sikoba Token",
      "display": "sikoba",
      "symbol": "SKOJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BD5F5C2F76E51780E33B00759AC1749A164161284FBB8A9343B8554F6761C9E2",
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
      "base": "ibc/BD5F5C2F76E51780E33B00759AC1749A164161284FBB8A9343B8554F6761C9E2",
      "name": "Nature Carbon Ton",
      "display": "nct",
      "symbol": "NCT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CF46406B0154376911D750DBBDA2AD48EF16CBD7C3E093CF705CBB3109AAB54E",
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
      "base": "ibc/CF46406B0154376911D750DBBDA2AD48EF16CBD7C3E093CF705CBB3109AAB54E",
      "name": "Celestims",
      "display": "clst",
      "symbol": "CLST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/BA0EB0193F1F17D8C54F1F481E655C93332E088DC3CE5359EC5156852C8F3D9A",
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
      "base": "ibc/BA0EB0193F1F17D8C54F1F481E655C93332E088DC3CE5359EC5156852C8F3D9A",
      "name": "Osmosis Doge",
      "display": "osdoge",
      "symbol": "OSDOGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/ACCFC1299624B5DE70955E611E7521E8003D92FFFBB11A6AB96B6851776B7308",
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
      "base": "ibc/ACCFC1299624B5DE70955E611E7521E8003D92FFFBB11A6AB96B6851776B7308",
      "name": "Apemos",
      "display": "apemos",
      "symbol": "APEMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6C9211591D2E961FFE2FDF4359D67EBDE4D4804AD5935C757BDE9F837497D4F3",
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
      "base": "ibc/6C9211591D2E961FFE2FDF4359D67EBDE4D4804AD5935C757BDE9F837497D4F3",
      "name": "Invaders",
      "display": "invdrs",
      "symbol": "INVDRS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C61F95A2511E83E71CA4C7AA4855B19CE9E5238CF4260545310D8037B978FCFB",
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
      "base": "ibc/C61F95A2511E83E71CA4C7AA4855B19CE9E5238CF4260545310D8037B978FCFB",
      "name": "Doge Apr",
      "display": "doga",
      "symbol": "DOGA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/46F93D1A8AEE06E1CE6494BE8B0D99E6D93F7AB032B3AE8AFE03C94C42719FCC",
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
      "base": "ibc/46F93D1A8AEE06E1CE6494BE8B0D99E6D93F7AB032B3AE8AFE03C94C42719FCC",
      "name": "Catmos",
      "display": "catmos",
      "symbol": "CATMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/ECEBBD080442596B81525D3EC51ECE6D089139E53D27B57B1A78B8E4E0ECC3C5",
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
      "base": "ibc/ECEBBD080442596B81525D3EC51ECE6D089139E53D27B57B1A78B8E4E0ECC3C5",
      "name": "Summit",
      "display": "summit",
      "symbol": "SUMMIT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D98B4CC75174B30EC0D72CDCDAE96AB629389C9D28252F6B0132C84326FD5197",
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
      "base": "ibc/D98B4CC75174B30EC0D72CDCDAE96AB629389C9D28252F6B0132C84326FD5197",
      "name": "OmniFlix",
      "display": "flix",
      "symbol": "FLIX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CC743F3F531B88E3E18AA500BF8D83BD9993C7F12C75029113BD66A5917E946D",
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
      "base": "ibc/CC743F3F531B88E3E18AA500BF8D83BD9993C7F12C75029113BD66A5917E946D",
      "name": "Spacer",
      "display": "spacer",
      "symbol": "SPACER",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/15A266392B2259187C3C91556D306FAC8689B23757CC8AED1D016C9B115070FA",
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
      "base": "ibc/15A266392B2259187C3C91556D306FAC8689B23757CC8AED1D016C9B115070FA",
      "name": "LIGHT",
      "display": "light",
      "symbol": "LIGHT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2AC9BA7B3A2D92E1F0811B0711662184EC3430FD540C1FEEFAE457C55CB95DE6",
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
      "base": "ibc/2AC9BA7B3A2D92E1F0811B0711662184EC3430FD540C1FEEFAE457C55CB95DE6",
      "name": "Silk",
      "display": "silk",
      "symbol": "SILK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/91C6E3A3F195113F236722DEC4684676EEF5774A85F0D7330306D6E5DC1738C7",
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
      "base": "ibc/91C6E3A3F195113F236722DEC4684676EEF5774A85F0D7330306D6E5DC1738C7",
      "name": "Mille",
      "display": "mile",
      "symbol": "MILE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/495ED74F3ED191F8D627006BBCFCAF91730B42258C4AFD7E503A0FB27EE9B00C",
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
      "base": "ibc/495ED74F3ED191F8D627006BBCFCAF91730B42258C4AFD7E503A0FB27EE9B00C",
      "name": "Manna",
      "display": "manna",
      "symbol": "MANNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C8D2B3EE443D0E3D221EE9FA58698441451FA2310B4FD8356CF3620971574AFB",
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
      "base": "ibc/C8D2B3EE443D0E3D221EE9FA58698441451FA2310B4FD8356CF3620971574AFB",
      "name": "Filecoin",
      "display": "fil",
      "symbol": "FIL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0332151F630C31DEDD6A9DBE287D73CE710DE69B8674F397F480FE6A218F9F72",
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
      "base": "ibc/0332151F630C31DEDD6A9DBE287D73CE710DE69B8674F397F480FE6A218F9F72",
      "name": "Void",
      "display": "void",
      "symbol": "VOID",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6B5EEBFA0FF8355F4FECEA9D06C4AFE2619977BFA3E0EB65B32DCD6505EEAF1E",
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
      "base": "ibc/6B5EEBFA0FF8355F4FECEA9D06C4AFE2619977BFA3E0EB65B32DCD6505EEAF1E",
      "name": "Shade",
      "display": "shd",
      "symbol": "SHD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/2E6C9FA4B5F49763CE55BE9594E57A07CD48051E7D7B2D7AB433C39A0B0F67DC",
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
      "base": "ibc/2E6C9FA4B5F49763CE55BE9594E57A07CD48051E7D7B2D7AB433C39A0B0F67DC",
      "name": "Bluzelle",
      "display": "bnt",
      "symbol": "BLZ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F52AD13F76073B16590A47E89B698ED1D71E8B98336B6C448547D9C035468E5A",
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
      "base": "ibc/F52AD13F76073B16590A47E89B698ED1D71E8B98336B6C448547D9C035468E5A",
      "name": "Arbitrum",
      "display": "arb",
      "symbol": "ARB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7D67EC49F4B27B99DC0856B7DA74D55870B1CEDE925F0D4B77678B81BA6E3FE0",
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
      "base": "ibc/7D67EC49F4B27B99DC0856B7DA74D55870B1CEDE925F0D4B77678B81BA6E3FE0",
      "name": "Silica",
      "display": "silica",
      "symbol": "SLCA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/53515CCF66EB3C8F4B32B7BC0E4E439234B73D9150AD253CD68B62F33D3E192E",
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
      "base": "ibc/53515CCF66EB3C8F4B32B7BC0E4E439234B73D9150AD253CD68B62F33D3E192E",
      "name": "Pepec",
      "display": "pepec",
      "symbol": "PEPEC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A90CA5F2C706D5E0BEBF17A590E73B7868899BCDA5082C7832B6D5BB116561AB",
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
      "base": "ibc/A90CA5F2C706D5E0BEBF17A590E73B7868899BCDA5082C7832B6D5BB116561AB",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/4FBFB92ED8EBA5AB1454C1215D1FE536BB09393A58E27E3891FD5D9AE18B6A37",
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
      "base": "ibc/4FBFB92ED8EBA5AB1454C1215D1FE536BB09393A58E27E3891FD5D9AE18B6A37",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.",
      "denom_units": [
        {
          "denom": "ibc/25E3F4703B0BC7BD8EF83338F83DA6617D162FE5130D9D9DAE0AF20AC5EA7F95",
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
      "base": "ibc/25E3F4703B0BC7BD8EF83338F83DA6617D162FE5130D9D9DAE0AF20AC5EA7F95",
      "name": "Coinbase Wrapped Staked ETH",
      "display": "cbeth",
      "symbol": "cbETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/45FFBE290C088F201038C6858D6E3BF94025C99963467E7A763D3E3FC21FB5E0",
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
      "base": "ibc/45FFBE290C088F201038C6858D6E3BF94025C99963467E7A763D3E3FC21FB5E0",
      "name": "Rocket Pool Ether",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CD22C0DF73C38EE4C12F7958C6137C339362520FA5A2FEB106F0F21936B08171",
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
      "base": "ibc/CD22C0DF73C38EE4C12F7958C6137C339362520FA5A2FEB106F0F21936B08171",
      "name": "Staked Frax Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9A2FA00E02FBB3843FFD478043F351D817146CE4FAA556FCBC4134806F33DCB1",
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
      "base": "ibc/9A2FA00E02FBB3843FFD478043F351D817146CE4FAA556FCBC4134806F33DCB1",
      "name": "Wrapped Lido Staked Ether (Axelar)",
      "display": "wsteth",
      "symbol": "wstETH.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/5F82D57CEF1E43C2FB33481A6732FAEDA525A8D34AD6101F869799C9F92FB9A8",
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
      "base": "ibc/5F82D57CEF1E43C2FB33481A6732FAEDA525A8D34AD6101F869799C9F92FB9A8",
      "name": "Gitopia",
      "display": "LORE",
      "symbol": "LORE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1AC428BDB51BD1E34979FB2A1DEB9DC3DD1CCC6DE3D88D4D3E89A361EDDD3CC9",
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
      "base": "ibc/1AC428BDB51BD1E34979FB2A1DEB9DC3DD1CCC6DE3D88D4D3E89A361EDDD3CC9",
      "name": "Lion DAO",
      "display": "roar",
      "symbol": "ROAR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/912BEC87E7CF0E160EE30B12F673BF47B652F47C6941000198BFE15C90C5A4E7",
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
      "base": "ibc/912BEC87E7CF0E160EE30B12F673BF47B652F47C6941000198BFE15C90C5A4E7",
      "name": "Stride Staked UMEE",
      "display": "stumee",
      "symbol": "stUMEE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6D0DCE67DFE046EC06CC24175C7AB225A9C083BB7F01EA597A343870D38C158A",
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
      "base": "ibc/6D0DCE67DFE046EC06CC24175C7AB225A9C083BB7F01EA597A343870D38C158A",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The native token of Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/F722502EC90B3084DBD73589FC055E658EF9972A19ADDE61D3AA8BBF39B63883",
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
      "base": "ibc/F722502EC90B3084DBD73589FC055E658EF9972A19ADDE61D3AA8BBF39B63883",
      "name": "Nolus",
      "display": "nls",
      "symbol": "NLS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E4B8C5B13B867E8E7EDD4DDFFC400CFF6D52FC1531AFE9B10343123CDE4ADB32",
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
      "base": "ibc/E4B8C5B13B867E8E7EDD4DDFFC400CFF6D52FC1531AFE9B10343123CDE4ADB32",
      "name": "Lion Cub DAO",
      "display": "cub",
      "symbol": "CUB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7F22DC8C8982397A85B5F6E6BC328F7661519C9BE7A94592D69383A3F5D96D36",
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
      "base": "ibc/7F22DC8C8982397A85B5F6E6BC328F7661519C9BE7A94592D69383A3F5D96D36",
      "name": "BLUE CUB DAO",
      "display": "blue",
      "symbol": "BLUE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C9CB30630ED403FC0D1773D4FA962331130D3DC6DAE2DF4900173B8366F4C725",
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
      "base": "ibc/C9CB30630ED403FC0D1773D4FA962331130D3DC6DAE2DF4900173B8366F4C725",
      "name": "Neutron",
      "display": "ntrn",
      "symbol": "NTRN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B2237C25865210084754C062706A3F2011E523C0C9DA43E222E0D5B8042B9541",
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
      "base": "ibc/B2237C25865210084754C062706A3F2011E523C0C9DA43E222E0D5B8042B9541",
      "name": "Casa",
      "display": "casa",
      "symbol": "CASA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/81B7A23CF28714762A0EE9DA7C75D1D770F53CD4C75B82D9D07E626E731704DC",
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
      "base": "ibc/81B7A23CF28714762A0EE9DA7C75D1D770F53CD4C75B82D9D07E626E731704DC",
      "name": "Composable",
      "display": "pica",
      "symbol": "PICA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/58EC2414D627A2E406AF879FFB5FFE3504B87CF818E8B80EE30E41F23DB3CF14",
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
      "base": "ibc/58EC2414D627A2E406AF879FFB5FFE3504B87CF818E8B80EE30E41F23DB3CF14",
      "name": "Kusama",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/5342070BF68732B9BEF1523DE9CDDC66890C40C0F1331AD16B4E7FA9412105B3",
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
      "base": "ibc/5342070BF68732B9BEF1523DE9CDDC66890C40C0F1331AD16B4E7FA9412105B3",
      "name": "Polkadot",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/74C6A071817288DE90F3FC2555B4C18816F327437EB0E825F05A6E3C62DAA2A6",
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
      "base": "ibc/74C6A071817288DE90F3FC2555B4C18816F327437EB0E825F05A6E3C62DAA2A6",
      "name": "Quasar",
      "display": "qsr",
      "symbol": "QSR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/80E17C2B2D0CE80BD4831B4E4E31F204A763EA045B8A4DB7EAA78637D3A1D13A",
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
      "base": "ibc/80E17C2B2D0CE80BD4831B4E4E31F204A763EA045B8A4DB7EAA78637D3A1D13A",
      "name": "Archway",
      "display": "arch",
      "symbol": "ARCH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/635FEB0AB5A255B2BF417C95F40C529ADB716F6B291F98922869FB27A5C9A415",
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
      "base": "ibc/635FEB0AB5A255B2BF417C95F40C529ADB716F6B291F98922869FB27A5C9A415",
      "name": "EmpowerChain",
      "display": "mpwr",
      "symbol": "MPWR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E09053331EE6E980C09D841744CCD6D3150AE578BF86836A2255BB7EBF0F5F8D",
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
      "base": "ibc/E09053331EE6E980C09D841744CCD6D3150AE578BF86836A2255BB7EBF0F5F8D",
      "name": "WATR",
      "display": "watr",
      "symbol": "WATR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/FDE4C3D32178E16022C1FADB9139FDDD204C8E8BF48D854735AEBC0FF3B251A4",
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
      "base": "ibc/FDE4C3D32178E16022C1FADB9139FDDD204C8E8BF48D854735AEBC0FF3B251A4",
      "name": "KYVE",
      "display": "kyve",
      "symbol": "KYVE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C3131D228C3163DFD9068B14B920F10A4D37BE10E76CDC6C847B80AA83E40D40",
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
      "base": "ibc/C3131D228C3163DFD9068B14B920F10A4D37BE10E76CDC6C847B80AA83E40D40",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E0687047EA2BDEFC10A211E27502C2A78441684F624B41FD2FCFDEFDFB5AA569",
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
      "base": "ibc/E0687047EA2BDEFC10A211E27502C2A78441684F624B41FD2FCFDEFDFB5AA569",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The native staking token of Sei.",
      "denom_units": [
        {
          "denom": "ibc/395ED4160BADDC277C5F4B62EADC1E918AF1A12ADB5B1494BEAD22514CF77171",
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
      "base": "ibc/395ED4160BADDC277C5F4B62EADC1E918AF1A12ADB5B1494BEAD22514CF77171",
      "name": "Sei",
      "display": "sei",
      "symbol": "SEI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C15EB1B52CD0052BBE08929F9D735B4513957A5948918A8B39C2CF614281C474",
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
      "base": "ibc/C15EB1B52CD0052BBE08929F9D735B4513957A5948918A8B39C2CF614281C474",
      "name": "Quicksilver Liquid Staked SOMM",
      "display": "qsomm",
      "symbol": "qSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6E9637A7295EE3690456BC0212A092F169770F1D81C8D7756D9F17CD2FB615BF",
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
      "base": "ibc/6E9637A7295EE3690456BC0212A092F169770F1D81C8D7756D9F17CD2FB615BF",
      "name": "Passage",
      "display": "pasg",
      "symbol": "PASG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8886AFBD1D42A03190FA8F74ABA19EAEA69DB56CE9D4F4EDBFF625DAD4EF02EC",
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
      "base": "ibc/8886AFBD1D42A03190FA8F74ABA19EAEA69DB56CE9D4F4EDBFF625DAD4EF02EC",
      "name": "Stride Staked SOMM",
      "display": "stsomm",
      "symbol": "stSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7946458E49830F854E3A6D144DF47532B92021310D0DDC45BF8B568CFDC4438A",
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
      "base": "ibc/7946458E49830F854E3A6D144DF47532B92021310D0DDC45BF8B568CFDC4438A",
      "name": "Solana",
      "display": "wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8",
      "symbol": "SOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/344A58150E329F4FF51C3C38F5528BE1A1595FB68CF818011FA1C0585E095861",
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
      "base": "ibc/344A58150E329F4FF51C3C38F5528BE1A1595FB68CF818011FA1C0585E095861",
      "name": "Bonk",
      "display": "wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5",
      "symbol": "BONK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/B94A65FAD6163CD47606C4BB08C696CBA6153357023B2D557933960CA149CBF0",
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
      "base": "ibc/B94A65FAD6163CD47606C4BB08C696CBA6153357023B2D557933960CA149CBF0",
      "name": "Tether USD (Wormhole)",
      "display": "wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6",
      "symbol": "USDT.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9437BB40523C5AFD1413A1D8DEA5855EEC6E4CFE14D1DCA63341BED06BA7CD8B",
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
      "base": "ibc/9437BB40523C5AFD1413A1D8DEA5855EEC6E4CFE14D1DCA63341BED06BA7CD8B",
      "name": "Sui",
      "display": "wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8",
      "symbol": "SUI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6AC8E17C1903E60B72A2B6E0697952B5A043B7AF982D71BC8FC5D5885E6712A4",
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
      "base": "ibc/6AC8E17C1903E60B72A2B6E0697952B5A043B7AF982D71BC8FC5D5885E6712A4",
      "name": "Aptos Coin",
      "display": "wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8",
      "symbol": "APT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7804DC642450E24E1A03E3695A4E6652554BFE158CDE940EDDDAD7AF7580E115",
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
      "base": "ibc/7804DC642450E24E1A03E3695A4E6652554BFE158CDE940EDDDAD7AF7580E115",
      "name": "MantaDAO",
      "display": "mnta",
      "symbol": "MNTA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F13514F4B347A6035E85DD565887264D2919DFB558AB303FB495592E9B8ECF33",
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
      "base": "ibc/F13514F4B347A6035E85DD565887264D2919DFB558AB303FB495592E9B8ECF33",
      "name": "Licorice",
      "display": "dgl",
      "symbol": "DGL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E5B0D89429F2683BD3772DC55F76C01F37EB39A3476BC4908E6C2CC4AFF0DA2F",
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
      "base": "ibc/E5B0D89429F2683BD3772DC55F76C01F37EB39A3476BC4908E6C2CC4AFF0DA2F",
      "name": "USD Coin (Wormhole)",
      "display": "wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6",
      "symbol": "USDC.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8109C160C0A11D72ECFE82967D90193B237D6563AAFB817C82C33F18BF39E4E3",
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
      "base": "ibc/8109C160C0A11D72ECFE82967D90193B237D6563AAFB817C82C33F18BF39E4E3",
      "name": "Wrapped Ether (Wormhole)",
      "display": "wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8",
      "symbol": "wETH.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6B199312B29CF047BF8B1337450EF3AA0475FE0C312DB94055F2D5B22CD1E71A",
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
      "base": "ibc/6B199312B29CF047BF8B1337450EF3AA0475FE0C312DB94055F2D5B22CD1E71A",
      "name": "USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/03B109DEE70C41E7D69206D670E3839BFB72891FF2FB5D7D980703953CB8E62B",
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
      "base": "ibc/03B109DEE70C41E7D69206D670E3839BFB72891FF2FB5D7D980703953CB8E62B",
      "name": "Real Yield ETH",
      "display": "YieldETH",
      "symbol": "YieldETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6622E30A321549B623A4ACCC4A599A38655F1AFEB4FA96ED6588C1BACA300C4B",
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
      "base": "ibc/6622E30A321549B623A4ACCC4A599A38655F1AFEB4FA96ED6588C1BACA300C4B",
      "name": "XPLA",
      "display": "xpla",
      "symbol": "XPLA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D38D7BCB848EFB3804045D33FCD776867C62317FB6FF94D21A1FCC1834B3821A",
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
      "base": "ibc/D38D7BCB848EFB3804045D33FCD776867C62317FB6FF94D21A1FCC1834B3821A",
      "name": "OIN STORE OF VALUE",
      "display": "oin",
      "symbol": "OIN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/593518DCBEDF6A57C205903B307840B0563C9D7223B3B9F818704557494EB5B4",
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
      "base": "ibc/593518DCBEDF6A57C205903B307840B0563C9D7223B3B9F818704557494EB5B4",
      "name": "Neokingdom DAO",
      "display": "neok",
      "symbol": "NEOK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7B004B11E2CCC9EE7A126F0260AA90BDE9ACAC99EF89AC3F739685D6A310F9E7",
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
      "base": "ibc/7B004B11E2CCC9EE7A126F0260AA90BDE9ACAC99EF89AC3F739685D6A310F9E7",
      "name": "Realio Network",
      "display": "rio",
      "symbol": "RIO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9F977CFD6084FD4B83DF6BD27CECC0F805D0F6D95ED099650F330D94510F7F19",
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
      "base": "ibc/9F977CFD6084FD4B83DF6BD27CECC0F805D0F6D95ED099650F330D94510F7F19",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Membrane's protocol token",
      "denom_units": [
        {
          "denom": "ibc/CC0A5E28C584A93AB762E71DD3D5991928637042AC3E900EE94E19E46CBFE935",
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
      "base": "ibc/CC0A5E28C584A93AB762E71DD3D5991928637042AC3E900EE94E19E46CBFE935",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The native token of SGE Network",
      "denom_units": [
        {
          "denom": "ibc/99DA220AB0370777C45F543B5F3236992D6C402C7706660A778FE527742D4496",
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
      "base": "ibc/99DA220AB0370777C45F543B5F3236992D6C402C7706660A778FE527742D4496",
      "name": "SGE",
      "display": "sge",
      "symbol": "SGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/E51EF0215942396CCD7F4DFAB01FB41041668E8ED9E8B39DA9B67B34796DC457",
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
      "base": "ibc/E51EF0215942396CCD7F4DFAB01FB41041668E8ED9E8B39DA9B67B34796DC457",
      "name": "StaFi Hub",
      "display": "fis",
      "symbol": "FIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/0B657A64E07FC0903D71FF24B534F699C68301FEEEF4D5A52923F8870AB695A7",
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
      "base": "ibc/0B657A64E07FC0903D71FF24B534F699C68301FEEEF4D5A52923F8870AB695A7",
      "name": "rATOM",
      "display": "ratom",
      "symbol": "rATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DF2B8FA4EF3AEFC02D5520A4E886BA3D12B489011A8AC959926B27FC0D34675D",
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
      "base": "ibc/DF2B8FA4EF3AEFC02D5520A4E886BA3D12B489011A8AC959926B27FC0D34675D",
      "name": "Stardust STRDST",
      "display": "strdst",
      "symbol": "STRDST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/48920E8BB6BCA489B4DDC1CCA9694BC2A25F08F90D8E5F77A26AF94C1226E19E",
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
      "base": "ibc/48920E8BB6BCA489B4DDC1CCA9694BC2A25F08F90D8E5F77A26AF94C1226E19E",
      "name": "Dora Vota",
      "display": "DORA",
      "symbol": "DORA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/084A447714B57EDF8249627EDA6907A27A9C758133B4F47AA83A775FE1DDEF4E",
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
      "base": "ibc/084A447714B57EDF8249627EDA6907A27A9C758133B4F47AA83A775FE1DDEF4E",
      "name": "Coreum",
      "display": "core",
      "symbol": "COREUM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B",
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
      "base": "ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B",
      "name": "Celestia",
      "display": "tia",
      "symbol": "TIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A6FAB4141ECE6F85BAAC00989FDF7F96409673735B845DE730645EC67335E1C0",
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
      "base": "ibc/A6FAB4141ECE6F85BAAC00989FDF7F96409673735B845DE730645EC67335E1C0",
      "name": "dYdX Protocol",
      "display": "dydx",
      "symbol": "DYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8D8187CD0222C85079ECFEE0A7A6279AD5C98980791A17BEBB5A78778B1204B6",
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
      "base": "ibc/8D8187CD0222C85079ECFEE0A7A6279AD5C98980791A17BEBB5A78778B1204B6",
      "name": "f(x)Core",
      "display": "WFX",
      "symbol": "FX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D5CDA64730157DB9928A8E3CEEA19526A94F933443503A90D375394CA173F829",
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
      "base": "ibc/D5CDA64730157DB9928A8E3CEEA19526A94F933443503A90D375394CA173F829",
      "name": "Nomic Bitcoin",
      "display": "nbtc",
      "symbol": "nBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8349192BE84F63ECBCDE2E0195DAC22453C9AAC740971FE95D382CA8075E6A1C",
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
      "base": "ibc/8349192BE84F63ECBCDE2E0195DAC22453C9AAC740971FE95D382CA8075E6A1C",
      "name": "Nois",
      "display": "nois",
      "symbol": "NOIS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/03FB4E4D1043755015ABF1A84773EA334B2726EF464CF90D926C888ECE2D64FD",
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
      "base": "ibc/03FB4E4D1043755015ABF1A84773EA334B2726EF464CF90D926C888ECE2D64FD",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The Revenue & Governance token of Unstake.fi",
      "denom_units": [
        {
          "denom": "ibc/0F23E0D7F6595F6BBE43DF8007E1AD07126111DF9166768CA9AA359E46E71D4A",
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
      "base": "ibc/0F23E0D7F6595F6BBE43DF8007E1AD07126111DF9166768CA9AA359E46E71D4A",
      "name": "Unstake Fi",
      "display": "nstk",
      "symbol": "NSTK",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/01AF5CB6E8BD5C19438398865170AD47D4B22DC751D618BE07F7DC4302D3022A",
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
      "base": "ibc/01AF5CB6E8BD5C19438398865170AD47D4B22DC751D618BE07F7DC4302D3022A",
      "name": "Branch",
      "display": "BRNCH",
      "symbol": "BRNCH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/05EC9470C5B94B93DAEFC52C28D87B2BEFD99A5FB3B6ABC5E1AAF7396590E84F",
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
      "base": "ibc/05EC9470C5B94B93DAEFC52C28D87B2BEFD99A5FB3B6ABC5E1AAF7396590E84F",
      "name": "Wrapped Lido Staked Ether",
      "display": "wstETH",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8ACFBDDF77DA174672D246AA2083FC83067F2FB669D9F6BB00632A3F635EBAF9",
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
      "base": "ibc/8ACFBDDF77DA174672D246AA2083FC83067F2FB669D9F6BB00632A3F635EBAF9",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Margined Power Token sqBTC",
      "denom_units": [
        {
          "denom": "ibc/EA3D1D169CAF4C6A1B813D41337614C5785DD018514333C301B92B981A46CE02",
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
      "base": "ibc/EA3D1D169CAF4C6A1B813D41337614C5785DD018514333C301B92B981A46CE02",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "QWOYN is the native governance token for Qwoyn Network",
      "denom_units": [
        {
          "denom": "ibc/EDA8ACB9E26D83C1C2BDDB21F2681310B2CAF26B9139561DC00475B1A24CC56F",
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
      "base": "ibc/EDA8ACB9E26D83C1C2BDDB21F2681310B2CAF26B9139561DC00475B1A24CC56F",
      "name": "Qwoyn",
      "display": "qwoyn",
      "symbol": "QWOYN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/80D18976505E22590ABD29209A1B033C7212E952540C884EB5B2CA0F324ADC70",
          "exponent": 0,
          "aliases": [
            "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/80D18976505E22590ABD29209A1B033C7212E952540C884EB5B2CA0F324ADC70",
      "name": "Bostrom Hydrogen",
      "display": "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
      "symbol": "HYDROGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/DCDB44CB1441F2DB392518373C8D8E2B5A1EEB128913C0EF37D6A6C8C91FAC24",
          "exponent": 0,
          "aliases": [
            "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DCDB44CB1441F2DB392518373C8D8E2B5A1EEB128913C0EF37D6A6C8C91FAC24",
      "name": "Bostrom Tocyb",
      "display": "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
      "symbol": "TOCYB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CD803A46DD63A5A03C1D67067A1712DF73B4802D9D7217978EBA39D31E110C93",
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
      "base": "ibc/CD803A46DD63A5A03C1D67067A1712DF73B4802D9D7217978EBA39D31E110C93",
      "name": "Bostrom Volt",
      "display": "volt",
      "symbol": "V",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/95D36DAAB98DD33062E6CA6C88F113FD14EB835CC75FCAFFB1CD609DCC9CB973",
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
      "base": "ibc/95D36DAAB98DD33062E6CA6C88F113FD14EB835CC75FCAFFB1CD609DCC9CB973",
      "name": "Bostrom Ampere",
      "display": "ampere",
      "symbol": "A",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A77CC2CB874719F10F3E8974D7D51EC85F912536127EA2009E8276FCD75B8527",
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
      "base": "ibc/A77CC2CB874719F10F3E8974D7D51EC85F912536127EA2009E8276FCD75B8527",
      "name": "Source",
      "display": "source",
      "symbol": "SOURCE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8C8B8DB27CF99925C7624A7CB3247055F3C5B59DF466B9B30E441290F0F705D7",
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
      "base": "ibc/8C8B8DB27CF99925C7624A7CB3247055F3C5B59DF466B9B30E441290F0F705D7",
      "name": "Pyth Network",
      "display": "wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6",
      "symbol": "PYTH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/814F2057808DF5C7C9F9E1A513D9E6669061FF1B010CED198B3352EBA29EFBF6",
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
      "base": "ibc/814F2057808DF5C7C9F9E1A513D9E6669061FF1B010CED198B3352EBA29EFBF6",
      "name": "PSTAKE staked OSMO",
      "display": "stkosmo",
      "symbol": "stkOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/6A9571DE6A3F60D7703C3290E2944E806C15A47C1EA6D4AFCD3AE4DC8AF080B1",
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
      "base": "ibc/6A9571DE6A3F60D7703C3290E2944E806C15A47C1EA6D4AFCD3AE4DC8AF080B1",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Puppy",
      "denom_units": [
        {
          "denom": "ibc/2C24C5273CD0993300F11D951366CC0E7475381A767BE65F7080BB71D96984E9",
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
      "base": "ibc/2C24C5273CD0993300F11D951366CC0E7475381A767BE65F7080BB71D96984E9",
      "name": "Puppy",
      "display": "puppy",
      "symbol": "PUPPY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9C4A76F830BA0BE71F6E1B6211D7C1121BFE47CBD22B987371155BA3FC9F90CA",
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
      "base": "ibc/9C4A76F830BA0BE71F6E1B6211D7C1121BFE47CBD22B987371155BA3FC9F90CA",
      "name": "Newt",
      "display": "newt",
      "symbol": "NEWT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/C0DB3E0C7F3CD32FA24FC031FD8B6833627A1C690B741BA85D7A4752D974A77F",
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
      "base": "ibc/C0DB3E0C7F3CD32FA24FC031FD8B6833627A1C690B741BA85D7A4752D974A77F",
      "name": "milkTIA",
      "display": "milkTIA",
      "symbol": "milkTIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/146C6E316BDB144EE6685FE033E8DF78152B227631B9EB46C017D9D6F9AF7313",
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
      "base": "ibc/146C6E316BDB144EE6685FE033E8DF78152B227631B9EB46C017D9D6F9AF7313",
      "name": "ASH",
      "display": "ASH",
      "symbol": "ASH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9EECD783C840991747E7C7A7943EF2359A7DC77C04BCAA4C4513912AA1E5FB2D",
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
      "base": "ibc/9EECD783C840991747E7C7A7943EF2359A7DC77C04BCAA4C4513912AA1E5FB2D",
      "name": "RAC",
      "display": "RAC",
      "symbol": "RAC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/191EFA49A0B7821EB7E4CA9C7312042A388D86A399D9D4DC4571D334B7F4D60D",
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
      "base": "ibc/191EFA49A0B7821EB7E4CA9C7312042A388D86A399D9D4DC4571D334B7F4D60D",
      "name": "GUPPY",
      "display": "GUPPY",
      "symbol": "GUPPY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/5DA318CF6962D9859AA9997DBAD5EFFCF1C6B760ACE9166EFD19FF82F88467DE",
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
      "base": "ibc/5DA318CF6962D9859AA9997DBAD5EFFCF1C6B760ACE9166EFD19FF82F88467DE",
      "name": "Haqq Network",
      "display": "ISLM",
      "symbol": "ISLM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/EB87F22692D3AFC92F6062F57E020FFCFB6399BEFF09329E839FBEAF0EE1942E",
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
      "base": "ibc/EB87F22692D3AFC92F6062F57E020FFCFB6399BEFF09329E839FBEAF0EE1942E",
      "name": "Autism",
      "display": "autism",
      "symbol": "AUTISM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F19FBC3B7778956A625EA893CD19816E113BFD84221281A2AF3737B33FEFD476",
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
      "base": "ibc/F19FBC3B7778956A625EA893CD19816E113BFD84221281A2AF3737B33FEFD476",
      "name": "Page",
      "display": "page",
      "symbol": "PAGE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/AF48CCD843B6F2AA8E9132D9623272AF02D7AFDF4946E90618A2534179CE91C0",
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
      "base": "ibc/AF48CCD843B6F2AA8E9132D9623272AF02D7AFDF4946E90618A2534179CE91C0",
      "name": "PURSE Token (Function X)",
      "display": "PURSE",
      "symbol": "PURSE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1AB579FDAA05FA60F8EEE0B06E5FAE21EA583670964FFF140E970846376976B7",
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
      "base": "ibc/1AB579FDAA05FA60F8EEE0B06E5FAE21EA583670964FFF140E970846376976B7",
      "name": "Dog wif nunchucks",
      "display": "NINJA",
      "symbol": "NINJA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F2F84C8FBAF5C5124591B8828A143B38FC2F057845E6F25107ABE1F17D937009",
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
      "base": "ibc/F2F84C8FBAF5C5124591B8828A143B38FC2F057845E6F25107ABE1F17D937009",
      "name": "Kleomedes",
      "display": "kleo",
      "symbol": "KLEO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/01F9DC7355BF462268B8900E24DCCF69276DA22BD836DC61521F5A0ED20129CD",
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
      "base": "ibc/01F9DC7355BF462268B8900E24DCCF69276DA22BD836DC61521F5A0ED20129CD",
      "name": "Nym",
      "display": "nyx",
      "symbol": "NYX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/8019670AC918838EAE340F1EBCE37035EDD57B86C499818318772505F514B03F",
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
      "base": "ibc/8019670AC918838EAE340F1EBCE37035EDD57B86C499818318772505F514B03F",
      "name": "NYM",
      "display": "nym",
      "symbol": "NYM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
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
      "base": "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
      "name": "Chihuahuawifhat",
      "display": "achihuahuawifhat",
      "symbol": "BADDOG",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/680FF5EE731374BCF69B0A8DA8D2473347B64B8BF1ABD5832DF51CFB53961AA8",
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
      "base": "ibc/680FF5EE731374BCF69B0A8DA8D2473347B64B8BF1ABD5832DF51CFB53961AA8",
      "name": "AtomEconomicZone69JaeKwonInu",
      "display": "circus",
      "symbol": "CIRCUS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/D81C7C3E35430804B92E7EA51C3F5384341254B4BD72C25CE5D2937B13091F31",
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
      "base": "ibc/D81C7C3E35430804B92E7EA51C3F5384341254B4BD72C25CE5D2937B13091F31",
      "name": "Junø Apes",
      "display": "jape",
      "symbol": "JAPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/3679EB0FAF260324A44EF05260EB747D81CA61017AC7D2BCD1BFD29AC927DB7A",
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
      "base": "ibc/3679EB0FAF260324A44EF05260EB747D81CA61017AC7D2BCD1BFD29AC927DB7A",
      "name": "WOOF",
      "display": "WOOF",
      "symbol": "WOOF",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/F89F635D97BC6400E17521B4220E3E08F44CE794EB80F5CABB356D3557E72637",
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
      "base": "ibc/F89F635D97BC6400E17521B4220E3E08F44CE794EB80F5CABB356D3557E72637",
      "name": "Sneaky Productions",
      "display": "sneaky",
      "symbol": "SNEAKY",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/CF57A83CED6CEC7D706631B5DC53ABC21B7EDA7DF7490732B4361E6D5DD19C73",
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
      "base": "ibc/CF57A83CED6CEC7D706631B5DC53ABC21B7EDA7DF7490732B4361E6D5DD19C73",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/1D42EC448B863AF39FB6788C2201528C29B8C6362994BA41D8AAD2515B497B6D",
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
      "base": "ibc/1D42EC448B863AF39FB6788C2201528C29B8C6362994BA41D8AAD2515B497B6D",
      "name": "Badcoin",
      "display": "bad",
      "symbol": "BAD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/ECACBA0DD2F55DF08D9713BDA4923A2B6DFF9057703F528EC724E76CC2CCF258",
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
      "base": "ibc/ECACBA0DD2F55DF08D9713BDA4923A2B6DFF9057703F528EC724E76CC2CCF258",
      "name": "Signal",
      "display": "sgnl",
      "symbol": "SGNL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
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
      "base": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Margined Power Token sqTIA",
      "denom_units": [
        {
          "denom": "ibc/C975417951A4AA121B7C0A137510DBEEF3008E1DB58A8129C439C0F4FF77F684",
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
      "base": "ibc/C975417951A4AA121B7C0A137510DBEEF3008E1DB58A8129C439C0F4FF77F684",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The deflationary utility token of the Apollo DAO project",
      "denom_units": [
        {
          "denom": "ibc/6567DAF912E3BC274D0CCE45984E7A9559BF28F4AC9D366CD6A5B6B99168A3F5",
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
      "base": "ibc/6567DAF912E3BC274D0CCE45984E7A9559BF28F4AC9D366CD6A5B6B99168A3F5",
      "name": "Apollo DAO",
      "display": "apollo",
      "symbol": "APOLLO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/59703D5A806DF13C8EA2F36232FB0944B5669CCA731B45456B3E1E05F01491F2",
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
      "base": "ibc/59703D5A806DF13C8EA2F36232FB0944B5669CCA731B45456B3E1E05F01491F2",
      "name": "Stride Staked DYDX",
      "display": "stDYDX",
      "symbol": "stDYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/29A094924EB4272FFCAF4CBADC69F0C2BF575D5F28D6D9267A9E10F259346C53",
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
      "base": "ibc/29A094924EB4272FFCAF4CBADC69F0C2BF575D5F28D6D9267A9E10F259346C53",
      "name": "Stride Staked TIA",
      "display": "stTIA",
      "symbol": "stTIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/950A4309223A3A8F5C97A684E5252CBF5B53DB883E37585FC6E90A79522621F3",
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
      "base": "ibc/950A4309223A3A8F5C97A684E5252CBF5B53DB883E37585FC6E90A79522621F3",
      "name": "Gelotto (Injective)",
      "display": "glto",
      "symbol": "injective.GLTO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/9EC5098DF04B24E09BF1907EC3AF4E3B2D6BF4918B1A11A3661A5F0B4007E981",
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
      "base": "ibc/9EC5098DF04B24E09BF1907EC3AF4E3B2D6BF4918B1A11A3661A5F0B4007E981",
      "name": "Dymension Hub",
      "display": "dym",
      "symbol": "DYM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/866403F8335408854636C51D1C81639329EC4409FE640100FD0C7E90D316C984",
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
      "base": "ibc/866403F8335408854636C51D1C81639329EC4409FE640100FD0C7E90D316C984",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/BD9451F387367AA88FA3D18333B2F1D56607449F20B15B4557042DA869703E25",
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
      "base": "ibc/BD9451F387367AA88FA3D18333B2F1D56607449F20B15B4557042DA869703E25",
      "name": "Wormhole USDC(Avalanche)",
      "display": "avalanche-usdc",
      "symbol": "avalanche.USDC.wh",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/A42883E20767D7FF9D69D3CAF21FE2F8666AD1CCFA660CEF61AEB2A262085609",
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
      "base": "ibc/A42883E20767D7FF9D69D3CAF21FE2F8666AD1CCFA660CEF61AEB2A262085609",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "Nomic's native token.",
      "denom_units": [
        {
          "denom": "ibc/F5D24D849000F1EA14946E9BED504C3736E3730FB9D7008C2D78CEFDC79061DE",
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
      "base": "ibc/F5D24D849000F1EA14946E9BED504C3736E3730FB9D7008C2D78CEFDC79061DE",
      "name": "Nomic",
      "display": "nomic",
      "symbol": "nomic.NOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-88",
            "base_denom": "ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
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
          "denom": "ibc/32CC7460D443ECE2EB7D505CA527E99ED90630D5B8AAF2AAA647C602EDCE2FC9",
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
      "base": "ibc/32CC7460D443ECE2EB7D505CA527E99ED90630D5B8AAF2AAA647C602EDCE2FC9",
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
            "channel_id": "channel-88",
            "base_denom": "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID",
            "chain_name": "osmosis"
          },
          "chain": {
            "channel_id": "channel-1"
          }
        }
      ]
    },
    {
      "description": "The XPRT token is primarily a governance token for the Persistence chain.",
      "denom_units": [
        {
          "denom": "ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696",
          "exponent": 0,
          "aliases": [
            "uxprt"
          ]
        },
        {
          "denom": "xprt",
          "exponent": 6
        }
      ],
      "base": "ibc/3587AC36A81A13FCFB1D0EC03CEB98AEAAAB1F5275B68C7DC2B40BA6279AA696",
      "name": "Persistence",
      "display": "xprt",
      "symbol": "XPRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
      },
      "coingecko_id": "persistence",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "uxprt",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked ATOM",
      "denom_units": [
        {
          "denom": "ibc/DEA3620A6407C63A287A4FE1683D07627F27AF7A83E077B1E51EDFF8833980FE",
          "exponent": 0,
          "aliases": [
            "stk/uatom"
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
      "base": "ibc/DEA3620A6407C63A287A4FE1683D07627F27AF7A83E077B1E51EDFF8833980FE",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      },
      "coingecko_id": "stkatom",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "stk/uatom",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ]
    },
    {
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
      "denom_units": [
        {
          "denom": "ibc/9774DCF1E103F4B7E23744AB4B38C18CACF96281FA9305167FC497BC2FC7B888",
          "exponent": 0,
          "aliases": [
            "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
          ]
        },
        {
          "denom": "pstake",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9774DCF1E103F4B7E23744AB4B38C18CACF96281FA9305167FC497BC2FC7B888",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
      },
      "keywords": [
        "canon"
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9E8E651D84FDFA9C5B788CAB64AB624226EB625C7DF81A5C12B88192F553FA76",
          "exponent": 0,
          "aliases": [
            "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9E8E651D84FDFA9C5B788CAB64AB624226EB625C7DF81A5C12B88192F553FA76",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "description": "Tether USDT on Persistence",
      "denom_units": [
        {
          "denom": "ibc/BFDFD3E4BE4BECF46653D12E47A045BE31436EBC9E5A15170B43D9E742B0C6ED",
          "exponent": 0,
          "aliases": [
            "ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/BFDFD3E4BE4BECF46653D12E47A045BE31436EBC9E5A15170B43D9E742B0C6ED",
      "name": "Tether USDT",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/1895046E9B8218131A26EA6A02B63AD540E04296CB73FC8640DC8EF4AAA2FF2C",
          "exponent": 0,
          "aliases": [
            "ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1895046E9B8218131A26EA6A02B63AD540E04296CB73FC8640DC8EF4AAA2FF2C",
      "name": "Noble USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      }
    },
    {
      "description": "dydx staking token",
      "denom_units": [
        {
          "denom": "ibc/4117864AF01D6B4CB6F54FA9E8215EB06DA5E8ECCA2E01D7D2459E31616F0D62",
          "exponent": 0,
          "aliases": [
            "ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E"
          ]
        },
        {
          "denom": "dydx",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4117864AF01D6B4CB6F54FA9E8215EB06DA5E8ECCA2E01D7D2459E31616F0D62",
      "name": "dYdX",
      "display": "dydx",
      "symbol": "DYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "dydx",
            "base_denom": "adydx"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
      }
    },
    {
      "description": "PSTAKE Liquid-Staked OSMO",
      "denom_units": [
        {
          "denom": "ibc/61DC78A20F03F3326424B24F533FADCF487A54F51416B38CE87E0249B826F508",
          "exponent": 0,
          "aliases": [
            "stk/uosmo"
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
      "base": "ibc/61DC78A20F03F3326424B24F533FADCF487A54F51416B38CE87E0249B826F508",
      "name": "PSTAKE staked OSMO",
      "display": "stkosmo",
      "symbol": "stkOSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg"
      },
      "coingecko_id": "pstake-staked-osmo",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "stk/uosmo",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked DYDX",
      "denom_units": [
        {
          "denom": "ibc/770CF5C334866B8760435B1670C3CEEE3A42B4E6C85CB5A71E23F1610B62DB70",
          "exponent": 0,
          "aliases": [
            "stk/adydx"
          ]
        },
        {
          "denom": "stkdydx",
          "exponent": 18,
          "aliases": [
            "stk/dydx"
          ]
        }
      ],
      "base": "ibc/770CF5C334866B8760435B1670C3CEEE3A42B4E6C85CB5A71E23F1610B62DB70",
      "name": "PSTAKE staked DYDX",
      "display": "stkdydx",
      "symbol": "stkDYDX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-82",
            "base_denom": "stk/adydx",
            "chain_name": "persistence"
          },
          "chain": {
            "channel_id": "channel-64"
          }
        }
      ]
    },
    {
      "description": "QCK - native token of Quicksilver",
      "denom_units": [
        {
          "denom": "ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6",
          "exponent": 0,
          "aliases": [
            "uqck"
          ]
        },
        {
          "denom": "qck",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/C21A7C8801B94E73EBEDB9B0870D492190D7A01F63C8855962AAFDE2F026D8F6",
      "name": "Quicksilver",
      "display": "qck",
      "symbol": "QCK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
      },
      "coingecko_id": "quicksilver",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqck",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
          }
        }
      ]
    },
    {
      "description": "Quicksilver Liquid Staked STARS",
      "denom_units": [
        {
          "denom": "ibc/FBFAF334827BB4665528797AA4F12DD68ABB4705EAB49D324DCAB881FFD82CBC",
          "exponent": 0,
          "aliases": [
            "uqstars"
          ]
        },
        {
          "denom": "qstars",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/FBFAF334827BB4665528797AA4F12DD68ABB4705EAB49D324DCAB881FFD82CBC",
      "name": "Quicksilver Liquid Staked STARS",
      "display": "qstars",
      "symbol": "qSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqstars",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
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
      "description": "Quicksilver Liquid Staked ATOM",
      "denom_units": [
        {
          "denom": "ibc/97048A1FAFF5D84D4A5DDD9976AD332A3CAD99C81BC5C0C2B82A50E4C2131FB2",
          "exponent": 0,
          "aliases": [
            "uqatom"
          ]
        },
        {
          "denom": "qatom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/97048A1FAFF5D84D4A5DDD9976AD332A3CAD99C81BC5C0C2B82A50E4C2131FB2",
      "name": "Quicksilver Liquid Staked ATOM",
      "display": "qatom",
      "symbol": "qATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqatom",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
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
      "description": "Quicksilver Liquid Staked REGEN",
      "denom_units": [
        {
          "denom": "ibc/BB4CAD0A966F657292465D169294DD3EA4458EFED122F30FDB790F26B73EC1E4",
          "exponent": 0,
          "aliases": [
            "uqregen"
          ]
        },
        {
          "denom": "qregen",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/BB4CAD0A966F657292465D169294DD3EA4458EFED122F30FDB790F26B73EC1E4",
      "name": "Quicksilver Liquid Staked Regen",
      "display": "qregen",
      "symbol": "qREGEN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqregen",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
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
      "description": "Quicksilver Liquid Staked OSMO",
      "denom_units": [
        {
          "denom": "ibc/69526E1E6106169964E62CD8F1B9D79996A01FAFDF800230EDED52C838C9CC90",
          "exponent": 0,
          "aliases": [
            "uqosmo"
          ]
        },
        {
          "denom": "qosmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/69526E1E6106169964E62CD8F1B9D79996A01FAFDF800230EDED52C838C9CC90",
      "name": "Quicksilver Liquid Staked OSMO",
      "display": "qosmo",
      "symbol": "qOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqosmo",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
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
      "description": "Quicksilver Liquid Staked SOMM",
      "denom_units": [
        {
          "denom": "ibc/DEFFE97B4B9AECB9F92B04BF566DD0243D4708487B12A86E95F60EC1BB227A4C",
          "exponent": 0,
          "aliases": [
            "uqsomm"
          ]
        },
        {
          "denom": "qsomm",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ibc/DEFFE97B4B9AECB9F92B04BF566DD0243D4708487B12A86E95F60EC1BB227A4C",
      "name": "Quicksilver Liquid Staked SOMM",
      "display": "qsomm",
      "symbol": "qSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-52",
            "base_denom": "uqsomm",
            "chain_name": "quicksilver"
          },
          "chain": {
            "channel_id": "channel-65"
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
      "description": "DVPN is the native token of the Sentinel Hub.",
      "denom_units": [
        {
          "denom": "ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B",
          "exponent": 0,
          "aliases": [
            "udvpn"
          ]
        },
        {
          "denom": "dvpn",
          "exponent": 6
        }
      ],
      "base": "ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B",
      "name": "Sentinel",
      "display": "dvpn",
      "symbol": "DVPN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
      },
      "coingecko_id": "sentinel",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-50",
            "base_denom": "udvpn",
            "chain_name": "sentinel"
          },
          "chain": {
            "channel_id": "channel-3"
          }
        }
      ]
    },
    {
      "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "denom_units": [
        {
          "denom": "ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC",
          "exponent": 0,
          "aliases": [
            "rowan"
          ]
        },
        {
          "denom": "ROWAN",
          "exponent": 18
        }
      ],
      "base": "ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC",
      "name": "Sifchain Rowan",
      "display": "ROWAN",
      "symbol": "ROWAN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
      },
      "coingecko_id": "sifchain",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-65",
            "base_denom": "rowan",
            "chain_name": "sifchain"
          },
          "chain": {
            "channel_id": "channel-15"
          }
        }
      ]
    },
    {
      "description": "The native token of Stargaze",
      "denom_units": [
        {
          "denom": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
          "exponent": 0,
          "aliases": [
            "ustars"
          ]
        },
        {
          "denom": "stars",
          "exponent": 6
        }
      ],
      "base": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      },
      "coingecko_id": "stargaze",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "ustars",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "The native token of ohhNFT.",
      "denom_units": [
        {
          "denom": "ibc/2B7BA99D23AF32F6996B212D4A0EBF26DE46EAF9181B56F92FBC1C0525FB5BFF",
          "exponent": 0,
          "aliases": [
            "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust"
          ]
        },
        {
          "denom": "strdst",
          "exponent": 6
        }
      ],
      "base": "ibc/2B7BA99D23AF32F6996B212D4A0EBF26DE46EAF9181B56F92FBC1C0525FB5BFF",
      "name": "Stardust STRDST",
      "display": "strdst",
      "symbol": "STRDST",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "The native meme token of stargaze.",
      "denom_units": [
        {
          "denom": "ibc/E62153A24802886FFE5C61CCAC2634E679733D7AF16C1DE8EB4A444162721D78",
          "exponent": 0,
          "aliases": [
            "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE"
          ]
        },
        {
          "denom": "GAZE",
          "exponent": 6
        }
      ],
      "base": "ibc/E62153A24802886FFE5C61CCAC2634E679733D7AF16C1DE8EB4A444162721D78",
      "name": "Gaze GAZE",
      "display": "GAZE",
      "symbol": "GAZE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "ohhNFT LP token.",
      "denom_units": [
        {
          "denom": "ibc/513E64F11627BE13BA9878AFEEAD44D8E3B37669E3F89573910409C33CC742AC",
          "exponent": 0,
          "aliases": [
            "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH"
          ]
        },
        {
          "denom": "BRNCH",
          "exponent": 6
        }
      ],
      "base": "ibc/513E64F11627BE13BA9878AFEEAD44D8E3B37669E3F89573910409C33CC742AC",
      "name": "Branch",
      "display": "BRNCH",
      "symbol": "BRNCH",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "Social token for the ohhVAULT.",
      "denom_units": [
        {
          "denom": "ibc/E24A19C8B10DB32F2473D2F71DAD3C3F9A7FC5702E9D6286F3815230C984F56C",
          "exponent": 0,
          "aliases": [
            "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH"
          ]
        },
        {
          "denom": "OHH",
          "exponent": 6
        }
      ],
      "base": "ibc/E24A19C8B10DB32F2473D2F71DAD3C3F9A7FC5702E9D6286F3815230C984F56C",
      "name": "ohhVAULT ohh",
      "display": "OHH",
      "symbol": "OHH",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "The native coin of Sneaky Productions.",
      "denom_units": [
        {
          "denom": "ibc/BE9758B78F56686F74878A2D7E5F3D84C3CF9A15C33247E471286B888F79667B",
          "exponent": 0,
          "aliases": [
            "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky"
          ]
        },
        {
          "denom": "sneaky",
          "exponent": 6
        }
      ],
      "base": "ibc/BE9758B78F56686F74878A2D7E5F3D84C3CF9A15C33247E471286B888F79667B",
      "name": "Sneaky Productions",
      "display": "sneaky",
      "symbol": "SNEAKY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-48",
            "base_denom": "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky",
            "chain_name": "stargaze"
          },
          "chain": {
            "channel_id": "channel-19"
          }
        }
      ]
    },
    {
      "description": "The native token of Stride",
      "denom_units": [
        {
          "denom": "ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF",
          "exponent": 0,
          "aliases": [
            "ustrd"
          ]
        },
        {
          "denom": "strd",
          "exponent": 6
        }
      ],
      "base": "ibc/CE591002C567BE4B8C4EC3F3F3D18AF7A1CA9FADBF5876C8413F8B2BD83CE8FF",
      "name": "Stride",
      "display": "strd",
      "symbol": "STRD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      },
      "coingecko_id": "stride",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "ustrd",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A0E80E59956C754F1D9CB37234D13E0CF2949E7254896359F284512FA8428E18",
          "exponent": 0,
          "aliases": [
            "stuatom"
          ]
        },
        {
          "denom": "statom",
          "exponent": 6
        }
      ],
      "base": "ibc/A0E80E59956C754F1D9CB37234D13E0CF2949E7254896359F284512FA8428E18",
      "name": "Stride Staked ATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stuatom",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
      },
      "coingecko_id": "stride-staked-atom",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/7EA50CBABA08B30F59D7164AA504DC2074C566835B9330F14412C417EA7307F5",
          "exponent": 0,
          "aliases": [
            "stustars"
          ]
        },
        {
          "denom": "ststars",
          "exponent": 6
        }
      ],
      "base": "ibc/7EA50CBABA08B30F59D7164AA504DC2074C566835B9330F14412C417EA7307F5",
      "name": "Stride Staked STARS",
      "display": "ststars",
      "symbol": "stSTARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stustars",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
      },
      "coingecko_id": "stride-staked-stars",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/B0988C39E7418C644FDFD41682A59D22DCAD1BCC7A6429B2EAAA195FB726A2D7",
          "exponent": 0,
          "aliases": [
            "stuosmo"
          ]
        },
        {
          "denom": "stosmo",
          "exponent": 6
        }
      ],
      "base": "ibc/B0988C39E7418C644FDFD41682A59D22DCAD1BCC7A6429B2EAAA195FB726A2D7",
      "name": "Stride Staked OSMO",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stuosmo",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
      },
      "coingecko_id": "stride-staked-osmo",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9B7F6219D699F608B23382F341E29303D66D5CA81F91D6D0B957119F97569F0F",
          "exponent": 0,
          "aliases": [
            "stujuno"
          ]
        },
        {
          "denom": "stjuno",
          "exponent": 6
        }
      ],
      "base": "ibc/9B7F6219D699F608B23382F341E29303D66D5CA81F91D6D0B957119F97569F0F",
      "name": "Stride Staked JUNO",
      "display": "stjuno",
      "symbol": "stJUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stujuno",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
      },
      "coingecko_id": "stride-staked-juno",
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
          "denom": "ibc/C8D8F46E3CE6F41E01E32542215597CF4B32709C8A310F728653CB91FDB8A904",
          "exponent": 0,
          "aliases": [
            "stuluna"
          ]
        },
        {
          "denom": "stluna",
          "exponent": 6
        }
      ],
      "base": "ibc/C8D8F46E3CE6F41E01E32542215597CF4B32709C8A310F728653CB91FDB8A904",
      "name": "Stride Staked LUNA",
      "display": "stluna",
      "symbol": "stLUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stuluna",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg"
      },
      "coingecko_id": "stride-staked-luna",
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
          "denom": "ibc/7E8DC1B7D29E1FD88496D49CA8045F98EDF5C4D332D64D058BFB7DFCAACE8F46",
          "exponent": 0,
          "aliases": [
            "stinj"
          ]
        },
        {
          "denom": "stINJ",
          "exponent": 18
        }
      ],
      "base": "ibc/7E8DC1B7D29E1FD88496D49CA8045F98EDF5C4D332D64D058BFB7DFCAACE8F46",
      "name": "Stride Staked INJ",
      "display": "stINJ",
      "symbol": "stINJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stinj",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/359CC85AD0FA4363A0472C13912F6F7EA4C8C2677330E584D5F9E62AE8D29D67",
          "exponent": 0,
          "aliases": [
            "staevmos"
          ]
        },
        {
          "denom": "stevmos",
          "exponent": 18
        }
      ],
      "base": "ibc/359CC85AD0FA4363A0472C13912F6F7EA4C8C2677330E584D5F9E62AE8D29D67",
      "name": "Stride Staked EVMOS",
      "display": "stevmos",
      "symbol": "stEVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "staevmos",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
      },
      "coingecko_id": "stride-staked-evmos",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked DYDX",
      "denom_units": [
        {
          "denom": "ibc/E5DA7F807E9588AA76C33C1E0A91B5D34076F7D6FA170297DFD076EB14D36C0A",
          "exponent": 0,
          "aliases": [
            "stadydx"
          ]
        },
        {
          "denom": "stDYDX",
          "exponent": 18
        }
      ],
      "base": "ibc/E5DA7F807E9588AA76C33C1E0A91B5D34076F7D6FA170297DFD076EB14D36C0A",
      "name": "Stride Staked DYDX",
      "display": "stDYDX",
      "symbol": "stDYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stadydx",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
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
          "denom": "ibc/A223651B9E968C94D2C8378DDFAAF619CD215925BB793763A6CD626C7E36ED0C",
          "exponent": 0,
          "aliases": [
            "stutia"
          ]
        },
        {
          "denom": "stTIA",
          "exponent": 6
        }
      ],
      "base": "ibc/A223651B9E968C94D2C8378DDFAAF619CD215925BB793763A6CD626C7E36ED0C",
      "name": "Stride Staked TIA",
      "display": "stTIA",
      "symbol": "stTIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stutia",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
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
      "denom_units": [
        {
          "denom": "ibc/DB609B2CF0280FDCC7C7496945235EBACE0BC96CE4BF6FD1BF52946770E40387",
          "exponent": 0,
          "aliases": [
            "stuumee"
          ]
        },
        {
          "denom": "stumee",
          "exponent": 6
        }
      ],
      "base": "ibc/DB609B2CF0280FDCC7C7496945235EBACE0BC96CE4BF6FD1BF52946770E40387",
      "name": "Stride Staked UMEE",
      "display": "stumee",
      "symbol": "stUMEE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stuumee",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg"
      },
      "coingecko_id": "stride-staked-umee",
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
          "denom": "ibc/CF4A89FAAF8567A4185324C320937C50BBEFEE10FD3D2C5B9875570884267B29",
          "exponent": 0,
          "aliases": [
            "stucmdx"
          ]
        },
        {
          "denom": "stcmdx",
          "exponent": 6
        }
      ],
      "base": "ibc/CF4A89FAAF8567A4185324C320937C50BBEFEE10FD3D2C5B9875570884267B29",
      "name": "Stride Staked CMDX",
      "display": "stcmdx",
      "symbol": "stCMDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stucmdx",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/4C6214EE0A538675DF7AB7BA782DB544B3096D3BE10670318EA363D811491349",
          "exponent": 0,
          "aliases": [
            "stusomm"
          ]
        },
        {
          "denom": "stsomm",
          "exponent": 6
        }
      ],
      "base": "ibc/4C6214EE0A538675DF7AB7BA782DB544B3096D3BE10670318EA363D811491349",
      "name": "Stride Staked SOMM",
      "display": "stsomm",
      "symbol": "stSOMM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-40",
            "base_denom": "stusomm",
            "chain_name": "stride"
          },
          "chain": {
            "channel_id": "channel-37"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
      },
      "coingecko_id": "stride-staked-sommelier",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
        }
      ]
    },
    {
      "description": "The native token of Teritori",
      "denom_units": [
        {
          "denom": "ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD",
          "exponent": 0,
          "aliases": [
            "utori"
          ]
        },
        {
          "denom": "tori",
          "exponent": 6
        }
      ],
      "base": "ibc/CE763BC6FC07E3D04301DEC34395064D16D33D6AECA19E68B2C447B9674A8CCD",
      "name": "Teritori",
      "display": "tori",
      "symbol": "TORI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
      },
      "coingecko_id": "teritori",
      "images": [
        {
          "image_sync": {
            "chain_name": "teritori",
            "base_denom": "utori"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-63",
            "base_denom": "utori",
            "chain_name": "teritori"
          },
          "chain": {
            "channel_id": "channel-111"
          }
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/C949C5216FCEC808565408CB44F9A13676684B80DEABA84AB48CD8E4F0DCBC31",
          "exponent": 0,
          "aliases": [
            "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/C949C5216FCEC808565408CB44F9A13676684B80DEABA84AB48CD8E4F0DCBC31",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-63",
            "base_denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "chain_name": "teritori"
          },
          "chain": {
            "channel_id": "channel-111"
          }
        }
      ],
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
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E67A85E59757B964F2938E521E7E9C708A60DFA60F08D0C5D46C87908E19E0D8",
          "exponent": 0,
          "aliases": [
            "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E67A85E59757B964F2938E521E7E9C708A60DFA60F08D0C5D46C87908E19E0D8",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-63",
            "base_denom": "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
            "chain_name": "teritori"
          },
          "chain": {
            "channel_id": "channel-111"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E",
          "exponent": 0
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FA15A12E67F433946EB6F2756EEC5978C9ACE6AD0696C59212DB859461596940",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-63",
            "base_denom": "ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E",
            "chain_name": "teritori"
          },
          "chain": {
            "channel_id": "channel-111"
          }
        }
      ],
      "coingecko_id": "kujira",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "kujira",
            "base_denom": "ukuji"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ]
    },
    {
      "description": "The native staking token of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
          "exponent": 0,
          "aliases": [
            "uluna"
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
      "base": "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
      "name": "Luna Classic",
      "display": "luna",
      "symbol": "LUNC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
      },
      "coingecko_id": "terra-luna",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uluna",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The USD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E",
          "exponent": 0,
          "aliases": [
            "uusd"
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
      "base": "ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E",
      "name": "TerraClassicUSD",
      "display": "ust",
      "symbol": "USTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg"
      },
      "coingecko_id": "terrausd",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uusd",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The KRW stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5",
          "exponent": 0,
          "aliases": [
            "ukrw"
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
      "base": "ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5",
      "name": "TerraClassicKRW",
      "display": "krt",
      "symbol": "KRTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg"
      },
      "coingecko_id": "terrakrw",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ukrw",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The AUD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C",
          "exponent": 0,
          "aliases": [
            "uaud"
          ]
        },
        {
          "denom": "maud",
          "exponent": 3,
          "aliases": [
            "milliaud"
          ]
        },
        {
          "denom": "aut",
          "exponent": 6,
          "aliases": [
            "autc"
          ]
        }
      ],
      "base": "ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C",
      "display": "aut",
      "name": "TerraClassicAUD",
      "symbol": "AUTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uaud",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The CAD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3",
          "exponent": 0,
          "aliases": [
            "ucad"
          ]
        },
        {
          "denom": "mcad",
          "exponent": 3,
          "aliases": [
            "millicad"
          ]
        },
        {
          "denom": "cat",
          "exponent": 6,
          "aliases": [
            "catc"
          ]
        }
      ],
      "base": "ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3",
      "display": "cat",
      "name": "TerraClassicCAD",
      "symbol": "CATC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ucad",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The CHF stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8",
          "exponent": 0,
          "aliases": [
            "uchf"
          ]
        },
        {
          "denom": "mchf",
          "exponent": 3,
          "aliases": [
            "millichf"
          ]
        },
        {
          "denom": "cht",
          "exponent": 6,
          "aliases": [
            "chtc"
          ]
        }
      ],
      "base": "ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8",
      "display": "cht",
      "name": "TerraClassicCHF",
      "symbol": "CHTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uchf",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The CNY stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB",
          "exponent": 0,
          "aliases": [
            "ucny"
          ]
        },
        {
          "denom": "mcny",
          "exponent": 3,
          "aliases": [
            "millicny"
          ]
        },
        {
          "denom": "cnt",
          "exponent": 6,
          "aliases": [
            "cntc"
          ]
        }
      ],
      "base": "ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB",
      "display": "cnt",
      "name": "TerraClassicCNY",
      "symbol": "CNTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ucny",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The DKK stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D",
          "exponent": 0,
          "aliases": [
            "udkk"
          ]
        },
        {
          "denom": "mdkk",
          "exponent": 3,
          "aliases": [
            "millidkk"
          ]
        },
        {
          "denom": "dkt",
          "exponent": 6,
          "aliases": [
            "dktc"
          ]
        }
      ],
      "base": "ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D",
      "display": "dkt",
      "name": "TerraClassicDKK",
      "symbol": "DKTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "udkk",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The EUR stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39",
          "exponent": 0,
          "aliases": [
            "ueur"
          ]
        },
        {
          "denom": "meur",
          "exponent": 3,
          "aliases": [
            "millieur"
          ]
        },
        {
          "denom": "eut",
          "exponent": 6,
          "aliases": [
            "eutc"
          ]
        }
      ],
      "base": "ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39",
      "display": "eut",
      "name": "TerraClassicEUR",
      "symbol": "EUTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ueur",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The GBP stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570",
          "exponent": 0,
          "aliases": [
            "ugbp"
          ]
        },
        {
          "denom": "mgbp",
          "exponent": 3,
          "aliases": [
            "milligbp"
          ]
        },
        {
          "denom": "gbt",
          "exponent": 6,
          "aliases": [
            "gbtc"
          ]
        }
      ],
      "base": "ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570",
      "display": "gbt",
      "name": "TerraClassicGBP",
      "symbol": "GBTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ugbp",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The HKD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E",
          "exponent": 0,
          "aliases": [
            "uhkd"
          ]
        },
        {
          "denom": "mhkd",
          "exponent": 3,
          "aliases": [
            "millihkd"
          ]
        },
        {
          "denom": "hkt",
          "exponent": 6,
          "aliases": [
            "hktc"
          ]
        }
      ],
      "base": "ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E",
      "display": "hkt",
      "name": "TerraClassicHKD",
      "symbol": "HKTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uhkd",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The IDR stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F",
          "exponent": 0,
          "aliases": [
            "uidr"
          ]
        },
        {
          "denom": "midr",
          "exponent": 3,
          "aliases": [
            "milliidr"
          ]
        },
        {
          "denom": "idt",
          "exponent": 6,
          "aliases": [
            "idtc"
          ]
        }
      ],
      "base": "ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F",
      "display": "idt",
      "name": "TerraClassicIDR",
      "symbol": "IDTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uidr",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The INR stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633",
          "exponent": 0,
          "aliases": [
            "uinr"
          ]
        },
        {
          "denom": "minr",
          "exponent": 3,
          "aliases": [
            "milliinr"
          ]
        },
        {
          "denom": "int",
          "exponent": 6,
          "aliases": [
            "intc"
          ]
        }
      ],
      "base": "ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633",
      "display": "int",
      "name": "TerraClassicINR",
      "symbol": "INTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uinr",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The JPY stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB",
          "exponent": 0,
          "aliases": [
            "ujpy"
          ]
        },
        {
          "denom": "mjpy",
          "exponent": 3,
          "aliases": [
            "millijpy"
          ]
        },
        {
          "denom": "jpt",
          "exponent": 6,
          "aliases": [
            "jptc"
          ]
        }
      ],
      "base": "ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB",
      "display": "jpt",
      "name": "TerraClassicJPY",
      "symbol": "JPTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "ujpy",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The MNT stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04",
          "exponent": 0,
          "aliases": [
            "umnt"
          ]
        },
        {
          "denom": "mmnt",
          "exponent": 3,
          "aliases": [
            "millimnt"
          ]
        },
        {
          "denom": "mnt",
          "exponent": 6,
          "aliases": [
            "mntc"
          ]
        }
      ],
      "base": "ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04",
      "display": "mnt",
      "name": "TerraClassicMNT",
      "symbol": "MNTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "umnt",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The MYR stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834",
          "exponent": 0,
          "aliases": [
            "umyr"
          ]
        },
        {
          "denom": "mmyr",
          "exponent": 3,
          "aliases": [
            "millimyr"
          ]
        },
        {
          "denom": "myt",
          "exponent": 6,
          "aliases": [
            "mytc"
          ]
        }
      ],
      "base": "ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834",
      "display": "myt",
      "name": "TerraClassicMYR",
      "symbol": "MYTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "umyr",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The NOK stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63",
          "exponent": 0,
          "aliases": [
            "unok"
          ]
        },
        {
          "denom": "mnok",
          "exponent": 3,
          "aliases": [
            "millinok"
          ]
        },
        {
          "denom": "not",
          "exponent": 6,
          "aliases": [
            "notc"
          ]
        }
      ],
      "base": "ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63",
      "display": "not",
      "name": "TerraClassicNOK",
      "symbol": "NOTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "unok",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The PHP stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840",
          "exponent": 0,
          "aliases": [
            "uphp"
          ]
        },
        {
          "denom": "mphp",
          "exponent": 3,
          "aliases": [
            "milliphp"
          ]
        },
        {
          "denom": "pht",
          "exponent": 6,
          "aliases": [
            "phtc"
          ]
        }
      ],
      "base": "ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840",
      "display": "pht",
      "name": "TerraClassicPHP",
      "symbol": "PHTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uphp",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The SDR stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B",
          "exponent": 0,
          "aliases": [
            "usdr"
          ]
        },
        {
          "denom": "msdr",
          "exponent": 3,
          "aliases": [
            "millisdr"
          ]
        },
        {
          "denom": "sdt",
          "exponent": 6,
          "aliases": [
            "sdtc"
          ]
        }
      ],
      "base": "ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B",
      "display": "sdt",
      "name": "TerraClassicSDR",
      "symbol": "SDTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "usdr",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The SEK stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17",
          "exponent": 0,
          "aliases": [
            "usek"
          ]
        },
        {
          "denom": "msek",
          "exponent": 3,
          "aliases": [
            "millisek"
          ]
        },
        {
          "denom": "set",
          "exponent": 6,
          "aliases": [
            "setc"
          ]
        }
      ],
      "base": "ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17",
      "display": "set",
      "name": "TerraClassicSEK",
      "symbol": "SETC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "usek",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The SGD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482",
          "exponent": 0,
          "aliases": [
            "usgd"
          ]
        },
        {
          "denom": "msgd",
          "exponent": 3,
          "aliases": [
            "millisgd"
          ]
        },
        {
          "denom": "sgt",
          "exponent": 6,
          "aliases": [
            "sgtc"
          ]
        }
      ],
      "base": "ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482",
      "display": "sgt",
      "name": "TerraClassicSGD",
      "symbol": "SGTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "usgd",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The THB stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435",
          "exponent": 0,
          "aliases": [
            "uthb"
          ]
        },
        {
          "denom": "mthb",
          "exponent": 3,
          "aliases": [
            "millithb"
          ]
        },
        {
          "denom": "tht",
          "exponent": 6,
          "aliases": [
            "thtc"
          ]
        }
      ],
      "base": "ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435",
      "display": "tht",
      "name": "TerraClassicTHB",
      "symbol": "THTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "uthb",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The TWD stablecoin of Terra Classic.",
      "denom_units": [
        {
          "denom": "ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5",
          "exponent": 0,
          "aliases": [
            "utwd"
          ]
        },
        {
          "denom": "mtwd",
          "exponent": 3,
          "aliases": [
            "millitwd"
          ]
        },
        {
          "denom": "twt",
          "exponent": 6,
          "aliases": [
            "twtc"
          ]
        }
      ],
      "base": "ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5",
      "display": "twt",
      "name": "TerraClassicTWD",
      "symbol": "TWTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-16",
            "base_denom": "utwd",
            "chain_name": "terra"
          },
          "chain": {
            "channel_id": "channel-2"
          }
        }
      ]
    },
    {
      "description": "The native staking token of Terra.",
      "denom_units": [
        {
          "denom": "ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5",
          "exponent": 0,
          "aliases": [
            "uluna"
          ]
        },
        {
          "denom": "luna",
          "exponent": 6
        }
      ],
      "base": "ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
      },
      "coingecko_id": "terra-luna-2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "uluna",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ]
    },
    {
      "description": "ERIS Alliance Staked ampWHALE on Terra",
      "denom_units": [
        {
          "denom": "ibc/221A97C3042AC73A5B04F3C6949CB31D5F8680BDC0E40588A1CA40CD694C0FBC",
          "exponent": 0,
          "aliases": [
            "factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt"
          ]
        },
        {
          "denom": "ampWHALEt",
          "exponent": 6
        }
      ],
      "base": "ibc/221A97C3042AC73A5B04F3C6949CB31D5F8680BDC0E40588A1CA40CD694C0FBC",
      "name": "ERIS Alliance Staked ampWHALE",
      "display": "ampWHALEt",
      "symbol": "ampWHALEt",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ]
    },
    {
      "description": "ERIS Alliance Staked boneWHALE on Terra",
      "denom_units": [
        {
          "denom": "ibc/5D9E96D19A2656DF3BA3E3717633F3D5DD8155CF8FED722663E402366C57A8C3",
          "exponent": 0,
          "aliases": [
            "factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt"
          ]
        },
        {
          "denom": "boneWHALEt",
          "exponent": 6
        }
      ],
      "base": "ibc/5D9E96D19A2656DF3BA3E3717633F3D5DD8155CF8FED722663E402366C57A8C3",
      "name": "ERIS Alliance Staked boneWHALE",
      "display": "boneWHALEt",
      "symbol": "boneWHALEt",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ]
    },
    {
      "description": "ERIS Liquid Enterprise Staked ROAR",
      "denom_units": [
        {
          "denom": "ibc/CDCC1B1C3BBBD15F18FE984DA5BBAB0CD0DEA2B7ECAA6CDC35F21C4050FA02A5",
          "exponent": 0,
          "aliases": [
            "factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR"
          ]
        },
        {
          "denom": "ampROAR",
          "exponent": 6
        }
      ],
      "base": "ibc/CDCC1B1C3BBBD15F18FE984DA5BBAB0CD0DEA2B7ECAA6CDC35F21C4050FA02A5",
      "name": "ERIS Amplified ROAR",
      "display": "ampROAR",
      "symbol": "ampROAR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/38BA38BB0F189633040D4B2D007AF799D002FC86409569D12346624E152F537E",
          "exponent": 0,
          "aliases": [
            "ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C"
          ]
        },
        {
          "denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/38BA38BB0F189633040D4B2D007AF799D002FC86409569D12346624E152F537E",
      "name": "Wrapped Lido Staked Ether",
      "display": "wstETH",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
      }
    },
    {
      "description": "The first memecoin on osmosis.",
      "denom_units": [
        {
          "denom": "ibc/02A426C427402375C9D74207834E6553CB371BEB5DF94DA6C44F17398084E9A6",
          "exponent": 0,
          "aliases": [
            "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278"
          ]
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/02A426C427402375C9D74207834E6553CB371BEB5DF94DA6C44F17398084E9A6",
      "name": "Wosmo",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3",
            "base_denom": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
            "chain_name": "terra2"
          },
          "chain": {
            "channel_id": "channel-16"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png"
      }
    },
    {
      "description": "The native token cw20 for Neta on Juno Chain",
      "type_asset": "cw20",
      "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
      "denom_units": [
        {
          "denom": "ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA",
          "exponent": 0,
          "aliases": [
            "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr"
          ]
        },
        {
          "denom": "neta",
          "exponent": 6
        }
      ],
      "base": "ibc/5B72B6418C63E5C7C54631D5C19AABF12F8A83F6673AA91F14F9C779596B0FBA",
      "name": "Neta",
      "display": "neta",
      "symbol": "NETA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
      },
      "coingecko_id": "neta",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for Marble DAO on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
      "denom_units": [
        {
          "denom": "ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699",
          "exponent": 0,
          "aliases": [
            "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl"
          ]
        },
        {
          "denom": "marble",
          "exponent": 3
        }
      ],
      "base": "ibc/02CBA97B2260B491B74156800BFF4F7037B6E4748BE7A6C42BFB44C114663699",
      "name": "Marble",
      "display": "marble",
      "symbol": "MARBLE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
      },
      "coingecko_id": "marble",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
      "type_asset": "cw20",
      "address": "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
      "denom_units": [
        {
          "denom": "ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43",
          "exponent": 0,
          "aliases": [
            "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z"
          ]
        },
        {
          "denom": "hope",
          "exponent": 6
        }
      ],
      "base": "ibc/6E14DF3C05AF46D4CB0C4AF2FF75E6033A3553988D51A7AC2B96829C24162B43",
      "name": "Hope Galaxy",
      "display": "hope",
      "symbol": "HOPE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
      },
      "coingecko_id": "hope-galaxy",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
      "type_asset": "cw20",
      "address": "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
      "denom_units": [
        {
          "denom": "ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00",
          "exponent": 0,
          "aliases": [
            "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa"
          ]
        },
        {
          "denom": "rac",
          "exponent": 6
        }
      ],
      "base": "ibc/8AFEA8D553A650A60C25C9E239977EF694D2CC6D49BDA98475F43392C1B23B00",
      "name": "Racoon",
      "display": "rac",
      "symbol": "RAC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
      },
      "coingecko_id": "racoon",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token of Marble DEX on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
      "denom_units": [
        {
          "denom": "ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE",
          "exponent": 0,
          "aliases": [
            "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq"
          ]
        },
        {
          "denom": "block",
          "exponent": 6
        }
      ],
      "base": "ibc/5F10E6616066327DB9ABCC7B8449D7098A63F05E2FAA2953A11FCBE56E3A69BE",
      "name": "Block",
      "display": "block",
      "symbol": "BLOCK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The DAO token to build consensus among Hong Kong People",
      "type_asset": "cw20",
      "address": "juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
      "denom_units": [
        {
          "denom": "ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5",
          "exponent": 0,
          "aliases": [
            "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49"
          ]
        }
      ],
      "base": "ibc/DC16EF8ECCEFE84946EF548C58D8287B32A94A24D2AFB04F27D8BBDB159174A5",
      "name": "DHK",
      "display": "dhk",
      "symbol": "DHK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Token governance for Junoswap",
      "type_asset": "cw20",
      "address": "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
      "denom_units": [
        {
          "denom": "ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0",
          "exponent": 0,
          "aliases": [
            "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g"
          ]
        },
        {
          "denom": "raw",
          "exponent": 6
        }
      ],
      "base": "ibc/68F190FB1BA6E90F92AF01E64EC46267798734C547767B9BE99E7EA30D822BB0",
      "name": "JunoSwap",
      "display": "raw",
      "symbol": "RAW",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
      },
      "coingecko_id": "junoswap-raw-dao",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
      "type_asset": "cw20",
      "address": "juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
      "denom_units": [
        {
          "denom": "ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9",
          "exponent": 0,
          "aliases": [
            "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w"
          ]
        },
        {
          "denom": "asvt",
          "exponent": 6
        }
      ],
      "base": "ibc/F876B5532C123039B974E26D1F2D4C0705350C2CD5FE5056E1F6EED7C2352BC9",
      "name": "Another.Software Validator Token",
      "display": "asvt",
      "symbol": "ASVT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.",
      "type_asset": "cw20",
      "address": "juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
      "denom_units": [
        {
          "denom": "ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F",
          "exponent": 0,
          "aliases": [
            "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k"
          ]
        },
        {
          "denom": "hns",
          "exponent": 6
        }
      ],
      "base": "ibc/908A4EF3AF5FD2FD227995707EC3F3885056F2DA971A039E981FB8BB6FC70D2F",
      "name": "IBC HNS (Handshake)",
      "display": "hns",
      "symbol": "HNS",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "DAO dedicated to building tools on the Juno Network",
      "type_asset": "cw20",
      "address": "juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
      "denom_units": [
        {
          "denom": "ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8",
          "exponent": 0,
          "aliases": [
            "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3"
          ]
        },
        {
          "denom": "joe",
          "exponent": 6
        }
      ],
      "base": "ibc/9DF4C5770C196C32C07B3FA9771E60E14EDC141E6526949915A90C172DC348D8",
      "name": "JoeDAO",
      "display": "joe",
      "symbol": "JOE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Governance Token for Digital Land Acquisition DAO",
      "type_asset": "cw20",
      "address": "juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
      "denom_units": [
        {
          "denom": "ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008",
          "exponent": 0,
          "aliases": [
            "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr"
          ]
        },
        {
          "denom": "dla",
          "exponent": 6
        }
      ],
      "base": "ibc/F0EF014B6DC9DFD6B8303F3D2565E8B91F301ABD7A3ACB2D60F9E4DDB1035008",
      "name": "Digital Land Acquisition DAO",
      "display": "dla",
      "symbol": "DLA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "DeFi gaming platform built on Juno",
      "type_asset": "cw20",
      "address": "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
      "denom_units": [
        {
          "denom": "ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210",
          "exponent": 0,
          "aliases": [
            "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se"
          ]
        },
        {
          "denom": "glto",
          "exponent": 6
        }
      ],
      "base": "ibc/14E48FFBD22A8F2A7A10794014F0B06F7777985B98E7C94FE4A5A7E607D08210",
      "name": "Gelotto",
      "display": "glto",
      "symbol": "GLTO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Gelotto Year 1 Grand Prize Token",
      "type_asset": "cw20",
      "address": "juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
      "denom_units": [
        {
          "denom": "ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D",
          "exponent": 0,
          "aliases": [
            "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh"
          ]
        },
        {
          "denom": "gkey",
          "exponent": 6
        }
      ],
      "base": "ibc/F6F0745238F873D5C8DDE8A085CBEC20F016B79C9ECC1DA02DCF88F3EFD51A0D",
      "name": "GKey",
      "display": "gkey",
      "symbol": "GKEY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for BlackHole on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
      "denom_units": [
        {
          "denom": "ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8",
          "exponent": 0,
          "aliases": [
            "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m"
          ]
        },
        {
          "denom": "hole",
          "exponent": 6
        }
      ],
      "base": "ibc/98288EB5122724F74C939D4CBA99D16FE1A36A6071D51EDE27608D8B705849F8",
      "name": "BlackHole",
      "display": "hole",
      "symbol": "HOLE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Staking derivative seJUNO for staked JUNO",
      "type_asset": "cw20",
      "address": "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
      "denom_units": [
        {
          "denom": "ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5",
          "exponent": 0,
          "aliases": [
            "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv"
          ]
        },
        {
          "denom": "sejuno",
          "exponent": 6
        }
      ],
      "base": "ibc/6221CDD49D5D845D19F5C466498D89C0F8809844F4720B4A00AC97B89513B1C5",
      "name": "StakeEasy seJUNO",
      "display": "sejuno",
      "symbol": "SEJUNO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
      },
      "coingecko_id": "stakeeasy-juno-derivative",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Staking derivative bJUNO for staked JUNO",
      "type_asset": "cw20",
      "address": "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
      "denom_units": [
        {
          "denom": "ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68",
          "exponent": 0,
          "aliases": [
            "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3"
          ]
        },
        {
          "denom": "bjuno",
          "exponent": 6
        }
      ],
      "base": "ibc/49A9325109CD0454F27330063124B8C939D01790C95A9E567494BC55D4FEBE68",
      "name": "StakeEasy bJUNO",
      "display": "bjuno",
      "symbol": "BJUNO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
      },
      "coingecko_id": "stakeeasy-bjuno",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Solarbank DAO Governance Token for speeding up the shift to renewable and green energy",
      "type_asset": "cw20",
      "address": "juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
      "denom_units": [
        {
          "denom": "ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1",
          "exponent": 0,
          "aliases": [
            "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse"
          ]
        },
        {
          "denom": "solar",
          "exponent": 6
        }
      ],
      "base": "ibc/C1B1A1A9A2C166DDA09F1230307B804908E8C1F901359AF98EEF5F540C954AB1",
      "name": "Solarbank DAO",
      "display": "solar",
      "symbol": "SOLAR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "StakeEasy governance token",
      "type_asset": "cw20",
      "address": "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
      "denom_units": [
        {
          "denom": "ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771",
          "exponent": 0,
          "aliases": [
            "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf"
          ]
        },
        {
          "denom": "seasy",
          "exponent": 6
        }
      ],
      "base": "ibc/7BB2C0DB4ACCD6D829F6FCE6EFDA3730BE9038CADE42367BF1A1D9DDEF179771",
      "name": "StakeEasy SEASY",
      "display": "seasy",
      "symbol": "SEASY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for MuseDAO on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
      "denom_units": [
        {
          "denom": "ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910",
          "exponent": 0,
          "aliases": [
            "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3"
          ]
        },
        {
          "denom": "muse",
          "exponent": 6
        }
      ],
      "base": "ibc/A28EADBB5AE6F53984F09A9DA3E62B4D530983DD665869E25F8817CDFFACF910",
      "name": "MuseDAO",
      "display": "muse",
      "symbol": "MUSE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for Loop Finance on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
      "denom_units": [
        {
          "denom": "ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F",
          "exponent": 0,
          "aliases": [
            "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup"
          ]
        },
        {
          "denom": "loop",
          "exponent": 6
        }
      ],
      "base": "ibc/C8F638D52B3A31C0BEABF392A0C5FB6E6A7166ECF7B758332F96275716343B9F",
      "name": "Loop Finance",
      "display": "loop",
      "symbol": "LOOP",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png"
      },
      "coingecko_id": "loop",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for Fanfury on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
      "denom_units": [
        {
          "denom": "ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7",
          "exponent": 0,
          "aliases": [
            "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz"
          ]
        },
        {
          "denom": "fury",
          "exponent": 6
        }
      ],
      "base": "ibc/5339DCE863291E92CFEA1E300BA2B869E24AC13D1A61D56A9968C190617878F7",
      "name": "Fanfury",
      "display": "fury",
      "symbol": "FURY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
      },
      "coingecko_id": "fanfury",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for PHMN on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
      "denom_units": [
        {
          "denom": "ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4",
          "exponent": 0,
          "aliases": [
            "cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l"
          ]
        },
        {
          "denom": "phmn",
          "exponent": 6
        }
      ],
      "base": "ibc/4BDE641209493BD4C1BEE6EBAE7C17E89D793720E7B4CB85C94EAE3C091759A4",
      "name": "POSTHUMAN",
      "display": "phmn",
      "symbol": "PHMN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
      },
      "coingecko_id": "posthuman",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The native token cw20 for Hopers on Juno Chain",
      "type_asset": "cw20",
      "address": "juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
      "denom_units": [
        {
          "denom": "ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A",
          "exponent": 0,
          "aliases": [
            "cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n"
          ]
        },
        {
          "denom": "hopers",
          "exponent": 6
        }
      ],
      "base": "ibc/586D8F676A8B4F610F06D62130782ECC11957CA0DB060715F604B8F14E863A7A",
      "name": "Hopers",
      "display": "hopers",
      "symbol": "HOPERS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
      },
      "coingecko_id": "hopers-io",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "RED",
      "type_asset": "cw20",
      "address": "juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
      "denom_units": [
        {
          "denom": "ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F",
          "exponent": 0,
          "aliases": [
            "cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za"
          ]
        },
        {
          "denom": "red",
          "exponent": 6
        }
      ],
      "base": "ibc/44A9AE778D35EFA1E357A0285D24CA19FDE9C199252DF9CEBE9D7BFBA65E8D0F",
      "name": "Red",
      "display": "red",
      "symbol": "RED",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "BLUE",
      "type_asset": "cw20",
      "address": "juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
      "denom_units": [
        {
          "denom": "ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4",
          "exponent": 0,
          "aliases": [
            "cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7"
          ]
        },
        {
          "denom": "blue",
          "exponent": 6
        }
      ],
      "base": "ibc/2912404DC862F16C4DA3F7E6D955A1AE44B7B830D690FB33438703AA61FB99A4",
      "name": "Blue",
      "display": "blue",
      "symbol": "BLUE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "WYND DAO Governance Token",
      "type_asset": "cw20",
      "address": "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
      "denom_units": [
        {
          "denom": "ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6",
          "exponent": 0,
          "aliases": [
            "cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9"
          ]
        },
        {
          "denom": "wynd",
          "exponent": 6
        }
      ],
      "base": "ibc/AF063B88A405BEC7F5044D32037541777505702E7CC60519848EDEE682A822F6",
      "name": "Wynd DAO Governance Token",
      "display": "wynd",
      "symbol": "WYND",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
      },
      "coingecko_id": "wynd",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "nRide Token",
      "type_asset": "cw20",
      "address": "juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
      "denom_units": [
        {
          "denom": "ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC",
          "exponent": 0,
          "aliases": [
            "cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq"
          ]
        },
        {
          "denom": "nride",
          "exponent": 6
        }
      ],
      "base": "ibc/878F73770487C6B25691204DEFFD641808F926DFFD998EE648C481953EBA1BCC",
      "name": "nRide Token",
      "display": "nride",
      "symbol": "NRIDE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Signal Art and Gaming on Juno",
      "type_asset": "cw20",
      "address": "juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
      "denom_units": [
        {
          "denom": "ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA",
          "exponent": 0,
          "aliases": [
            "cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k"
          ]
        },
        {
          "denom": "sgnl",
          "exponent": 6
        }
      ],
      "base": "ibc/560868D58F44DC56848520DF4504456AD0C46DA317370983724DAEE448D7B5CA",
      "name": "Signal",
      "display": "sgnl",
      "symbol": "SGNL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Governance and utility token for the Junø Apes NFT platform on Juno",
      "type_asset": "cw20",
      "address": "juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
      "denom_units": [
        {
          "denom": "ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB",
          "exponent": 0,
          "aliases": [
            "cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps"
          ]
        },
        {
          "denom": "jape",
          "exponent": 6
        }
      ],
      "base": "ibc/9AD795C11F2F7802ECBDDD192FAF9454DEBA210D6A3D7C7F3A152BA7FFC32FFB",
      "name": "Junø Apes",
      "display": "jape",
      "symbol": "JAPE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "A community meme token with a fantasy fiction storyline and comic based NFTs on Juno",
      "type_asset": "cw20",
      "address": "juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
      "denom_units": [
        {
          "denom": "ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390",
          "exponent": 0,
          "aliases": [
            "cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa"
          ]
        },
        {
          "denom": "catom",
          "exponent": 6
        }
      ],
      "base": "ibc/B6B1B81C089C53EDB0E256AE33A8BFF0F8C32039B46BA129B45776DA32A8C390",
      "name": "Catom",
      "display": "catom",
      "symbol": "CATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Utility token of Howl.social, an on chain micro-blogging platform on Juno",
      "type_asset": "cw20",
      "address": "juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
      "denom_units": [
        {
          "denom": "ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62",
          "exponent": 0,
          "aliases": [
            "cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz"
          ]
        },
        {
          "denom": "howl",
          "exponent": 6
        }
      ],
      "base": "ibc/BFE2C7AEA3CA4127A36D4FC6955298126E9E11151AABF2863A194FBF5F720A62",
      "name": "Howl",
      "display": "howl",
      "symbol": "HOWL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.",
      "type_asset": "cw20",
      "address": "juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
      "denom_units": [
        {
          "denom": "ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927",
          "exponent": 0,
          "aliases": [
            "cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x"
          ]
        },
        {
          "denom": "fox",
          "exponent": 6
        }
      ],
      "base": "ibc/BE3F60FD7858D39BFCD2C049A685BBC8B8C7CD387912A973E4ECDAD96A71C927",
      "name": "Juno Fox",
      "display": "fox",
      "symbol": "FOX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Evmos Guardians governance token.",
      "type_asset": "cw20",
      "address": "juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
      "denom_units": [
        {
          "denom": "ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C",
          "exponent": 0,
          "aliases": [
            "cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma"
          ]
        },
        {
          "denom": "grdn",
          "exponent": 6
        }
      ],
      "base": "ibc/5CFD389CE7CD778EDE07B6D1CD43E59C50D7B7ED921CE1F469380174E5C89C8C",
      "name": "Guardian",
      "display": "grdn",
      "symbol": "GRDN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Mini Punks Token",
      "type_asset": "cw20",
      "address": "juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
      "denom_units": [
        {
          "denom": "ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300",
          "exponent": 0,
          "aliases": [
            "cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my"
          ]
        },
        {
          "denom": "mnpu",
          "exponent": 6
        }
      ],
      "base": "ibc/38B022C739D14690743F0927896C0A6DADB887DB21FDE4ED0327BD1952DEE300",
      "name": "Mini Punks",
      "display": "mnpu",
      "symbol": "MNPU",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Kleomedes Token",
      "type_asset": "cw20",
      "address": "juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
      "denom_units": [
        {
          "denom": "ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790",
          "exponent": 0,
          "aliases": [
            "cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy"
          ]
        },
        {
          "denom": "kleo",
          "exponent": 6
        }
      ],
      "base": "ibc/4E29AFCCB896B27EBB2574CE5A4F788256F4E1DCFB426C5C8B479877C650A790",
      "name": "Kleomedes",
      "display": "kleo",
      "symbol": "KLEO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Sikoba Governance Token",
      "type_asset": "cw20",
      "address": "juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
      "denom_units": [
        {
          "denom": "ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6",
          "exponent": 0,
          "aliases": [
            "cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp"
          ]
        },
        {
          "denom": "sikoba",
          "exponent": 6
        }
      ],
      "base": "ibc/71F1C4C30CE3CEBFD6A1B837A088267FDC3DE2F42ECD676851B34509A129E2B6",
      "name": "Sikoba Token",
      "display": "sikoba",
      "symbol": "SKOJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Shiba Cosmos",
      "type_asset": "cw20",
      "address": "juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
      "denom_units": [
        {
          "denom": "ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804",
          "exponent": 0,
          "aliases": [
            "cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z"
          ]
        },
        {
          "denom": "shibac",
          "exponent": 6
        }
      ],
      "base": "ibc/4BE7FE3003FC679BA20D8A1837837C0677FAD6F74695095E34DFD156D9225804",
      "name": "ShibaCosmos",
      "display": "shibac",
      "symbol": "SHIBAC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Celestims",
      "type_asset": "cw20",
      "address": "juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
      "denom_units": [
        {
          "denom": "ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647",
          "exponent": 0,
          "aliases": [
            "cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg"
          ]
        },
        {
          "denom": "clst",
          "exponent": 6
        }
      ],
      "base": "ibc/45C759ED3CA837BC08205975231AC214F486C7309F098C575243A2226FB43647",
      "name": "Celestims",
      "display": "clst",
      "symbol": "CLST",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!",
      "type_asset": "cw20",
      "address": "juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
      "denom_units": [
        {
          "denom": "ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2",
          "exponent": 0,
          "aliases": [
            "cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw"
          ]
        },
        {
          "denom": "watr",
          "exponent": 6
        }
      ],
      "base": "ibc/645965A6B6FF9A8A70673E694E6263B8ED11FB23E942410CD4CA6275AA05A1E2",
      "name": "WATR",
      "display": "watr",
      "symbol": "WATR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "An innovative DAO dedicated to housing the most vulnerable",
      "type_asset": "cw20",
      "address": "juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
      "denom_units": [
        {
          "denom": "ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95",
          "exponent": 0,
          "aliases": [
            "cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss"
          ]
        },
        {
          "denom": "casa",
          "exponent": 6
        }
      ],
      "base": "ibc/B3C542E5C3EB518AD80609AA48D89CD7CC0E98473205ED452915D2BA1C6A9A95",
      "name": "Casa",
      "display": "casa",
      "symbol": "CASA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Social Impact DAO providing showers, meals, and vehicles to the homeless",
      "type_asset": "cw20",
      "address": "juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
      "denom_units": [
        {
          "denom": "ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F",
          "exponent": 0,
          "aliases": [
            "cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm"
          ]
        },
        {
          "denom": "summit",
          "exponent": 6
        }
      ],
      "base": "ibc/E947505C87B7DCE41868644F07449A60EC402C6FE951628CEB40071F9B39FA6F",
      "name": "Summit",
      "display": "summit",
      "symbol": "SUMMIT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Social Impact DAO dedicated to combatting food insecurity and malnutrition",
      "type_asset": "cw20",
      "address": "juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
      "denom_units": [
        {
          "denom": "ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461",
          "exponent": 0,
          "aliases": [
            "cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq"
          ]
        },
        {
          "denom": "manna",
          "exponent": 6
        }
      ],
      "base": "ibc/12F8A66E94D4457ACB246996D51B5D38B1F9F48D1419270834E9BA801E016461",
      "name": "Manna",
      "display": "manna",
      "symbol": "MANNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Social Impact DAO focused on youth empowerment",
      "type_asset": "cw20",
      "address": "juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
      "denom_units": [
        {
          "denom": "ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D",
          "exponent": 0,
          "aliases": [
            "cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v"
          ]
        },
        {
          "denom": "empwr",
          "exponent": 6
        }
      ],
      "base": "ibc/F6221E47962B4F2AB3E8839F7591DF7664C0ABFCDF9E302BFE92B3621141488D",
      "name": "EMPWR",
      "display": "empwr",
      "symbol": "EMPWR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Join us in fighting against world hunger",
      "type_asset": "cw20",
      "address": "juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
      "denom_units": [
        {
          "denom": "ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625",
          "exponent": 0,
          "aliases": [
            "cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd"
          ]
        },
        {
          "denom": "middle",
          "exponent": 6
        }
      ],
      "base": "ibc/ABFA0E0E606FC94743005212C0B9361F8951226CB64D2A7E01A1EBB5184EB625",
      "name": "Middle",
      "display": "middle",
      "symbol": "MIDDLE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children",
      "type_asset": "cw20",
      "address": "juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
      "denom_units": [
        {
          "denom": "ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D",
          "exponent": 0,
          "aliases": [
            "cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w"
          ]
        },
        {
          "denom": "sunset",
          "exponent": 6
        }
      ],
      "base": "ibc/B774FB8C90531F86EA30CF85B902914D20B480BB7139F249283EBC23A283E19D",
      "name": "Sunset",
      "display": "sunset",
      "symbol": "SUNSET",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Social Impact DAO dedicated to helping restore and protect our environment",
      "type_asset": "cw20",
      "address": "juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
      "denom_units": [
        {
          "denom": "ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6",
          "exponent": 0,
          "aliases": [
            "cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e"
          ]
        },
        {
          "denom": "tree",
          "exponent": 6
        }
      ],
      "base": "ibc/E1FA78125698311C4C93B109F4F8C971444B375605C2224C7DBF6690459EDDC6",
      "name": "Living Tree",
      "display": "tree",
      "symbol": "TREE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Evmos Guardians' Invaders DAO token.",
      "type_asset": "cw20",
      "address": "juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
      "denom_units": [
        {
          "denom": "ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112",
          "exponent": 0,
          "aliases": [
            "cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8"
          ]
        },
        {
          "denom": "invdrs",
          "exponent": 6
        }
      ],
      "base": "ibc/8FED7D467E82549729E1C262F6AE84F1DBB7791C6FC0513CC2CE4A22A11E7112",
      "name": "Invaders",
      "display": "invdrs",
      "symbol": "INVDRS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Apemos",
      "type_asset": "cw20",
      "address": "juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
      "denom_units": [
        {
          "denom": "ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD",
          "exponent": 0,
          "aliases": [
            "cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06"
          ]
        },
        {
          "denom": "apemos",
          "exponent": 6
        }
      ],
      "base": "ibc/593CCBF3B4F50526B55B63F1D1AC2E3184990FAC4B486BA0AED711E872BA99AD",
      "name": "Apemos",
      "display": "apemos",
      "symbol": "APEMOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The First Doge on Osmosis",
      "type_asset": "cw20",
      "address": "juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
      "denom_units": [
        {
          "denom": "ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70",
          "exponent": 0,
          "aliases": [
            "cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je"
          ]
        },
        {
          "denom": "osdoge",
          "exponent": 6
        }
      ],
      "base": "ibc/85DFBD35B1B890ADE459FD167DF7034A7C75A50140A6A52A3FEC45816E275F70",
      "name": "Osmosis Doge",
      "display": "osdoge",
      "symbol": "OSDOGE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Doge Apr",
      "type_asset": "cw20",
      "address": "juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
      "denom_units": [
        {
          "denom": "ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72",
          "exponent": 0,
          "aliases": [
            "cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d"
          ]
        },
        {
          "denom": "doga",
          "exponent": 6
        }
      ],
      "base": "ibc/A60297E98FF0838F1CFFB3934CB28E8ABC7E547F7225C5A1E8048FC8ED5CCE72",
      "name": "Doge Apr",
      "display": "doga",
      "symbol": "DOGA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Osmo Pepe",
      "type_asset": "cw20",
      "address": "juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
      "denom_units": [
        {
          "denom": "ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF",
          "exponent": 0,
          "aliases": [
            "cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 6
        }
      ],
      "base": "ibc/E271C7DC1DA16283C8885CD75378B6885BBB961A9090CEB3BB0C6CB0EF37DADF",
      "name": "Osmo Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Catmos",
      "type_asset": "cw20",
      "address": "juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
      "denom_units": [
        {
          "denom": "ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39",
          "exponent": 0,
          "aliases": [
            "cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488"
          ]
        },
        {
          "denom": "catmos",
          "exponent": 6
        }
      ],
      "base": "ibc/ED64B86264C6EE470798CCC79EA8971488B89F7C2201A1BB48C6F7B10526DB39",
      "name": "Catmos",
      "display": "catmos",
      "symbol": "CATMOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Spacer",
      "type_asset": "cw20",
      "address": "juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
      "denom_units": [
        {
          "denom": "ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10",
          "exponent": 0,
          "aliases": [
            "cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg"
          ]
        },
        {
          "denom": "spacer",
          "exponent": 6
        }
      ],
      "base": "ibc/9071A8E8461A64FBC84F9A3C83C29F07059F58197685C340885CE0A039D62A10",
      "name": "Spacer",
      "display": "spacer",
      "symbol": "SPACER",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Light: LumenX community DAO treasury token",
      "type_asset": "cw20",
      "address": "juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
      "denom_units": [
        {
          "denom": "ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9",
          "exponent": 0,
          "aliases": [
            "cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l"
          ]
        },
        {
          "denom": "light",
          "exponent": 9
        }
      ],
      "base": "ibc/561A4F5CA5B4117BC5BEB8983C36B34BCFE33A73E36F5AF6BFAF596BF1FE4FF9",
      "name": "LIGHT",
      "display": "light",
      "symbol": "LIGHT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Mille: the 1000th token on osmosis",
      "type_asset": "cw20",
      "address": "juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
      "denom_units": [
        {
          "denom": "ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27",
          "exponent": 0,
          "aliases": [
            "cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d"
          ]
        },
        {
          "denom": "mile",
          "exponent": 6
        }
      ],
      "base": "ibc/8BEF061511C8D152FE84A77DBEF4D846D3E4CD515FCBE4E1349D578437352C27",
      "name": "Mille",
      "display": "mile",
      "symbol": "MILE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Void",
      "type_asset": "cw20",
      "address": "juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
      "denom_units": [
        {
          "denom": "ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86",
          "exponent": 0,
          "aliases": [
            "cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8"
          ]
        },
        {
          "denom": "void",
          "exponent": 6
        }
      ],
      "base": "ibc/CAD0F9AE1FBF5755D17A29CBA2219C0781F04F78BB8A0EA72C54644DD4332A86",
      "name": "Void",
      "display": "void",
      "symbol": "VOID",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Silica",
      "type_asset": "cw20",
      "address": "juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
      "denom_units": [
        {
          "denom": "ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E",
          "exponent": 0,
          "aliases": [
            "cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux"
          ]
        },
        {
          "denom": "silica",
          "exponent": 6
        }
      ],
      "base": "ibc/B978076AFBADA02D1253A8298ED7C43CA049ADD82DA4B4F8CF649B575F32095E",
      "name": "Silica",
      "display": "silica",
      "symbol": "SLCA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Pepec",
      "type_asset": "cw20",
      "address": "juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
      "denom_units": [
        {
          "denom": "ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857",
          "exponent": 0,
          "aliases": [
            "cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k"
          ]
        },
        {
          "denom": "pepec",
          "exponent": 6
        }
      ],
      "base": "ibc/914AEFFBD3645B1E494D2E03116161570CEB2C96F0D215FC45274E83832B4857",
      "name": "Pepec",
      "display": "pepec",
      "symbol": "PEPEC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Palantin",
      "type_asset": "cw20",
      "address": "juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
      "denom_units": [
        {
          "denom": "ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51",
          "exponent": 0,
          "aliases": [
            "cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp"
          ]
        },
        {
          "denom": "pltn",
          "exponent": 6
        }
      ],
      "base": "ibc/68D54C4C636ABAA997A803D5FC5F11F0C929D5131E696B97C77C8CDA3971CA51",
      "name": "Palantin",
      "display": "pltn",
      "symbol": "PLTN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Propose. Vote. Build.",
      "type_asset": "cw20",
      "address": "juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
      "denom_units": [
        {
          "denom": "ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8",
          "exponent": 0,
          "aliases": [
            "cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw"
          ]
        },
        {
          "denom": "yfd",
          "exponent": 6
        }
      ],
      "base": "ibc/25BE8BB1323DD48DBDFBCF8068518712813FC912C8904417670D74AE7EF20CA8",
      "name": "Y-Foundry DAO",
      "display": "yfd",
      "symbol": "YFD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "ERIS liquid staked JUNO",
      "type_asset": "cw20",
      "address": "juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
      "denom_units": [
        {
          "denom": "ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64",
          "exponent": 0,
          "aliases": [
            "cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a"
          ]
        },
        {
          "denom": "ampJUNO",
          "exponent": 6
        }
      ],
      "base": "ibc/DF1D816C277AB36329C2DF0C0C6CE4C975D7471F0C38C5CE0C07DDE6FE71DE64",
      "name": "ERIS Amplified JUNO",
      "display": "ampJUNO",
      "symbol": "ampJUNO",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "BITS - Native token of Bitswift Cash",
      "type_asset": "cw20",
      "address": "juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
      "denom_units": [
        {
          "denom": "ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49",
          "exponent": 0,
          "aliases": [
            "cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h"
          ]
        },
        {
          "denom": "bits",
          "exponent": 8
        }
      ],
      "base": "ibc/7D36FC6D762494C89C50AAEC6C37EEBFC83A0E9861F13B1B2F5E190272073F49",
      "name": "BITS",
      "display": "bits",
      "symbol": "BITS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "The least memeable memecoin in existence. The cats have had their day, it's time for $POIL coin to take reign.",
      "type_asset": "cw20",
      "address": "juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
      "denom_units": [
        {
          "denom": "ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057",
          "exponent": 0,
          "aliases": [
            "cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw"
          ]
        },
        {
          "denom": "poil",
          "exponent": 6
        }
      ],
      "base": "ibc/257F456876D42936239CEA1CBB6B4D1949B70CE387C9649024E61AC52C7AC057",
      "name": "POIL",
      "display": "poil",
      "symbol": "POIL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Minerva was one of the main goddesses worshiped by the Roman Pagans and is a goddess from Roman Mythology.",
      "type_asset": "cw20",
      "address": "juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82",
      "denom_units": [
        {
          "denom": "ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2",
          "exponent": 0,
          "aliases": [
            "cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82"
          ]
        },
        {
          "denom": "minerva",
          "exponent": 6
        }
      ],
      "base": "ibc/BB3C502A386F77BD9065EF37AB094516F6471FF680CD2E5628B8F687DDD483A2",
      "name": "MINERVA",
      "display": "minerva",
      "symbol": "MRVA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "In Roman mythology, Juno (Latin: Iuno; pronounced [[Help:Pronunciation|[ˈjuːnoː]]]) was the protector and advisor of the state.",
      "type_asset": "cw20",
      "address": "juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk",
      "denom_units": [
        {
          "denom": "ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00",
          "exponent": 0,
          "aliases": [
            "cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk"
          ]
        },
        {
          "denom": "luno",
          "exponent": 6
        }
      ],
      "base": "ibc/2A469DF99AA69F318A584B3E5ED0D3479F479811406977BA5FD6D955F2544C00",
      "name": "LUNO",
      "display": "luno",
      "symbol": "LUNO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-163",
            "base_denom": "cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk",
            "chain_name": "juno"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-45"
          }
        }
      ]
    },
    {
      "description": "Auto componded USDC despoited into Ginkou on Migaloo chain",
      "denom_units": [
        {
          "denom": "ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD",
          "exponent": 0,
          "aliases": [
            "cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v"
          ]
        },
        {
          "denom": "mUSDC",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
      "base": "ibc/82D4E4AD025718F1964B6A61E95A97C01A95D0491683ED9FB718F9868D7FCCBD",
      "name": "mUSDC",
      "display": "mUSDC",
      "symbol": "mUSDC",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "transfer",
            "channel_id": "channel-103",
            "base_denom": "cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
            "chain_name": "migaloo"
          },
          "chain": {
            "port": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
            "channel_id": "channel-129"
          }
        }
      ]
    },
    {
      "description": "Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.",
      "denom_units": [
        {
          "denom": "ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB",
          "exponent": 0,
          "aliases": [
            "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26"
          ]
        },
        {
          "denom": "astro",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
      "base": "ibc/8E402953590C8E96E6386B8E4D886F2C32C4FCBC9DF62A3192166A1B1758FAFB",
      "name": "Astroport",
      "display": "astro",
      "symbol": "ASTRO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png"
      },
      "coingecko_id": "astroport-fi",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.",
      "denom_units": [
        {
          "denom": "ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF",
          "exponent": 0,
          "aliases": [
            "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k"
          ]
        },
        {
          "denom": "Dinheiros",
          "exponent": 0
        }
      ],
      "type_asset": "cw20",
      "address": "terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
      "base": "ibc/67EA8832846CFDCAAF7CA119A541CABE468E6596048C4E18364845C31C765CAF",
      "name": "dinheiro",
      "display": "Dinheiros",
      "symbol": "DINHEIROS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.",
      "denom_units": [
        {
          "denom": "ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7",
          "exponent": 0,
          "aliases": [
            "cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8"
          ]
        },
        {
          "denom": "Reis",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
      "base": "ibc/40D356CF062527B6CC92506B479A74260B96D9996774B23A7C5470416AD86BF7",
      "name": "real",
      "display": "Reis",
      "symbol": "REIS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Escudos is the everyday currency of dioalma.protocol, good to send money back and foward.",
      "denom_units": [
        {
          "denom": "ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85",
          "exponent": 0,
          "aliases": [
            "cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg"
          ]
        },
        {
          "denom": "Escudos",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
      "base": "ibc/BCCCEC22E50661ECCC25702895D67EEC0DE68DC3C16A44B02AABAB601F93FA85",
      "name": "escudo",
      "display": "Escudos",
      "symbol": "ESCUDOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.",
      "denom_units": [
        {
          "denom": "ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071",
          "exponent": 0,
          "aliases": [
            "cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q"
          ]
        },
        {
          "denom": "Alem",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
      "base": "ibc/28E8D6E6783F469CD75836A00291841B2DD68B694742AB2E517E4C764AC11071",
      "name": "alentejo.money",
      "display": "Alem",
      "symbol": "ALEM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "ERIS liquid staked LUNA.",
      "type_asset": "cw20",
      "address": "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
      "denom_units": [
        {
          "denom": "ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544",
          "exponent": 0,
          "aliases": [
            "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct"
          ]
        },
        {
          "denom": "ampluna",
          "exponent": 6
        }
      ],
      "base": "ibc/9877130F93E5275DFF468215F4D7924B6D893A105CC807E55BAF51385AFE1544",
      "name": "ERIS Amplified LUNA",
      "display": "ampluna",
      "symbol": "ampLUNA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg"
      },
      "coingecko_id": "eris-amplified-luna",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling",
      "type_asset": "cw20",
      "address": "terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
      "denom_units": [
        {
          "denom": "ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737",
          "exponent": 0,
          "aliases": [
            "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv"
          ]
        },
        {
          "denom": "roar",
          "exponent": 6
        }
      ],
      "base": "ibc/8E72DEC581D10F7C7D0E53C8AFA8E94D5563CCEB72860C77AD909630B4238737",
      "name": "Lion DAO",
      "display": "roar",
      "symbol": "ROAR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
      },
      "coingecko_id": "lion-dao",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "GEM DAO, building a decentralized, community-owned, low-supply store of value",
      "type_asset": "cw20",
      "address": "terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
      "denom_units": [
        {
          "denom": "ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B",
          "exponent": 0,
          "aliases": [
            "cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv"
          ]
        },
        {
          "denom": "gem",
          "exponent": 6
        }
      ],
      "base": "ibc/AD0FE004D5872EAB5B0DA543BDDF8FC47D8B073F0955574DDC223903DB272F5B",
      "name": "GEM DAO",
      "display": "gem",
      "symbol": "GEM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Lion Cub DAO is a useless meme community DAO on Terra",
      "type_asset": "cw20",
      "address": "terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
      "denom_units": [
        {
          "denom": "ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9",
          "exponent": 0,
          "aliases": [
            "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t"
          ]
        },
        {
          "denom": "cub",
          "exponent": 6
        }
      ],
      "base": "ibc/D051036C75649116ADA5D610C8FDA2B9AD755AD5422D4B4C5A8AB63597C554D9",
      "name": "Lion Cub DAO",
      "display": "cub",
      "symbol": "CUB",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "BLUE CUB DAO is a community DAO on Terra",
      "type_asset": "cw20",
      "address": "terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
      "denom_units": [
        {
          "denom": "ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52",
          "exponent": 0,
          "aliases": [
            "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584"
          ]
        },
        {
          "denom": "blue",
          "exponent": 6
        }
      ],
      "base": "ibc/9A6DBD6270DAF633B82CFB962237450569E30D6B1335650BFE1E34B152CFAD52",
      "name": "BLUE CUB DAO",
      "display": "blue",
      "symbol": "BLUE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Liquidity token, NFT, HARVEST FOR VALUE",
      "type_asset": "cw20",
      "address": "terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
      "denom_units": [
        {
          "denom": "ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4",
          "exponent": 0,
          "aliases": [
            "cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn"
          ]
        },
        {
          "denom": "xxx",
          "exponent": 10
        }
      ],
      "base": "ibc/E83172BA45300F478AF9ECE1787171E25E4D53A85E86EE3BD3CADEFE5CA75FE4",
      "name": "TheOnlyOne",
      "display": "xxx",
      "symbol": "xxx",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Just a meme coin on Terra",
      "type_asset": "cw20",
      "address": "terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
      "denom_units": [
        {
          "denom": "ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40",
          "exponent": 0,
          "aliases": [
            "cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces"
          ]
        },
        {
          "denom": "GUGU",
          "exponent": 6
        }
      ],
      "base": "ibc/69C62FD9F3ADFA7011A483729AE4F607C7D696AB88D7B21F2C75DB831D8D8B40",
      "name": "GUGU",
      "display": "GUGU",
      "symbol": "GUGU",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.",
      "type_asset": "cw20",
      "address": "terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      "denom_units": [
        {
          "denom": "ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4",
          "exponent": 0,
          "aliases": [
            "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml"
          ]
        },
        {
          "denom": "bluna",
          "exponent": 6
        }
      ],
      "base": "ibc/975B353EA188FAD4743D1C4BE63066F8E2C8CC7D29894102E64C5E8D3CE7B9D4",
      "name": "boneLuna",
      "display": "bluna",
      "symbol": "bLUNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.",
      "type_asset": "cw20",
      "address": "terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
      "denom_units": [
        {
          "denom": "ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07",
          "exponent": 0,
          "aliases": [
            "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3"
          ]
        },
        {
          "denom": "sayve",
          "exponent": 6
        }
      ],
      "base": "ibc/7F91F57C5B287483BCA8386F8EF84DCFE5611C81BF5A48FF5EE846464300AA07",
      "name": "sayve",
      "display": "sayve",
      "symbol": "SAYVE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Nico Dao Money",
      "type_asset": "cw20",
      "address": "terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
      "denom_units": [
        {
          "denom": "ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F",
          "exponent": 0,
          "aliases": [
            "cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3"
          ]
        },
        {
          "denom": "nico",
          "exponent": 18
        }
      ],
      "base": "ibc/4C74719A071FE4BE01E04DCC74CB90948397197B71984E0024AD4D9094BA844F",
      "name": "nico",
      "display": "nico",
      "symbol": "NICO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Sailing the Seas DAO is a community DAO built on Enterprise on Terra",
      "type_asset": "cw20",
      "address": "terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
      "denom_units": [
        {
          "denom": "ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3",
          "exponent": 0,
          "aliases": [
            "cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala"
          ]
        },
        {
          "denom": "seas",
          "exponent": 6
        }
      ],
      "base": "ibc/1A32031E57950A89D2567D4EA6E62741E4C08F9B45C5AF17D086CB792787ABA3",
      "name": "Sailing The SeaS DAO",
      "display": "seas",
      "symbol": "SEAS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "A community DAO built on Enterprise",
      "type_asset": "cw20",
      "address": "terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
      "denom_units": [
        {
          "denom": "ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE",
          "exponent": 0,
          "aliases": [
            "cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v"
          ]
        },
        {
          "denom": "bitz",
          "exponent": 6
        }
      ],
      "base": "ibc/72AC5B4BBA9DF8E5482E36507A818786B9F98F9A531DA654938C0D1F48339DDE",
      "name": "BitzDAO",
      "display": "bitz",
      "symbol": "BITZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "SEUL DAO",
      "type_asset": "cw20",
      "address": "terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
      "denom_units": [
        {
          "denom": "ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035",
          "exponent": 0,
          "aliases": [
            "cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l"
          ]
        },
        {
          "denom": "seul",
          "exponent": 6
        }
      ],
      "base": "ibc/6B0B31BA60403FD78ED4873C9889D2FA9BE77D239A12797259675AA9ABF47035",
      "name": "seul",
      "display": "seul",
      "symbol": "SEUL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "SEUL DAO",
      "type_asset": "cw20",
      "address": "terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
      "denom_units": [
        {
          "denom": "ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209",
          "exponent": 0,
          "aliases": [
            "cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5"
          ]
        },
        {
          "denom": "xseul",
          "exponent": 6
        }
      ],
      "base": "ibc/9BB0B8C10D96E4C0D8181A2F1948ED715AAFA57FFDF72A7C1D3381A6009D2209",
      "name": "xseul",
      "display": "xseul",
      "symbol": "xSEUL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "ITO DAO",
      "type_asset": "cw20",
      "address": "terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
      "denom_units": [
        {
          "denom": "ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51",
          "exponent": 0,
          "aliases": [
            "cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s"
          ]
        },
        {
          "denom": "ito",
          "exponent": 6
        }
      ],
      "base": "ibc/80C770BDF94187B2539DD4D3661403A0C844C9C56C61A9F59D12132EBBA6DB51",
      "name": "ito",
      "display": "ito",
      "symbol": "ITO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Chris Armani Token",
      "type_asset": "cw20",
      "address": "terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
      "denom_units": [
        {
          "denom": "ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB",
          "exponent": 0,
          "aliases": [
            "cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8"
          ]
        },
        {
          "denom": "ARMANI",
          "exponent": 6
        }
      ],
      "base": "ibc/429576EAF76D8D60370C49AB9B8F48B3FBEE49C123B5D119E51EFD30B60665BB",
      "name": "ARMANI",
      "display": "ARMANI",
      "symbol": "ARMANI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "useless meme coin",
      "type_asset": "cw20",
      "address": "terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
      "denom_units": [
        {
          "denom": "ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8",
          "exponent": 0,
          "aliases": [
            "cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun"
          ]
        },
        {
          "denom": "DROGO",
          "exponent": 6
        }
      ],
      "base": "ibc/698C1702EE50A90124C74C5D5C8979E8D1C6867887C04B6A27714ABA8A2495B8",
      "name": "DROGO",
      "display": "DROGO",
      "symbol": "DROGO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png"
      },
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "ado the flower of night",
      "type_asset": "cw20",
      "address": "terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
      "denom_units": [
        {
          "denom": "ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3",
          "exponent": 0,
          "aliases": [
            "cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu"
          ]
        },
        {
          "denom": "ADO",
          "exponent": 6
        }
      ],
      "base": "ibc/A0F2320506E03CC89B72A18A79FEA053665439C6FD21ED920AA02C213C83A9A3",
      "name": "ADO",
      "display": "ADO",
      "symbol": "ADO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png"
      },
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "DNA DAO",
      "type_asset": "cw20",
      "address": "terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
      "denom_units": [
        {
          "denom": "ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC",
          "exponent": 0,
          "aliases": [
            "cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h"
          ]
        },
        {
          "denom": "DNA",
          "exponent": 6
        }
      ],
      "base": "ibc/32B2904F188860ACB822637B620D4D136D0EFD51FCCFCE3384C8ADEC8049C1CC",
      "name": "DNA",
      "display": "DNA",
      "symbol": "DNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    },
    {
      "description": "Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.",
      "type_asset": "cw20",
      "address": "terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
      "denom_units": [
        {
          "denom": "ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC",
          "exponent": 0,
          "aliases": [
            "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq"
          ]
        },
        {
          "denom": "bitmos",
          "exponent": 6
        }
      ],
      "base": "ibc/D85B35FA098C231599B96CD203A3F363DFA7E181EDCB0A8468C280EC0E786BDC",
      "name": "Bitmos",
      "display": "bitmos",
      "symbol": "BMOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png"
        }
      ],
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-382",
            "base_denom": "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
            "chain_name": "terra2"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-127"
          }
        }
      ]
    }
  ]
};
export default assets;
    