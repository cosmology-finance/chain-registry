import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lorenzo',
  assets: [{
      description: 'Native staking token of Lorenzo: LRZ (alrz)',
      denom_units: [{
          denom: 'alrz',
          exponent: 0
        }, {
          denom: 'LRZ',
          exponent: 18
        }],
      base: 'alrz',
      name: 'LRZ',
      display: 'LRZ',
      symbol: 'LRZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg',
          theme: {
            primary_color_hex: '#133348'
          }
        }],
      socials: {
        website: 'https://www.lorenzo-protocol.xyz/',
        twitter: 'https://x.com/LorenzoProtocol'
      }
    }, {
      description: 'stBTC is the liquid principal token of the Lorenzo protocol, designed to represent staked Bitcoin within the Babylon ecosystem.\n\n',
      extended_description: 'stBTC serves as a crucial component of the Lorenzo protocol, enabling Bitcoin holders to unlock the liquidity of their assets while participating in the security of Proof-of-Stake (PoS) networks. By staking BTC through Lorenzo, users receive stBTC, which is redeemable 1-to-1 for the original Bitcoin. This mechanism allows users to earn yield without sacrificing liquidity, as stBTC can be freely utilized within the Lorenzo DeFi ecosystem.\n\nThe innovative dual-token system of stBTC and Yield Accruing Tokens (YATs) empowers users to not only stake their BTC but also engage in various decentralized finance activities such as trading, lending, and collateralization. This enhances the utility and flexibility of Bitcoin, providing additional financial opportunities while contributing to the security of PoS networks.\n\nstBTC\'s role in the Lorenzo protocol illustrates its importance in creating a highly interconnected and efficient financial ecosystem, making it a valuable asset in the broader landscape of decentralized finance.',
      denom_units: [{
          denom: 'stBTC',
          exponent: 0
        }, {
          denom: 'display_stBTC',
          exponent: 18
        }],
      base: 'stBTC',
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
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg',
          theme: {
            primary_color_hex: '#133348'
          }
        }],
      socials: {
        website: 'https://www.lorenzo-protocol.xyz/',
        twitter: 'https://x.com/LorenzoProtocol'
      }
    }]
} as const satisfies AssetList;
export default info;