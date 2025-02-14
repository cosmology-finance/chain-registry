import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'secretnetworktestnet',
  assets: [{
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'uscrt',
          exponent: 0
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'uscrt',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'uscrt'
          },
          provider: 'Secret Network'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;