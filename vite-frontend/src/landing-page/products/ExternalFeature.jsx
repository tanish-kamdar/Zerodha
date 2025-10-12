import React from 'react';

function ExternalFeature({imageLink,content}) {
    return ( <div  className='card my-4 border-0 ' style={{width:"26%"}}>
        <div className='card-img'>
  <img src={imageLink} class="card-img-top" alt="..." ></img>
  </div>
  <div class="card-body">
    <p class="card-text">{content}</p>
  </div>
</div> );
}

export default ExternalFeature;