import { IBCInfo } from '@chain-registry/types';
const info = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'genesisl1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1983',
      connection_id: 'connection-1539'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-253',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }] as const satisfies IBCInfo[];
export default info;