import React from 'react';
import ExternalFeature from './ExternalFeature'
function Universe() {
    return ( <div className='container text-center my-5'>
        <h2>The Zerodha Universe</h2>
        <p className='my-4'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='container px-5 d-flex justify-content-between flex-wrap'>
           
                <ExternalFeature imageLink={'media/images/zerodhaFundhouse.png'} content='Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.'/>
                <ExternalFeature imageLink={'media/images/streakLogo.png'} content={'Systematic trading platform that allows you to create and backtest strategies without coding.'}/>
            
            
                <ExternalFeature imageLink={'media/images/sensibullLogo.svg'} content={'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.'}/>
                <ExternalFeature imageLink={'media/images/smallcaseLogo.png'} content={'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.'}/>
            
                <ExternalFeature imageLink={'media/images/tijori.svg'} content={'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.'}/>
                <ExternalFeature imageLink={'media/images/dittoLogo.png'} content={'Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free'}/>
           
        </div>
    </div> );
}

export default Universe;