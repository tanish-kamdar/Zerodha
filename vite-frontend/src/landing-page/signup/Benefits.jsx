import React from 'react';

function Benefits() {
    return (  <div className="container my-5">
        <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5 d-flex flex-column align-items-center illustration-area">
                <img src='media/images/benefits.svg' className='img-fluid w-75 mb-5'  />
                <h2 className="text-center section-title mb-4">Benefits of opening a Zerodha demat account</h2>
            </div>

            <div className="col-12 col-md-7">
                <div className="p-4">
                    <div className="mb-4 pb-2">
                        <h3 className="benefit-title">Unbeatable pricing</h3>
                        <p className="benefit-description">
                            Zero charges for equity & mutual fund investments. Flat ₹20 fees for Intraday and F&O trades.
                        </p>
                    </div>

                    <div className="mb-4 pb-2">
                        <h3 className="benefit-title">Best investing experience</h3>
                        <p className="benefit-description">
                            Simple and intuitive trading platform with an easy-to-understand user interface.
                        </p>
                    </div>

                    <div className="mb-4 pb-2">
                        <h3 className="benefit-title">No spam or gimmicks</h3>
                        <p className="benefit-description">
                            Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
                        </p>
                    </div>

                    <div className="mb-4 pb-2">
                        <h3 className="benefit-title">The Zerodha universe</h3>
                        <p className="benefit-description">
                            More than just an app — gain free access to the entire ecosystem of our partner products.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Benefits;