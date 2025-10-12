import React from 'react';

import Navbar from '../Navbar'
import Hero from './Hero'
import LeftPlatform from './LeftPlatform'
import RightPlatform from './RightPlatform'
import Universe from './Universe'
import Footer from '../Footer'

function ProductPage() {
    
    return ( <>
    <Hero/>
    <LeftPlatform imageLink={'media/images/kite.png'} title={'Kite'} tryDemo={'#'} learnMore={'#'}description={'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'}/>
    <RightPlatform imageLink={'media/images/console.png'} title={'Console'} learnMore={'#'} description={'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'}/>
    <LeftPlatform imageLink={'media/images/coin.png'} title={'Coin'} coin ={'#'}description={'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'}/>
    <RightPlatform imageLink={'media/images/kiteconnect.svg'} title={'Kite Connect API'} kiteConnect={'#'} description={'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'}/>
    <LeftPlatform imageLink={'media/images/varsity.png'} title={'Varsity mobile'} description={'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'}/>
    <h5 className='text-center'>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</h5>
    <Universe/>
    <div className='text-center'>
    <button className='btn btn-primary fs-5 mb-5 mt-4' style={{padding:"10px 30px"}}>Sign up for free</button>
    </div>
    </> );
}

export default ProductPage;