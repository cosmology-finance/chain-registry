import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'solana',
  assets: [
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [{
          denom: 'Lamport',
          exponent: 0
        }, {
          denom: 'SOL',
          exponent: 9
        }],
      type_asset: 'svm-base',
      base: 'Lamport',
      name: 'Solana',
      display: 'SOL',
      symbol: 'SOL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      coingecko_id: 'solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      type_asset: 'erc20',
      address: 'So11111111111111111111111111111111111111112',
      denom_units: [{
          denom: 'So11111111111111111111111111111111111111112',
          exponent: 0
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      base: 'So11111111111111111111111111111111111111112',
      name: 'Wrapped SOL',
      display: 'wsol',
      symbol: 'WSOL',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Solana'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      coingecko_id: 'wrapped-solana',
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      type_asset: 'erc20',
      address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom_units: [{
          denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
          exponent: 0
        }, {
          denom: 'bonk',
          exponent: 5
        }],
      base: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      name: 'Bonk',
      display: 'bonk',
      symbol: 'BONK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      coingecko_id: 'bonk',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
          theme: {
            primary_color_hex: '#ee950a'
          }
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      type_asset: 'erc20',
      address: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      denom_units: [{
          denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
          exponent: 0
        }, {
          denom: 'pyth',
          exponent: 6
        }],
      base: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      name: 'Pyth Network',
      display: 'pyth',
      symbol: 'PYTH',
      coingecko_id: 'pyth-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      }
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      type_asset: 'erc20',
      address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      denom_units: [{
          denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      type_asset: 'erc20',
      address: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      denom_units: [{
          denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
          exponent: 0
        }, {
          denom: 'bskt',
          exponent: 5
        }],
      base: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      name: 'Basket',
      display: 'bskt',
      symbol: 'BSKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      coingecko_id: 'basket',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png',
          theme: {
            primary_color_hex: '#485573'
          }
        }],
      socials: {
        website: 'https://www.bskt.fi/',
        twitter: 'https://twitter.com/bsktfi'
      }
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      extended_description: 'Wormhole token (W) serves as the governance token of the Wormhole protocol, empowering token holders to steer the protocol\'s direction through on-chain governance via a dedicated decentralized autonomous organization (DAO).\n\nWormhole was founded by Jump Crypto, the building arm of Jump Trading Group. Initially launched in 2021, the protocol first debuted as a token bridge, allowing the transfer of tokens between blockchains, most notably between Solana and Ethereum. Wormhole later evolved, with Wormhole V2, to take on a more general approach, turning into an interoperability layer on which chains and decentralized applications could easily build on.\n\nWormhole V2 is a general messaging protocol, enabling different blockchains to communicate with one another. This technology could be used for a variety of use cases, including transfer of tokens between chains, enabling cross-chain governance for protocols that operated across chains as well as transfers of NFTs across chains, which could be utilized for multi-chain games. Wormhole V2 also saw the protocol expand its services to include Osmosis.\n\nTo date, the protocol has processed over $40 billion worth of value transfer across the blockchains supported, and over 1 billion messages sent. It supports over 30 blockchains, including most of the leading networks, and has a thriving ecosystem of over 200 applications built using Wormhole\'s technology.\n\nIn November 2023, Jump and Wormhole announced their intention to split ways. Following the separation, Wormhole announced that it raised $225 million, valuing the company at $2.5 billion. Investors include Brevan Howard, Coinbase Ventures, Multicoin Capital, Jump Crypto and more.',
      type_asset: 'erc20',
      address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      denom_units: [{
          denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
          exponent: 0
        }, {
          denom: 'w',
          exponent: 6
        }],
      base: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      coingecko_id: 'wormhole',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://wormhole.com/',
        twitter: 'https://twitter.com/wormhole'
      }
    },
    {
      description: 'mSOL represents staked SOL in the Marinade stake pool.',
      extended_description: 'mSOL is a liquid staking token that you receive when you stake SOL on the Marinade protocol. These mSOL tokens represent your staked SOL tokens in Marinade\'s stake pool.',
      type_asset: 'erc20',
      address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
      denom_units: [{
          denom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
          exponent: 0
        }, {
          denom: 'msol',
          exponent: 9
        }],
      base: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
      name: 'Marinade Staked SOL',
      display: 'msol',
      symbol: 'mSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Marinade'
        }],
      coingecko_id: 'msol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
          theme: {
            primary_color_hex: '#cbebe3'
          }
        }],
      socials: {
        website: 'https://marinade.finance/',
        twitter: 'https://twitter.com/MarinadeFinance'
      }
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.',
      extended_description: 'The Jito stake pool enables users to stake their Solana tokens in exchange for JitoSOL, allowing them to simultaneously earn from staking rewards and MEV rewards.',
      type_asset: 'erc20',
      address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
      denom_units: [{
          denom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
          exponent: 0
        }, {
          denom: 'jitosol',
          exponent: 9
        }],
      base: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
      name: 'Jito Staked SOL',
      display: 'jitosol',
      symbol: 'jitoSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Jito'
        }],
      coingecko_id: 'jito-staked-sol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png',
          theme: {
            primary_color_hex: '#5bb384'
          }
        }],
      socials: {
        website: 'https://jito.network/',
        twitter: 'https://twitter.com/jito_foundation'
      }
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the BlazeStake protocol.',
      extended_description: 'BlazeStake is a non-custodial Solana stake pool protocol that allows users to stake their SOL tokens and receive bSOL tokens in return.',
      type_asset: 'erc20',
      address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
      denom_units: [{
          denom: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
          exponent: 0
        }, {
          denom: 'bsol',
          exponent: 9
        }],
      base: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
      name: 'BlazeStake Staked SOL',
      display: 'bsol',
      symbol: 'bSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'BlazeStake'
        }],
      coingecko_id: 'blazestake-staked-sol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bsol.png',
          theme: {
            primary_color_hex: '#21c3cc'
          }
        }],
      socials: {
        website: 'https://stake.solblaze.org/',
        twitter: 'https://twitter.com/solblaze_org'
      }
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.',
      type_asset: 'erc20',
      address: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
      denom_units: [{
          denom: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
          exponent: 0
        }, {
          denom: 'lst',
          exponent: 9
        }],
      base: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
      name: 'Liquid Staking Token',
      display: 'lst',
      symbol: 'LST',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'MarginFi'
        }],
      coingecko_id: 'liquid-staking-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/lst.png',
          theme: {
            primary_color_hex: '#dbdbdb'
          }
        }],
      socials: {
        website: 'https://www.marginfi.com/',
        twitter: 'https://twitter.com/marginfi'
      }
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.',
      extended_description: 'edgeSOL represents ownership of staked SOL that\'s delegated to the top validators running on Edgevana.',
      type_asset: 'erc20',
      address: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
      denom_units: [{
          denom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
          exponent: 0
        }, {
          denom: 'edgesol',
          exponent: 9
        }],
      base: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
      name: 'Edgevana Staked SOL',
      display: 'edgesol',
      symbol: 'edgeSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Edgevana'
        }],
      coingecko_id: 'edgevana-staked-sol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png',
          theme: {
            primary_color_hex: '#146cfc'
          }
        }],
      socials: {
        website: 'https://edgevana.com/',
        twitter: 'https://twitter.com/edgevana'
      }
    },
    {
      description: 'A liquid staked token that represents SOL staked to Helius\'s validator.',
      extended_description: 'hSOL is a liquid representiation of staked SOL tokens to Helius, minted via Sanctum.',
      type_asset: 'erc20',
      address: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
      denom_units: [{
          denom: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
          exponent: 0
        }, {
          denom: 'hsol',
          exponent: 9
        }],
      base: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
      name: 'Helius Staked SOL',
      display: 'hsol',
      symbol: 'hSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Helius'
        }],
      coingecko_id: 'helius-staked-sol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/hsol.png',
          theme: {
            primary_color_hex: '#e5502a'
          }
        }],
      socials: {
        website: 'https://helius.dev/',
        twitter: 'https://twitter.com/heliuslabs'
      }
    },
    {
      description: 'A liquid staked token that represents SOL staked to Jupiter\'s validator.',
      extended_description: 'JupSOL is a liquid staking token that represents SOL staked to the Jupiter validator, via Sanctum.',
      type_asset: 'erc20',
      address: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
      denom_units: [{
          denom: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
          exponent: 0
        }, {
          denom: 'jupsol',
          exponent: 9
        }],
      base: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
      name: 'Jupiter Staked SOL',
      display: 'jupsol',
      symbol: 'jupSOL',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Jupiter'
        }],
      coingecko_id: 'jupiter-staked-sol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jupsol.png',
          theme: {
            primary_color_hex: '#85d79e'
          }
        }],
      socials: {
        website: 'https://jup.ag/',
        twitter: 'https://twitter.com/JupiterExchange'
      }
    },
    {
      description: 'dogwifhat is a meme coin that operates on Solana.',
      type_asset: 'erc20',
      address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom_units: [{
          denom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
          exponent: 0
        }, {
          denom: 'wif',
          exponent: 6
        }],
      base: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      name: 'dogwifhat',
      display: 'wif',
      symbol: 'WIF',
      coingecko_id: 'dogwifcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
          theme: {
            primary_color_hex: '#a29482'
          }
        }],
      socials: {
        website: 'https://dogwifcoin.org/',
        twitter: 'https://twitter.com/dogwifcoin'
      }
    },
    {
      description: 'Tether, issued natively on Solana.',
      extended_description: 'Tether USD (Native Solana), USDT is a native asset to Solana issued by Tether.',
      type_asset: 'erc20',
      address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      denom_units: [{
          denom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      name: 'Tether',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }],
      images: [{
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
        }],
      coingecko_id: 'tether',
      socials: {
        website: 'https://Tether.to/',
        twitter: 'https://twitter.com/tether_to'
      }
    },
    {
      address: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      base: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      extended_description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team. Funds in the dev wallet are reserved for airdrops and liquidity for Solana and Cosmos pools. There is no team allocation.',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      type_asset: 'erc20',
      denom_units: [{
          denom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
          exponent: 0
        }, {
          denom: 'whine',
          exponent: 6
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primary_color_hex: '#FFFFFF',
            background_color_hex: '#FFFFFF',
            circle: false
          }
        }],
      socials: {
        website: 'https://whinecoin.com/',
        twitter: 'https://twitter.com/whinecoin'
      }
    }
  ]
};
export default info;