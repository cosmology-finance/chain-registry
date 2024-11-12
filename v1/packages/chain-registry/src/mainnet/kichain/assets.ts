import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kichain',
  assets: [{
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'uxki',
          exponent: 0
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'uxki',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primary_color_hex: '#1c04fc'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'ELEVENPARIS loyalty token on KiChain',
      type_asset: 'cw20',
      address: 'ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      denom_units: [{
          denom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
          exponent: 0
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      base: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
          theme: {
            primary_color_hex: '#683480'
          }
        }]
    }]
};
export default info;