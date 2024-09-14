import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dymension',
  assets: [
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      }
    },
    {
      description: 'The native token of Nim Network.',
      extended_description: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denom_units: [{
          denom: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
          exponent: 0,
          aliases: ['anim']
        }, {
          denom: 'nim',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
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
        }],
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
      socials: {
        website: 'https://nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      }
    },
    {
      description: 'The native token of Mande Network.',
      extended_description: 'Mande network is an open on-chain reputation layer on Web3',
      denom_units: [{
          denom: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
          exponent: 0,
          aliases: ['amand']
        }, {
          denom: 'mand',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
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
        }],
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
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      },
      keywords: ['credibility', 'identity'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      }
    }
  ]
} as const satisfies AssetList;
export default info;