import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'nobletestnet',
  assets: [
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ustake',
          exponent: 0,
          aliases: ['microstake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ustake',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE'
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ulove',
          exponent: 0,
          aliases: ['microlove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ulove',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE'
    },
    {
      description: 'USD Coin',
      denom_units: [{
          denom: 'uusdc',
          exponent: 0,
          aliases: ['microusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'uusdc',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          provider: 'Circle'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ausdy',
          exponent: 0,
          aliases: ['attousdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ausdy',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }]
    }
  ]
};
export default info;