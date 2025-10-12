import React from 'react';

import Navbar from '../Navbar'
import Hero from './Hero'
import Segments from './Segments'
import RegSteps from './RegSteps'
import Benefits from './Benefits'
import AccountTypes from './AccountTypes'
import FAQ from './FAQ'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function SignUpPage() {
    return ( <>
        <Hero/>
        <Segments/>
        <RegSteps/>
        <Benefits/>
        <AccountTypes/>
        <FAQ/>
        <OpenAccount/>
    </> );
}

export default SignUpPage;