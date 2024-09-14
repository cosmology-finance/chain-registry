import { IBCInfo } from '@chain-registry/types';
const info = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dig',
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-100',
      connection_id: 'connection-62'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dig',
      client_id: '07-tendermint-13',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1714',
      connection_id: 'connection-1304'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-128',
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