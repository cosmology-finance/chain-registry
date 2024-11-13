import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'oraichain',
  assets: [
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'orai',
          exponent: 0
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'orai',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingecko_id: 'oraichain-token',
      socials: {
        website: 'https://orai.io/',
        twitter: 'https://x.com/oraichain'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true,
            primary_color_hex: '#000000',
            background_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            dark_mode: true,
            primary_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            dark_mode: false,
            primary_color_hex: '#000000'
          }
        }
      ],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The ATOM native token of Oraichain.',
      denom_units: [{
          denom: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
      name: 'ATOM',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-301'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/uatom'
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
      description: 'The OSMO native token of Oraichain.',
      denom_units: [{
          denom: 'ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC',
      name: 'OSMO',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-216'
          },
          chain: {
            channel_id: 'channel-13',
            path: 'transfer/channel-13/uosmo'
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
      description: 'The INJ token for the Oraichain.',
      denom_units: [{
          denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E',
          exponent: 0
        }, {
          denom: 'inj',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj',
            channel_id: 'channel-147'
          },
          chain: {
            channel_id: 'channel-146',
            path: 'transfer/channel-146/inj'
          }
        }],
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The Wrapped INJ token for the Oraichain.',
      type_asset: 'cw20',
      address: 'orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      denom_units: [{
          denom: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
          exponent: 0
        }, {
          denom: 'inj',
          exponent: 6
        }],
      base: 'cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49',
      name: 'Injective',
      display: 'inj',
      symbol: 'INJ',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          provider: 'Oraichain'
        }],
      images: [{
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The USDT token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      base: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
      name: 'Usdt',
      display: 'usdt',
      symbol: 'USDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The AIRI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
          exponent: 0
        }, {
          denom: 'airi',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      base: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
      name: 'Airight',
      display: 'airi',
      coingecko_id: 'airight',
      symbol: 'AIRI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/airi.svg'
      }
    },
    {
      description: 'The ORAIX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
          exponent: 0
        }, {
          denom: 'oraix',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      base: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
      name: 'Oraix',
      coingecko_id: 'oraidex',
      display: 'oraix',
      symbol: 'ORAIX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/oraix.svg'
      }
    },
    {
      description: 'USDC issued on Oraichain.',
      denom_units: [{
          denom: 'cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-34'
          },
          chain: {
            channel_id: 'channel-301',
            path: 'transfer/channel-301/uusdc'
          }
        }],
      type_asset: 'cw20',
      address: 'orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
      base: 'cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
      name: 'Usdc',
      display: 'usdc',
      symbol: 'USDC',
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The KAWAII token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
          exponent: 0
        }, {
          denom: 'kwt',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      base: 'cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5',
      name: 'Kwt',
      display: 'kwt',
      symbol: 'KWT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/kwt.svg'
      }
    },
    {
      description: 'The MILKY token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
          exponent: 0
        }, {
          denom: 'milky',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      base: 'cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw',
      name: 'Milky',
      display: 'milky',
      symbol: 'MILKY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/milky-token.svg'
      }
    },
    {
      description: 'The scORAI token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
          exponent: 0
        }, {
          denom: 'scorai',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      base: 'cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp',
      name: 'Scorai',
      display: 'scorai',
      coingecko_id: 'scorai',
      symbol: 'SCORAI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scorai.svg'
      }
    },
    {
      description: 'The TRX token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
          exponent: 0
        }, {
          denom: 'wtrx',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      base: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
      name: 'Wtrx',
      display: 'wtrx',
      symbol: 'wTRX',
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg'
      }
    },
    {
      description: 'The scATOM token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
          exponent: 0
        }, {
          denom: 'scatom',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      base: 'cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq',
      name: 'scATOM',
      display: 'scatom',
      symbol: 'scATOM',
      coingecko_id: 'scatom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/scatom.svg'
      }
    },
    {
      description: 'The xOCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
          exponent: 0
        }, {
          denom: 'xoch',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      base: 'cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt',
      name: 'Xoch',
      display: 'xoch',
      symbol: 'xOCH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      }
    },
    {
      description: 'The wETH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      base: 'cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez',
      name: 'Weth',
      display: 'weth',
      symbol: 'wETH',
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primary_color_hex: '#303030'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'The BTC token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      base: 'cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd',
      name: 'Btc',
      display: 'btc',
      symbol: 'BTC',
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      }
    },
    {
      description: 'The OCH token is the cw20 token for the Oraichain.',
      denom_units: [{
          denom: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
          exponent: 0
        }, {
          denom: 'och',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      base: 'cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q',
      name: 'Och',
      display: 'och',
      symbol: 'OCH',
      coingecko_id: 'och',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/och.svg'
      }
    },
    {
      description: 'The TON native token of Oraichain',
      extended_description: 'Toincoin has been bridged from The Open Network to Oraichain.',
      denom_units: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          provider: 'Oraichain Labs TON Bridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg'
      },
      type_asset: 'sdk.coin',
      images: [{
          image_sync: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          theme: {
            circle: true,
            primary_color_hex: '#0088CC',
            background_color_hex: '#0088CC'
          }
        }]
    },
    {
      description: 'The PEPE native token of Oraichain',
      denom_units: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/extPEPE',
          exponent: 0
        }, {
          denom: 'pepe',
          exponent: 6
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Oraichain Labs OBridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/extPEPE',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['meme'],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The Hamster Kombat native token of Oraichain',
      denom_units: [{
          denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/HMSTR',
          exponent: 0,
          aliases: ['nanohmstr']
        }, {
          denom: 'hmstr',
          exponent: 9
        }],
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanohmstr'
          },
          provider: 'Oraichain Labs Ton Bridge'
        }],
      base: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/HMSTR',
      name: 'HMSTR',
      display: 'hmstr',
      symbol: 'HMSTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.svg'
      },
      type_asset: 'sdk.coin',
      images: [{
          image_sync: {
            chain_name: 'ton',
            base_denom: 'nanohmstr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.png',
          theme: {
            circle: true,
            primary_color_hex: '#0088CC',
            background_color_hex: '#0088CC'
          }
        }]
    }
  ]
};
export default info;