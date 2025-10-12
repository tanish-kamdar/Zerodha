import React from 'react';

function RegSteps() {
    return ( <div className='container text-center my-5 py-5'>
        <h2>Steps to open a demat account with Zerodha</h2>
        <div className='row px-5 mx-5 my-5'>
            <div className='col'>
                <img src='media/images/stepsImage.svg'/>
            </div>
            <div className='col d-flex flex-column justiy-content-center text-start'>
                <ol className="list-group list-group-numbered">
                <li className="list-group-item">Enter the requested details</li>
                <li className="list-group-item">Complete e-sign & verification</li>
                <li className="list-group-item">Start investing!</li>
                </ol>
            </div>
        </div>
    </div> );
}

export default RegSteps;