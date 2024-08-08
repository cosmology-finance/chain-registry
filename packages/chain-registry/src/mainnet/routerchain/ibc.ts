import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3235',
      connection_id: 'connection-2722'
    },
    chain_2: {
      chain_name: 'routerchain',
      client_id: '07-tendermint-7',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-79180',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain_1: {
          channel_id: 'channel-79179',
          port_id: 'wasm.osmo145vur8faym70dt7a4h60jz348vxxxqwpnezdz6ee9r88a4cftsvq85dtxr'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'crosschain'
        },
        ordering: 'unordered',
        version: 'router-ibc-v1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;