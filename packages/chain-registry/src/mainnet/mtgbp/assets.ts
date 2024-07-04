import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mtgbp',
  assets: [{
      description: 'MTGBP the stablecoin of the future.',
      extended_description: 'MTGBP is known as the stablecoin of the future. This stablecoin is based on the British pound, which means its value stays the same as the pound.\n\nMTGBP aims to connect traditional money with digital money, giving people a stable and trustworthy digital currency. This stablecoin combines the stability of the British pound with the speed and efficiency of blockchain technology.\n\nMTGBP makes it easy to do financial transactions without the ups and downs that other cryptocurrencies have. With MTGBP, you can send money, trade, and invest knowing that its value will stay steady. This makes it useful for everyday use and for long-term financial plans.\n\nIn short, MTGBP offers the stability of the British pound and the benefits of cryptocurrency, making it a safe and easy option for everyone.\n\n',
      denom_units: [{
          denom: 'mtgbp',
          exponent: 0
        }],
      base: 'mtgbp',
      name: 'mtgbp',
      display: 'mtgbp',
      symbol: 'MTGBP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg',
          theme: {
            primary_color_hex: '#e8692b'
          }
        }],
      socials: {
        website: 'https://mtgbp.com/'
      }
    }]
};
export default info;