import React from 'react';
import TicketTopic from './TicketTopic';
function Ticket() {
    return ( <div className='container'>
        <h2 className='my-4'>To create a ticket, select a relevant topic</h2>
        <div className='d-flex flex-wrap justify-content-between mb-5'>
            <TicketTopic category={'Account Opening'} topics={['Resident individual','Minor','Non Resident Indian (NRI)','Company, Partnership, HUF and LLP','Glossary']}/>
            <TicketTopic category={'Your Zerodha Account'} topics={[
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities"
            ]}/>
            <TicketTopic category={'Kite'} topics={[
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alerts and Nudges",
                "General"
            ]}/>
            <TicketTopic category={'Funds'} topics={[
                 "Add money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates"
                        ]}/>
            <TicketTopic category={'Console'} topics={[
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments"
                        ]}/>
            <TicketTopic category={'Coin'} topics={[
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Features on Coin",
                "Payments and Orders",
                "General"
                        ]}/>
        </div>
    </div> );
}

export default Ticket;