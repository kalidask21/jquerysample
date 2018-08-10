import React from 'react';

const idcard = (props) =>{
   return (
   	  <div className="container">
	   <div className="card">
	   	     <div className="container">
			    <h4><b>{props.name}</b></h4> 
			    <p>{props.job}</p>
			    <p> Age is {props.age} </p> 
			    <p> Location {props.children} </p> 
			    <p> ID Card No -{idCardNo()}</p> 
			    <p> Visited  -{props.visited}</p> 
			 </div>

	   	     <div className="container">
			    Modify Name : <input type="text" value={props.name} onChange={props.modifyname}/>
			 </div>
       </div>
	  </div>  
	  
   	);
}

let idCardNo =()=>{
    return Math.floor(Math.random()* 338347484 );
}

export default idcard;