import YahooFinance from 'yahoo-finance2';
const yahooFinance = new YahooFinance();

async function getQuote(symbol) {
    try {
    // Single symbol
    const result = await yahooFinance.quote(`${symbol}.NS`);
    return result;
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error;
    }
}
async function main(symbol){
    let result=await getQuote(symbol);
    console.log(result);
    console.log(result.regularMarketPrice,result.currency);
}

main('ICICIBANK');