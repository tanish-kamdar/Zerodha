import React from 'react';

function RightPlatform({imageLink,title, description,learnMore,kiteConnect}) {
    return ( <div className='container my-5'>
        <div className='row'>
            <div className='col-4 d-flex flex-column justify-content-center'>
                    <h2 className='my-3'>{title}</h2>
                    <p className='my-3'>{description}</p>
                    {learnMore ? 
                    <a href={learnMore}>Learn More </a> : <></>}
                    {kiteConnect ? <a href={kiteConnect}>Kite Connect</a> : <></> }
            </div>
            <div className='col-7 offset-1'>
                <img src={imageLink} alt='image' className='img-fluid'  />
            </div>
        </div>
    </div> );
}

export default RightPlatform;