import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-19',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'quicksilvertestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-16',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'quicksilvertestnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }];
export default info;