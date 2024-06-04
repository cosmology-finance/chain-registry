import { AssetList } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _picasso from './picasso';
import * as _solana from './solana';
import * as _composablepolkadot from './composablepolkadot';
import * as _0l from './0l';
import * as _aptos from './aptos';
import * as _arbitrum from './arbitrum';
import * as _avalanche from './avalanche';
import * as _binancesmartchain from './binancesmartchain';
import * as _bitcoin from './bitcoin';
import * as _comex from './comex';
import * as _fantom from './fantom';
import * as _filecoin from './filecoin';
import * as _forex from './forex';
import * as _kusama from './kusama';
import * as _moonbeam from './moonbeam';
import * as _neo from './neo';
import * as _penumbra from './penumbra';
import * as _polkadot from './polkadot';
import * as _polygon from './polygon';
import * as _statemine from './statemine';
import * as _stellar from './stellar';
import * as _sui from './sui';
import * as _tinkernet from './tinkernet';
import * as _xrpl from './xrpl';
import * as _zilliqa from './zilliqa';
import * as _berachain from './berachain';
import * as _initia from './initia';
import * as _mantrachain from './mantrachain';
import * as _avalanchetestnet from './avalanchetestnet';
import * as _binancesmartchaintestnet from './binancesmartchaintestnet';
import * as _ethereumtestnet from './ethereumtestnet';
import * as _fantomtestnet from './fantomtestnet';
import * as _moonbeamtestnet from './moonbeamtestnet';
import * as _polkadottestnet from './polkadottestnet';
import * as _polygontestnet from './polygontestnet';
import * as _ojotestnet from './ojotestnet';

const assets: AssetList[] = [
  _ethereum.assets,
  _picasso.assets,
  _solana.assets,
  _composablepolkadot.assets,
  _0l.assets,
  _aptos.assets,
  _arbitrum.assets,
  _avalanche.assets,
  _binancesmartchain.assets,
  _bitcoin.assets,
  _comex.assets,
  _fantom.assets,
  _filecoin.assets,
  _forex.assets,
  _kusama.assets,
  _moonbeam.assets,
  _neo.assets,
  _penumbra.assets,
  _polkadot.assets,
  _polygon.assets,
  _statemine.assets,
  _stellar.assets,
  _sui.assets,
  _tinkernet.assets,
  _xrpl.assets,
  _zilliqa.assets,
  _berachain.assets,
  _initia.assets,
  _mantrachain.assets,
  _avalanchetestnet.assets,
  _binancesmartchaintestnet.assets,
  _ethereumtestnet.assets,
  _fantomtestnet.assets,
  _moonbeamtestnet.assets,
  _polkadottestnet.assets,
  _polygontestnet.assets,
  _ojotestnet.assets
];

export default assets;
