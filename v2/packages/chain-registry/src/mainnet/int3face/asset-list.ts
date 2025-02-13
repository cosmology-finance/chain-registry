import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'int3face',
  assets: [
    {
      description: 'Int3face blockchain native token',
      denomUnits: [{
          denom: 'uint3',
          exponent: 0
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'uint3',
      name: 'Int3face Token',
      display: 'int3',
      symbol: 'INT3',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      socials: {
        website: 'https://int3face.io/',
        twitter: 'https://x.com/int3face'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Bitcoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Bitcoin-Cash on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
          exponent: 0
        }, {
          denom: 'bch',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
      name: 'Bitcoin Cash',
      display: 'bch',
      symbol: 'BCH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Dogecoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
      name: 'Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Litecoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
          exponent: 0
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
      name: 'Litecoin',
      display: 'ltc',
      symbol: 'LTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'TON on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
          exponent: 0
        }, {
          denom: 'ton',
          exponent: 9
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
      name: 'TON',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ton.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ton.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;