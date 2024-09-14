import { IBCInfo } from '@chain-registry/types';
const info = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'desmos',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1726',
      connection_id: 'connection-1315'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-135',
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