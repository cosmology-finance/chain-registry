import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'joltify',
  assets: [
    {
      description: 'The native staking and governance token of Joltify',
      extended_description: 'Joltify is the First EVM compatible game-changing L1 Public Chain built on the Cosmos SDK for Real-World Assets (RWA) and Beyond.',
      denom_units: [{
          denom: 'ujolt',
          exponent: 0
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ujolt',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg',
          theme: {
            primary_color_hex: '#2dfb71'
          }
        }],
      coingecko_id: 'joltify',
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        twitter: 'https://twitter.com/joltify_finance'
      }
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-866'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uatom'
          }
        }],
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
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-81'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uusdc'
          }
        }],
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
        }]
    }
  ]
} as const satisfies AssetList;
export default info;