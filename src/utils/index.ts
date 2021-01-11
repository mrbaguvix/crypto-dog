
export interface AssetI {
    symbol: string;
    title: string;
}

// Available exchange assets
enum ASSETS {
    NGN = '\u20A6', // ₦
    USD = '$',
    USDT = 'USDT',
    BTC = 'BTC',
    LTC = 'LTC',
    ETH = 'ETH',
};


export const CryptoBTC:AssetI = {
    symbol: 'BTC',
    title: 'Bitcoin'
} 
 
export const CryptoETH:AssetI = {
    symbol: 'ETH',
    title: 'Ethereum'
} 
 
export const CryptoLTC:AssetI = {
    symbol: 'LTC',
    title: 'Litecoin'
} 

/**
 * Calculate percent change in value
 * @param oldPrice Initial value
 * @param newPrice Most recent value
 * @returns The percentage change between old and new value.
 */
const calcPercentDiff = (oldPrice:number, newPrice:number):number => {
    let diff = newPrice - oldPrice;
    let calcPrice = (diff)/oldPrice * 100;
    return Number(calcPrice.toFixed(2));
}

/**
 * People friendly money value
 * @param value An amount to format
 * @returns A comma-seperated value
 */
const formatMoney = (value:number|string):string => {
    return `${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

/**
 * formatMoney but takes string as param
 * @param {string} value
 */
export const formatStrMoney = (value:string):string => {
    return formatMoney(Number(value).toFixed(2));
};

/**
 * 
 * @param date 
 * Usage:
 * const rows = [
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
    mockTransData('28 Dec 2020', '3.2', '159,000', '3.4', '159,000', '1,5000', '3.1', '8,2000'),
  ];
 */
const mockTransData = (date: string, boughtCrypto: string, 
    boughtFiat: string, soldCrypto: string, soldFiat:string, profit:string, profitPercent:string, pricePerAsset:string ) => {
    return { date, boughtCrypto, boughtFiat, soldCrypto, soldFiat, profit, profitPercent, pricePerAsset };
}

export {ASSETS, calcPercentDiff, formatMoney}