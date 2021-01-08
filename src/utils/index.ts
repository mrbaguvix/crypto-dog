
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
const formatMoney = (value:number):string => {
    return `${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export {ASSETS, calcPercentDiff, formatMoney}