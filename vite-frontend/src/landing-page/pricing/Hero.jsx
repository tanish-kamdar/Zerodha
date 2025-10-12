import React from 'react';
function Hero() {
    return ( <div className='container py-5 d-flex flex-column justify-content-center align-items-center'>
    <h1 className='mt-5 pt-5'>Charges</h1>
    <p className='mb-5 pb-5'>List of all charges and taxes.</p>
    <div className='row'>
        <div className='col text-center'>
            <img src='media/images/pricingEquity.svg' />
            <h3>Free equity delivery</h3>
            <p className='my-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col text-center'>
            <img src='media/images/intradayTrades.svg' />
            <h3>Intraday and F&O trades</h3>
            <p className='my-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col text-center'>
            <img src='media/images/pricingMF.svg' />
            <h3>Free direct MF</h3>
            <p className='my-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
    </div>
    </div> );
}

export default Hero;