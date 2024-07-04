import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'govgen',
  assets: [{
      description: 'The native staking and governance token of GovGen',
      denom_units: [{
          denom: 'ugovgen',
          exponent: 0
        }, {
          denom: 'govgen',
          exponent: 6
        }],
      base: 'ugovgen',
      name: 'GovGen',
      display: 'govgen',
      symbol: 'GOVGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg',
          theme: {
            primary_color_hex: '#65d6d4'
          }
        }]
    }]
};
export default info;