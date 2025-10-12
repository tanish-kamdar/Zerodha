import React from 'react';

function Support() {
    return ( <div style={{backgroundColor:"#387ed1" , color:"white"}} className='py-5'>
        <div className='container'>
            <div className='support-header d-flex justify-content-between'>
                <h3 className='d-inline my-4'>Support Portal</h3>
                <h5 className='d-inline'><a href='#' style={{color:"white", textDecorationLine:"underline"}}>Track Tickets</a></h5>
            </div>
            <div className='support-body row'>
                <div className='col-7'>
                    <h4 className='my-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <form className='my-4'>
                        <input type='text' className='form-control border-0 py-3' placeholder='How do I activate F&O, why is my order getting rejected ?...' />
                    </form>
                    <div className='super-links d-flex justify-content-between align-items-start flex-wrap '>
                        <a href='#' className='my-3' style={{color:"white", textDecorationLine:"underline", width:"30%"}}>Track Account Opening</a>
                        <a href='#' className='my-3' style={{color:"white" ,textDecorationLine:"underline", width:"30%"}}>Track Segment Activation</a>
                        <a href='#' className='my-3' style={{color:"white" ,textDecorationLine:"underline", width:"30%"}}>Intraday Margins</a>
                        <a href='#' className='my-3' style={{color:"white" ,textDecorationLine:"underline", width:"30%"}}>Kite User Manual</a>
                    </div>
                </div>
                <div className='col-4 '>
                    <h3>Featured</h3>
                    <ol>
                        <li className='my-3'><a href='#'style={{ color:"white",textDecorationLine:"underline"}}>Current Takeovers and Delisting – June 2025</a></li>
                        <li className='my-3'><a href='#'style={{ color:"white",textDecorationLine:"underline"}}>Surveillance measure on scrips - June 2025</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div> );
}

export default Support;