import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/footballservice.service';

@Component({
  selector: 'app-competitiondetails',
  templateUrl: './competitiondetails.component.html',
  styleUrls: ['./competitiondetails.component.css']
})
export class CompetitiondetailsComponent implements OnInit {

  id ="424"
  baseURL = "http://api.football-data.org/v1/competitions/"
  teamsUrl = this.baseURL + this.id + "/teams";
  fixturesUrl = this.baseURL + this.id + "/fixtures";
  leagueUrl = this.baseURL + this.id + "/leagueTable";
  constructor(private footballServ : FootballService) { }

  ngOnInit() {
      this.footballServ.get(this.teamsUrl).subscribe((Response) =>{
       	 console.log(Response.json());
      })  

      this.footballServ.get(this.fixturesUrl).subscribe((Response) =>{
       	 console.log(Response.json());
      })  

      this.footballServ.get(this.leagueUrl).subscribe((Response) =>{
       	 console.log(Response.json());
      })  
            //"href": "424/teams"}
            //"href": "http://api.football-data.org/v1/competitions/424/fixtures"
            //"href": "http://api.football-data.org/v1/competitions/424/leagueTable"

  }

}
