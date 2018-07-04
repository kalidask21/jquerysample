import { Component, OnInit, Input} from '@angular/core';
import { FootballService } from '../services/footballservice.service';
@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  matchdays : any[];
  selectedMatchDay = 1;
  filteredFixtures : any[];
  Fixtures :any[]
  sort = {
    columnName : '',
    orderBy : 'asc'
  }

  fixturesUrl;
  @Input('compid') compId;
  @Input('baseurl') baseURL;
  constructor(private footballServ : FootballService) { }

  ngOnInit() {
  		  this.matchdays = Array(38);
		    this.fixturesUrl = this.baseURL + this.compId + "/fixtures";
        this.footballServ.get(this.fixturesUrl).subscribe((Response) =>{
                this.Fixtures = Response.json().fixtures;
                this.filteredFixtures = this.Fixtures.filter((obj) => {
                        obj.result.winner = this.findWinner(obj)
                        return obj.matchday == this.selectedMatchDay;
                })
                console.log(this.filteredFixtures);
                console.log(this.matchdays);
        })  

  }

  findWinner(obj){
    return obj.result.goalsHomeTeam > obj.result.goalsAwayTeam ? obj.homeTeamName : obj.awayTeamName;
  }

  selectMatchDay(id){
      this.selectedMatchDay = id; 
      this.refreshFixtures();
  }

  refreshFixtures(){
       this.filteredFixtures = this.Fixtures.filter((obj) => {
              console.log(obj.matchday == this.selectedMatchDay);
              return obj.matchday == this.selectedMatchDay;
       })
      
  }

 

  sortMethod(col){
    this.sort.columnName = col;
    this.sort.orderBy = this.sort.orderBy == 'asc' ? 'desc' : 'asc';
    console.log(this.sort);
    this.filteredFixtures  = this.filteredFixtures.sort((a,b) =>{
           if(this.sort.orderBy == 'asc')
              return a[this.sort.columnName] > b[this.sort.columnName];
           else 
              return b[this.sort.columnName] > a[this.sort.columnName];
    });
  }
}
