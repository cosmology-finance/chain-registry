import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pundix',
  assets: [{
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem.',
      extended_description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      denom_units: [{
          denom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://twitter.com/PundiXLabs'
      }
    }, {
      description: 'Purse is the decentralised loyalty program for physical stores and merchants. PURSE token shall serve as governance token of the PURSE Merchant loyalty point platform, the gas fee as well as the transaction fee on PURSE Merchant platform. To launch any merchant loyalty tokens and do transaction on the merchant platform, users and merchants need Purse tokens.',
      denom_units: [{
          denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          theme: {
            primary_color_hex: '#1c1c1b'
          }
        }],
      socials: {
        website: 'https://purse.land',
        twitter: 'https://twitter.com/Purse_Land'
      }
    }]
};
export default info;