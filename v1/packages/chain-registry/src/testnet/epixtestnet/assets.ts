import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'epixtestnet',
  assets: [{
      description: 'The EPIX coin, the lifeblood of the Epix network, providing the utility that powers every interaction and transaction within the ecosystem.',
      denom_units: [{
          denom: 'aepix',
          exponent: 0
        }, {
          denom: 'epix',
          exponent: 18
        }],
      base: 'aepix',
      name: 'Epix Testnet',
      display: 'epix',
      symbol: 'TEPIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'epix',
            base_denom: 'aepix'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg',
          theme: {
            primary_color_hex: '#69e9f5'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;