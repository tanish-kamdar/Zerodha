import React from 'react';

function Trust() {
    return ( <div className='container my-5'>
        <div className='row'>
            <div className='col-5'>
                <h1>Trust with confidence</h1>

                <h5 className='mt-5'>Customer-first always</h5>
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                <h5 className='mt-4'>No spam or gimmicks</h5>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                <h5 className='mt-4'>The Zerodha universe</h5>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h5 className='mt-4'>Do better with money</h5>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-7'>
                <img src='media/images/ecosystem.png' alt='ecosystem' className='img-fluid' ></img>
            </div>
            <img src='media/images/pressLogos.png' alt='press-logos' className='my-3 img-fluid text-center col-8 offset-2'></img>
        </div>

    </div> );
}

export default Trust;