export * from './mainnet';
export * from './testnet';
export * from './noncosmos';

import all from './all';

export default all;

const { assets, chains, ibc } = all;

export { assets, chains, ibc };
