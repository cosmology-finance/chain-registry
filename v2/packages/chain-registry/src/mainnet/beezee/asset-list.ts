import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'beezee',
  assets: [
    {
      description: 'BeeZee network native coin',
      extendedDescription: 'Powered by BZE Coin, BeeZee Network offers users access to decentralized services through a variety of applications built on a fast and cost-efficient blockchain.',
      denomUnits: [{
          denom: 'ubze',
          exponent: 0
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ubze',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingeckoId: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primaryColorHex: '#079fd7'
          }
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        twitter: 'https://x.com/BZEdgeCoin'
      }
    },
    {
      description: 'Vidulum App Token',
      extendedDescription: 'Vidulum App is your one stop, multi-currency crypto web wallet. Hold, earn, and own your crypto assets in non-custodial fashion from any device, anytime.',
      denomUnits: [{
          denom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
          exponent: 0
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      base: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      coingeckoId: 'vidulum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primaryColorHex: '#3454bc'
          }
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://vidulum.app/',
        twitter: 'https://x.com/VidulumApp'
      }
    },
    {
      description: 'OSMO from Osmosis',
      denomUnits: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-340'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      description: 'Crypto2Mars Community Token',
      denomUnits: [{
          denom: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
          exponent: 0
        }, {
          denom: 'C2M',
          exponent: 6
        }],
      base: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
      name: 'Crypto2Mars',
      display: 'C2M',
      symbol: 'C2M',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png',
          theme: {
            primaryColorHex: '#FEFEFE'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of Archway network',
      denomUnits: [
        {
          denom: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch',
            channelId: 'channel-147'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/aarch'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primaryColorHex: '#fc4c04'
          }
        }]
    },
    {
      description: 'USDC from Noble',
      denomUnits: [{
          denom: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-95'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The Spice memecoin',
      denomUnits: [{
          denom: 'ibc/08EAEAB525E59C611D5BD8FAC4BE65DF65A69E62874377F6889BBD01A33F385F',
          exponent: 0
        }, {
          denom: 'Spice',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/08EAEAB525E59C611D5BD8FAC4BE65DF65A69E62874377F6889BBD01A33F385F',
      name: 'Spice',
      display: 'Spice',
      symbol: 'SPICE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png',
          theme: {
            primaryColorHex: '#e5ba44'
          }
        }],
      keywords: ['meme'],
      socials: {
        twitter: 'https://x.com/spiceoncosmos'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice',
            channelId: 'channel-340'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice'
          }
        }]
    },
    {
      description: 'JKL from Jackal Network',
      denomUnits: [{
          denom: 'ibc/4AA3B163580B4377250CD4486FB6AD098EB27822EE056949EC4A39B09C5E3B4E',
          exponent: 0
        }, {
          denom: 'jkl',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/4AA3B163580B4377250CD4486FB6AD098EB27822EE056949EC4A39B09C5E3B4E',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'jackal',
            baseDenom: 'ujkl',
            channelId: 'channel-142'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/ujkl'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'jackal',
            baseDenom: 'ujkl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primaryColorHex: '#dbdbcb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      }
    },
    {
      description: 'FLIX from OmniFlix Network',
      denomUnits: [{
          denom: 'ibc/FF39851E73089ACBD0B09BDF62FA3C67FBD77A2CD97CD159DBCE9C770561F8AF',
          exponent: 0
        }, {
          denom: 'flix',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/FF39851E73089ACBD0B09BDF62FA3C67FBD77A2CD97CD159DBCE9C770561F8AF',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'omniflixhub',
            baseDenom: 'uflix',
            channelId: 'channel-50'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uflix'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'omniflixhub',
            baseDenom: 'uflix'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primaryColorHex: '#c33635'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      }
    },
    {
      description: 'The Sherpa memecoin',
      denomUnits: [{
          denom: 'ibc/02EE50AB3A4B7540FA001B24CB75E688016F65547CABE885EA184338440080B2',
          exponent: 0
        }, {
          denom: 'Sherpa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/02EE50AB3A4B7540FA001B24CB75E688016F65547CABE885EA184338440080B2',
      name: 'Sherpa',
      display: 'Sherpa',
      symbol: 'SHERPA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png',
          theme: {
            primaryColorHex: '#fe9cdf'
          }
        }],
      keywords: ['meme'],
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa',
            channelId: 'channel-340'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa'
          }
        }]
    },
    {
      description: 'AtomOne native coin',
      denomUnits: [{
          denom: 'ibc/B2219CA05421EA988F83E5E824BF69362E80A6A87503EFD18B92C91C9E03763D',
          exponent: 0,
          aliases: ['uatone']
        }, {
          denom: 'atone',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B2219CA05421EA988F83E5E824BF69362E80A6A87503EFD18B92C91C9E03763D',
      name: 'Atone',
      display: 'atone',
      symbol: 'ATONE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'atomone',
            baseDenom: 'uatone',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/uatone'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'atomone',
            baseDenom: 'uatone'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      }
    },
    {
      description: 'PHMN from Osmosis',
      denomUnits: [{
          denom: 'ibc/12C0B8B561AFCFDA3C73DEE0F7F84AA2B860D48493C27E8E81A5D14724FAB08B',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/12C0B8B561AFCFDA3C73DEE0F7F84AA2B860D48493C27E8E81A5D14724FAB08B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
            channelId: 'channel-340'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-169/cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
          theme: {
            primaryColorHex: '#bbc2c6'
          }
        }],
      socials: {
        website: 'https://posthuman.digital/',
        twitter: 'https://twitter.com/POSTHUMAN_DVS'
      }
    }
  ]
};
export default info;