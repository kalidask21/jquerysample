import React from 'react';
const style = {
    margin : '10px'
}


const WordContainer = (params) =>{
    //console.log(params);
   
    return (
        <div className="container panel">
        <div className="row">
       
        {
            params.wordsdata.length <= 0 ? <div> No data Found</div> : 
            params.wordsdata.map((word,index) =>{
               return (
                <div key={index} className="alert alert-primary font-italic " style={style} role="alert">
                     {word.word}
                     <hr />
                     <p>  {word.example} </p>
                </div> 
            );
            })
        }
           
      </div>
      </div>
    )
}

export default WordContainer;