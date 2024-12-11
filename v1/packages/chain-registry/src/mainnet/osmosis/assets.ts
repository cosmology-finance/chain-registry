import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      extended_description: 'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
      denom_units: [{
          denom: 'uosmo',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      }
    },
    {
      description: 'ION is the second native token of Osmosis.',
      extended_description: 'ION DAO is governed by ION holders. ION is the second native token of Osmosis, the biggest DEX in Cosmos. The origin of ION was a meme coin, but ION DAO has been trying to find ways to add values on ION.',
      denom_units: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'uion',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      }
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'USDC (Ethereum via Axelar)',
      display: 'usdc',
      symbol: 'USDC.eth.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uusdc'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg',
          theme: {
            primary_color_hex: '#2474cb'
          }
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        }]
    },
    {
      description: 'Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It\'s the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.',
      denom_units: [{
          denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Ethereum (Axelar)',
      display: 'weth',
      symbol: 'ETH.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'weth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/weth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'weth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primary_color_hex: '#3a3444'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [{
          denom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin (Ethereum via Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.eth.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wbtc-satoshi'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
          theme: {
            primary_color_hex: '#312b3a'
          }
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
          theme: {
            primary_color_hex: '#41394d'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
      name: 'Tether USD (Ethereum via Axelar)',
      display: 'usdt',
      symbol: 'USDT.eth.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uusdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.png',
          theme: {
            primary_color_hex: '#049393'
          }
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denom_units: [{
          denom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'dai-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/dai-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denom_units: [{
          denom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'busd-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/busd-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-141'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uatom'
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
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/basecro'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primary_color_hex: '#0c2c71'
          }
        }]
    },
    {
      description: 'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denom_units: [{
          denom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
          exponent: 0,
          aliases: ['wbnb-wei']
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wbnb-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wbnb-wei'
          }
        }
      ],
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
        }]
    },
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [{
          denom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'POL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'polygon',
            base_denom: 'wei'
          },
          provider: 'Polygon'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wmatic-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wmatic-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'polygon',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg',
          theme: {
            primary_color_hex: '#8444e4'
          }
        }]
    },
    {
      description: 'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [{
          denom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: 'wei'
          },
          provider: 'Avalanche'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wavax-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wavax-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'avalanche',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg',
          theme: {
            primary_color_hex: '#eb4444'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['microluna', 'uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'uluna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/uluna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primary_color_hex: '#fcdb5b'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/ujuno'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [{
          denom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
          exponent: 0,
          aliases: ['dot-planck']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
      name: 'Polkadot (Moonbeam via Axelar)',
      display: 'dot',
      symbol: 'DOT.glmr.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'dot-planck',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/dot-planck'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'dot-planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'aevmos',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/aevmos'
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
      description: 'The native staking and governance token of Kava',
      denom_units: [{
          denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'ukava',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/ukava'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'ukava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'uscrt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/uscrt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['microusd', 'uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'uusd',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/uusd'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'uusd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primary_color_hex: '#5493f2'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/ustars'
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
      description: 'The native token of Chihuahua Chain',
      denom_units: [{
          denom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/uhuahua'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/uxprt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#E59636',
            background_color_hex: '#000000'
          }
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [{
          denom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
          exponent: 0,
          aliases: [
            'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channel_id: 'channel-24'
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
          theme: {
            primary_color_hex: '#050505'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'akash',
            base_denom: 'uakt',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uakt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'akash',
            base_denom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'uregen',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/uregen'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'regen',
            base_denom: 'uregen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primary_color_hex: '#56b790'
          }
        }]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [{
          denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sentinel',
            base_denom: 'udvpn',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/udvpn'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sentinel',
            base_denom: 'udvpn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primary_color_hex: '#10a7ef'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-6',
            path: 'transfer/channel-6/uiris'
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
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'starname',
            base_denom: 'uiov',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/uiov'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'starname',
            base_denom: 'uiov'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primary_color_hex: '#5c64b4'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'emoney',
            base_denom: 'ungm',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-37',
            path: 'transfer/channel-37/ungm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'emoney',
            base_denom: 'ungm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
          theme: {
            primary_color_hex: '#caf2ea'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'emoney',
            base_denom: 'eeur',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-37',
            path: 'transfer/channel-37/eeur'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'emoney',
            base_denom: 'eeur'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
          theme: {
            primary_color_hex: '#f4c808'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'likecoin',
            base_denom: 'nanolike',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-53',
            path: 'transfer/channel-53/nanolike'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'likecoin',
            base_denom: 'nanolike'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
          theme: {
            primary_color_hex: '#2d656c'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'Impact Hub',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'impacthub',
            base_denom: 'uixo',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/uixo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bitcanna',
            base_denom: 'ubcna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-51',
            path: 'transfer/channel-51/ubcna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bitcanna',
            base_denom: 'ubcna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primary_color_hex: '#3cc494'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bitsong',
            base_denom: 'ubtsg',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73',
            path: 'transfer/channel-73/ubtsg'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bitsong',
            base_denom: 'ubtsg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kichain',
            base_denom: 'uxki',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-77',
            path: 'transfer/channel-77/uxki'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kichain',
            base_denom: 'uxki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primary_color_hex: '#1c04fc'
          }
        }]
    },
    {
      description: 'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [{
          denom: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed']
        }, {
          denom: 'med',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'panacea',
            base_denom: 'umed',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/umed'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'panacea',
            base_denom: 'umed'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
          theme: {
            primary_color_hex: '#2474ec'
          }
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot']
        }],
      type_asset: 'ics20',
      base: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'bostrom',
      display: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'boot',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/boot'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bostrom',
            base_denom: 'boot'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
          theme: {
            primary_color_hex: '#4cea4e'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'ucmdx',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/ucmdx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'comdex',
            base_denom: 'ucmdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cheqd',
            base_denom: 'ncheq',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-108',
            path: 'transfer/channel-108/ncheq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cheqd',
            base_denom: 'ncheq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primary_color_hex: '#fc5f04'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'lumnetwork',
            base_denom: 'ulum',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-115',
            path: 'transfer/channel-115/ulum'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'lumnetwork',
            base_denom: 'ulum'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
          theme: {
            primary_color_hex: '#080808'
          }
        }]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [{
          denom: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum (Vidulum)',
      display: 'vdl',
      symbol: 'VDL.vdl',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'beezee',
            base_denom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl'
          },
          provider: 'Vidulum'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'vidulum',
            base_denom: 'uvdl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-124',
            path: 'transfer/channel-124/uvdl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'vidulum',
            base_denom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primary_color_hex: '#3454bc'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Desmos',
      denom_units: [{
          denom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm']
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'desmos',
            base_denom: 'udsm',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-135',
            path: 'transfer/channel-135/udsm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'desmos',
            base_denom: 'udsm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
          theme: {
            primary_color_hex: '#fb804e'
          }
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [{
          denom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dig',
            base_denom: 'udig',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-128',
            path: 'transfer/channel-128/udig'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [{
          image_sync: {
            chain_name: 'dig',
            base_denom: 'udig'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
          theme: {
            primary_color_hex: '#1b1433'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['microsomm', 'usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-165',
            path: 'transfer/channel-165/usomm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
          theme: {
            primary_color_hex: '#f36353'
          }
        }]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [{
          denom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband']
        }, {
          denom: 'band',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bandchain',
            base_denom: 'uband',
            channel_id: 'channel-83'
          },
          chain: {
            channel_id: 'channel-148',
            path: 'transfer/channel-148/uband'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bandchain',
            base_denom: 'uband'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
          theme: {
            primary_color_hex: '#4424e4'
          }
        }]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [{
          denom: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc']
        }, {
          denom: 'darc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'konstellation',
            base_denom: 'udarc',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-171',
            path: 'transfer/channel-171/udarc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'konstellation',
            base_denom: 'udarc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg',
          theme: {
            primary_color_hex: '#042a61'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'UX Chain',
      display: 'umee',
      symbol: 'UMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'umee',
            base_denom: 'uumee',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-184',
            path: 'transfer/channel-184/uumee'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'umee',
            base_denom: 'uumee'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'ugraviton',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/ugraviton'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'ugraviton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primary_color_hex: '#042ca4'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'decentr',
            base_denom: 'udec',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-181',
            path: 'transfer/channel-181/udec'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'decentr',
            base_denom: 'udec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primary_color_hex: '#4678e9'
          }
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denom_units: [{
          denom: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
          exponent: 0,
          aliases: ['cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      type_asset: 'ics20',
      base: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'ics20',
      base: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'carbon',
            base_denom: 'swth',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-188',
            path: 'transfer/channel-188/swth'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'carbon',
            base_denom: 'swth'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }]
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [{
          denom: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
          exponent: 0,
          aliases: ['ucrbrus']
        }, {
          denom: 'crbrus',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cerberus',
            base_denom: 'ucrbrus',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-212',
            path: 'transfer/channel-212/ucrbrus'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cerberus',
            base_denom: 'ucrbrus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
          theme: {
            primary_color_hex: '#c6c6c9'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [{
          denom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
          exponent: 0,
          aliases: ['afet']
        }, {
          denom: 'fet',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'fetchhub',
            base_denom: 'afet',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-229',
            path: 'transfer/channel-229/afet'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'fetchhub',
            base_denom: 'afet'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
          theme: {
            primary_color_hex: '#1c2444'
          }
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [{
          denom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'assetmantle',
            base_denom: 'umntl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-232',
            path: 'transfer/channel-232/umntl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'assetmantle',
            base_denom: 'umntl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
          theme: {
            primary_color_hex: '#edb548'
          }
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denom_units: [{
          denom: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
          theme: {
            primary_color_hex: '#f87b7b'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/inj'
          }
        }],
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
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['microkrw', 'ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'ukrw',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/ukrw'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'ukrw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primary_color_hex: '#4b83e0'
          }
        }]
    },
    {
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [{
          denom: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick']
        }, {
          denom: 'tick',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'microtick',
            base_denom: 'utick',
            channel_id: 'channel-16'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/utick'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'microtick',
            base_denom: 'utick'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
          theme: {
            primary_color_hex: '#6bab14'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sifchain',
            base_denom: 'rowan',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-47',
            path: 'transfer/channel-47/rowan'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sifchain',
            base_denom: 'rowan'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primary_color_hex: '#be9926'
          }
        }]
    },
    {
      description: 'The native token of Shentu',
      denom_units: [{
          denom: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
          exponent: 0,
          aliases: ['uctk']
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'shentu',
            base_denom: 'uctk',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-146',
            path: 'transfer/channel-146/uctk'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'shentu',
            base_denom: 'uctk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
          theme: {
            primary_color_hex: '#e4ac4c'
          }
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denom_units: [{
          denom: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
          exponent: 0,
          aliases: ['cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
          theme: {
            primary_color_hex: '#e2877e'
          }
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denom_units: [{
          denom: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
          exponent: 0,
          aliases: ['cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
      name: 'Racoon (Juno)',
      display: 'rac',
      symbol: 'RAC.juno',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          },
          provider: 'Racoon'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
          theme: {
            primary_color_hex: '#070f0e'
          }
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'frax-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/frax-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [{
          denom: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.eth.grv',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primary_color_hex: '#f39444'
          }
        }]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [{
          denom: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'ETH.grv',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [{
          denom: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
      name: 'USDC (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.eth.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [{
          denom: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [{
          denom: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.eth.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.png',
          theme: {
            primary_color_hex: '#059394'
          }
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denom_units: [{
          denom: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
          exponent: 0,
          aliases: ['cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq']
        }, {
          denom: 'block',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'provenance',
            base_denom: 'nhash',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-222',
            path: 'transfer/channel-222/nhash'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'provenance',
            base_denom: 'nhash'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [{
          denom: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
          exponent: 0,
          aliases: ['uglx']
        }, {
          denom: 'glx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'galaxy',
            base_denom: 'uglx',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-236',
            path: 'transfer/channel-236/uglx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'galaxy',
            base_denom: 'uglx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
          theme: {
            primary_color_hex: '#5e3be6'
          }
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denom_units: [{
          denom: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
          exponent: 0,
          aliases: ['dhk', 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49']
        }],
      type_asset: 'ics20',
      base: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
          theme: {
            primary_color_hex: '#fae204'
          }
        }]
    },
    {
      description: 'Token governance for Junoswap',
      denom_units: [{
          denom: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
          exponent: 0,
          aliases: ['cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
          theme: {
            primary_color_hex: '#f07c92'
          }
        }]
    },
    {
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [{
          denom: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
          exponent: 0,
          aliases: ['umeme']
        }, {
          denom: 'meme',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'meme',
            base_denom: 'umeme',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-238',
            path: 'transfer/channel-238/umeme'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'meme',
            base_denom: 'umeme'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          theme: {
            primary_color_hex: '#b7dcd8'
          }
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denom_units: [{
          denom: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
          exponent: 0,
          aliases: ['cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
          theme: {
            primary_color_hex: '#402e5d'
          }
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denom_units: [{
          denom: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
          exponent: 0,
          aliases: ['cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
          theme: {
            primary_color_hex: '#f3baaf'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-251',
            path: 'transfer/channel-251/uluna'
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
      description: 'Native token of Rizon Chain',
      denom_units: [{
          denom: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
          exponent: 0,
          aliases: ['uatolo']
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'rizon',
            base_denom: 'uatolo',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-221',
            path: 'transfer/channel-221/uatolo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'rizon',
            base_denom: 'uatolo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg',
          theme: {
            primary_color_hex: '#2b1c54'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'hard',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/hard'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'hard'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'swp',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/swp'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'swp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denom_units: [{
          denom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
      name: 'Chainlink (Axelar)',
      display: 'link',
      symbol: 'LINK.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'link-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/link-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'link-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }]
    },
    {
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [{
          denom: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
          exponent: 0,
          aliases: ['el1']
        }, {
          denom: 'l1',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'genesisl1',
            base_denom: 'el1',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-253',
            path: 'transfer/channel-253/el1'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'genesisl1',
            base_denom: 'el1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denom_units: [{
          denom: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'aave-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/aave-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denom_units: [{
          denom: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'ape-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/ape-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denom_units: [{
          denom: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'mkr-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/mkr-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      denom_units: [{
          denom: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'RAI Finance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'rai-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/rai-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denom_units: [{
          denom: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
      name: 'Shiba Inu (Axelar)',
      display: 'shib',
      symbol: 'SHIB.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'shib-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/shib-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'shib-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'ukuji',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/ukuji'
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
      description: 'The native token of Tgrade',
      denom_units: [{
          denom: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
          exponent: 0,
          aliases: ['utgd']
        }, {
          denom: 'tgd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'tgrade',
            base_denom: 'utgd',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-263',
            path: 'transfer/channel-263/utgd'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'tgrade',
            base_denom: 'utgd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
          theme: {
            primary_color_hex: '#a7248a'
          }
        }]
    },
    {
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [{
          denom: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
          exponent: 0,
          aliases: ['aechelon']
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'echelon',
            base_denom: 'aechelon',
            channel_id: 'channel-11'
          },
          chain: {
            channel_id: 'channel-403',
            path: 'transfer/channel-403/aechelon'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'echelon',
            base_denom: 'aechelon'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
          exponent: 0,
          aliases: ['loki']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'loki',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/loki'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'loki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
          exponent: 0,
          aliases: ['mGeo']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'mGeo',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/mGeo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mGeo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
          exponent: 0,
          aliases: ['mO9W']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'mO9W',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/mO9W'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mO9W'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denom_units: [{
          denom: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
          exponent: 0,
          aliases: ['cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy']
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN.ki',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'kichain',
            base_denom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            port: 'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha',
            channel_id: 'channel-18'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-261',
            path: 'transfer/channel-261/cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          image_sync: {
            chain_name: 'kichain',
            base_denom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
          theme: {
            primary_color_hex: '#683480'
          }
        }]
    },
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denom_units: [{
          denom: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: 'Wei'
          },
          provider: 'Moonbeam'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wglmr-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wglmr-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'moonbeam',
            base_denom: 'Wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          theme: {
            primary_color_hex: '#e4147c'
          }
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denom_units: [{
          denom: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
          exponent: 0,
          aliases: ['cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
      name: 'Gelotto (Juno)',
      display: 'glto',
      symbol: 'GLTO.juno',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Gelotto'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denom_units: [{
          denom: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
          exponent: 0,
          aliases: ['cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
          theme: {
            primary_color_hex: '#521caf'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'crescent',
            base_denom: 'ucre',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-297',
            path: 'transfer/channel-297/ucre'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'crescent',
            base_denom: 'ucre'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [{
          denom: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
          exponent: 0,
          aliases: ['ulumen']
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'lumenx',
            base_denom: 'ulumen',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-286',
            path: 'transfer/channel-286/ulumen'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'lumenx',
            base_denom: 'ulumen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
          theme: {
            primary_color_hex: '#cb8b40'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'oraichain',
            base_denom: 'orai',
            channel_id: 'channel-13'
          },
          chain: {
            channel_id: 'channel-216',
            path: 'transfer/channel-216/orai'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'orai'
          },
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
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [{
          denom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
          exponent: 0,
          aliases: ['attocudos', 'acudos']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cudos',
            base_denom: 'acudos',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-298',
            path: 'transfer/channel-298/acudos'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cudos',
            base_denom: 'acudos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg',
          theme: {
            primary_color_hex: '#5d95ec'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'usdx',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/usdx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'usdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }]
    },
    {
      description: 'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [{
          denom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'ubld',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-320',
            path: 'transfer/channel-320/ubld'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'agoric',
            base_denom: 'ubld'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'uist',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-320',
            path: 'transfer/channel-320/uist'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'agoric',
            base_denom: 'uist'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denom_units: [{
          denom: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
          exponent: 0,
          aliases: ['cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
          theme: {
            primary_color_hex: '#26363f'
          }
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denom_units: [{
          denom: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
          exponent: 0,
          aliases: ['cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
          theme: {
            primary_color_hex: '#254454'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'ustrd',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/ustrd'
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
      denom_units: [{
          denom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuatom',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuatom'
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
      denom_units: [{
          denom: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
          exponent: 0,
          aliases: ['stustars']
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stustars',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stustars'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denom_units: [{
          denom: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
          exponent: 0,
          aliases: ['cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }]
    },
    {
      description: 'StakeEasy governance token',
      denom_units: [{
          denom: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
          exponent: 0,
          aliases: ['cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
          theme: {
            primary_color_hex: '#2d2c2d'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uaxl',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uaxl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [{
          denom: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
          exponent: 0,
          aliases: ['arebus']
        }, {
          denom: 'rebus',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'rebus',
            base_denom: 'arebus',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-355',
            path: 'transfer/channel-355/arebus'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'rebus',
            base_denom: 'arebus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
          theme: {
            primary_color_hex: '#e75486'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'teritori',
            base_denom: 'utori',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-362',
            path: 'transfer/channel-362/utori'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
          exponent: 0,
          aliases: ['stujuno']
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stujuno',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stujuno'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuosmo'
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
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denom_units: [{
          denom: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
          exponent: 0,
          aliases: ['cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
          theme: {
            primary_color_hex: '#32255f'
          }
        }]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [{
          denom: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
          exponent: 0,
          aliases: ['ulamb']
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'lambda',
            base_denom: 'ulamb',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-378',
            path: 'transfer/channel-378/ulamb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'lambda',
            base_denom: 'ulamb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg',
          theme: {
            primary_color_hex: '#e41c54'
          }
        }]
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [{
          denom: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
          exponent: 0,
          aliases: ['factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk']
        }, {
          denom: 'usk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg',
          theme: {
            primary_color_hex: '#2e363f'
          }
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [{
          denom: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
          exponent: 0,
          aliases: ['nund']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'unification',
            base_denom: 'nund',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-382',
            path: 'transfer/channel-382/nund'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
      },
      images: [{
          image_sync: {
            chain_name: 'unification',
            base_denom: 'nund'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          theme: {
            primary_color_hex: '#2279c0'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [{
          denom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'jackal',
            base_denom: 'ujkl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-412',
            path: 'transfer/channel-412/ujkl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'jackal',
            base_denom: 'ujkl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primary_color_hex: '#dbdbcb'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [{
          denom: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'beezee',
            base_denom: 'ubze',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-340',
            path: 'transfer/channel-340/ubze'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'beezee',
            base_denom: 'ubze'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primary_color_hex: '#079fd7'
          }
        }]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denom_units: [{
          denom: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
          exponent: 0,
          aliases: ['cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.juno',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'furya',
            base_denom: 'ufury'
          },
          provider: 'Fanfury'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
          theme: {
            primary_color_hex: '#14045c'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'aacre',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/aacre'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'acrechain',
            base_denom: 'aacre'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'ucmst',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/ucmst'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'comdex',
            base_denom: 'ucmst'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Imversed',
      denom_units: [{
          denom: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
          exponent: 0,
          aliases: ['aimv']
        }, {
          denom: 'imv',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'imversed',
            base_denom: 'aimv',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-517',
            path: 'transfer/channel-517/aimv'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'imversed',
            base_denom: 'aimv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
          theme: {
            primary_color_hex: '#4c54e4'
          }
        }]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [{
          denom: 'ibc/FBBC35295AA037DC0A77796B08DC3003EC918E18E75D61D675A0EEAC0643F36C',
          exponent: 0,
          aliases: ['umedas']
        }, {
          denom: 'medas',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FBBC35295AA037DC0A77796B08DC3003EC918E18E75D61D675A0EEAC0643F36C',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'medasdigital',
            base_denom: 'umedas',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-87042',
            path: 'transfer/channel-87042/umedas'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'medasdigital',
            base_denom: 'umedas'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg',
          theme: {
            primary_color_hex: '#147ccc'
          }
        }]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      extended_description: '$PHMN is the governance token of a distributed validator. Similar to PoS chains, each holder possesses voting rights proportionate to the number of locked tokens. PHMN holders can govern the POSTHUMAN validator via DAODAO. For instance, decisions such as diversifying the treasury, updating the validator\'s commission rate, or exiting the network are determined by the PHMN community.',
      denom_units: [{
          denom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
          theme: {
            primary_color_hex: '#bbc2c6'
          }
        }],
      socials: {
        website: 'https://posthuman.digital/',
        twitter: 'https://twitter.com/POSTHUMAN_DVS'
      }
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [{
          denom: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
          exponent: 0,
          aliases: ['anom']
        }, {
          denom: 'nom',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'onomy',
            base_denom: 'anom',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-525',
            path: 'transfer/channel-525/anom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'onomy',
            base_denom: 'anom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
          theme: {
            primary_color_hex: '#1c1c28'
          }
        }],
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      type_asset: 'ics20',
      base: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/stk/uatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
          theme: {
            primary_color_hex: '#c4444c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Dyson Protocol',
      denom_units: [{
          denom: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
          exponent: 0,
          aliases: ['dys']
        }],
      type_asset: 'ics20',
      base: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      name: 'Dyson Protocol',
      display: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dyson',
            base_denom: 'dys',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-526',
            path: 'transfer/channel-526/dys'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dyson',
            base_denom: 'dys'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denom_units: [{
          denom: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
          exponent: 0,
          aliases: ['cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
          theme: {
            primary_color_hex: '#08d890'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'aplanq',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-492',
            path: 'transfer/channel-492/aplanq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'planq',
            base_denom: 'aplanq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }]
    },
    {
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denom_units: [{
          denom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
          exponent: 0,
          aliases: ['wftm-wei']
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'fantom',
            base_denom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'fantom',
            base_denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wftm-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wftm-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'fantom',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primary_color_hex: '#1c6cfc'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'canto',
            base_denom: 'acanto',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-550',
            path: 'transfer/channel-550/acanto'
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
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [{
          denom: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
          exponent: 0,
          aliases: ['uqstars']
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqstars',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqstars'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqstars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      denom_units: [{
          denom: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
          exponent: 0,
          aliases: ['cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
          theme: {
            primary_color_hex: '#6bcc95'
          }
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
          exponent: 0,
          aliases: ['polygon-uusdc']
        }, {
          denom: 'polygon-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
      name: 'USDC (Ethereum) (Polygon via Axelar)',
      display: 'polygon-usdc',
      symbol: 'USDC.e.matic.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'polygon-uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'polygon-uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'USDC.avax.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'avalanche-uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/avalanche-uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'avalanche-uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description: 'Mars Protocol token (pre-migration)',
      denom_units: [{
          denom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'MARS.old',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
      name: 'Mars Protocol token (Mars Hub)',
      display: 'MARS.old',
      symbol: 'MARS.mars',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          provider: 'Mars Hub'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'mars',
            base_denom: 'umars',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-557',
            path: 'transfer/channel-557/umars'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'mars',
            base_denom: 'umars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg',
          theme: {
            primary_color_hex: '#000000'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/erc20/0xAE6D3334989a22A65228732446731438672418F2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
          exponent: 0,
          aliases: ['stuluna']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuluna',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuluna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
          exponent: 0,
          aliases: ['staevmos']
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'aevmos'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'staevmos',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/staevmos'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'staevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'nRide Token',
      extended_description: 'nRide is developing a uber-like ride-hailing protocol, leveraging cosmwasm smart-contracts for payment, driver registration and text-messaging between the rider and the driver, to create a trustless public transportation environment for any cab or taxi company to use.',
      denom_units: [{
          denom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primary_color_hex: '#050505'
          }
        }]
    },
    {
      description: 'The native staking token of 8ball.',
      denom_units: [{
          denom: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
          exponent: 0,
          aliases: ['uebl']
        }, {
          denom: 'ebl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: '8ball',
            base_denom: 'uebl',
            channel_id: 'channel-16'
          },
          chain: {
            channel_id: 'channel-641',
            path: 'transfer/channel-641/uebl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [{
          image_sync: {
            chain_name: '8ball',
            base_denom: 'uebl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
          theme: {
            primary_color_hex: '#dbdbdb'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [{
          denom: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
          exponent: 0,
          aliases: ['uqatom']
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqatom',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'uharbor',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/uharbor'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'comdex',
            base_denom: 'uharbor'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [{
          denom: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
          exponent: 0,
          aliases: ['uqregen']
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'uregen'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqregen',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqregen'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqregen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denom_units: [{
          denom: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
          exponent: 0,
          aliases: ['cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
          theme: {
            primary_color_hex: '#ee5f06'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqck',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqck'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [{
          denom: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
          exponent: 0,
          aliases: ['arkh']
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'arkh',
            base_denom: 'arkh',
            channel_id: 'channel-12'
          },
          chain: {
            channel_id: 'channel-648',
            path: 'transfer/channel-648/arkh'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'arkh',
            base_denom: 'arkh'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg',
          theme: {
            primary_color_hex: '#bdbb82'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [{
          denom: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
          exponent: 0,
          aliases: ['uqosmo']
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqosmo',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
          exponent: 0,
          aliases: ['microfrienzies', 'ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'ufrienzies',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/ufrienzies'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'ufrienzies'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [{
          denom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'uwhale',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/uwhale'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'uwhale'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      denom_units: [{
          denom: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
          exponent: 0,
          aliases: ['cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
          theme: {
            primary_color_hex: '#07d7ac'
          }
        }]
    },
    {
      description: 'Mini Punks Token',
      denom_units: [{
          denom: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
          exponent: 0,
          aliases: ['cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
          theme: {
            primary_color_hex: '#dadbce'
          }
        }]
    },
    {
      description: 'Shiba Cosmos',
      denom_units: [{
          denom: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
          exponent: 0,
          aliases: ['cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
          theme: {
            primary_color_hex: '#eea95d'
          }
        }]
    },
    {
      description: 'Sikoba Governance Token',
      denom_units: [{
          denom: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
          exponent: 0,
          aliases: ['cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
          theme: {
            primary_color_hex: '#fbfbfb'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'eco.uC.NCT',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/eco.uC.NCT'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'regen',
            base_denom: 'eco.uC.NCT'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primary_color_hex: '#171c25'
          }
        }]
    },
    {
      description: 'Celestims',
      denom_units: [{
          denom: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
          exponent: 0,
          aliases: ['cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
          theme: {
            primary_color_hex: '#0b1d33'
          }
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      denom_units: [{
          denom: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
          exponent: 0,
          aliases: ['cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
          theme: {
            primary_color_hex: '#f49c4c'
          }
        }]
    },
    {
      description: 'Apemos',
      denom_units: [{
          denom: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
          exponent: 0,
          aliases: ['cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
          theme: {
            primary_color_hex: '#4d5264'
          }
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      denom_units: [{
          denom: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
          exponent: 0,
          aliases: ['cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
          theme: {
            primary_color_hex: '#04ccab'
          }
        }]
    },
    {
      description: 'Doge Apr',
      denom_units: [{
          denom: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
          exponent: 0,
          aliases: ['cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
          theme: {
            primary_color_hex: '#d6a84f'
          }
        }]
    },
    {
      description: 'Catmos',
      denom_units: [{
          denom: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
          exponent: 0,
          aliases: ['cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
          theme: {
            primary_color_hex: '#140c44'
          }
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denom_units: [{
          denom: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
          exponent: 0,
          aliases: ['cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
          theme: {
            primary_color_hex: '#cbdb44'
          }
        }]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [{
          denom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'omniflixhub',
            base_denom: 'uflix',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-199',
            path: 'transfer/channel-199/uflix'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'omniflixhub',
            base_denom: 'uflix'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primary_color_hex: '#c33635'
          }
        }]
    },
    {
      description: 'Spacer',
      denom_units: [{
          denom: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
          exponent: 0,
          aliases: ['cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
          theme: {
            primary_color_hex: '#695335'
          }
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denom_units: [{
          denom: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
          exponent: 0,
          aliases: ['cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l']
        }, {
          denom: 'light',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
          theme: {
            primary_color_hex: '#e5e5e5'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denom_units: [{
          denom: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
          exponent: 0,
          aliases: ['cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denom_units: [{
          denom: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
          exponent: 0,
          aliases: ['cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
          theme: {
            primary_color_hex: '#299544'
          }
        }]
    },
    {
      description: 'Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin\'s model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.',
      denom_units: [{
          denom: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
          exponent: 0,
          aliases: ['wfil-wei']
        }, {
          denom: 'fil',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
      name: 'Filecoin (Axelar)',
      display: 'fil',
      symbol: 'FIL.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'filecoin',
            base_denom: 'attoFIL'
          },
          provider: 'Filecoin'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'filecoin',
            base_denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wfil-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wfil-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'filecoin',
            base_denom: 'attoFIL'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.svg',
          theme: {
            primary_color_hex: '#0493fc'
          }
        }]
    },
    {
      description: 'Void',
      denom_units: [{
          denom: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
          exponent: 0,
          aliases: ['cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8']
        }, {
          denom: 'void',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
          theme: {
            primary_color_hex: '#5b2e96'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [{
          denom: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
          exponent: 0,
          aliases: ['ubnt']
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      type_asset: 'ics20',
      base: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bluzelle',
            base_denom: 'ubnt',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-763',
            path: 'transfer/channel-763/ubnt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bluzelle',
            base_denom: 'ubnt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg',
          theme: {
            primary_color_hex: '#708ffc'
          }
        }],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denom_units: [{
          denom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
      name: 'Arbitrum (Axelar)',
      display: 'arb',
      symbol: 'ARB.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'arb-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/arb-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'arb-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primary_color_hex: '#253545'
          }
        }]
    },
    {
      description: 'Silica',
      denom_units: [{
          denom: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
          exponent: 0,
          aliases: ['cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
          theme: {
            primary_color_hex: '#21538f'
          }
        }]
    },
    {
      description: 'Pepec',
      denom_units: [{
          denom: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
          exponent: 0,
          aliases: ['cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
          theme: {
            primary_color_hex: '#e9bc37'
          }
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      denom_units: [{
          denom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933', 'pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
      name: 'Pepe (Axelar)',
      display: 'pepe',
      symbol: 'PEPE.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'pepe-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/pepe-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'pepe-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['meme']
    },
    {
      denom_units: [{
          denom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          exponent: 0
        }, {
          denom: 'ibcx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }],
      coingecko_id: 'ibc-index'
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denom_units: [{
          denom: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
          exponent: 0,
          aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704', 'cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'cbeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/cbeth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png',
          theme: {
            primary_color_hex: '#c9dbfc'
          }
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denom_units: [{
          denom: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
          exponent: 0,
          aliases: ['0xae78736cd615f374d3085123a210448e74fc6393', 'reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Rocket Pool'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'reth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/reth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primary_color_hex: '#fba487'
          }
        }]
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become\'s eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      denom_units: [{
          denom: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
          exponent: 0,
          aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f', 'sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'sfrxeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/sfrxeth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
          exponent: 0,
          aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0', 'wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.eth.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wsteth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wsteth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wsteth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'The native token of Gitopia',
      denom_units: [{
          denom: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
          exponent: 0,
          aliases: ['ulore']
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'gitopia',
            base_denom: 'ulore',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-781',
            path: 'transfer/channel-781/ulore'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'gitopia',
            base_denom: 'ulore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg',
          theme: {
            primary_color_hex: '#2c173c'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
          theme: {
            primary_color_hex: '#2e154d'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denom_units: [{
          denom: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primary_color_hex: '#f3f313'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
          exponent: 0,
          aliases: ['stuumee']
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'umee',
            base_denom: 'uumee'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuumee',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuumee'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuumee'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg',
          theme: {
            primary_color_hex: '#fbd9e9'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          exponent: 0
        }, {
          denom: 'stibcx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nolus',
            base_denom: 'unls',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-783',
            path: 'transfer/channel-783/unls'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
          theme: {
            primary_color_hex: '#fc542c'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denom_units: [{
          denom: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primary_color_hex: '#f3d343'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denom_units: [{
          denom: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'untrn',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/untrn'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denom_units: [{
          denom: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
          exponent: 0,
          aliases: ['cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
          theme: {
            primary_color_hex: '#04040c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [{
          denom: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
      name: 'Picasso',
      display: 'pica',
      symbol: 'PICA',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ppica',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/ppica'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [{
          denom: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
          exponent: 0,
          aliases: ['4', 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          provider: 'Kusama Parachain'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '4',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/4'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/4'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [{
          denom: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
          exponent: 0,
          aliases: ['79228162514264337593543950342', 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
      name: 'Polkadot (Picasso)',
      display: 'dot',
      symbol: 'DOT.pica',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composablepolkadot',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-15'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [{
          denom: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr']
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR.legacy',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'quasar',
            base_denom: 'uqsr',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-688',
            path: 'transfer/channel-688/uqsr'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [{
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
          theme: {
            primary_color_hex: '#a493e4'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
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
      type_asset: 'ics20',
      base: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1429',
            path: 'transfer/channel-1429/aarch'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'empowerchain',
            base_denom: 'umpwr',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1411',
            path: 'transfer/channel-1411/umpwr'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'empowerchain',
            base_denom: 'umpwr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denom_units: [{
          denom: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
          exponent: 0,
          aliases: ['cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
          theme: {
            primary_color_hex: '#38b5c5'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-767',
            path: 'transfer/channel-767/ukyve'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primary_color_hex: '#335350'
          }
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denom_units: [{
          denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USD (Kava)',
      display: 'usdt',
      symbol: 'USDT.kava',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.png',
          theme: {
            primary_color_hex: '#049494'
          }
        }, {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [{
          denom: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
          exponent: 0
        }, {
          denom: 'ampOSMO',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png',
          theme: {
            primary_color_hex: '#cfdbf1'
          }
        }],
      socials: {
        website: 'https://www.erisprotocol.com/',
        twitter: 'https://twitter.com/eris_protocol'
      }
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [{
          denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sei',
            base_denom: 'usei',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/usei'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sei',
            base_denom: 'usei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [{
          denom: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
          exponent: 0,
          aliases: ['uqsomm']
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqsomm',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqsomm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqsomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Passage chain.',
      denom_units: [{
          denom: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
          exponent: 0,
          aliases: ['upasg']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'passage',
            base_denom: 'upasg',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2494',
            path: 'transfer/channel-2494/upasg'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          image_sync: {
            chain_name: 'passage',
            base_denom: 'upasg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
          theme: {
            primary_color_hex: '#05050c'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
          exponent: 0,
          aliases: ['stusomm']
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stusomm',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stusomm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stusomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [{
          denom: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA']
        }, {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
      name: 'Solana (Wormhole)',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.png'
        }, {
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            background_color_hex: '#000000'
          }
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      denom_units: [{
          denom: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR']
        }, {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
          theme: {
            primary_color_hex: '#ee950a'
          }
        }]
    },
    {
      description: 'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [{
          denom: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi']
        }, {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
      name: 'Tether USD (Ethereum via Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.eth.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.png',
          theme: {
            primary_color_hex: '#049393'
          }
        }, {
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [{
          denom: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh']
        }, {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }]
    },
    {
      description: 'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [{
          denom: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r']
        }, {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            dark_mode: true
          }
        }, {
          image_sync: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [{
          denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
          exponent: 0,
          aliases: ['factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta']
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7:umnta'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
          theme: {
            primary_color_hex: '#0c141c'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png',
          theme: {
            primary_color_hex: '#dfe0e0'
          }
        }]
    },
    {
      description: 'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [{
          denom: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt']
        }, {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
      name: 'USDC (Ethereum via Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.eth.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }, {
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [{
          denom: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp']
        }, {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
      name: 'Ethereum (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'ETH.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }, {
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png'
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
        }]
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [{
          denom: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
          exponent: 0,
          aliases: ['0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec', 'yieldeth-wei']
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/yieldeth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg',
          theme: {
            primary_color_hex: '#14448c'
          }
        }]
    },
    {
      description: 'The native staking token of XPLA.',
      denom_units: [{
          denom: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
          exponent: 0,
          aliases: ['axpla']
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'xpla',
            base_denom: 'axpla',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-1634',
            path: 'transfer/channel-1634/axpla'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'xpla',
            base_denom: 'axpla'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
          theme: {
            primary_color_hex: '#04b4fc'
          }
        }]
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [{
          denom: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
          exponent: 0,
          aliases: ['factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN']
        }, {
          denom: 'oin',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sei',
            base_denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          image_sync: {
            chain_name: 'sei',
            base_denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
          theme: {
            primary_color_hex: '#6cdbac'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'realio',
            base_denom: 'ario',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1424',
            path: 'transfer/channel-1424/ario'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'realio',
            base_denom: 'ario'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            primary_color_hex: '#000000',
            background_color_hex: '#000000',
            circle: true
          }
        }]
    },
    {
      description: 'Membrane\'s CDP-style stablecoin called CDT',
      denom_units: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          exponent: 0
        }, {
          denom: 'cdt',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }],
      coingecko_id: 'collateralized-debt-token'
    },
    {
      description: 'Membrane\'s protocol token',
      denom_units: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          exponent: 0
        }, {
          denom: 'mbrn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }],
      coingecko_id: 'membrane'
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [{
          denom: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
          exponent: 0,
          aliases: ['usge']
        }, {
          denom: 'sge',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sge',
            base_denom: 'usge',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-5485',
            path: 'transfer/channel-5485/usge'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sge',
            base_denom: 'usge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
          theme: {
            primary_color_hex: '#C0A15B',
            background_color_hex: '#00000000',
            circle: false
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stafihub',
            base_denom: 'ufis',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5413',
            path: 'transfer/channel-5413/ufis'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stafihub',
            base_denom: 'ufis'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [{
          denom: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
          exponent: 0,
          aliases: ['uratom']
        }, {
          denom: 'ratom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'StaFiHub'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stafihub',
            base_denom: 'uratom',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5413',
            path: 'transfer/channel-5413/uratom'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stafihub',
            base_denom: 'uratom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [{
          denom: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
          theme: {
            primary_color_hex: '#c9720c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'doravota',
            base_denom: 'peaka',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2694',
            path: 'transfer/channel-2694/peaka'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'doravota',
            base_denom: 'peaka'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primary_color_hex: '#fba214'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'coreum',
            base_denom: 'ucore',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-2188',
            path: 'transfer/channel-2188/ucore'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'coreum',
            base_denom: 'ucore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ]
    },
    {
      description: 'The native token of the Celestia blockchain.',
      denom_units: [{
          denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-6994',
            path: 'transfer/channel-6994/utia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
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
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      extended_description: 'DYDX is a leading decentralized trading platform specializing in derivatives and perpetual contracts. It enables users to trade with leverage, providing a sophisticated and efficient trading environment without intermediaries. Built on the Ethereum blockchain, DYDX uses smart contracts to ensure transaction security and transparency, giving users full control over their funds and trades.\n\nThe DYDX platform\'s native token, DYDX, is integral to its ecosystem, used for governance, staking, and fee discounts, incentivizing active participation. DYDX offers a wide range of trading pairs and supports advanced trading features like margin trading and lending. Combining the benefits of decentralized finance with traditional trading platform functionality, DYDX is paving the way for a more open and inclusive financial system.',
      denom_units: [{
          denom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-6787',
            path: 'transfer/channel-6787/adydx'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }, {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'FX',
            channel_id: 'channel-19'
          },
          chain: {
            channel_id: 'channel-2716',
            path: 'transfer/channel-2716/FX'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [{
          denom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
          exponent: 0,
          aliases: ['usat']
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      type_asset: 'ics20',
      base: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Nomic'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/usat'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
          theme: {
            primary_color_hex: '#8436e6'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nois',
            base_denom: 'unois',
            channel_id: 'channel-37'
          },
          chain: {
            channel_id: 'channel-8277',
            path: 'transfer/channel-8277/unois'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
          theme: {
            primary_color_hex: '#0c0c14'
          }
        }],
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ]
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
          exponent: 0
        }, {
          denom: 'sqosmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [{
          denom: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
          exponent: 0,
          aliases: ['factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh:unstk'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [{
          denom: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH']
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
          theme: {
            primary_color_hex: '#70372a'
          }
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denom_units: [{
          denom: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
          exponent: 0,
          aliases: ['factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH']
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido wstETH Cosmos Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
          exponent: 0
        }, {
          denom: 'sqatom',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
          exponent: 0
        }, {
          denom: 'sqbtc',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [{
          denom: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
          exponent: 0,
          aliases: ['uqwoyn']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'qwoyn',
            base_denom: 'uqwoyn',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-880',
            path: 'transfer/channel-880/uqwoyn'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          image_sync: {
            chain_name: 'qwoyn',
            base_denom: 'uqwoyn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primary_color_hex: '#04e4fc'
          }
        }],
      keywords: ['gaming']
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      type_asset: 'ics20',
      base: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      name: 'Bostrom Hydrogen',
      display: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'hydrogen',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/hydrogen'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bostrom',
            base_denom: 'hydrogen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg',
          theme: {
            primary_color_hex: '#ffffff'
          }
        }]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [{
          denom: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
          exponent: 0,
          aliases: ['tocyb']
        }],
      type_asset: 'ics20',
      base: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      name: 'Bostrom Tocyb',
      display: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'tocyb',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/tocyb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bostrom',
            base_denom: 'tocyb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg',
          theme: {
            primary_color_hex: '#1e8fa9'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      type_asset: 'ics20',
      base: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'millivolt',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/millivolt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bostrom',
            base_denom: 'millivolt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg',
          theme: {
            primary_color_hex: '#fba809'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      type_asset: 'ics20',
      base: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'milliampere',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/milliampere'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'bostrom',
            base_denom: 'milliampere'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg',
          theme: {
            primary_color_hex: '#f4ecce'
          }
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [{
          denom: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
          exponent: 0,
          aliases: ['usource']
        }, {
          denom: 'source',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'source',
            base_denom: 'usource',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-8945',
            path: 'transfer/channel-8945/usource'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'source',
            base_denom: 'usource'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
          theme: {
            primary_color_hex: '#39a5fc'
          }
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      denom_units: [{
          denom: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3', 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy']
        }, {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }],
      type_asset: 'ics20',
      base: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      type_asset: 'ics20',
      base: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/stk/uosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
          theme: {
            primary_color_hex: '#c3343d'
          }
        }]
    },
    {
      description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts.',
      extended_description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts. It aims to manage risk and provide benefits to both traders and liquidity providers.\n\nFor traders, Levana\'s solution is to make all positions "well-funded," meaning that the maximum profit for each position is locked in advance. This eliminates the possibility of bad debt and insolvency, providing greater security.\n\nLiquidity providers, on the other hand, receive a yield for taking on the risk of market instability. They supply funds that act as collateral, and in return, they earn a fee with a risk premium.\n\nThe protocol addresses the issues with existing perpetual swap models, such as the virtual AMM. These models rely on complex mechanisms to maintain price stability, but they have limitations and can be risky in volatile markets.\n\nBy separating different trading pairs and creating a decentralized market for liquidity, Levana reduces the risk of contagion between different markets. This also makes it easier to expand to other blockchain networks.\n\nOverall, Levana\'s perpetual swaps protocol offers a reliable and secure platform for traders and liquidity providers. It ensures fair settlement, minimizes risks, and allows for the development of additional financial protocols on top of tokenized positions.',
      denom_units: [{
          denom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          exponent: 0
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg',
          theme: {
            primary_color_hex: '#4c146c'
          }
        }],
      coingecko_id: 'levana-protocol'
    },
    {
      description: 'Puppy',
      denom_units: [{
          denom: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
          exponent: 0,
          aliases: ['cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-73'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-11348',
            path: 'transfer/channel-11348/cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png',
          theme: {
            primary_color_hex: '#100e0d'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [{
          denom: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
          exponent: 0,
          aliases: ['unewt', 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
          theme: {
            primary_color_hex: '#16233d'
          }
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked TIA',
      denom_units: [{
          denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          exponent: 0
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'MilkyWay'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
          theme: {
            primary_color_hex: '#d18dfc'
          }
        }],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denom_units: [{
          denom: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
          exponent: 0,
          aliases: ['factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash']
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }]
    },
    {
      description: 'RAC',
      denom_units: [{
          denom: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac']
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
      name: 'Racoon',
      display: 'RAC',
      symbol: 'RAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
          theme: {
            primary_color_hex: '#2b2434'
          }
        }]
    },
    {
      description: 'GUPPY',
      denom_units: [{
          denom: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
          exponent: 0,
          aliases: ['factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy']
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png',
          theme: {
            primary_color_hex: '#d9966e'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'haqq',
            base_denom: 'aISLM',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-1575',
            path: 'transfer/channel-1575/aISLM'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'haqq',
            base_denom: 'aISLM'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }]
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [{
          denom: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        }, {
          denom: 'autism',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [{
          denom: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
          exponent: 0,
          aliases: ['gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        }, {
          denom: 'page',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primary_color_hex: '#ebb324'
          }
        }]
    },
    {
      description: 'PURSE Token',
      denom_units: [{
          denom: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
          exponent: 0,
          aliases: ['bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C']
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'pundix',
            base_denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-12618',
            path: 'transfer/channel-12618/bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [{
          denom: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
          theme: {
            primary_color_hex: '#00468E',
            background_color_hex: '#00468E',
            circle: true
          }
        }]
    },
    {
      description: 'Kleomedes Token',
      denom_units: [{
          denom: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
          exponent: 0,
          aliases: ['cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
          theme: {
            primary_color_hex: '#240454'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native token.',
      denom_units: [{
          denom: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nyx',
            base_denom: 'unyx',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-15464',
            path: 'transfer/channel-15464/unyx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          image_sync: {
            chain_name: 'nyx',
            base_denom: 'unyx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nyx',
            base_denom: 'unym',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-15464',
            path: 'transfer/channel-15464/unym'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nyx',
            base_denom: 'unym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png',
          theme: {
            primary_color_hex: '#293a5d'
          }
        }
      ]
    },
    {
      description: 'has a hat',
      denom_units: [{
          denom: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
          exponent: 0,
          aliases: ['factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat']
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
          theme: {
            primary_color_hex: '#F7E3C0',
            background_color_hex: '#F7E3C0',
            circle: true
          }
        }]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [{
          denom: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
          exponent: 0,
          aliases: ['ucircus', 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png',
          theme: {
            primary_color_hex: '#242033'
          }
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      denom_units: [{
          denom: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
          exponent: 0,
          aliases: ['cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
          theme: {
            primary_color_hex: '#ee8179'
          }
        }]
    },
    {
      description: 'Woof',
      denom_units: [{
          denom: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
          exponent: 0,
          aliases: ['factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof']
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png',
          theme: {
            primary_color_hex: '#d9905f'
          }
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [{
          denom: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
          exponent: 0,
          aliases: ['factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky']
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
          theme: {
            primary_color_hex: '#fbcaca'
          }
        }]
    },
    {
      description: 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
      denom_units: [{
          denom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }, {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primary_color_hex: '#f39444'
          }
        }],
      coingecko_id: 'wrapped-bitcoin'
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [{
          denom: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
          exponent: 0,
          aliases: ['ubad', 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png',
          theme: {
            primary_color_hex: '#211a0d'
          }
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denom_units: [{
          denom: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
          exponent: 0,
          aliases: ['cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
          theme: {
            primary_color_hex: '#c5c2c2'
          }
        }]
    },
    {
      description: 'The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It\'s scientifically anarchic, professionally foolish, and your ticket to the madhouse.',
      denom_units: [{
          denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primary_color_hex: '#edd5ee'
          }
        }]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
          exponent: 0
        }, {
          denom: 'sqtia',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [{
          denom: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
          exponent: 0,
          aliases: ['uapollo', 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denom_units: [{
          denom: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stadydx',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stadydx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stadydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stutia',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stutia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked SAGA',
      denom_units: [{
          denom: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
          exponent: 0,
          aliases: ['stusaga']
        }, {
          denom: 'stSAGA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
      name: 'Stride Staked SAGA',
      display: 'stSAGA',
      symbol: 'stSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'saga',
            base_denom: 'usaga'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stusaga',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stusaga'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stusaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
          exponent: 0,
          aliases: ['stinj']
        }, {
          denom: 'stINJ',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stinj',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stinj'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stinj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [{
          denom: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
          exponent: 0,
          aliases: ['peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dymension',
            base_denom: 'adym',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-19774',
            path: 'transfer/channel-19774/adym'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dymension',
            base_denom: 'adym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }]
    },
    {
      description: 'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denom_units: [{
          denom: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
          exponent: 0
        }, {
          denom: 'RAPTR',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png',
          theme: {
            primary_color_hex: '#e2b67d'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
      name: 'Astroport token (Terra)',
      display: 'astro.cw20',
      symbol: 'ASTRO.terra',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-392'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-21671',
            path: 'transfer/channel-21671/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }]
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denom_units: [{
          denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
          theme: {
            primary_color_hex: '#57443f'
          }
        }]
    },
    {
      description: 'Solana USD Coin (Wormhole), Solana USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      denom_units: [{
          denom: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3']
        }, {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
      name: 'USDC (Solana via Wormhole)',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      symbol: 'USDC.sol.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg',
          theme: {
            primary_color_hex: '#2775cb'
          }
        }, {
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Humans.ai.',
      denom_units: [{
          denom: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
          exponent: 0,
          aliases: ['aheart']
        }, {
          denom: 'heart',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
      name: 'Humans.ai',
      display: 'heart',
      symbol: 'HEART',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'humans',
            base_denom: 'aheart',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-20082',
            path: 'transfer/channel-20082/aheart'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'humans',
            base_denom: 'aheart'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            dark_mode: true,
            primary_color_hex: '#f3f3f3'
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin',
      symbol: 'BERLIN-legacy',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }]
    },
    {
      description: 'The native token of Scorum',
      denom_units: [{
          denom: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
          exponent: 0,
          aliases: ['nscr']
        }, {
          denom: 'scr',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
      name: 'Scorum Network',
      display: 'scr',
      symbol: 'SCR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'scorum',
            base_denom: 'nscr',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-20100',
            path: 'transfer/channel-20100/nscr'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'scorum',
            base_denom: 'nscr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg',
          theme: {
            primary_color_hex: '#0bc47e'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
      name: 'C4E',
      display: 'c4e',
      symbol: 'C4E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chain4energy',
            base_denom: 'uc4e',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-22172',
            path: 'transfer/channel-22172/uc4e'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      images: [{
          image_sync: {
            chain_name: 'chain4energy',
            base_denom: 'uc4e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
          theme: {
            primary_color_hex: '#24344c'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      denom_units: [{
          denom: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primary_color_hex: '#0c0704'
          }
        }]
    },
    {
      description: 'The SRCX token of Source Protocol.',
      denom_units: [{
          denom: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
          exponent: 0,
          aliases: ['nsrcx', 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channel_id: 'channel-61'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'source',
            base_denom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-8945',
            path: 'transfer/channel-8945/transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }]
    },
    {
      description: 'The revenue token for Pylons',
      denom_units: [{
          denom: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
          exponent: 0,
          aliases: ['ubedrock']
        }, {
          denom: 'rock',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'pylons',
            base_denom: 'ubedrock',
            channel_id: 'channel-29'
          },
          chain: {
            channel_id: 'channel-17683',
            path: 'transfer/channel-17683/ubedrock'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
      },
      images: [{
          image_sync: {
            chain_name: 'pylons',
            base_denom: 'ubedrock'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
          theme: {
            primary_color_hex: '#ec4424'
          }
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      denom_units: [{
          denom: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
          exponent: 0,
          aliases: [
            '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
            'wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          ]
        }, {
          denom: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
          exponent: 5,
          aliases: ['bskt']
        }],
      type_asset: 'ics20',
      base: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
      name: 'Basket',
      display: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
      symbol: 'BSKT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png',
          theme: {
            primary_color_hex: '#485573'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
      name: 'AIOZ Network',
      display: 'aioz',
      symbol: 'AIOZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'aioz',
            base_denom: 'attoaioz',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-779',
            path: 'transfer/channel-779/attoaioz'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'aioz',
            base_denom: 'attoaioz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          theme: {
            primary_color_hex: '#24241c'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked DYM',
      denom_units: [{
          denom: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
          exponent: 0,
          aliases: ['stadym']
        }, {
          denom: 'stDYM',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
      name: 'Stride Staked DYM',
      display: 'stDYM',
      symbol: 'stDYM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dymension',
            base_denom: 'adym'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stadym',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stadym'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stadym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'DOKI the last Dragon',
      denom_units: [{
          denom: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
          exponent: 0,
          aliases: ['udoki']
        }, {
          denom: 'doki',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'udoki',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/udoki'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      images: [{
          image_sync: {
            chain_name: 'odin',
            base_denom: 'udoki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png',
          theme: {
            primary_color_hex: '#2e2d2a'
          }
        }]
    },
    {
      description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains.',
      extended_description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains. Seeded by both the Osmosis Community Pool and the Migaloo Foundation, Sail DAO is open to hear offers from cosmos based projects that hope to seed liquidity for their token on the Osmosis blockchain. Along with the creation of this DAO the White Whale DEX is deployed on Osmosis, being the first DEX apart from Osmosis to deploy on the chain, it is a great step towards Osmosis becoming an ecosystem from an appchain. Migaloo incubated projects are encouraged to participate in OTC deals with Sail DAO in order to seed or enhance liquidity on WW\'s Osmosis DEX. However, offers are not limited to Migaloo projects and liquidity is not limited to being deployed on WW DEX. The treasury of this DAO can be deployed however it wishes at the discretion of the Sail DAO voters. The Osmosis CP has been given veto authorization over any props introduced in this DAO and has also been given clawback rights if this venture ever gets off track.',
      denom_units: [{
          denom: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
          exponent: 0
        }, {
          denom: 'sail',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png',
          theme: {
            primary_color_hex: '#1e264f'
          }
        }],
      socials: {
        website: 'https://daodao.zone/dao/osmo106tvcj58rvdn9k36m9m3xcmcwk2c3fgft3ldcst9lgy05gcmjanqexru3h/home',
        twitter: 'https://twitter.com/Sail_DAO_'
      }
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [{
          denom: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark']
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png',
          theme: {
            primary_color_hex: '#062d54'
          }
        }]
    },
    {
      description: 'XRP bridged from XRPL',
      denom_units: [{
          denom: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
          exponent: 0,
          aliases: ['drop', 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz']
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
      name: 'Ripple (Coreum)',
      display: 'xrp',
      symbol: 'XRP.core',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'xrpl',
            base_denom: 'drop'
          },
          provider: 'Coreum'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'coreum',
            base_denom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-2188',
            path: 'transfer/channel-2188/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }, {
          image_sync: {
            chain_name: 'coreum',
            base_denom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'An alloy of XRP asset variants on Osmosis.',
      extended_description: 'Multiple Ripple variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of XRP.',
      denom_units: [{
          denom: 'factory/osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0/alloyed/allXRP',
          exponent: 0
        }, {
          denom: 'allXRP',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0',
      base: 'factory/osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0/alloyed/allXRP',
      name: 'Ripple',
      display: 'allXRP',
      symbol: 'XRP',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'xrpl',
            base_denom: 'drop'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png'
      },
      images: [{
          image_sync: {
            chain_name: 'xrpl',
            base_denom: 'drop'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The Original Meme Coin of SEI Network',
      denom_units: [{
          denom: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
          exponent: 0,
          aliases: ['cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed']
        }, {
          denom: 'SEIYAN',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
      name: 'SEIYAN',
      display: 'SEIYAN',
      symbol: 'SEIYAN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'sei',
            base_denom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
            port: 'transfer',
            channel_id: 'channel-0'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-782',
            path: 'transfer/channel-782/cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
      },
      images: [{
          image_sync: {
            chain_name: 'sei',
            base_denom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png',
          theme: {
            primary_color_hex: '#db1f22'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of Nibiru network',
      denom_units: [{
          denom: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
          exponent: 0,
          aliases: ['unibi']
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nibiru',
            base_denom: 'unibi',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-21113',
            path: 'transfer/channel-21113/unibi'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nibiru',
            base_denom: 'unibi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }]
    },
    {
      description: 'BEAST-ERC20 on injective',
      denom_units: [{
          denom: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
          exponent: 0,
          aliases: ['peggy0xA4426666addBE8c4985377d36683D17FB40c31Be']
        }, {
          denom: 'beast',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          provider: 'Peggy'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/peggy0xA4426666addBE8c4985377d36683D17FB40c31Be'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primary_color_hex: '#21172b'
          }
        }]
    },
    {
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/044B7B28AFE93CEC769CF529ADC626DA09EA0EFA3E0E3284D540E9E00E01E24A',
          exponent: 0,
          aliases: ['acvnt']
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/044B7B28AFE93CEC769CF529ADC626DA09EA0EFA3E0E3284D540E9E00E01E24A',
      name: 'ConsciousDAO',
      display: 'cvnt',
      symbol: 'CVN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'conscious',
            base_denom: 'acvnt',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-73971',
            path: 'transfer/channel-73971/acvnt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'conscious',
            base_denom: 'acvnt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
          theme: {
            primary_color_hex: '#047e04'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The memecoin built for the Celestia community',
      denom_units: [{
          denom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
          exponent: 0
        }, {
          denom: 'toro',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg',
          theme: {
            primary_color_hex: '#c39ccc'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      denom_units: [{
          denom: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primary_color_hex: '#f3ebdb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'LAB - Everything is an Experiment',
      extended_description: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denom_units: [{
          denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n',
      base: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          theme: {
            primary_color_hex: '#bcdd76'
          }
        }],
      coingecko_id: 'mad-scientists'
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      extended_description: 'bOSMO - solving capital inefficiencies in the NFT market space',
      denom_units: [{
          denom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
          exponent: 0
        }, {
          denom: 'bOSMO',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'BackBoneLabs'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png',
          theme: {
            primary_color_hex: '#c68db5'
          }
        }],
      socials: {
        website: 'https://app.backbonelabs.io/',
        twitter: 'https://twitter.com/BackBone_Labs'
      }
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      denom_units: [{
          denom: 'ibc/46D8D1A6E2A80ECCB7CA6663086A2E749C508B68DA56A077CD26E6F4F9691EEE',
          exponent: 0,
          aliases: ['eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38']
        }, {
          denom: 'PUNDIX',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/46D8D1A6E2A80ECCB7CA6663086A2E749C508B68DA56A077CD26E6F4F9691EEE',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            contract: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          provider: 'Function X'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channel_id: 'channel-19'
          },
          chain: {
            channel_id: 'channel-2716',
            path: 'transfer/channel-2716/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }]
    },
    {
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      denom_units: [{
          denom: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
          exponent: 0,
          aliases: ['2125', 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
      name: 'Tinkernet',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '2125',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/2125'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/2125'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      denom_units: [{
          denom: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos']
        }, {
          denom: 'w',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native token of dHealth',
      denom_units: [{
          denom: 'ibc/FD506CCA1FC574F2A8175FB574C981E9F6351E194AA48AC219BD67FF934E2F33',
          exponent: 0,
          aliases: ['udhp']
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FD506CCA1FC574F2A8175FB574C981E9F6351E194AA48AC219BD67FF934E2F33',
      name: 'dHealth',
      display: 'dhp',
      symbol: 'DHP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dhealth',
            base_denom: 'udhp',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-75030',
            path: 'transfer/channel-75030/udhp'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dhealth',
            base_denom: 'udhp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primary_color_hex: '#140c7c'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/E4C60B9F95BF54CC085A5E39F6057ABD4DF92793D330EB884A36530F7E6804DE',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E4C60B9F95BF54CC085A5E39F6057ABD4DF92793D330EB884A36530F7E6804DE',
      name: 'furya',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'furya',
            base_denom: 'ufury',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-74222',
            path: 'transfer/channel-74222/ufury'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'furya',
            base_denom: 'ufury'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['gaming', 'staking']
    },
    {
      description: 'The native staking and governance token of Saga.',
      denom_units: [{
          denom: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'saga',
            base_denom: 'usaga',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-38946',
            path: 'transfer/channel-38946/usaga'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primary_color_hex: '#FFFFFF',
            dark_mode: true
          }
        }, {
          image_sync: {
            chain_name: 'saga',
            base_denom: 'usaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primary_color_hex: '#000000',
            dark_mode: false
          }
        }]
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denom_units: [{
          denom: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
          exponent: 0,
          aliases: ['uatom1klfg', 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG']
        }, {
          denom: 'ATOM1KLFG',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denom_units: [{
          denom: 'ibc/62B50BB1DAEAD2A92D6C6ACAC118F4ED8CBE54265DCF5688E8D0A0A978AA46E7',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/62B50BB1DAEAD2A92D6C6ACAC118F4ED8CBE54265DCF5688E8D0A0A978AA46E7',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'shido',
            base_denom: 'shido',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73755',
            path: 'transfer/channel-73755/shido'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'shido',
            base_denom: 'shido'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
          theme: {
            primary_color_hex: '#046ffc'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Decentralized Machine Learning',
      denom_units: [{
          denom: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cifer',
            base_denom: 'ucif',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-39205',
            path: 'transfer/channel-39205/ucif'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cifer',
            base_denom: 'ucif'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primary_color_hex: '#af49b7'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/',
      denom_units: [{
          denom: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
          exponent: 0,
          aliases: ['factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava']
        }, {
          denom: 'hava',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png',
          theme: {
            primary_color_hex: '#eacea5'
          }
        }]
    },
    {
      description: 'OnE mEmEcOiN tO cOnNeCt oL ImBeCiles - aNd in Da Cosmos BiNd DeM',
      denom_units: [{
          denom: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
          exponent: 0
        }, {
          denom: 'IBC',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
      name: 'IBC',
      display: 'IBC',
      symbol: 'IBC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['memecoin', 'osmosis_unlisted'],
      socials: {
        website: 'https://www.ibcmeme.wtf',
        twitter: 'https://twitter.com/IBCmemecoin'
      }
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/5EC896BED3EBCB2CB6F1C167582E4EFA3F6FA3385F28BA5EA92D4A489DA010C5',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5EC896BED3EBCB2CB6F1C167582E4EFA3F6FA3385F28BA5EA92D4A489DA010C5',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
          exponent: 0,
          aliases: ['uxastro', 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO']
        }, {
          denom: 'xASTRO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
      name: 'Staked Astroport Token',
      display: 'xASTRO',
      symbol: 'xASTRO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Gravity Bridge Paxos Gold',
      denom_units: [{
          denom: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
          exponent: 0,
          aliases: ['gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78']
        }, {
          denom: 'gpaxg',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
      name: 'Paxos Gold (Gravity Bridge)',
      display: 'gpaxg',
      symbol: 'PAXG.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'comex',
            base_denom: 'XAU'
          },
          provider: 'Paxos'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg',
          theme: {
            primary_color_hex: '#ddc81a'
          }
        }, {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg',
          theme: {
            primary_color_hex: '#ebe60e'
          }
        }]
    },
    {
      description: 'Restake DAO Token',
      denom_units: [{
          denom: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
          exponent: 0,
          aliases: ['factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk']
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
      name: 'RESTAKE',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primary_color_hex: '#3ccc64'
          }
        }]
    },
    {
      description: 'Bernese Mountain Dog. Thematic dog token to have fun and be friends with all other dog tokens. Fixed supply 132M',
      denom_units: [{
          denom: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
          exponent: 0
        }, {
          denom: 'BERNESE',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss',
      base: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
      name: 'BERNESE',
      display: 'BERNESE',
      symbol: 'BERNESE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png',
          theme: {
            primary_color_hex: '#e7754f'
          }
        }],
      keywords: ['memecoin'],
      socials: {
        website: 'https://bernesechain.github.io',
        twitter: 'https://twitter.com/bernesechain'
      }
    },
    {
      description: 'The native token of Ethereum, bridged via IBC.',
      denom_units: [{
          denom: 'ibc/A23E590BA7E0D808706FB5085A449B3B9D6864AE4DDE7DAF936243CEBB2A3D43',
          exponent: 0,
          aliases: ['wei', 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A23E590BA7E0D808706FB5085A449B3B9D6864AE4DDE7DAF936243CEBB2A3D43',
      name: 'Ethereum (Picasso)',
      display: 'eth',
      symbol: 'ETH.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/wei'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primary_color_hex: '#303030'
          }
        }]
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
      denom_units: [{
          denom: 'ibc/37DFAFDA529FF7D513B0DB23E9728DF9BF73122D38D46824C78BB7F91E6A736B',
          exponent: 0,
          aliases: ['dai-wei', 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/37DFAFDA529FF7D513B0DB23E9728DF9BF73122D38D46824C78BB7F91E6A736B',
      name: 'Dai Stablecoin (Picasso)',
      display: 'dai',
      symbol: 'DAI.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'The governance token of the Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/5435437A8C9416B650DDA49C338B63CCFC6465123B715F6BAA9B1B2071E27913',
          exponent: 0,
          aliases: ['fxs-wei', 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5435437A8C9416B650DDA49C338B63CCFC6465123B715F6BAA9B1B2071E27913',
      name: 'Frax Share (Picasso)',
      display: 'fxs',
      symbol: 'FXS.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fxs.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fxs.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The first fractional-algorithmic stablecoin by Frax Finance.',
      denom_units: [{
          denom: 'ibc/9A8CBC029002DC5170E715F93FBF35011FFC9796371F59B1F3C3094AE1B453A9',
          exponent: 0,
          aliases: ['frax-wei', 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/9A8CBC029002DC5170E715F93FBF35011FFC9796371F59B1F3C3094AE1B453A9',
      name: 'Frax (Picasso)',
      display: 'frax',
      symbol: 'FRAX.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frax.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frax.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
      denom_units: [{
          denom: 'ibc/078AD6F581E8115CDFBD8FFA29D8C71AFE250CE952AFF80040CBC64868D44AD3',
          exponent: 0,
          aliases: ['uusdt', 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/078AD6F581E8115CDFBD8FFA29D8C71AFE250CE952AFF80040CBC64868D44AD3',
      name: 'Tether USD (Ethereum via Picasso)',
      display: 'usdt',
      symbol: 'USDT.eth.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.png',
          theme: {
            primary_color_hex: '#049494'
          }
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
      denom_units: [{
          denom: 'ibc/0EFA07F312E05258A56AE1DD600E39B9151CF7A91C8A94EEBCF4F03ECFE5DD98',
          exponent: 0,
          aliases: ['sfrax-wei', 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0EFA07F312E05258A56AE1DD600E39B9151CF7A91C8A94EEBCF4F03ECFE5DD98',
      name: 'Staked FRAX (Picasso)',
      display: 'sfrax',
      symbol: 'sFRAX.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrax.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrax.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/688E70EF567E5D4BA1CF4C54BAD758C288BC1A6C8B0B12979F911A2AE95E27EC',
          exponent: 0,
          aliases: ['frxeth-wei', 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/688E70EF567E5D4BA1CF4C54BAD758C288BC1A6C8B0B12979F911A2AE95E27EC',
      name: 'Frax Ether (Picasso)',
      display: 'frxeth',
      symbol: 'frxETH.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frxeth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frxeth.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
      denom_units: [{
          denom: 'ibc/F17CCB4F07948CC2D8B72952C2D0A84F2B763962F698774BB121B872AE4611B5',
          exponent: 0,
          aliases: ['sfrxeth-wei', 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F17CCB4F07948CC2D8B72952C2D0A84F2B763962F698774BB121B872AE4611B5',
      name: 'Staked Frax Ether (Picasso)',
      display: 'sfrxeth',
      symbol: 'sfrxETH.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrxeth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrxeth.pica.svg'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'Adam Clay a BitSong Music FanToken',
      denom_units: [{
          denom: 'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
          exponent: 0,
          aliases: ['ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09']
        }, {
          denom: 'clay',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
      name: 'Adam Clay FanToken',
      display: 'clay',
      symbol: 'CLAY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bitsong',
            base_denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73',
            path: 'transfer/channel-73/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
      },
      images: [{
          image_sync: {
            chain_name: 'bitsong',
            base_denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png',
          theme: {
            primary_color_hex: '#e8e5e7'
          }
        }]
    },
    {
      description: '404Deep Records a BitSong Music FanToken',
      denom_units: [{
          denom: 'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
          exponent: 0,
          aliases: ['ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A']
        }, {
          denom: '404dr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
      name: '404Deep Records Fantoken',
      display: '404dr',
      symbol: '404DR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bitsong',
            base_denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73',
            path: 'transfer/channel-73/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
      },
      images: [{
          image_sync: {
            chain_name: 'bitsong',
            base_denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png',
          theme: {
            primary_color_hex: '#cfb1b3'
          }
        }]
    },
    {
      description: 'wLibra is a bridged version of Libra Coin from 0L Network via LibraBridge.',
      extended_description: 'Libra Coin is a fork from Facebook\'s Diem (Libra) blockchain that was announced in 2019. Libra Coin operates on its own high-performance Layer 1 blockchain, known as the 0L Network. In October 2021, Libra Coin began mining.\n\n Like Bitcoin, there were no pre-mined coins or dedicated token allocation to any parties; all coins were minted through a mining process. Unlike Bitcoin, which undergoes continuous issuance, Libra Coin has a fixed supply. By December 2023, all the Libra Coin had been issued, establishing a capped supply and making the coin permanently deflationary.\n\n Fiercely independent, the project has a long-term view because it is unburdened by venture capital funding, labs entities, a foundation, and the influence of other blockchain ecosystems. Carpe diem.',
      denom_units: [{
          denom: 'factory/osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p/wLIBRA',
          exponent: 0
        }, {
          denom: 'wLIBRA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p',
      base: 'factory/osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p/wLIBRA',
      name: 'Wrapped Libra Coin (LibraBridge)',
      display: 'wLIBRA',
      symbol: 'wLIBRA',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: '0l',
            base_denom: 'microlibra'
          },
          provider: 'LibraBridge'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png'
      },
      images: [{
          image_sync: {
            chain_name: '0l',
            base_denom: 'microlibra'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png',
          theme: {
            primary_color_hex: '#e45c5c'
          }
        }],
      socials: {
        website: 'https://0l.network/',
        twitter: 'https://twitter.com/0LNetwork'
      }
    },
    {
      description: 'The native token of Nim Network.',
      extended_description: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denom_units: [{
          denom: 'ibc/279D69A6EF8E37456C8D2DC7A7C1C50F7A566EC4758F6DE17472A9FDE36C4426',
          exponent: 0,
          aliases: ['anim', 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942']
        }, {
          denom: 'nim',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/279D69A6EF8E37456C8D2DC7A7C1C50F7A566EC4758F6DE17472A9FDE36C4426',
      name: 'Nim Network',
      display: 'nim',
      symbol: 'NIM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nim',
            base_denom: 'anim',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/anim'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'dymension',
            base_denom: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-19774',
            path: 'transfer/channel-19774/transfer/channel-49/anim'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nim',
            base_denom: 'anim'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
          theme: {
            primary_color_hex: '#519cea'
          }
        }],
      keywords: [
        'gaming',
        'AI',
        'osmosis_unstable'
      ],
      socials: {
        website: 'https://ai.nim.network/',
        twitter: 'https://twitter.com/nim_network'
      }
    },
    {
      description: 'The native token of SEDA Chain.',
      denom_units: [{
          denom: 'ibc/956AEF1DA92F70584266E87978C3F30A43B91EE6ABC62F03D097E79F6B99C4D8',
          exponent: 0,
          aliases: ['aseda']
        }, {
          denom: 'seda',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/956AEF1DA92F70584266E87978C3F30A43B91EE6ABC62F03D097E79F6B99C4D8',
      name: 'SEDA',
      display: 'seda',
      symbol: 'SEDA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'seda',
            base_denom: 'aseda',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75016',
            path: 'transfer/channel-75016/aseda'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'seda',
            base_denom: 'aseda'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
          theme: {
            primary_color_hex: '#8178d1'
          }
        }]
    },
    {
      description: 'Cosmos Airdrop Chat',
      extended_description: 'Official Token of the Cosmos Airdrop community',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac',
          exponent: 0
        }, {
          denom: 'CAC',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac',
      name: 'Cosmos Airdrop Chat',
      display: 'CAC',
      symbol: 'CAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CAC.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CAC.png',
          theme: {
            primary_color_hex: '#160542'
          }
        }]
    },
    {
      description: 'WEIRD token for WEIRD friends collection',
      denom_units: [{
          denom: 'ibc/38ADC6FFDDDB7D70B72AD0322CEA8844CB18FAA0A23400DBA8A99D43E18B3748',
          exponent: 0,
          aliases: ['uWEIRD']
        }, {
          denom: 'WEIRD',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/38ADC6FFDDDB7D70B72AD0322CEA8844CB18FAA0A23400DBA8A99D43E18B3748',
      name: 'WEIRD',
      display: 'WEIRD',
      symbol: 'WEIRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png',
          theme: {
            primary_color_hex: '#ebf0f4'
          }
        }]
    },
    {
      description: 'Uhm, Power Bottom',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb',
          exponent: 0
        }, {
          denom: 'PBB',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb',
      name: 'Power Bottom',
      display: 'PBB',
      symbol: 'PBB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/PBB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/PBB.png',
          theme: {
            primary_color_hex: '#f21313'
          }
        }]
    },
    {
      description: 'Beer Is Good for You!',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bwh',
          exponent: 0
        }, {
          denom: 'bwh',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bwh',
      name: 'BeerWifHat',
      display: 'bwh',
      symbol: 'BWH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BWH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BWH.png',
          theme: {
            primary_color_hex: '#775038'
          }
        }]
    },
    {
      description: 'Airdrop For All [AFA - New Name on Cosmos Ecosystem, A4A - Old Name on TurtleNetwork] is a token from turtleNetwork towards cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995',
          exponent: 0,
          aliases: ['cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg']
        }],
      type_asset: 'ics20',
      base: 'ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995',
      name: 'Airdrop For All',
      display: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      symbol: 'AFA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png',
          theme: {
            primary_color_hex: '#f3cb0c'
          }
        }]
    },
    {
      description: 'The Cosmos Network\'s premier self-hatred memecoin.',
      extended_description: 'Shitmos is a fair launched token deployed via the start.cooking liquidity bootstrapping protocol (LBP) on the Osmosis blockchain. It is powered by the Shitmos Economic Zone (SEZ), and it has been designed with the goal of uniting the Cosmos Network and interchain-at-large ecosystems by making crypto fun. The SEZ is a federation of nft collections on Stargaze that supports Shitmos by providing at least 2% of royalties towards open market purchases of Shitmos.',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
          exponent: 0
        }, {
          denom: 'SHITMOS',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
      name: 'Shitmos',
      display: 'SHITMOS',
      symbol: 'SHITMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg',
          theme: {
            primary_color_hex: '#639BFF',
            circle: true
          }
        }],
      keywords: ['memecoin'],
      socials: {
        website: 'https://shitmos.wtf',
        twitter: 'https://twitter.com/shitoncosmos'
      }
    },
    {
      description: 'Quicksilver Liquid Staked JUNO',
      denom_units: [{
          denom: 'ibc/B4E18E61E1505C2F371B621E49B09E983F6A138F251A7B5286A6BDF739FD0D54',
          exponent: 0,
          aliases: ['uqjuno']
        }, {
          denom: 'qjuno',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/B4E18E61E1505C2F371B621E49B09E983F6A138F251A7B5286A6BDF739FD0D54',
      name: 'Quicksilver Liquid Staked JUNO',
      display: 'qjuno',
      symbol: 'qJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqjuno',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqjuno'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqjuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SAGA',
      denom_units: [{
          denom: 'ibc/F2D400F2728E9DA06EAE2AFAB289931A69EDDA5A661578C66A3177EDFE3C0D13',
          exponent: 0,
          aliases: ['uqsaga']
        }, {
          denom: 'qsaga',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/F2D400F2728E9DA06EAE2AFAB289931A69EDDA5A661578C66A3177EDFE3C0D13',
      name: 'Quicksilver Liquid Staked SAGA',
      display: 'qsaga',
      symbol: 'qSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'saga',
            base_denom: 'usaga'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqsaga',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqsaga'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqsaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg',
          theme: {
            primary_color_hex: '#f9924b'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked DYDX',
      denom_units: [{
          denom: 'ibc/273C593E51ACE56F1F2BDB3E03A5CB81BB208B894BCAA642676A32C3454E8C27',
          exponent: 0,
          aliases: ['aqdydx']
        }, {
          denom: 'qdydx',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/273C593E51ACE56F1F2BDB3E03A5CB81BB208B894BCAA642676A32C3454E8C27',
      name: 'Quicksilver Liquid Staked DYDX',
      display: 'qdydx',
      symbol: 'qDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'aqdydx',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/aqdydx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'aqdydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked BLD',
      denom_units: [{
          denom: 'ibc/C1C106D915C8E8C59E5DC69BF30FEF64729A6F788060B184C86A315DBB762EF7',
          exponent: 0,
          aliases: ['uqbld']
        }, {
          denom: 'qbld',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/C1C106D915C8E8C59E5DC69BF30FEF64729A6F788060B184C86A315DBB762EF7',
      name: 'Quicksilver Liquid Staked BLD',
      display: 'qbld',
      symbol: 'qBLD',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'ubld'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqbld',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqbld'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilver',
            base_denom: 'uqbld'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg',
          theme: {
            primary_color_hex: '#fc944c'
          }
        }]
    },
    {
      description: 'PEPE is a deflationary memecoin launched on Ethereum. ',
      denom_units: [{
          denom: 'ibc/5B5BFCC8A9F0D554A4245117F7798E85BE25B6C73DBFA2D6F369BD9DD6CACC6D',
          exponent: 0,
          aliases: ['pepe-wei', 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5B5BFCC8A9F0D554A4245117F7798E85BE25B6C73DBFA2D6F369BD9DD6CACC6D',
      name: 'Pepe (Picasso)',
      display: 'pepe',
      symbol: 'PEPE.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      denom_units: [{
          denom: 'ibc/080CE38C1E49595F2199E88BE7281F93FAEEF3FE354EECED0640625E8311C9CF',
          exponent: 0,
          aliases: ['crv-wei', 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/080CE38C1E49595F2199E88BE7281F93FAEEF3FE354EECED0640625E8311C9CF',
      name: 'Curve DAO (Picasso)',
      display: 'crv',
      symbol: 'CRV.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xd533a949740bb3306d119cc777fa900ba034cd52'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crv.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crv.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primary_color_hex: '#1fcbdb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      denom_units: [{
          denom: 'ibc/39AAE0F5F918B731BEF1E02E9BAED33C242805F668B0A941AC509FB569FE51CB',
          exponent: 0,
          aliases: ['ezeth-wei', 'ibc/0247E0E2C174135AADF4EA172D97FF5C15A64689A403E83603EAE4F0616DD365']
        }, {
          denom: 'ezeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/39AAE0F5F918B731BEF1E02E9BAED33C242805F668B0A941AC509FB569FE51CB',
      name: 'Renzo Restaked ETH (Picasso)',
      display: 'ezeth',
      symbol: 'ezETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Renzo'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ezeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ezeth.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png',
          theme: {
            primary_color_hex: '#9bcf2c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      denom_units: [{
          denom: 'ibc/BFFE212A23384C4EB055CF6F95A1F5EC1BE0F9BD286FAA66C3748F0444E67D63',
          exponent: 0,
          aliases: ['usde-wei', 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983']
        }, {
          denom: 'usde',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/BFFE212A23384C4EB055CF6F95A1F5EC1BE0F9BD286FAA66C3748F0444E67D63',
      name: 'Ethena USDe (Picasso)',
      display: 'usde',
      symbol: 'USDe.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Ethena'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usde.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usde.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native governance token of Ethena.',
      denom_units: [{
          denom: 'ibc/257FF64F160106F6EE43CEE7C761DA64C1346221895373CC810FFA1BFAC5A7CD',
          exponent: 0,
          aliases: ['ena-wei', 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/257FF64F160106F6EE43CEE7C761DA64C1346221895373CC810FFA1BFAC5A7CD',
      name: 'Ethena (Picasso)',
      display: 'ena',
      symbol: 'ENA.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ena.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ena.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'eETH is a natively restaked liquid staking token on Ethereum.',
      denom_units: [{
          denom: 'ibc/8D0FFEA4EDB04E3C1738C9599B66AE49683E0540FC4C1214AC84534C200D818B',
          exponent: 0,
          aliases: ['eeth-wei', 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B']
        }, {
          denom: 'eeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/8D0FFEA4EDB04E3C1738C9599B66AE49683E0540FC4C1214AC84534C200D818B',
      name: 'ether.fi Staked ETH (Picasso)',
      display: 'eeth',
      symbol: 'eETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'EtherFi'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eeth.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
          theme: {
            primary_color_hex: '#5045b7'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      denom_units: [{
          denom: 'ibc/D09BB89B2187EF13EF006B44510749B0F02FD0B34F8BB55C70D812A1FF6148C7',
          exponent: 0,
          aliases: ['pxeth-wei', 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821']
        }, {
          denom: 'pxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D09BB89B2187EF13EF006B44510749B0F02FD0B34F8BB55C70D812A1FF6148C7',
      name: 'Dinero Staked ETH (Picasso)',
      display: 'pxeth',
      symbol: 'pxETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Dinero'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pxeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pxeth.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
          theme: {
            primary_color_hex: '#c3cbd2'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      denom_units: [{
          denom: 'ibc/63551E7BB24008F0AFC1CB051A423A5104F781F035F8B1A191264B7086A0A0F6',
          exponent: 0,
          aliases: ['crvusd-wei', 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A']
        }, {
          denom: 'crvusd',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/63551E7BB24008F0AFC1CB051A423A5104F781F035F8B1A191264B7086A0A0F6',
      name: 'crvUSD (Picasso)',
      display: 'crvusd',
      symbol: 'crvUSD.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Curve Finance'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crvUSD.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crvUSD.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
          theme: {
            primary_color_hex: '#d6e3d9'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Coin to support the real world in Wilhelmshall im Huy',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/wiha',
          exponent: 0
        }, {
          denom: 'WIHA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/wiha',
      name: 'WiliHall',
      display: 'WIHA',
      symbol: 'WIHA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WIHA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WIHA.png',
          theme: {
            primary_color_hex: '#f2f2ec'
          }
        }]
    },
    {
      description: 'For th',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/crazyhorse',
          exponent: 0
        }, {
          denom: 'CRAZYHORSE',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/crazyhorse',
      name: 'HorseShoeBar',
      display: 'CRAZYHORSE',
      symbol: 'CRAZYHORSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CrazyHorse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CrazyHorse.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'Cosmus Cartol always get rich',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/coca',
          exponent: 0
        }, {
          denom: 'COCA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/coca',
      name: 'CosmusCartol',
      display: 'COCA',
      symbol: 'COCA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COCA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COCA.png',
          theme: {
            primary_color_hex: '#1e2029'
          }
        }]
    },
    {
      description: 'Tether, issued natively on Solana.',
      denom_units: [{
          denom: 'ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A',
          exponent: 0,
          aliases: ['ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A',
      name: 'Tether USD (Solana via Picasso)',
      display: 'usdt',
      symbol: 'USDT.sol.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.png',
          theme: {
            primary_color_hex: '#089496'
          }
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.',
      denom_units: [{
          denom: 'ibc/B83F9E20B4A07FA8846880000BD9D8985D89567A090F5E9390C64E81C39B4607',
          exponent: 0,
          aliases: ['ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C']
        }, {
          denom: 'edgesol',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/B83F9E20B4A07FA8846880000BD9D8985D89567A090F5E9390C64E81C39B4607',
      name: 'Edgevana Staked SOL (Picasso)',
      display: 'edgesol',
      symbol: 'edgeSOL.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Edgevana'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/edgesol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/edgesol.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png',
          theme: {
            primary_color_hex: '#146cfc'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.',
      denom_units: [{
          denom: 'ibc/F618D130A2B8203D169811658BD0361F18DC2453085965FA0E5AEB8018DD54EE',
          exponent: 0,
          aliases: ['ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D']
        }, {
          denom: 'lst',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/F618D130A2B8203D169811658BD0361F18DC2453085965FA0E5AEB8018DD54EE',
      name: 'Liquid Staking Token (Picasso)',
      display: 'lst',
      symbol: 'LST.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'MarginFi'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lst.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lst.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
          theme: {
            primary_color_hex: '#cbebe3'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.',
      denom_units: [{
          denom: 'ibc/9A83BDF4C8C5FFDDE735533BC8CD4363714A6474AED1C2C492FB003BB77C7982',
          exponent: 0,
          aliases: ['ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2']
        }, {
          denom: 'jitosol',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/9A83BDF4C8C5FFDDE735533BC8CD4363714A6474AED1C2C492FB003BB77C7982',
      name: 'Jito Staked SOL (Picasso)',
      display: 'jitosol',
      symbol: 'jitoSOL.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Jito'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/jitosol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/jitosol.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png',
          theme: {
            primary_color_hex: '#5bb384'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'SOL is the native cryptocurrency of the Solana blockchain.',
      denom_units: [{
          denom: 'ibc/0F9E9277B61A78CB31014D541ACA5BF6AB06DFC4524C4C836490B131DAAECD78',
          exponent: 0,
          aliases: ['Lamport', 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C']
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/0F9E9277B61A78CB31014D541ACA5BF6AB06DFC4524C4C836490B131DAAECD78',
      name: 'Solana (Picasso)',
      display: 'wsol',
      symbol: 'SOL.pica',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/So11111111111111111111111111111111111111112'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/So11111111111111111111111111111111111111112'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wsol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wsol.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            background_color_hex: '#000000'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'An alloy of USDT asset variants on Osmosis.',
      extended_description: 'Multiple Tether USD variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of USDT.',
      denom_units: [{
          denom: 'factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT',
          exponent: 0
        }, {
          denom: 'allUSDT',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek',
      base: 'factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT',
      name: 'Tether USD',
      display: 'allUSDT',
      symbol: 'USDT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.svg',
          theme: {
            circle: false,
            primary_color_hex: '#50AF95',
            background_color_hex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allUSDT.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      denom_units: [{
          denom: 'ibc/A8C568580D613F16F7E9075EA9FAD69FEBE0CC1F4AF46C60255FEC4459C166F1',
          exponent: 0,
          aliases: ['ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump', 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912']
        }, {
          denom: 'whine',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A8C568580D613F16F7E9075EA9FAD69FEBE0CC1F4AF46C60255FEC4459C166F1',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primary_color_hex: '#FFFFFF',
            background_color_hex: '#FFFFFF',
            circle: false
          }
        }]
    },
    {
      description: 'A group of french boulanger who wanna bring fun and baguette on cosmos',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bag',
          exponent: 0
        }, {
          denom: 'BAG',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bag',
      name: 'Baguette',
      display: 'BAG',
      symbol: 'BAG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BAG.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BAG.png',
          theme: {
            primary_color_hex: '#a07042'
          }
        }]
    },
    {
      description: 'An alloy of BTC asset variants on Osmosis.',
      extended_description: 'Multiple Bitcoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of BTC.',
      denom_units: [{
          denom: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC',
          exponent: 0
        }, {
          denom: 'allBTC',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3',
      base: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC',
      name: 'Bitcoin',
      display: 'allBTC',
      symbol: 'BTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
      },
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allBTC.svg'
        }]
    },
    {
      description: 'N43 a BitSong Music FanToken',
      denom_units: [{
          denom: 'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
          exponent: 0,
          aliases: ['ft387C1C279D962ED80C09C1D592A92C4275FD7C5D']
        }, {
          denom: 'n43',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
      name: 'N43 Fantoken',
      display: 'n43',
      symbol: 'N43',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'bitsong',
            base_denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73',
            path: 'transfer/channel-73/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
      },
      images: [{
          image_sync: {
            chain_name: 'bitsong',
            base_denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png',
          theme: {
            primary_color_hex: '#0a0a0a'
          }
        }]
    },
    {
      description: 'Rakoff Token is the Meme Token for Terra Classic',
      denom_units: [{
          denom: 'ibc/46579C587A0B8CF8B0A1FF6B0EFA2082F11876578E47FC81A9CAAD31F424AF98',
          exponent: 0,
          aliases: ['cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2']
        }, {
          denom: 'rakoff',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/46579C587A0B8CF8B0A1FF6B0EFA2082F11876578E47FC81A9CAAD31F424AF98',
      name: 'Juris Protocol',
      display: 'rakoff',
      symbol: 'JURIS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-108'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-78488',
            path: 'transfer/channel-78488/cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/64E62451C9A5682FF3047429C6E4714A02CDC0C35DE35CAB01E18D1188004CEB',
          exponent: 0,
          aliases: ['arbitrum-weth-wei']
        }, {
          denom: 'arbitrum-weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/64E62451C9A5682FF3047429C6E4714A02CDC0C35DE35CAB01E18D1188004CEB',
      name: 'Wrapped Ether (Arbitrum via Axelar)',
      display: 'arbitrum-weth',
      symbol: 'ETH.arb.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Arbitrum Bridge'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: 'wei'
          },
          provider: 'Arbitrum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'arbitrum-weth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/arbitrum-weth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.arb.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.arb.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'arbitrum-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D7D6DEF2A4F7ED0A6F5F0E266C1B2C9726E82F67EBBE49BBB47B3DEC289F8D7B',
          exponent: 0,
          aliases: ['base-weth-wei']
        }, {
          denom: 'base-weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/D7D6DEF2A4F7ED0A6F5F0E266C1B2C9726E82F67EBBE49BBB47B3DEC289F8D7B',
      name: 'Wrapped Ether (Base via Axelar)',
      display: 'base-weth',
      symbol: 'ETH.base.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Base Bridge'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'base',
            base_denom: 'wei'
          },
          provider: 'Base'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'base',
            base_denom: '0x4200000000000000000000000000000000000006'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'base-weth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/base-weth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.base.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.base.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'base-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F9EB60AC212DBF05F4C5ED0FDE03BB9F08309B0EE9899A406AD4B904CF84968E',
          exponent: 0,
          aliases: ['polygon-weth-wei']
        }, {
          denom: 'polygon-weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F9EB60AC212DBF05F4C5ED0FDE03BB9F08309B0EE9899A406AD4B904CF84968E',
      name: 'Wrapped Ether (Polygon via Axelar)',
      display: 'polygon-weth',
      symbol: 'ETH.matic.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'polygon-weth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/polygon-weth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.matic.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.matic.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'polygon-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/245C3CA604AAB4BB9EEA5E86F23F52D59253D8722C8FC9C4E3E69F77C5CD3D2F',
          exponent: 0,
          aliases: ['staISLM']
        }, {
          denom: 'stISLM',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/245C3CA604AAB4BB9EEA5E86F23F52D59253D8722C8FC9C4E3E69F77C5CD3D2F',
      name: 'Stride Staked ISLM',
      display: 'stISLM',
      symbol: 'stISLM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'haqq',
            base_denom: 'aISLM'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'staISLM',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/staISLM'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'staISLM'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'The native token of Mande Network.',
      extended_description: 'Mande network is an open on-chain reputation layer on Web3',
      denom_units: [{
          denom: 'ibc/739D70CB432FE1C6D94AF306B68C14F4CFB0B9EDD1238D3A8718B1B0E84E8547',
          exponent: 0,
          aliases: ['amand', 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF']
        }, {
          denom: 'mand',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/739D70CB432FE1C6D94AF306B68C14F4CFB0B9EDD1238D3A8718B1B0E84E8547',
      name: 'Mande Network',
      display: 'mand',
      symbol: 'MAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'mande',
            base_denom: 'amand',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-51',
            path: 'transfer/channel-51/amand'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'dymension',
            base_denom: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-19774',
            path: 'transfer/channel-19774/transfer/channel-51/amand'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'mande',
            base_denom: 'amand'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
          theme: {
            primary_color_hex: '#274cbf'
          }
        }],
      keywords: [
        'credibility',
        'identity',
        'osmosis_unstable'
      ],
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      }
    },
    {
      description: 'The native token of Neutaro',
      denom_units: [{
          denom: 'ibc/DAED51CBD967A3BE0C467687970AFD97B202AFE4A1718B36936F49178AFE0133',
          exponent: 0,
          aliases: ['uneutaro']
        }, {
          denom: 'neutaro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DAED51CBD967A3BE0C467687970AFD97B202AFE4A1718B36936F49178AFE0133',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutaro',
            base_denom: 'uneutaro',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-79092',
            path: 'transfer/channel-79092/uneutaro'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutaro',
            base_denom: 'uneutaro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
          theme: {
            primary_color_hex: '#cbfb06'
          }
        }]
    },
    {
      description: 'Pepe Bruce Jenner',
      denom_units: [{
          denom: 'ibc/E0D6A7FFAE26FA90C8F1AA3461A5A21E74DB154F183EAE56C96769F48F81FCA2',
          exponent: 0,
          aliases: [
            'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
            'wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP'
          ]
        }, {
          denom: 'wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6',
          exponent: 6,
          aliases: ['pbj', 'PBJ']
        }],
      type_asset: 'ics20',
      base: 'ibc/E0D6A7FFAE26FA90C8F1AA3461A5A21E74DB154F183EAE56C96769F48F81FCA2',
      name: 'Pepe Bruce Jenner',
      display: 'wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6',
      symbol: 'PBJ',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png'
      },
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png',
          theme: {
            primary_color_hex: '#488000',
            background_color_hex: '#ee0000'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373',
          exponent: 0,
          aliases: ['attousdy', 'ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373',
      name: 'Ondo US Dollar Yield',
      display: 'usdy',
      symbol: 'USDY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'ausdy',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/ausdy'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'ausdy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }]
    },
    {
      description: 'Jacob Haertnellez Turtle. Launched by Jake\'s Personally appointed TURD Cult Leader..."NotSeanO\'Riley." TURD is going to lead the shitcoins of Cosmos! Or Rug You. It will be Jake\'s Fault. ',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/turd',
          exponent: 0
        }, {
          denom: 'TURD',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/turd',
      name: 'TURDLE',
      display: 'TURD',
      symbol: 'TURD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/TURD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/TURD.png'
        }]
    },
    {
      description: 'FIRMACHAIN adds a signing and verifying e-contract function to the blockchain. Unlocking new limits of electronic contracts with blockchain technology, FIRMACHAIN seeks to resolve all the social and legal issues (contracts, notarial, etc.) with written contracts through the use of electronic contracts based on FIRMACHAIN’s data blockchain.',
      denom_units: [{
          denom: 'ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839',
          exponent: 0,
          aliases: ['ufct']
        }, {
          denom: 'fct',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839',
      name: 'FIRMACHAIN',
      display: 'fct',
      symbol: 'FCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'firmachain',
            base_denom: 'ufct',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-79241',
            path: 'transfer/channel-79241/ufct'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'firmachain',
            base_denom: 'ufct'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'An alloy of ETH asset variants on Osmosis.',
      extended_description: 'Multiple Ethereum variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of ETH.',
      denom_units: [{
          denom: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH',
          exponent: 0
        }, {
          denom: 'allETH',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm',
      base: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH',
      name: 'Ethereum',
      display: 'allETH',
      symbol: 'ETH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allETH.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allETH.png'
        }]
    },
    {
      description: 'An alloy of SOL asset variants on Osmosis.',
      extended_description: 'Multiple Solana variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of SOL.',
      denom_units: [{
          denom: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL',
          exponent: 0
        }, {
          denom: 'allSOL',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4',
      base: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL',
      name: 'Solana',
      display: 'allSOL',
      symbol: 'SOL',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            background_color_hex: '#000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false,
            background_color_hex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL_circle.png',
          theme: {
            circle: false,
            background_color_hex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL.png',
          theme: {
            circle: false,
            background_color_hex: '#00000000'
          }
        }
      ]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378',
      name: 'Lava',
      display: 'lava',
      symbol: 'LAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'lava',
            base_denom: 'ulava',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-76971',
            path: 'transfer/channel-76971/ulava'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          image_sync: {
            chain_name: 'lava',
            base_denom: 'ulava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
          theme: {
            primary_color_hex: '#6f043e'
          }
        }]
    },
    {
      description: 'The native token of Penumbra.',
      denom_units: [{
          denom: 'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372',
          exponent: 0,
          aliases: ['upenumbra']
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372',
      name: 'Penumbra',
      display: 'penumbra',
      symbol: 'UM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'penumbra',
            base_denom: 'upenumbra',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-79703',
            path: 'transfer/channel-79703/upenumbra'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'penumbra',
            base_denom: 'upenumbra'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true,
            primary_color_hex: '#c7b07f'
          }
        }]
    },
    {
      description: 'TRONIX is the mainnet native token of the TRON Protocol issued by TRON DAO, known as TRX.',
      denom_units: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/TRX.rt',
          exponent: 0
        }, {
          denom: 'trx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/TRX.rt',
      name: 'Tron (Router)',
      display: 'trx',
      symbol: 'TRX.rt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          provider: 'Router'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.png'
        }, {
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }]
    },
    {
      description: 'A synthetic version of USDT issued by Router, which can be unwrapped to USDT on several chains.',
      denom_units: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/USDT.rt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/USDT.rt',
      name: 'Tether USD (Ethereum via Router)',
      display: 'usdt',
      symbol: 'USDT.eth.rt',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Router'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }, {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Cosmo is the best currency in the universe.',
      denom_units: [{
          denom: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
          exponent: 0,
          aliases: ['factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO']
        }, {
          denom: 'COSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
      name: 'Cosmo',
      display: 'COSMO',
      symbol: 'COSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png',
          theme: {
            primary_color_hex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/603140E681973C7A3A33B06B1D377AAD0F6AC376119735CECC04C9184A1AB080',
          exponent: 0,
          aliases: ['stuband']
        }, {
          denom: 'stBAND',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/603140E681973C7A3A33B06B1D377AAD0F6AC376119735CECC04C9184A1AB080',
      name: 'Stride Staked BAND',
      display: 'stBAND',
      symbol: 'stBAND',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'bandchain',
            base_denom: 'uband'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuband',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuband'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuband'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'COOK is the governance token for Start.Cooking, the premier token factory on Cosmos.',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/COOK',
          exponent: 0
        }, {
          denom: 'COOK',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/COOK',
      name: 'COOK',
      display: 'COOK',
      symbol: 'COOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COOK.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COOK.png'
        }]
    },
    {
      description: 'TRONIX is the mainnet native token of the TRON Protocol issued by TRON DAO, known as TRX.',
      denom_units: [{
          denom: 'factory/osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x/alloyed/allTRX',
          exponent: 0,
          aliases: ['sun']
        }, {
          denom: 'trx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x',
      base: 'factory/osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x/alloyed/allTRX',
      name: 'Tron',
      display: 'trx',
      symbol: 'TRX',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png'
      },
      images: [{
          image_sync: {
            chain_name: 'tron',
            base_denom: 'sun'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTRX.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTRX.png',
          theme: {
            circle: true,
            primary_color_hex: '#FF060A',
            background_color_hex: '#FF060A'
          }
        }]
    },
    {
      description: 'The native token of Router Chain',
      denom_units: [{
          denom: 'ibc/3F8F00094F0F79D17750FF69C5F09B078084018570AAF4F1C92C86D3F73E6488',
          exponent: 0,
          aliases: ['route']
        }, {
          denom: 'ROUTE',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/3F8F00094F0F79D17750FF69C5F09B078084018570AAF4F1C92C86D3F73E6488',
      name: 'Router Protocol',
      display: 'ROUTE',
      symbol: 'ROUTE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'routerchain',
            base_denom: 'route',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-79180',
            path: 'transfer/channel-79180/route'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png'
      },
      images: [{
          image_sync: {
            chain_name: 'routerchain',
            base_denom: 'route'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primary_color_hex: '#cb0766'
          }
        }]
    },
    {
      description: 'An alloy of OP asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg/alloyed/allOP',
          exponent: 0
        }, {
          denom: 'op',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg',
      base: 'factory/osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg/alloyed/allOP',
      name: 'Optimism',
      display: 'op',
      symbol: 'OP',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'optimism',
            base_denom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png'
      },
      images: [{
          image_sync: {
            chain_name: 'optimism',
            base_denom: '0x4200000000000000000000000000000000000042'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primary_color_hex: '#fc0424'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allOP.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allOP.png',
          theme: {
            primary_color_hex: '#fc0424'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/14A291DD362798D6805B7ABCB8D09AEEE02176108F89FA09AA43EA2EE096A2A9',
          exponent: 0,
          aliases: ['0x4200000000000000000000000000000000000042', 'op-wei']
        }, {
          denom: 'op',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/14A291DD362798D6805B7ABCB8D09AEEE02176108F89FA09AA43EA2EE096A2A9',
      name: 'Optimism (Axelar)',
      display: 'op',
      symbol: 'OP.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'optimism',
            base_denom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'op-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/op-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'op-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primary_color_hex: '#fc0424'
          }
        }]
    },
    {
      description: 'An alloy of SHIB asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a/alloyed/allSHIB',
          exponent: 0
        }, {
          denom: 'shib',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a',
      base: 'factory/osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a/alloyed/allSHIB',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSHIB.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSHIB.png',
          theme: {
            circle: true,
            primary_color_hex: '#FFA409'
          }
        }]
    },
    {
      description: 'An alloy of ARB asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk/alloyed/allARB',
          exponent: 0
        }, {
          denom: 'arb',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk',
      base: 'factory/osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk/alloyed/allARB',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primary_color_hex: '#253545'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allARB.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allARB.png',
          theme: {
            primary_color_hex: '#9DCCED'
          }
        }]
    },
    {
      description: 'An alloy of LINK asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw/alloyed/allLINK',
          exponent: 0
        }, {
          denom: 'link',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw',
      base: 'factory/osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw/alloyed/allLINK',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allLINK.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allLINK.png',
          theme: {
            circle: true,
            primary_color_hex: '#2A5ADA'
          }
        }]
    },
    {
      description: 'An alloy of PEPE asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx/alloyed/allPEPE',
          exponent: 0
        }, {
          denom: 'pepe',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx',
      base: 'factory/osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx/alloyed/allPEPE',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Osmosis'
        }],
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
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allPEPE.png',
          theme: {
            circle: true,
            primary_color_hex: '#549C44'
          }
        }]
    },
    {
      description: 'An alloy of DOT asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02/alloyed/allDOT',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02',
      base: 'factory/osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02/alloyed/allDOT',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allDOT.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allDOT.png',
          theme: {
            circle: true,
            primary_color_hex: '#E6007A'
          }
        }]
    },
    {
      description: 'Unicorn from Solana via Picasso IBC',
      denom_units: [{
          denom: 'ibc/C91210281CEB708DC6E41A47FC9EC298F45712273DD58C682BEBAD00DCB59DC2',
          exponent: 0,
          aliases: ['UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z', 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1']
        }, {
          denom: 'unicorn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C91210281CEB708DC6E41A47FC9EC298F45712273DD58C682BEBAD00DCB59DC2',
      name: 'Unicorn (Picasso)',
      display: 'unicorn',
      symbol: 'UWU.pica',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'unicorn',
            base_denom: 'uwunicorn'
          },
          provider: 'Unicorn'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/UWU.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/UWU.pica.png'
        }, {
          image_sync: {
            chain_name: 'composable',
            base_denom: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png',
          theme: {
            primary_color_hex: '#D44CE6'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/108604FDBE97DAEF128FD4ECFEB2A8AFC2D04A7162C97EAA2FD5BCB0869D0BBC',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/108604FDBE97DAEF128FD4ECFEB2A8AFC2D04A7162C97EAA2FD5BCB0869D0BBC',
      name: 'Deenar',
      display: 'DEEN',
      symbol: 'DEEN',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'comex',
            base_denom: 'XAU'
          },
          provider: 'Deenar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'haqq',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-1575',
            path: 'transfer/channel-1575/erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'haqq',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'CosmoUSD',
      extended_description: 'Community loyalty points.',
      denom_units: [{
          denom: 'factory/osmo104jtrwcljnxfljhml8mxrw7qetcsdmqvy3sprw/ucosmousd',
          exponent: 0,
          aliases: ['ucosmousd']
        }, {
          denom: 'CosmoUSD',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo104jtrwcljnxfljhml8mxrw7qetcsdmqvy3sprw/ucosmousd',
      name: 'CosmoUSD',
      display: 'CosmoUSD',
      symbol: 'COSMOUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CosmoUSD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CosmoUSD.png',
          theme: {
            primary_color_hex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      }
    },
    {
      description: 'The Representative factory token for Trump Kemistry',
      denom_units: [{
          denom: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
          exponent: 0
        }, {
          denom: 'XTRUMP',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl',
      base: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
      name: 'XTRUMP',
      display: 'XTRUMP',
      symbol: 'XTRUMP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png',
          theme: {
            primary_color_hex: '#b02b27'
          }
        }]
    },
    {
      description: 'Tether USDt from Ethereum via Peggy bridge.',
      denom_units: [{
          denom: 'ibc/2AD3C64D19ADFBB522CD738B58F421102143F827C1CAFF574A8BF0B81017D53D',
          exponent: 0,
          aliases: ['peggy0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2AD3C64D19ADFBB522CD738B58F421102143F827C1CAFF574A8BF0B81017D53D',
      name: 'Tether USD (Injective)',
      display: 'usdt',
      symbol: 'USDT.inj',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Peggy'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.png'
        }, {
          image_sync: {
            chain_name: 'injective',
            base_denom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Fractionalized Bad Kids',
      extended_description: 'Fractionalized Bad Kids NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBAD',
          exponent: 0
        }, {
          denom: 'fBAD',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBAD',
      name: 'fBAD',
      display: 'fBAD',
      symbol: 'fBAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBAD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBAD.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Mad Scientists',
      extended_description: 'Fractionalized Mad Scientists NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fMAD',
          exponent: 0
        }, {
          denom: 'fMAD',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fMAD',
      name: 'fMAD',
      display: 'fMAD',
      symbol: 'fMAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fMAD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fMAD.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Celestine Sloth Society',
      extended_description: 'Fractionalized Celestine Sloth Society NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fSLOTH',
          exponent: 0
        }, {
          denom: 'fSLOTH',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fSLOTH',
      name: 'fSLOTH',
      display: 'fSLOTH',
      symbol: 'fSLOTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fSLOTH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fSLOTH.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized DAONuts',
      extended_description: 'Fractionalized DAONuts NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fNUT',
          exponent: 0
        }, {
          denom: 'fNUT',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fNUT',
      name: 'fNUT',
      display: 'fNUT',
      symbol: 'fNUT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fNUT.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fNUT.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Mars Protocol is a cross-collateralized Money Market Protocol on Neutron and Osmosis',
      denom_units: [{
          denom: 'ibc/B67DF59507B3755EEDE0866C449445BD54B4DA82CCEBA89D775E53DC35664255',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'MARS',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B67DF59507B3755EEDE0866C449445BD54B4DA82CCEBA89D775E53DC35664255',
      name: 'Mars Protocol token',
      display: 'MARS',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg',
          theme: {
            primary_color_hex: '#ef4136'
          }
        }]
    },
    {
      description: 'The native token of TON',
      denom_units: [{
          denom: 'ibc/905889A7F0B94F1CE1506D9BADF13AE9141E4CBDBCD565E1DFC7AE418B3E3E98',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/905889A7F0B94F1CE1506D9BADF13AE9141E4CBDBCD565E1DFC7AE418B3E3E98',
      name: 'Toncoin (Oraichain Labs TON Bridge)',
      display: 'ton',
      symbol: 'TON.orai',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          provider: 'Oraichain Labs TON Bridge'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'oraichain',
            base_denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
            channel_id: 'channel-13'
          },
          chain: {
            channel_id: 'channel-216',
            path: 'transfer/channel-216/factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.png'
        }, {
          image_sync: {
            chain_name: 'oraichain',
            base_denom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton'
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
      description: 'An alloy of TON asset variants on Osmosis.',
      extended_description: 'Multiple Toncoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of TON.',
      denom_units: [{
          denom: 'factory/osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4/alloyed/allTON',
          exponent: 0
        }, {
          denom: 'ton',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4',
      base: 'factory/osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4/alloyed/allTON',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primary_color_hex: '#0088CC',
            background_color_hex: '#0088CC'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTON.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTON.png',
          theme: {
            primary_color_hex: '#0088CC'
          }
        }]
    },
    {
      description: 'stBTC is the liquid principal token of the Lorenzo protocol, designed to represent staked Bitcoin within the Babylon ecosystem.\n\n',
      denom_units: [{
          denom: 'ibc/453B5B25834A5D4B8FE1E894E69D73F46424F28E8ED3D8E8CA654AEFF1EC5D3B',
          exponent: 0,
          aliases: ['stBTC']
        }, {
          denom: 'display_stBTC',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/453B5B25834A5D4B8FE1E894E69D73F46424F28E8ED3D8E8CA654AEFF1EC5D3B',
      name: 'Lorenzo stBTC',
      display: 'display_stBTC',
      symbol: 'stBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Lorenzo'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'lorenzo',
            base_denom: 'stBTC',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-79840',
            path: 'transfer/channel-79840/stBTC'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'lorenzo',
            base_denom: 'stBTC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg',
          theme: {
            primary_color_hex: '#133348'
          }
        }]
    },
    {
      description: 'Banana Vault Token - Peelworks Factory II',
      denom_units: [{
          denom: 'factory/osmo1xu0gk9aggv79597xwazyfzaggv2pze9z7cq3p9p72tkkux9a7xaqufa792/BVT',
          exponent: 0
        }, {
          denom: 'BVT0',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1xu0gk9aggv79597xwazyfzaggv2pze9z7cq3p9p72tkkux9a7xaqufa792/BVT',
      name: 'Peelworks Factory',
      display: 'BVT0',
      symbol: 'BVT0',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT0.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT0.png',
          theme: {
            primary_color_hex: '#203135'
          }
        }]
    },
    {
      description: 'Banana Vault Token - Banana Beach (🍹,🌴) II',
      denom_units: [{
          denom: 'factory/osmo16nxtnrnl7lctvnhhpcxqmmpv63n93zgg0ukaveyc0jl4dtad79cs53c3an/BVT',
          exponent: 0
        }, {
          denom: 'BVT1',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo16nxtnrnl7lctvnhhpcxqmmpv63n93zgg0ukaveyc0jl4dtad79cs53c3an/BVT',
      name: 'Banana Beach',
      display: 'BVT1',
      symbol: 'BVT1',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT1.png',
          theme: {
            primary_color_hex: '#00bdc3'
          }
        }]
    },
    {
      description: 'Avail is a web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.',
      denom_units: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/AVAIL.rt',
          exponent: 0,
          aliases: [
            '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
            'avail-wei',
            'avail'
          ]
        }, {
          denom: 'AVAIL',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/AVAIL.rt',
      name: 'Avail (Ethereum via Router)',
      display: 'AVAIL',
      symbol: 'AVAIL.eth.rt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'avail',
            base_denom: 'avail'
          },
          provider: 'Avail Bridge'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8'
          },
          provider: 'Router'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.png',
          theme: {
            circle: false,
            primary_color_hex: '#2B80D7'
          }
        }, {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.png',
          theme: {
            circle: false,
            primary_color_hex: '#2B80D7'
          }
        }]
    },
    {
      description: 'EURe is a Euro-backed stablecoin issued by Monerium.',
      denom_units: [{
          denom: 'ibc/92AE2F53284505223A1BB80D132F859A00E190C6A738772F0B3EF65E20BA484F',
          exponent: 0,
          aliases: ['ueure']
        }, {
          denom: 'eure',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/92AE2F53284505223A1BB80D132F859A00E190C6A738772F0B3EF65E20BA484F',
      name: 'Monerium EUR emoney',
      display: 'eure',
      symbol: 'EURe',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'EUR'
          },
          provider: 'Monerium'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          provider: 'Monerium'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'ueure',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/ueure'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg',
          theme: {
            circle: true,
            primary_color_hex: '#0095D7',
            background_color_hex: '#FFFFFF'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'ibc/631DB9935E8523BDCF76B55129F5238A14C809CCB3B43AECC157DC19702F3F9E',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/631DB9935E8523BDCF76B55129F5238A14C809CCB3B43AECC157DC19702F3F9E',
      name: 'Andromeda',
      display: 'andr',
      symbol: 'ANDR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'andromeda',
            base_denom: 'uandr',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-81924',
            path: 'transfer/channel-81924/uandr'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          image_sync: {
            chain_name: 'andromeda',
            base_denom: 'uandr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'Chain-key Bitcoin bridged via Omnity Network.',
      denom_units: [{
          denom: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-icrc-ckBTC',
          exponent: 0,
          aliases: ['uckBTC']
        }, {
          denom: 'ckBTC',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm',
      base: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-icrc-ckBTC',
      name: 'Chain-key Bitcoin',
      display: 'ckBTC',
      symbol: 'ckBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Omnity Network'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'internetcomputer',
            base_denom: 'uckBTC'
          },
          provider: 'Omnity Network'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.png'
      },
      images: [{
          image_sync: {
            chain_name: 'internetcomputer',
            base_denom: 'uckBTC'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.png',
          theme: {
            circle: true,
            primary_color_hex: '#3B00B9',
            background_color_hex: '#3B00B9'
          }
        }]
    },
    {
      description: 'Fractionalized Pixel Wizards',
      extended_description: 'Fractionalized Pixel Wizards NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWIZ',
          exponent: 0
        }, {
          denom: 'fWIZ',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWIZ',
      name: 'fWIZ',
      display: 'fWIZ',
      symbol: 'fWIZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWIZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWIZ.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Pixel Witches',
      extended_description: 'Fractionalized Pixel Witches NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWITCH',
          exponent: 0
        }, {
          denom: 'fWITCH',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWITCH',
      name: 'fWITCH',
      display: 'fWITCH',
      symbol: 'fWITCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWITCH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWITCH.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Cryptonium Maker',
      extended_description: 'Fractionalized Cryptonium Maker NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fCRYPTONIUM',
          exponent: 0
        }, {
          denom: 'fCRYPTONIUM',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fCRYPTONIUM',
      name: 'fCRYPTONIUM',
      display: 'fCRYPTONIUM',
      symbol: 'fCRYPTONIUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fCRYPTONIUM.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fCRYPTONIUM.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Atlas DAO',
      extended_description: 'Fractionalized Atlas DAO NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fATLAS',
          exponent: 0
        }, {
          denom: 'fATLAS',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fATLAS',
      name: 'fATLAS',
      display: 'fATLAS',
      symbol: 'fATLAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fATLAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fATLAS.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Geckies',
      extended_description: 'Fractionalized Geckies NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fGECK',
          exponent: 0
        }, {
          denom: 'fGECK',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fGECK',
      name: 'fGECK',
      display: 'fGECK',
      symbol: 'fGECK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fGECK.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fGECK.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Rekt Bulls',
      extended_description: 'Fractionalized Rekt Bulls NFT Via Fractal.fun',
      denom_units: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBULLS',
          exponent: 0
        }, {
          denom: 'fBULLS',
          exponent: 9
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBULLS',
      name: 'fBULLS',
      display: 'fBULLS',
      symbol: 'fBULLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBULLS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBULLS.png',
          theme: {
            primary_color_hex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'SinGarden token',
      denom_units: [{
          denom: 'ibc/2BF7FB3908B469FA9672767DC74AF8A18E2F47F8B623B0685DE290B828FCBD23',
          exponent: 0,
          aliases: ['uSIN', 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin']
        }, {
          denom: 'SIN',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2BF7FB3908B469FA9672767DC74AF8A18E2F47F8B623B0685DE290B828FCBD23',
      name: 'SIN',
      display: 'SIN',
      symbol: 'SIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png',
          theme: {
            primary_color_hex: '#ebf0f4'
          }
        }]
    },
    {
      description: 'Kima is an asset-agnostic interoperability infrastructure that connects blockchain networks and legacy financial systems, enabling secure, scalable cross-chain transactions and seamless communication across ecosystems.',
      denom_units: [{
          denom: 'ibc/629B5691DE993DCD07AA1B0587AD52A7FA4E8F28B77DE15BCBDF936CA6F76E6C',
          exponent: 0,
          aliases: ['uKIMA']
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/629B5691DE993DCD07AA1B0587AD52A7FA4E8F28B77DE15BCBDF936CA6F76E6C',
      name: 'Kima Network',
      display: 'KIMA',
      symbol: 'KIMA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kimanetwork',
            base_denom: 'uKIMA',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-86496',
            path: 'transfer/channel-86496/uKIMA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kimanetwork',
            base_denom: 'uKIMA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
        }]
    },
    {
      description: 'STOS coin is the native token for the Stratos Blockchain. Stratos is a pioneering decentralized infrastructure service provider, revolutionizing AI and DePIN with advanced decentralized solutions in storage, computing, databases, and blockchain services. We empower Web 3.0 developpers and dApps through our scalable, reliable, and high-performance networks.',
      denom_units: [
        {
          denom: 'ibc/ABD49F44559CB3E557CC458459CB6A67CEBD66E23C7674A0B2B445230BDA1F6C',
          exponent: 0,
          aliases: ['wei']
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'stos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/ABD49F44559CB3E557CC458459CB6A67CEBD66E23C7674A0B2B445230BDA1F6C',
      name: 'Stratos',
      display: 'stos',
      symbol: 'STOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stratos',
            base_denom: 'wei',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-81016',
            path: 'transfer/channel-81016/wei'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stratos',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
          theme: {
            primary_color_hex: '#04847c'
          }
        }]
    },
    {
      description: 'Uniswap UNI on Osmosis via Axelar',
      denom_units: [{
          denom: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
          exponent: 0,
          aliases: ['uni-wei']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
      name: 'Uniswap (Axelar)',
      display: 'uni',
      symbol: 'UNI.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uni-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uni-wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.png',
          theme: {
            primary_color_hex: '#FF007A'
          }
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uni-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'An alloy of UNI asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8/alloyed/allUNI',
          exponent: 0
        }, {
          denom: 'allUNI',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8',
      base: 'factory/osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8/alloyed/allUNI',
      name: 'Uniswap',
      display: 'allUNI',
      symbol: 'UNI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/54B2D9DC9602A1CE2A0329D51C6A1C7C4ADE71477186AEAAA549318C4513A453',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/54B2D9DC9602A1CE2A0329D51C6A1C7C4ADE71477186AEAAA549318C4513A453',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'pryzm',
            base_denom: 'lp:8:uosmo',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-75755',
            path: 'transfer/channel-75755/lp:8:uosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'pryzm',
            base_denom: 'lp:8:uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }]
    },
    {
      description: 'Int3face blockchain native token',
      denom_units: [{
          denom: 'ibc/7D29C888219883C47C623578ACACFC89CC29AA70FBF09C895A1EED911BF90F32',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7D29C888219883C47C623578ACACFC89CC29AA70FBF09C895A1EED911BF90F32',
      name: 'Int3face',
      display: 'int3',
      symbol: 'INT3',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'uint3',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/uint3'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'uint3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Dogecoin on Int3face',
      denom_units: [{
          denom: 'ibc/B3DFDC2958A2BE482532DA3B6B5729B469BE7475598F7487D98B1B3E085245DE',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge']
        }, {
          denom: 'doge',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/B3DFDC2958A2BE482532DA3B6B5729B469BE7475598F7487D98B1B3E085245DE',
      name: 'Dogecoin (Int3)',
      display: 'doge',
      symbol: 'DOGE.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.png'
        }, {
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Bitcoin on Int3face',
      denom_units: [{
          denom: 'ibc/2F4258D6E1E01B203D6CA83F2C7E4959615053A21EC2C2FC196F7911CAC832EF',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc']
        }, {
          denom: 'btc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/2F4258D6E1E01B203D6CA83F2C7E4959615053A21EC2C2FC196F7911CAC832EF',
      name: 'Bitcoin (Int3)',
      display: 'btc',
      symbol: 'BTC.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.png'
        }, {
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Bitcoin-Cash on Int3face',
      denom_units: [{
          denom: 'ibc/869E01805EBBDDCAEA588666CD5149728B7DC7D69F30D92F77AD67F77CEB3FDA',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch']
        }, {
          denom: 'bch',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/869E01805EBBDDCAEA588666CD5149728B7DC7D69F30D92F77AD67F77CEB3FDA',
      name: 'Bitcoin Cash (Int3)',
      display: 'bch',
      symbol: 'BCH.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoincash',
            base_denom: 'sat'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.png'
        }, {
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Litecoin on Int3face',
      denom_units: [{
          denom: 'ibc/905326586AE1C86AC8B1CDB20BE957DE5FB23963EDD2C9ADD3E835CC22115A46',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc']
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/905326586AE1C86AC8B1CDB20BE957DE5FB23963EDD2C9ADD3E835CC22115A46',
      name: 'Litecoin (Int3)',
      display: 'ltc',
      symbol: 'LTC.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'litecoin',
            base_denom: 'litoshi'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.png'
        }, {
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'TON on Int3face',
      denom_units: [{
          denom: 'ibc/DDE1238DCBC338C0FD0700A72CBD64C017B7A646C4A46789ADFB5D47F1E52E38',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/DDE1238DCBC338C0FD0700A72CBD64C017B7A646C4A46789ADFB5D47F1E52E38',
      name: 'TON (Int3)',
      display: 'ton',
      symbol: 'TON.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.png'
        }, {
          image_sync: {
            chain_name: 'int3face',
            base_denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ton.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Arbitrum on Axelar',
      denom_units: [{
          denom: 'ibc/57B63A0795B6BC0AC4EFD0D4DEE9FE71FCC1D0FFA87F6280C9CDEF4F6727A173',
          exponent: 0,
          aliases: ['arbitrum-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/57B63A0795B6BC0AC4EFD0D4DEE9FE71FCC1D0FFA87F6280C9CDEF4F6727A173',
      name: 'Tether USD (Ethereum) (Arbitrum via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.arb.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Arbitrum Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'arbitrum-uusdt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/arbitrum-uusdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.arb.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.arb.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'arbitrum-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Optimism on Axelar',
      denom_units: [{
          denom: 'ibc/EEA21E12A250B7FBBCBBBD1F7AA78984F5C12D684B32EBEEFC585FF596A7BCDA',
          exponent: 0,
          aliases: ['optimism-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EEA21E12A250B7FBBCBBBD1F7AA78984F5C12D684B32EBEEFC585FF596A7BCDA',
      name: 'Tether USD (Ethereum) (optimism via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.op.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Optimism Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'optimism',
            base_denom: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'optimism-uusdt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/optimism-uusdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.op.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.op.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'optimism-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Polygon on Axelar',
      denom_units: [{
          denom: 'ibc/2F6003A92088B989A159C593C551DF7B04FA0A0419CA3ED087E45E0006ECFF6E',
          exponent: 0,
          aliases: ['polygon-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2F6003A92088B989A159C593C551DF7B04FA0A0419CA3ED087E45E0006ECFF6E',
      name: 'Tether USD (Ethereum) (Polygon via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.matic.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'polygon-uusdt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pol.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pol.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'polygon-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }]
    },
    {
      description: 'Coinbase Wrapped Bitcoin on Axelar',
      denom_units: [{
          denom: 'ibc/616C2EA69BC328F245CE449785CB0B526B462C48F19DCF9B3D30699579B4308A',
          exponent: 0,
          aliases: ['cbbtc-satoshi']
        }, {
          denom: 'cbbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/616C2EA69BC328F245CE449785CB0B526B462C48F19DCF9B3D30699579B4308A',
      name: 'Coinbase Wrapped BTC (Axelar)',
      display: 'cbbtc',
      symbol: 'cbBTC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'base',
            base_denom: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'cbbtc-satoshi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/cbbtc-satoshi'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'cbbtc-satoshi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.png',
          theme: {
            circle: true,
            primary_color_hex: '#0052FF'
          }
        }]
    },
    {
      description: 'Fire Bitcoin on Axelar',
      denom_units: [{
          denom: 'ibc/22C342A34DD0189AC2B2697EE76C360A9FBA53748ABA76E12C3A9E9F5F1E130F',
          exponent: 0,
          aliases: ['fbtc-satoshi']
        }, {
          denom: 'fbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/22C342A34DD0189AC2B2697EE76C360A9FBA53748ABA76E12C3A9E9F5F1E130F',
      name: 'Fire Bitcoin (Axelar)',
      display: 'fbtc',
      symbol: 'FBTC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Ignition'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'mantle',
            base_denom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'fbtc-satoshi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/fbtc-satoshi'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'fbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.svg',
          theme: {
            circle: false,
            primary_color_hex: '#8F00FF',
            background_color_hex: '#00000000'
          }
        }]
    },
    {
      description: 'Lombard Staked Bitcoin on Axelar',
      denom_units: [{
          denom: 'ibc/4AC81C97BBB5482536F6401328E0E10BCCD98F0F471DCF64319A811E25E53CAB',
          exponent: 0,
          aliases: ['lbtc-satoshi']
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/4AC81C97BBB5482536F6401328E0E10BCCD98F0F471DCF64319A811E25E53CAB',
      name: 'Lombard Staked Bitcoin (Axelar)',
      display: 'lbtc',
      symbol: 'LBTC.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Lombard'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'lbtc-satoshi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/lbtc-satoshi'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.png'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'lbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#162E2F'
          }
        }]
    },
    {
      description: 'Roostock BTC bridged via Router.',
      denom_units: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/BTC.rt',
          exponent: 0,
          aliases: ['0x542FDA317318eBf1d3DeAF76E0B632741a7e677d', 'sat']
        }, {
          denom: 'rbtc',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/BTC.rt',
      name: 'Rootstock (Router)',
      display: 'rbtc',
      symbol: 'RBTC.rt',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Rootstock'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'rootstock',
            base_denom: 'sat'
          },
          provider: 'Rootstock'
        },
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'rootstock',
            base_denom: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d'
          },
          provider: 'Router'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.png'
        }, {
          image_sync: {
            chain_name: 'rootstock',
            base_denom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          theme: {
            circle: false,
            primary_color_hex: '#FF9931',
            background_color_hex: '#00000000'
          }
        }]
    },
    {
      description: 'An alloy of DOGE asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40/alloyed/allDOGE',
          exponent: 0
        }, {
          denom: 'allDOGE',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40',
      base: 'factory/osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40/alloyed/allDOGE',
      name: 'Dogecoin',
      display: 'allDOGE',
      symbol: 'DOGE',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png'
      },
      images: [{
          image_sync: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png',
          theme: {
            primary_color_hex: '#bda148'
          }
        }]
    },
    {
      description: 'An alloy of LTC asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v/alloyed/allLTC',
          exponent: 0
        }, {
          denom: 'allLTC',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v',
      base: 'factory/osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v/alloyed/allLTC',
      name: 'Litecoin',
      display: 'allLTC',
      symbol: 'LTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'litecoin',
            base_denom: 'litoshi'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.png'
      },
      images: [{
          image_sync: {
            chain_name: 'litecoin',
            base_denom: 'litoshi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.png',
          theme: {
            primary_color_hex: '#345D9D',
            circle: true
          }
        }]
    },
    {
      description: 'An alloy of BCH asset variants on Osmosis.',
      denom_units: [{
          denom: 'factory/osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz/alloyed/allBCH',
          exponent: 0
        }, {
          denom: 'allBCH',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz',
      base: 'factory/osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz/alloyed/allBCH',
      name: 'Bitcoin Cash',
      display: 'allBCH',
      symbol: 'BCH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoincash',
            base_denom: 'sat'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png'
      },
      images: [{
          image_sync: {
            chain_name: 'bitcoincash',
            base_denom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png',
          theme: {
            primary_color_hex: '#0AC18E',
            circle: true
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795',
      name: 'MANTRA',
      display: 'om',
      symbol: 'OM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'mantrachain',
            base_denom: 'uom',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-85077',
            path: 'transfer/channel-85077/uom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'mantrachain',
            base_denom: 'uom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primary_color_hex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of AtomOne',
      denom_units: [{
          denom: 'ibc/715283E4A955EB803AB1DD30B488587A4D63BF0B51BADA537053DEE479BA10D6',
          exponent: 0,
          aliases: ['uatone']
        }, {
          denom: 'atone',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/715283E4A955EB803AB1DD30B488587A4D63BF0B51BADA537053DEE479BA10D6',
      name: 'AtomOne',
      display: 'atone',
      symbol: 'ATONE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'atomone',
            base_denom: 'uatone',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-85309',
            path: 'transfer/channel-85309/uatone'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'atomone',
            base_denom: 'uatone'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }]
    },
    {
      description: 'The Spice memecoin',
      denom_units: [{
          denom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice',
          exponent: 0
        }, {
          denom: 'Spice',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice',
      name: 'Spice',
      display: 'Spice',
      symbol: 'SPICE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png',
          theme: {
            primary_color_hex: '#e5ba44'
          }
        }],
      coingecko_id: 'spice-2',
      keywords: ['meme'],
      socials: {
        twitter: 'https://x.com/spiceoncosmos'
      }
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      denom_units: [{
          denom: 'ibc/21D8071EF5B02A86D945430D859A594CBF28287D38104A264BB9FD3B22BBF5DE',
          exponent: 0,
          aliases: ['yum-wei']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/21D8071EF5B02A86D945430D859A594CBF28287D38104A264BB9FD3B22BBF5DE',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'yum-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/yum-wei'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primary_color_hex: '#33a6e7'
          }
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      }
    },
    {
      description: 'GATA Yield DAO Governance Token powered by OmniFlixHub',
      denom_units: [{
          denom: 'ibc/50F886EFA15E1FF3D9226B177083A1EFF944176181C70B6131D74FE5AFB1F2C0',
          exponent: 0,
          aliases: ['factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata']
        }, {
          denom: 'ygata',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/50F886EFA15E1FF3D9226B177083A1EFF944176181C70B6131D74FE5AFB1F2C0',
      name: 'Yield GATA',
      display: 'ygata',
      symbol: 'YGATA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'omniflixhub',
            base_denom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-199',
            path: 'transfer/channel-199/factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'omniflixhub',
            base_denom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg',
          theme: {
            primary_color_hex: '#7b5aff'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/3B95D63B520C283BCA86F8CD426D57584039463FD684A5CBA31D2780B86A1995',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/3B95D63B520C283BCA86F8CD426D57584039463FD684A5CBA31D2780B86A1995',
      name: 'Dragon',
      display: 'DGN',
      symbol: 'DGN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dungeon',
            base_denom: 'udgn',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-85791',
            path: 'transfer/channel-85791/udgn'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          image_sync: {
            chain_name: 'dungeon',
            base_denom: 'udgn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'Synternet is a blockchain that powers modular, interoperable data infrastructure across all major chains.',
      denom_units: [{
          denom: 'ibc/1B454982D3746951510D3845145B83628D4ED380D95722C8077776C4689F973A',
          exponent: 0,
          aliases: ['usynt']
        }, {
          denom: 'SYNT',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1B454982D3746951510D3845145B83628D4ED380D95722C8077776C4689F973A',
      name: 'Synternet',
      display: 'SYNT',
      symbol: 'SYNT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'synternet',
            base_denom: 'usynt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-85186',
            path: 'transfer/channel-85186/usynt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'synternet',
            base_denom: 'usynt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }]
    },
    {
      description: 'Sssshhh…',
      denom_units: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bomu',
          exponent: 0
        }, {
          denom: 'BOMU',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bomu',
      name: '$bomu',
      display: 'BOMU',
      symbol: 'BOMU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bomu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bomu.png'
        }]
    },
    {
      description: 'Drop staked ATOM',
      denom_units: [{
          denom: 'ibc/C1B4D4804EB8F95FFB75E6395A301F0AD6D7DDE5C3A45571B70E46A368DD353E',
          exponent: 0,
          aliases: ['factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom']
        }, {
          denom: 'dATOM',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C1B4D4804EB8F95FFB75E6395A301F0AD6D7DDE5C3A45571B70E46A368DD353E',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Drop Protocol'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }]
    },
    {
      description: 'Kima is an asset-agnostic interoperability infrastructure that connects blockchain networks and legacy financial systems, enabling secure, scalable cross-chain transactions and seamless communication across ecosystems.',
      denom_units: [{
          denom: 'ibc/A6712952E566B8A9F29D0A533F043C3CE3CF9870B01A2180E390133119C14A71',
          exponent: 0,
          aliases: ['uKIMA']
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A6712952E566B8A9F29D0A533F043C3CE3CF9870B01A2180E390133119C14A71',
      name: 'Kima Network',
      display: 'KIMA',
      symbol: 'KIMA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kimanetwork',
            base_denom: 'uKIMA',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-83350',
            path: 'transfer/channel-83350/uKIMA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kimanetwork',
            base_denom: 'uKIMA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
      name: 'furya',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'furya',
            base_denom: 'ufury',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-8690',
            path: 'transfer/channel-8690/ufury'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'furya',
            base_denom: 'ufury'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: ['gaming', 'staking']
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      denom_units: [{
          denom: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
          exponent: 0,
          aliases: ['ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78']
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'pundix',
            base_denom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-12618',
            path: 'transfer/channel-12618/transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of dHealth',
      denom_units: [{
          denom: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
          exponent: 0,
          aliases: ['udhp']
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
      name: 'dHealth',
      display: 'dhp',
      symbol: 'DHP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dhealth',
            base_denom: 'udhp',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-38776',
            path: 'transfer/channel-38776/udhp'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dhealth',
            base_denom: 'udhp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primary_color_hex: '#140c7c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      denom_units: [{
          denom: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg',
          theme: {
            primary_color_hex: '#2474cb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Nomic\'s native token.',
      denom_units: [{
          denom: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
          exponent: 0,
          aliases: ['unom']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'unom',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/unom'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
          theme: {
            primary_color_hex: '#6404fc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description: 'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denom_units: [{
          denom: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
          exponent: 0
        }, {
          denom: 'ymos',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png',
          theme: {
            primary_color_hex: '#2c3554'
          }
        }]
    },
    {
      description: 'Memecoin for The International Brane Wave',
      denom_units: [{
          denom: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
          exponent: 0,
          aliases: ['brnz']
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      name: 'Branez',
      display: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      symbol: 'BRNZ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
        }]
    },
    {
      description: 'ashLAB - Burned LAB',
      extended_description: 'ashLAB - receipt token recieved when burning LAB via ASH DAOs Furnace',
      denom_units: [{
          denom: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/lab.ash',
          exponent: 0
        }, {
          denom: 'ashLAB',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07',
      base: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/lab.ash',
      name: 'Burned LAB',
      display: 'ashLAB',
      symbol: 'ashLAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashLAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashLAB.png',
          theme: {
            primary_color_hex: '#ebb093'
          }
        }]
    },
    {
      description: 'GRAC is the official token of Racoon.Bet\'s gaming platform.',
      denom_units: [{
          denom: 'ibc/58E4261D2E21FE3A459C290A9F97F3DCD257B28F48AAE828298B38E048804829',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac']
        }, {
          denom: 'grac',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/58E4261D2E21FE3A459C290A9F97F3DCD257B28F48AAE828298B38E048804829',
      name: 'Gaming RAC Token',
      display: 'grac',
      symbol: 'GRAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png'
      },
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png',
          theme: {
            primary_color_hex: '#f5bf09'
          }
        }]
    },
    {
      description: 'USDC supplied on Mars looped using Membrane by a vault that also has an entry fee',
      denom_units: [{
          denom: 'factory/osmo1vf6e300hv2qe7r5rln8deft45ewgyytjnwfrdfcv5rgzrfy0s6cswjqf9r/mars-usdc-looped',
          exponent: 0
        }, {
          denom: 'earnUSDC',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1vf6e300hv2qe7r5rln8deft45ewgyytjnwfrdfcv5rgzrfy0s6cswjqf9r/mars-usdc-looped',
      name: 'Mars Looped USDC Vault',
      display: 'earnUSDC',
      symbol: 'earnUSDC'
    },
    {
      description: 'Auto-compounding vault for Membrane\'s Stability Pool used to ease the UX of compounding CDT',
      denom_units: [{
          denom: 'factory/osmo1jw6r68y0uhfmqagc7uhtdddctc7wq95pncvrqnvtd47w4hx46p7se9nju5/earn-cdt',
          exponent: 0
        }, {
          denom: 'earnCDT',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1jw6r68y0uhfmqagc7uhtdddctc7wq95pncvrqnvtd47w4hx46p7se9nju5/earn-cdt',
      name: 'Earn CDT Vault',
      display: 'earnCDT',
      symbol: 'earnCDT'
    },
    {
      description: 'The Sherpa memecoin',
      denom_units: [{
          denom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa',
          exponent: 0
        }, {
          denom: 'Sherpa',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa',
      name: 'Sherpa',
      display: 'Sherpa',
      symbol: 'SHERPA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png',
          theme: {
            primary_color_hex: '#fe9cdf'
          }
        }],
      keywords: ['meme']
    },
    {
      description: 'An alloy of FIL asset variants on Osmosis.',
      extended_description: 'Multiple Filecoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of FIL.',
      denom_units: [{
          denom: 'factory/osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs/alloyed/allFIL',
          exponent: 0
        }, {
          denom: 'allFIL',
          exponent: 12
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs',
      base: 'factory/osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs/alloyed/allFIL',
      name: 'Filecoin',
      display: 'allFIL',
      symbol: 'FIL',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'filecoin',
            base_denom: 'attoFIL'
          },
          provider: 'Osmosis'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png'
      },
      images: [{
          image_sync: {
            chain_name: 'filecoin',
            base_denom: 'attoFIL'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          theme: {
            primary_color_hex: '#0493fc'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allFIL.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allFIL.png'
        }]
    }
  ]
};
export default info;