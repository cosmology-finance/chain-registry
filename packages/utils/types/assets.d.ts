import { Asset, AssetDenomUnit, AssetList } from '@chain-registry/types';
export type Denom = AssetDenomUnit['denom'];
export type Exponent = AssetDenomUnit['exponent'];
export declare const customFind: <T>(array: T[], filterFn: (item: T) => boolean) => T | undefined;
export declare const getAssetByDenom: (assets: AssetList[], denom: Denom, chainName?: string) => Asset | undefined;
export declare const getAssetBySymbol: (assets: AssetList[], symbol: string, chainName?: string) => Asset | undefined;
export declare const getDenomByCoinGeckoId: (assets: AssetList[], coinGeckoId: string, chainName?: string) => Denom | undefined;
type GetCoinGeckoIdByDenomOptions = {
    chainName?: string;
    allowTestnet?: boolean;
    customAssetFilter?: (asset: Asset) => boolean;
    excludedChainNames?: string[];
};
export declare const getCoinGeckoIdByDenom: (assets: AssetList[], denom: Denom, { chainName, allowTestnet, customAssetFilter, excludedChainNames }?: GetCoinGeckoIdByDenomOptions) => string | undefined;
export declare const getSymbolByDenom: (assets: AssetList[], denom: Denom, chainName?: string) => string | undefined;
export declare const getDenomBySymbol: (assets: AssetList[], symbol: string, chainName?: string) => Denom | undefined;
export declare const getExponentFromAsset: (asset: Asset) => number | undefined;
export declare const getExponentByDenom: (assets: AssetList[], denom: Denom, chainName?: string) => Exponent | undefined;
export declare const getExponentBySymbol: (assets: AssetList[], symbol: string, chainName?: string) => Exponent | undefined;
export declare const getNativeTokenByChainName: (assets: AssetList[], chainName: string) => Asset | undefined;
export declare const getTokenLogoByDenom: (assets: AssetList[], denom: Denom, chainName?: string) => string | undefined;
export declare const getChainLogo: (assets: AssetList[], chainName: string) => string | undefined;
export declare const getTokenNameByDenom: (assets: AssetList[], denom: Denom, chainName?: string) => string | undefined;
export declare const getChainNameByDenom: (assets: AssetList[], denom: Denom) => string | undefined;
export {};
