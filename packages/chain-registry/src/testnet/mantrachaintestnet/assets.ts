import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mantrachaintestnet',
  assets: [
    {
      description: 'The native token of MANTRA Chain',
      denom_units: [
        {
          denom: 'uaum',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'aum',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uaum',
      name: 'MANTRA Chain',
      display: 'aum',
      symbol: 'AUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
        }
      ]
    }
  ]
};
export default info;
