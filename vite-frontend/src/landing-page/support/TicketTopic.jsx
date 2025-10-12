import React from 'react';

function TicketTopic({category,topics}) {
    return ( <div className='my-4' style={{width:"26%"}}>
        <h3><a>{category}</a></h3>
        <div>
            {topics.map(t=>{
                return <><a href={t[1]} className='d-block my-2'>{t}</a></>;
            })}
        </div>
    </div> );
}

export default TicketTopic;