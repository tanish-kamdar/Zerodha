import React from 'react';
import Navbar from '../Navbar'
import Hero from './Hero';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer'

function HomePage() {
    return ( <>
       <Hero/>
       <Trust/>
       <Pricing/>
       <Education/>
       <OpenAccount/>
    </> );
}
export default HomePage;