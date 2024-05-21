import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gravitybridge',
  assets: [
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ugraviton',
          exponent: 0
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ugraviton',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      }
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [{
          denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          exponent: 0
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      base: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        }],
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [{
          denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          exponent: 0
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      base: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ethereum',
      display: 'gweth',
      symbol: 'WETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [{
          denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          exponent: 0
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      base: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      name: 'USD Coin',
      display: 'gusdc',
      symbol: 'USDC',
      coingecko_id: 'gravity-bridge-usdc',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [{
          denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
          exponent: 0
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      base: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'Tether USD',
      display: 'gusdt',
      symbol: 'USDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [{
          denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          exponent: 0
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      base: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      name: 'Wrapped Bitcoin',
      display: 'gwbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [{
          denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
          exponent: 0
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      base: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'Dai Stablecoin',
      display: 'gdai',
      symbol: 'DAI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        }, {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Gravity Bridge sDAI',
      denom_units: [{
          denom: 'gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA',
          exponent: 0
        }, {
          denom: 'gsdai',
          exponent: 18
        }],
      base: 'gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      name: 'Savings Dai',
      display: 'gsdai',
      symbol: 'sDAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
        }]
    },
    {
      description: 'Gravity Bridge OCC',
      denom_units: [{
          denom: 'gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
          exponent: 0
        }, {
          denom: 'gocc',
          exponent: 18
        }],
      base: 'gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      name: 'OccamFi',
      display: 'gocc',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [{
          denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          exponent: 0
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    },
    {
      description: 'Gravity Bridge Paxos Gold',
      denom_units: [{
          denom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
          exponent: 0
        }, {
          denom: 'gpaxg',
          exponent: 18
        }],
      base: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      name: 'Paxos Gold',
      display: 'gpaxg',
      symbol: 'PAXG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
        }]
    }
  ]
};
export default info;