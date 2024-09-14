import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'neuradevnet',
  assets: [{
      description: 'ANKR: The native EVM, governance, and staking token for Neura, enabling secure transactions, and seamless GPU resourcing within the ecosystem.',
      denom_units: [{
          denom: 'atankr',
          exponent: 0
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: 'atankr',
      name: 'Neura Devnet',
      display: 'ankr',
      symbol: 'ANKR',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'neura',
            base_denom: 'atankr'
          },
          provider: 'Neura'
        }],
      images: [{
          image_sync: {
            chain_name: 'neura',
            base_denom: 'atankr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;