import React from 'react';

function Hero() {
    return (
    <div className='container text-center mt-4 mb-5'>
        <div className='row'>
        <img src='media/images/homeHero.png' alt='hero' className='my-3 col-8 offset-2'></img>
        </div>
        <h1 className='my-3'>Invest in everything</h1>
        <p className='my-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary btn-lg px-5 py-2 text-center mt-3'>Sign up for free</button>
    </div>);
}

export default Hero;