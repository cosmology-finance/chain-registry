import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'carbon',
  assets: [
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'swth',
          exponent: 0
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'swth',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'usc',
          exponent: 0
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'usc',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primary_color_hex: '#053e4f'
          }
        }]
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [{
          denom: 'bnb.1.6.773edb',
          exponent: 0
        }, {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }],
      base: 'bnb.1.6.773edb',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [{
          denom: 'bneo.1.14.e2e5f6',
          exponent: 0
        }, {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }],
      base: 'bneo.1.14.e2e5f6',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'neo',
            base_denom: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
          },
          chain: {
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [{
          denom: 'busd.1.6.754a80',
          exponent: 0
        }, {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }],
      base: 'busd.1.6.754a80',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [{
          denom: 'cglp.1.19.1698d3',
          exponent: 0
        }, {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }],
      base: 'cglp.1.19.1698d3',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg',
          theme: {
            primary_color_hex: '#070707'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'cgt/1',
          exponent: 0
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'cgt/1',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primary_color_hex: '#043d4d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [{
          denom: 'eth.1.19.c3b805',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'eth.1.19.c3b805',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [{
          denom: 'eth.1.2.942d87',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'eth.1.2.942d87',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'STARS token on Carbon',
      denom_units: [{
          denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6,
          aliases: ['STARS']
        }],
      type_asset: 'ics20',
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze Staking Coin',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-123'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/ustars'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }]
    },
    {
      description: 'LUNA token on Carbon',
      denom_units: [{
          denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6,
          aliases: ['LUNA']
        }],
      type_asset: 'ics20',
      base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
      name: 'Terra Staking Coin',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-36'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/uluna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }]
    },
    {
      description: 'TIA token on Carbon',
      denom_units: [{
          denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channel_id: 'channel-188'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-6994/utia'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'MilkTIA token on Carbon',
      denom_units: [{
          denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
          exponent: 0,
          aliases: ['umilkTIA']
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            channel_id: 'channel-188'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
          theme: {
            primary_color_hex: '#d18dfc'
          }
        }]
    },
    {
      description: 'STRD token on Carbon',
      denom_units: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0
        }, {
          denom: 'strd',
          exponent: 6,
          aliases: ['STRD']
        }],
      type_asset: 'ics20',
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'ustrd',
            channel_id: 'channel-47'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/ustrd'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }]
    },
    {
      description: 'EVMOS token on Carbon',
      denom_units: [{
          denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
          exponent: 0
        }, {
          denom: 'evmos',
          exponent: 18,
          aliases: ['EVMOS']
        }],
      type_asset: 'ics20',
      base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'aevmos',
            channel_id: 'channel-23'
          },
          chain: {
            channel_id: 'channel-6',
            path: 'transfer/channel-6/aevmos'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }]
    },
    {
      description: 'IRIS token on Carbon',
      denom_units: [{
          denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
          exponent: 0
        }, {
          denom: 'iris',
          exponent: 6,
          aliases: ['IRIS']
        }],
      type_asset: 'ics20',
      base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
      name: 'IRIS Hub Staking Coin',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
            channel_id: 'channel-68'
          },
          chain: {
            channel_id: 'channel-28',
            path: 'transfer/channel-28/uiris'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'irisnet',
            base_denom: 'uiris'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primary_color_hex: '#5664ad'
          }
        }]
    },
    {
      description: 'KUJI token on Carbon',
      denom_units: [{
          denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
          exponent: 0
        }, {
          denom: 'kuji',
          exponent: 6,
          aliases: ['KUJI']
        }],
      type_asset: 'ics20',
      base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'ukuji',
            channel_id: 'channel-46'
          },
          chain: {
            channel_id: 'channel-9',
            path: 'transfer/channel-9/ukuji'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'ukuji'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }]
    },
    {
      description: 'stOSMO token on Carbon',
      denom_units: [{
          denom: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
          exponent: 0
        }, {
          denom: 'stosmo',
          exponent: 6,
          aliases: ['stOSMO']
        }],
      type_asset: 'ics20',
      base: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
            channel_id: 'channel-47'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/stuosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'CANTO token on Carbon',
      denom_units: [{
          denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
          exponent: 0
        }, {
          denom: 'canto',
          exponent: 18,
          aliases: ['CANTO']
        }],
      type_asset: 'ics20',
      base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'canto',
            base_denom: 'acanto',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/acanto'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'canto',
            base_denom: 'acanto'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primary_color_hex: '#1c1f1f'
          }
        }]
    },
    {
      description: 'Cosmos governance token on Carbon',
      denom_units: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }],
      type_asset: 'ics20',
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-342'
          },
          chain: {
            channel_id: 'channel-3',
            path: 'transfer/channel-3/uatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }]
    },
    {
      description: 'stATOM token on Carbon',
      denom_units: [{
          denom: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
          exponent: 0
        }, {
          denom: 'statom',
          exponent: 6,
          aliases: ['stATOM']
        }],
      type_asset: 'ics20',
      base: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuatom',
            channel_id: 'channel-47'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/stuatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'OSMO token on Carbon',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: ['OSMO']
        }],
      type_asset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-188'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }]
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [{
          denom: 'usdc.1.2.343151',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }],
      base: 'usdc.1.2.343151',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [{
          denom: 'usdc.1.6.53ff75',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }],
      base: 'usdc.1.6.53ff75',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'ZIL token on Carbon',
      denom_units: [{
          denom: 'zil.1.18.1a4a06',
          exponent: 0
        }, {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL']
        }],
      base: 'zil.1.18.1a4a06',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'zilliqa',
            base_denom: 'wei',
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
          },
          chain: {
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
          },
          provider: 'PolyNetwork'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg',
          theme: {
            primary_color_hex: '#2cccc4'
          }
        }],
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;