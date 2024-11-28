import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kyvetestnet',
  chainType: 'cosmos',
  chainId: 'kaon-1',
  prettyName: 'KYVE Kaon',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'kyve',
  daemonName: 'kyved',
  nodeHome: '$HOME/.kyve',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tkyve',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tkyve'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KYVENetwork/chain',
    recommendedVersion: 'v1.0.0-rc0',
    compatibleVersions: ['v1.0.0-rc0'],
    binaries: {
      "linux/amd64": 'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_amd64.tar.gz',
      "linux/arm64": 'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_arm64.tar.gz',
      "darwin/amd64": 'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_arm64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/KYVENetwork/networks/main/kaon-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rest-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/kyve-testnet',
      txPage: 'https://mintscan.io/kyve-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/kyve-testnet/account/${accountAddress}'
    }]
};
export default info;