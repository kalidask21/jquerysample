/**
 * http://usejsdoc.org/
 */

import React,{Component} from 'react';

export default class Table extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			names : ['KK','BB','CC']
		};
		
	}
	render(){
		
	    var rows = this.state.names.map(function(name) {
			return name;
		  })
		return (
		   <table border="1" > 
		   <thead>  
			   <th>
			         <td>Name</td>
			     </th>
		   </thead>
		   <tbody>
			     <tr>
			     	{rows}
			     </tr>
		    </tbody> 
		   </table>		
		);
		
	}
}