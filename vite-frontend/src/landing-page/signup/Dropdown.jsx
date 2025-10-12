import React, { useState } from 'react';

function Dropdown({question,answer,complex}) {

    let [answerDisplay,setAnswerDisplay]=useState({display : "none"});
    let [flag,setFlag]=useState(true);
    function toggleAnswerStyle(){
        
        if(flag){
        setAnswerDisplay({display:"block"});
        setFlag(!flag);
        }
        else{
        setFlag(!flag);
        setAnswerDisplay({display:"none"});
        }
    }

    return ( <div className="">
        <button className="btn btn-secondary py-1 my-2 border-start  border-0 border-5 rounded-0 border-primary w-100 text-start"  
        style={{backgroundColor:"white",color:"black"}}
        type="button" onClick={toggleAnswerStyle} >
            {question}
            {/* <span className='ps-auto'>Down Arrow</span> */}
        </button>
        <div style={answerDisplay} className='my-4'>
        {answer}
        </div>
        </div>
    );
}
export default Dropdown;