import React , { Component } from "react";

export default class WordSearcher extends Component{

    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button  className="btn btn-primary" onClick={this.props.search} name="searchbtn" >   Search </button>
                    </div>
                </div>
                </div>
           </div>
        )
    }
}