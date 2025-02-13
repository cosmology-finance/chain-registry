import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'babylontestnet',
  assets: [{
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;