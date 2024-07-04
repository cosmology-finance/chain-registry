import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'base',
  assets: [{
      description: 'wETH is \'wrapped ETH\'',
      type_asset: 'erc20',
      denom_units: [{
          denom: '0x4200000000000000000000000000000000000006',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      address: '0x4200000000000000000000000000000000000006',
      base: '0x4200000000000000000000000000000000000006',
      display: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Base Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    }]
};
export default info;