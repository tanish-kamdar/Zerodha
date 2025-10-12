import React from 'react';

function AccCategory({title,content}) {
    return ( <div className="card ms-5 my-4" style={{width: "26%"}}>
  <div className="card-body">
    <h5 className="card-title my-4">{title}</h5>
    <p className="card-text my-4">{content}</p>
  </div>
</div> );
}

export default AccCategory;