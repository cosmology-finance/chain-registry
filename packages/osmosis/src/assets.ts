import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking']
    },
    {
      denom_units: [
        {
          denom: 'uion',
          exponent: 0
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin']
    }
  ]
};
export default assets;
