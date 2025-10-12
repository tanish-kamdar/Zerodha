import React from 'react';

function Developer() {
    return ( <div className='container my-5'>
        <h1 className='text-center'>Project Developer</h1>
        <div className='row mt-5'>
            <div className='col-5  text-center'>
                    <img src='media/images/nithinKamath.jpg' alt='developer photo' className='img-fluid rounded-circle' style={{height:"295px"}}></img>
                    <h4 className='my-3'>Nithin Kamath</h4>
                    <p className='my-3'>Founder, CEO</p>
            </div>
            <div className='col-7 align-middle'>
                <p className='my-3'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p className='my-3'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p className='my-3'>Playing basketball is his zen.</p>
                <p className='my-3'>Connect on <a href='#'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a></p>
            </div>
        </div>
    </div> );
}

export default Developer;