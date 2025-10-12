import React from 'react';
import Dropdown from './Dropdown';

function FAQs() {
    return ( <div className='container my-5 py-5'>
        <h2 className='my-4'>FAQs</h2>
        <Dropdown question={'What is a Zerodha account?'} answer={'A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.'}/>
        <Dropdown question={'What documents are required to open a demat account?'} complex={true} answer={
            <>
                <p>The following documents are required to open a Zerodha account online:</p>
                <ul>
                    <li>PAN number</li>
                    <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                    <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                    <li>Income proof (Required only if you wish to trade in Futures & options)</li>
                </ul>
            </>
        }/>
        <Dropdown question={'Is Zerodha account opening free?'} answer={'Yes, It is completely free.'}/>
        <Dropdown question={'Are there any maintenance charges for a demat account?'} answer={
            <>
            <p>The account maintenance charges are applicable based on the account type:</p>
            <ul>
                <li><strong>For Basic Services Demat Account:</strong> Zero charges if the holding value is less than ₹4,00,000.</li>
                <li><strong>For non-Basic Services Demat Account demat accounts:</strong> ₹300 per year + GST.</li>
                <li>To learn more about BSDA, <a href="#">Click here</a>.</li>
            </ul>
            </>
        }/>
        <Dropdown question={'Can I open a demat account without a bank account?'} answer={
            <div>
                To open a demat account, you must have a bank account in your name.<br/>
                If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails,<br/> you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
            </div>
        }/>
    </div> );
}

export default FAQs;