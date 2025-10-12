import React from 'react';
import '../index.css'
function Footer() {
    return ( 
    <footer className=' border-top bg-body-tertiary pt-4'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/logo.svg' alt='footer logo' className='img-fluid'></img>
                    <p className='footer-name'>&copy; 2010 - 2025, Zerodha Broking Ltd. <br/>All rights reserved.</p>
                    <div className='social-media-1'>
                        <i className="fa-brands fa-x-twitter social-media-logos mx-2"></i>
                        <i className="fab fa-facebook-square social-media-logos mx-2"></i>
                        <i className="fab fa-instagram social-media-logos mx-2"></i>
                        <i className="fab fa-linkedin social-media-logos mx-2"></i>
                    </div>
                    <hr/>
                    <div className='social-media-2'>
                        <i className="fab fa-youtube social-media-logos  mx-2"></i>
                        <i className="fab fa-whatsapp social-media-logos  mx-2"></i>
                        <i className="fab fa-telegram social-media-logos  mx-2"></i>
                    </div>
                </div>
                <div className='col'>
                    <h5>Account</h5>
                    <a className='foot-link'>Open demat account</a><br/>
                    <a className='foot-link'>Minor demat account</a><br/>
                    <a className='foot-link'>NRI demat account</a><br/>
                    <a className='foot-link'>Commodity</a><br/>
                    <a className='foot-link'>Dematerialisation</a><br/>
                    <a className='foot-link'>Fund transfer</a><br/>
                    <a className='foot-link'>MTF</a><br/>
                    <a className='foot-link'>Referral program</a><br/>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                   <a className='foot-link'>Contact us</a><br/>
                    <a className='foot-link'>Support portal</a><br/>
                    <a className='foot-link'>How to file a complaint?</a><br/>
                    <a className='foot-link'>Status of your complaints</a><br/>
                   <a className='foot-link'>Bulletin</a><br/>
                    <a className='foot-link'>Circular</a><br/>
                   <a className='foot-link'>Z-Connect blog</a><br/>
                    <a className='foot-link'>Downloads</a><br/>
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <a className='foot-link'>About</a><br/>
                    <a className='foot-link'>Philosophy</a><br/>
                    <a className='foot-link'>Press & media</a><br/>
                    <a className='foot-link'>Careers</a><br/>
                    <a className='foot-link'>Zerodha Cares (CSR)</a><br/>
                    <a className='foot-link'>Zerodha.tech</a><br/>
                    <a className='foot-link'>Open source</a><br/>
                </div>
                <div className='col'>
                    <h5>Quick Links</h5>
                    <a className='foot-link'>Upcoming IPOs</a><br/>
                    <a className='foot-link'>Brokerage charges</a><br/>
                    <a className='foot-link'>Market holidays</a><br/>
                    <a className='foot-link'>Economic calendar</a><br/>
                    <a className='foot-link'>Calculators</a><br/>
                    <a className='foot-link'>Markets</a><br/>
                    <a className='foot-link'>Sectors</a><br/>
                </div>
            </div>
            <p className='mt-5 mb-3 footer-para'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p className='my-3 footer-para'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p className='my-3 footer-para'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
            <p className='my-3 footer-para'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className='my-3 footer-para'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className='my-3 footer-para'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
    </footer>
    );
}

export default Footer;