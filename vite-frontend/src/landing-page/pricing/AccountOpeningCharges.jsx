import React from 'react';

function AccountOpeningCharges() {
    return ( <div className='container my-5'>
        <h2 className='my-4'>Charges for account opening</h2>
        <table className='table border my-4'>
            <thead>
                <tr>
                    <th className='col'>Type of account</th>
                    <th className='col'>Charges</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                <tr>
                    <td>Online account</td>
                    <td>
                        <span className="">FREE</span>
                    </td>
                </tr>
                <tr>
                    <td>Offline account</td>
                    <td>
                        <span className="">FREE</span>
                    </td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹ 500</td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
            </tbody>
        </table>
    </div> );
}

export default AccountOpeningCharges;