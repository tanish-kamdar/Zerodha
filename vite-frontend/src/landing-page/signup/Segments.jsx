import React from 'react';

function Segments() {
    return ( <div className='container d-flex flex-column align-items-center my-5'>
       <h2 className=''>Investment options with Zerodha demat account</h2> 
       <div className='row my-5'>
            <div className='col'>
                <div className='row my-4'>
                    <div className='col-5'>
                        <img/>
                    </div>
                    <div className='col-7'>
                        <h3>Stocks</h3>
                        <p>Invest in all exchange-listed securities</p>
                    </div>
                </div>

                <div className='row my-4'>
                    <div className='col-5'>
                        <img/>
                    </div>
                    <div className='col-7'>
                        <h3>IPO</h3>
                        <p>Apply to the latest IPO instantly via UPI</p>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='row my-4'>
                    <div className='col-5'>
                        <img/>
                    </div>
                    <div className='col-7'>
                        <h3>Mutual funds</h3>
                        <p>Invest in commission-free direct mutual funds</p>
                    </div>
                </div>

                <div className='row my-4'>
                    <div className='col-5'>
                        <img/>
                    </div>
                    <div className='col-7'>
                        <h3>Futures & options</h3>
                        <p>Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
            </div>
       </div>

       <button className='btn btn-primary px-5'>Explore Investments</button>
    </div> );
}

export default Segments;