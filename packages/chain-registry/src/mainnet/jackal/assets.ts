import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../assetlist.schema.json',
  chain_name: 'jackal',
  assets: [{
      description: 'Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.',
      extended_description: 'Jackal Network is a decentralized storage platform designed to offer secure, private, and efficient data storage solutions using blockchain technology. By leveraging a distributed network of nodes, Jackal Network ensures data redundancy and security, protecting against data loss and unauthorized access. The platform uses advanced encryption techniques to maintain data privacy while allowing users to share and access their data seamlessly. Jackal Network\'s native token is used for paying storage fees, staking, and participating in network governance, incentivizing users to contribute to the network\'s security and reliability.',
      denom_units: [{
          denom: 'ujkl',
          exponent: 0
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ujkl',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingecko_id: 'jackal-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primary_color_hex: '#dbdbcb'
          }
        }]
    }]
} as const satisfies AssetList;
export default info;