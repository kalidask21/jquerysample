/**
 * http://usejsdoc.org/
 */

var arrowFun1 = (mess) => 'Hi , Welcome ,'+mess;

console.log(arrowFun1('Kalidas'));

const team = {
	members : ['Kalidas','KK'],
	teamName : 'Chennai Super Kings',
	teamSummary : function(){
		return this.members.map(function(member){
			return `${member} is on the team ${this.teamName}`;
		});
	}		
};

console.log(team.teamSummary());
//output is 
//[ 'Kalidas is on the team undefined',
	  //'KK is on the team undefined' ]


const team1 = {
		members : ['Kalidas','KK'],
		teamName : 'Chennai Super Kings',
		teamSummary : function(){
			return this.members.map((member) =>{
				return `${member} is on the team ${this.teamName}`;
			});
		}		
	};

console.log(team1.teamSummary());
//output is 
//[ 'Kalidas is on the team Chennai Super Kings',
	  //'KK is on the team Chennai Super Kings' ]

