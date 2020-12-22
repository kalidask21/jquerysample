import React from 'react';

const WordModifier = (props)=>{
   return (
    <div className="container" >
            <div className="col-md-4">
                <div className="panel panel-default">
            <div className="panel-body">
            <div className="form-group">
                <label >Word</label>
                <input type="text" className="form-control" onChange={props.wordtextbox} value={props.wordtextValue} id="exampleInputEmail1" />
            </div>
            <div className="form-group">
                <label >Example</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Example"/>
            </div>
            <div className="form-group">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button  className="btn btn-primary" onClick={props.add} name="addbtn">  ADD </button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button  className="btn btn-primary" onClick={props.modify} name="modifybtn" > MODIFY </button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button className="btn btn-primary"  onClick={props.delete} name="deletebtn" > DELETE </button>
            </div>
            </div>
           </div>
            </div>
            </div>
    </div>
    );

}

export default WordModifier;