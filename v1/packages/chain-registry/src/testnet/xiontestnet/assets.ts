import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'xiontestnet',
  assets: [
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
          denom: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
      name: 'Axelar AXL Token',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'uaxl',
            channel_id: 'channel-521'
          },
          chain: {
            channel_id: 'channel-225057',
            path: 'transfer/channel-225057/uaxl'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'axelartestnet',
            base_denom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo',
            channel_id: 'channel-6668'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/uosmo'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
            channel_id: 'channel-147'
          },
          chain: {
            channel_id: 'channel-489',
            path: 'transfer/channel-489/uusdc'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
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
      denom_units: [{
          denom: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
      name: 'Injective INJ token',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj',
            channel_id: 'channel-489'
          },
          chain: {
            channel_id: 'channel-487',
            path: 'transfer/channel-487/inj'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      }
    }
  ]
};
export default info;