import React from 'react';
import AccCategory from './AccCategory'
function AccountTypes() {
    return ( <div className='container'>
        <h1>Explore different account types</h1>
        <div className=' d-flex justify-content-start flex-wrap'>
            <AccCategory title='Individual Account' content='Invest in equity, mutual funds and derivatives' />
            <AccCategory title='HUF Account' content='Make tax-efficient investments for your family' />
            <AccCategory title='NRI Account' content='Invest in equity, mutual funds, debentures, and more' />
            <AccCategory title='Minor Account' content='Teach your little ones about money & invest for their future with them' />
            <AccCategory title='Corporate/LLP/Partnership' content='Manage your business surplus and investments easily' />
        </div>
    </div>);
}

export default AccountTypes;