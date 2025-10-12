import React from 'react';

function OptionalServiceCharges() {
    return ( <div className='container my-5'>
    <h1 className='my-4'>Optional Service Charges</h1>
        <table className='table border my-4'>
            <thead>
                <tr>
                    <th className='col'>Service</th>
                    <th className='col'>Billing Frequency</th>
                    <th className='col'>Charges</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 500 | Historical: 500</td>
                </tr>
            </tbody>
        </table>
    </div> );
}

export default OptionalServiceCharges;