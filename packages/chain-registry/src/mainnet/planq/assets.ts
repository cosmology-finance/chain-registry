import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'planq',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      extended_description: 'Planq is the very first cryptocurrency project to keep mobile platform usability at heart, taking a step away from dependency on desktop services. By focusing on easy accessibility and close integration of other blockchains via easy to use bridges, Planq will push Web 3 adoption in the mobile space to the next level.',
      denom_units: [{
          denom: 'aplanq',
          exponent: 0
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'aplanq',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      }
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          exponent: 0
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
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
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [{
          denom: 'ibc/747FF58D3F211497581252CEBE11D7E785FC1E53AC5C29497A361E3830F1AF4A',
          exponent: 0
        }, {
          denom: 'meme',
          exponent: 6
        }],
      base: 'ibc/747FF58D3F211497581252CEBE11D7E785FC1E53AC5C29497A361E3830F1AF4A',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      type_asset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'meme',
            base_denom: 'umeme',
            channel_id: 'channel-11'
          },
          chain: {
            channel_id: 'channel-64',
            path: 'transfer/channel-64/umeme'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          image_sync: {
            chain_name: 'meme',
            base_denom: 'umeme'
          },
          theme: {
            primary_color_hex: '#b7dcd8'
          }
        }]
    }
  ]
} as const satisfies AssetList;
export default info;