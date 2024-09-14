import { IBCInfo } from '@chain-registry/types';
const info = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-119'
    },
    chain_2: {
      chain_name: 'jackaltestnet2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-368',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }] as const satisfies IBCInfo[];
export default info;