import React from 'react';

function Hero() {
    return ( <div className='container my-5 py-5'>
        <h1 className='text-center'>Open a free demat & trading account online</h1>
        <p className='text-center mb-5'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
        <div className='row'>
            <div className='col'>
                <img src='media/images/signup.png' className='img-fluid'></img>
            </div>
            <div className='col'>
                <div className=''>
                    <h3 className='my-3'>Signup now</h3>
                    <p className='my-3'>Or track your existing application</p>
                    <form action='#'>
                        <div className="input-group mb-3 my-4">
                        <span className="input-group-text" id="basic-addon1">+91</span>
                        <input type="number" className="form-control" placeholder="Enter your mobile number" />
                        </div>
                        
                        <button className='btn btn-primary px-5 rounded-1 my-4'>Get OTP</button>
                    </form>
                    <p className='mt-5'>By proceeding, you agree to the Zerodha <a href='#'>terms</a> & <a href='#'>privacy policy</a></p>
                </div>
            </div>
        </div>
    </div> );
}

export default Hero;