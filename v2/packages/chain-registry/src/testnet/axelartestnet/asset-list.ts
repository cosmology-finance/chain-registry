import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'axelartestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denomUnits: [{
          denom: 'uaxl',
          exponent: 0
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'uaxl',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'uausdc',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: 'uausdc',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'eth-wei',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: 'eth-wei',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denomUnits: [{
          denom: 'wglmr-wei',
          exponent: 0
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: 'wglmr-wei',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Matic on Axelar',
      denomUnits: [{
          denom: 'wmatic-wei',
          exponent: 0
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      base: 'wmatic-wei',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped BNB on Axelar',
      denomUnits: [{
          denom: 'wbnb-wei',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: 'wbnb-wei',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denomUnits: [{
          denom: 'wavax-wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      base: 'wavax-wei',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denomUnits: [{
          denom: 'wftm-wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      base: 'wftm-wei',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of Manifest Ledger',
      denomUnits: [{
          denom: 'ibc/EAC654CC560CC03D82AE4BAA808BD0B6E06E9F29F62194B46C0502D967349E24',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EAC654CC560CC03D82AE4BAA808BD0B6E06E9F29F62194B46C0502D967349E24',
      name: 'Manifest',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-590',
            path: 'transfer/channel-590/umfx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      }
    },
    {
      description: 'BLERG Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/08D22E7A5470B28E5AB7215267B0A4FA27CC7917D4694C6807E3C401F99DDB31',
          exponent: 0
        }, {
          denom: 'blerg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/08D22E7A5470B28E5AB7215267B0A4FA27CC7917D4694C6807E3C401F99DDB31',
      name: 'BLERG',
      display: 'blerg',
      symbol: 'BLERG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/092E2EF01F40CBAC11798FFD1EF9261C878E58098FF2476DD54711972B70D83F',
          exponent: 0
        }, {
          denom: 'pwrzt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/092E2EF01F40CBAC11798FFD1EF9261C878E58098FF2476DD54711972B70D83F',
      name: 'PWRZT',
      display: 'pwrzt',
      symbol: 'PWRZT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'DBLT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/0DCAB4EA43429494FE337A45660AF6CD02AEF27147BE374A02952E5AF0A2A6D4',
          exponent: 0
        }, {
          denom: 'dblt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0DCAB4EA43429494FE337A45660AF6CD02AEF27147BE374A02952E5AF0A2A6D4',
      name: 'DBLT',
      display: 'dblt',
      symbol: 'DBLT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'MEGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/0E32CFB5D3BA17EA69EC9082ACC1FBBE4E5503988B98B82AB358B9D7CB070581',
          exponent: 0
        }, {
          denom: 'mega',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E32CFB5D3BA17EA69EC9082ACC1FBBE4E5503988B98B82AB358B9D7CB070581',
      name: 'MEGA',
      display: 'mega',
      symbol: 'MEGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GWATT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/2522E7054B26702E4C0DB983A1696BC9C357A8274D529E2D07D09D34D860DB53',
          exponent: 0
        }, {
          denom: 'gwatt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2522E7054B26702E4C0DB983A1696BC9C357A8274D529E2D07D09D34D860DB53',
      name: 'GWATT',
      display: 'gwatt',
      symbol: 'GWATT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'INDIS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/2BEBBC54C36EDD3B6BA8D9B25C03C572FD6D996962A7081F8FA7BDE38DF1D5A3',
          exponent: 0
        }, {
          denom: 'indis',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2BEBBC54C36EDD3B6BA8D9B25C03C572FD6D996962A7081F8FA7BDE38DF1D5A3',
      name: 'INDIS',
      display: 'indis',
      symbol: 'INDIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLD Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3280BDE7F440D3EF0DE6AEA6632F84E07D54F1908ADBCCDF03F0EFD63831D901',
          exponent: 0
        }, {
          denom: 'sold',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3280BDE7F440D3EF0DE6AEA6632F84E07D54F1908ADBCCDF03F0EFD63831D901',
      name: 'SOLD',
      display: 'sold',
      symbol: 'SOLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usold',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usold'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usold'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLB Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3E0F68951BF66F229E01AD3E35EC9E82F37F2C0EAC3EB109F234AD08F85B7979',
          exponent: 0
        }, {
          denom: 'solb',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3E0F68951BF66F229E01AD3E35EC9E82F37F2C0EAC3EB109F234AD08F85B7979',
      name: 'SOLB',
      display: 'solb',
      symbol: 'SOLB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GREY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3F08DE9963E4E5EB44570FA63049B820A239A4081EB1C7884309E039D01EEEAB',
          exponent: 0
        }, {
          denom: 'grey',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3F08DE9963E4E5EB44570FA63049B820A239A4081EB1C7884309E039D01EEEAB',
      name: 'GREY',
      display: 'grey',
      symbol: 'GREY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'ABUS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/470F9D29B01DA444830AE6C3392A9CA55F05C40F5B64C076F5FC0E4DBBE9A4C3',
          exponent: 0
        }, {
          denom: 'abus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/470F9D29B01DA444830AE6C3392A9CA55F05C40F5B64C076F5FC0E4DBBE9A4C3',
      name: 'ABUS',
      display: 'abus',
      symbol: 'ABUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SNOOP Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/4FB0428DD0B1C18995DB966671A3438FA6758C8BB71B4BBA1D76A2146C325662',
          exponent: 0
        }, {
          denom: 'snoop',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4FB0428DD0B1C18995DB966671A3438FA6758C8BB71B4BBA1D76A2146C325662',
      name: 'SNOOP',
      display: 'snoop',
      symbol: 'SNOOP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'HIVE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/54A09933C80A962FD4263DFD362F033D29D064B710F825CCA2577AFEF6F69413',
          exponent: 0
        }, {
          denom: 'hive',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/54A09933C80A962FD4263DFD362F033D29D064B710F825CCA2577AFEF6F69413',
      name: 'HIVE',
      display: 'hive',
      symbol: 'HIVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWROZ Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/5BFC58E86BBA9C769BC7A04D434F9B0EB47EC1163BB279F82984D350F18ECA76',
          exponent: 0
        }, {
          denom: 'pwroz',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5BFC58E86BBA9C769BC7A04D434F9B0EB47EC1163BB279F82984D350F18ECA76',
      name: 'PWROZ',
      display: 'pwroz',
      symbol: 'PWROZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'BITCH Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/601F6AF6EA660D6CDFCAA206B2F8ABB0AE4C7436654F7BBFD82A50182F45CA2F',
          exponent: 0
        }, {
          denom: 'bitch',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/601F6AF6EA660D6CDFCAA206B2F8ABB0AE4C7436654F7BBFD82A50182F45CA2F',
      name: 'BITCH',
      display: 'bitch',
      symbol: 'BITCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZF Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/66A40F06F75985D01F989F88F433E085C8AD3A085CFBA661F86244D3DC8718F8',
          exponent: 0
        }, {
          denom: 'pwrzf',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/66A40F06F75985D01F989F88F433E085C8AD3A085CFBA661F86244D3DC8718F8',
      name: 'PWRZF',
      display: 'pwrzf',
      symbol: 'PWRZF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'GCATT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6774AA33A63A5A6C880282EB2A0F8AE279346FF394A7BAF1FD81D99F5B8C22A7',
          exponent: 0
        }, {
          denom: 'gcatt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6774AA33A63A5A6C880282EB2A0F8AE279346FF394A7BAF1FD81D99F5B8C22A7',
      name: 'GCATT',
      display: 'gcatt',
      symbol: 'GCATT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugcatt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugcatt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugcatt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'FRAME Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/68B9C8D0E1DDCB3EB6B33D66B19B3B4197025BE8CB3D953031EC6A1EE745328F',
          exponent: 0
        }, {
          denom: 'frame',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/68B9C8D0E1DDCB3EB6B33D66B19B3B4197025BE8CB3D953031EC6A1EE745328F',
      name: 'FRAME',
      display: 'frame',
      symbol: 'FRAME',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/73307294FA4018ED2A8ED954BE39561A4D545772371F1C433DBBB72294CA6538',
          exponent: 0
        }, {
          denom: 'pwrze',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/73307294FA4018ED2A8ED954BE39561A4D545772371F1C433DBBB72294CA6538',
      name: 'PWRZE',
      display: 'pwrze',
      symbol: 'PWRZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/773C68967FD08D6FAF2F364A2C7DA52DA8FCD5C9E73437F35DF5AB69B32AB352',
          exponent: 0
        }, {
          denom: 'sola',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/773C68967FD08D6FAF2F364A2C7DA52DA8FCD5C9E73437F35DF5AB69B32AB352',
      name: 'SOLA',
      display: 'sola',
      symbol: 'SOLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZN Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/88B6ADC91FE64C67A610CC1AD0F4F9946CDDB057E73228461381C3A8FDE92493',
          exponent: 0
        }, {
          denom: 'pwrzn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/88B6ADC91FE64C67A610CC1AD0F4F9946CDDB057E73228461381C3A8FDE92493',
      name: 'PWRZN',
      display: 'pwrzn',
      symbol: 'PWRZN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8AAC95A1AD0047A9CD7F6D13DDDADB93776E32544036227F9A66C27BF76D8C52',
          exponent: 0
        }, {
          denom: 'sole',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8AAC95A1AD0047A9CD7F6D13DDDADB93776E32544036227F9A66C27BF76D8C52',
      name: 'SOLE',
      display: 'sole',
      symbol: 'SOLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8B868E456E431A79F5681BA217B4BABA7A34CEE39389FE8D4DF5E3ACACDAE0B6',
          exponent: 0
        }, {
          denom: 'pwrzo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8B868E456E431A79F5681BA217B4BABA7A34CEE39389FE8D4DF5E3ACACDAE0B6',
      name: 'PWRZO',
      display: 'pwrzo',
      symbol: 'PWRZO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzo',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWROO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8BE93E121E24D268DC77E2A61AA0AF18BBA8F5E6AB105DB8B6AEA664CD6E8AAA',
          exponent: 0
        }, {
          denom: 'pwroo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8BE93E121E24D268DC77E2A61AA0AF18BBA8F5E6AB105DB8B6AEA664CD6E8AAA',
      name: 'PWROO',
      display: 'pwroo',
      symbol: 'PWROO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8D2F83EEBEE8A34BA1403BDAA3C04457E08D9B8694AD2C232321E19F923B3172',
          exponent: 0
        }, {
          denom: 'pwrzs',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8D2F83EEBEE8A34BA1403BDAA3C04457E08D9B8694AD2C232321E19F923B3172',
      name: 'PWRZS',
      display: 'pwrzs',
      symbol: 'PWRZS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZR Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/919046A89B91F9995D086C3CFECBF12842831C99206DC2465C19C600BFB29C45',
          exponent: 0
        }, {
          denom: 'pwrzr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/919046A89B91F9995D086C3CFECBF12842831C99206DC2465C19C600BFB29C45',
      name: 'PWRZR',
      display: 'pwrzr',
      symbol: 'PWRZR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CURES Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/95A248CB8B6BA779D278BD2A6C044C1E32B37BA67C735940F9CDDF991F1664AA',
          exponent: 0
        }, {
          denom: 'cures',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/95A248CB8B6BA779D278BD2A6C044C1E32B37BA67C735940F9CDDF991F1664AA',
      name: 'CURES',
      display: 'cures',
      symbol: 'CURES',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'LENDX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/99439DB1A5D64002F7202A6AE4F56CAF7CE42A22C5EB77B14780C583E6ACE141',
          exponent: 0
        }, {
          denom: 'lendx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/99439DB1A5D64002F7202A6AE4F56CAF7CE42A22C5EB77B14780C583E6ACE141',
      name: 'LENDX',
      display: 'lendx',
      symbol: 'LENDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'SOLC Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/A98E89DCB8859D3D10FC624A03E25BD89905E810BA194C6430ACB6B1FA334F66',
          exponent: 0
        }, {
          denom: 'solc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A98E89DCB8859D3D10FC624A03E25BD89905E810BA194C6430ACB6B1FA334F66',
      name: 'SOLC',
      display: 'solc',
      symbol: 'SOLC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CORAL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/AFAE8779ADBB6009B78C233C846FFE1BB67D96F19DCD54451DD36CDEC276F5D9',
          exponent: 0
        }, {
          denom: 'coral',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AFAE8779ADBB6009B78C233C846FFE1BB67D96F19DCD54451DD36CDEC276F5D9',
      name: 'CORAL',
      display: 'coral',
      symbol: 'CORAL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/B1EF6EE90168D486824E76700ED280B5B127B32F5194C8D063844D573A0A22EB',
          exponent: 0
        }, {
          denom: 'pwrzx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1EF6EE90168D486824E76700ED280B5B127B32F5194C8D063844D573A0A22EB',
      name: 'PWRZX',
      display: 'pwrzx',
      symbol: 'PWRZX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'FOCAL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/C40D0997D88A8193E3AD627EF58A2998989F1187A5277B1BDE07FEF909533982',
          exponent: 0
        }, {
          denom: 'focal',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C40D0997D88A8193E3AD627EF58A2998989F1187A5277B1BDE07FEF909533982',
      name: 'FOCAL',
      display: 'focal',
      symbol: 'FOCAL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'CATS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/D1495D28D71F69CE0DD7B1FD104A2088066C346DBD96F7F162CDF98EBD38D962',
          exponent: 0
        }, {
          denom: 'cats',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D1495D28D71F69CE0DD7B1FD104A2088066C346DBD96F7F162CDF98EBD38D962',
      name: 'CATS',
      display: 'cats',
      symbol: 'CATS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZZ Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E238A7B212BE6E11028E1D8F50A4DCB3F8E1BBEFA73CB5A79699F16ADF84E861',
          exponent: 0
        }, {
          denom: 'pwrzz',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E238A7B212BE6E11028E1D8F50A4DCB3F8E1BBEFA73CB5A79699F16ADF84E861',
      name: 'PWRZZ',
      display: 'pwrzz',
      symbol: 'PWRZZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'AAA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E40FC73EDA77AE168D681405B975C48B5B515BFBBCD200E03738F48D5AFF722B',
          exponent: 0
        }, {
          denom: 'aaa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E40FC73EDA77AE168D681405B975C48B5B515BFBBCD200E03738F48D5AFF722B',
      name: 'AAA',
      display: 'aaa',
      symbol: 'AAA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PWRZV Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E6A50DB535B23AA672122EF5B321DD5B69A480A38F27707AE76AAB408C06A425',
          exponent: 0
        }, {
          denom: 'pwrzv',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E6A50DB535B23AA672122EF5B321DD5B69A480A38F27707AE76AAB408C06A425',
      name: 'PWRZV',
      display: 'pwrzv',
      symbol: 'PWRZV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    },
    {
      description: 'PGSQL Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/FBF7018905686DB873D482FF5ECF31A661F604EFBFEB0517F1FD1CBC1D301BF0',
          exponent: 0
        }, {
          denom: 'pgsql',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FBF7018905686DB873D482FF5ECF31A661F604EFBFEB0517F1FD1CBC1D301BF0',
      name: 'PGSQL',
      display: 'pgsql',
      symbol: 'PGSQL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-591',
            path: 'transfer/channel-590/factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      }
    }
  ]
};
export default info;