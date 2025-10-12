import React from 'react';

function LeftPlatform({imageLink,title, description,tryDemo,learnMore,coin}) {
    return ( <div className='container my-5'>
        <div className='row'>
            <div className='col-7'>
                <img src={imageLink} alt='image' className='img-fluid'  />
            </div>
            <div className='col-4 offset-1 d-flex flex-column justify-content-center'>
                <h2 className='my-3'>{title}</h2>
                <p className='my-3'>{description}</p>
                <div className='row'>
                {tryDemo ? <a href={tryDemo} className='col'>Try Demo</a> : <></> }
                {learnMore ? <a href={learnMore} className='col'>Learn More</a> : <></> }
                </div>
                {coin ? <a href={coin} className=''>Coin</a> : <></> }
                <div className='kite-mobile-link mt-3'>
                    <img src='media/images/googlePlayBadge.svg' className=' img-fluid'/>
                    <img src='media/images/appstoreBadge.svg' className='ms-3 img-fluid'/>
                </div>
            </div>
        </div>
    </div> );
}

export default LeftPlatform;