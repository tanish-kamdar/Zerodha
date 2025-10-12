import React from 'react';

function Pricing() {
    return ( <div className='container'>
        <div className='row'>
            <div className='col-5'>
                <h1>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='#'>See Pricing <i class="fal fa-arrow-right"></i></a> 
            </div>
            <div className='col-7 row'>
                <div className='col row text-center'>
                    <img src='media/images/pricing0.svg' alt='account opening price' className='img-fluid col-8 offset-2'></img>
                    <span className='col fs-6'>Free account opening</span>
                </div>
                <div className='col row text-center'>
                    <img src='media/images/pricing0.svg' alt='equity/direct mutual funds' className='img-fluid col-8 offset-2'></img>
                    <span className='col fs-6'>Free equity delivery and direct mutual funds</span>
                </div>
                <div className='col row text-center'>
                    <img src='media/images/intradayTrades.svg' alt='intraday/f&o' className='img-fluid col-8 offset-2'></img>
                    <span className='col fs-6'> Intraday and F&O</span>
                </div>
            </div>
        </div>
    </div> );
}

export default Pricing;