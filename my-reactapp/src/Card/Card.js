import React from 'react';
import './Card.css'


const idcard = (props) =>{
   return (
   	  <div className="container">
<<<<<<< HEAD
	   	<div className="card Card-Custom">
=======
	   <div className="card">
>>>>>>> 20dada3063be76c6ba8107e97fa620e99230451e
	   	     <div className="container">
			    <h4><b>{props.name}</b></h4> 
			    <p>{props.job}</p>
			    <p> Age : {props.age} </p> 
			    <p> Location :{props.children} </p> 
			    <p> ID Card No :{idCardNo()}</p> 
			    <p> Visited : {props.visited}</p> 
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