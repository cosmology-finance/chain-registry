import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'composablepolkadot',
  assets: [{
      denom_units: [{
          denom: '79228162514264337593543950342',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'substrate',
      base: '79228162514264337593543950342',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        }],
      images: [{
          image_sync: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    }]
};
export default info;