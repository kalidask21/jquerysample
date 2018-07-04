import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/footballservice.service';

@Component({
  selector: 'app-competitiondetails',
  templateUrl: './competitiondetails.component.html',
  styleUrls: ['./competitiondetails.component.css']
})
export class CompetitiondetailsComponent implements OnInit {

  compId;
  baseURL = "http://api.football-data.org/v1/competitions/"
  teamsUrl;
 leagueUrl;

  constructor(private footballServ : FootballService,private actRouter : ActivatedRoute) { }

  ngOnInit() {
      this.actRouter.params.subscribe((param) =>{
          this.compId = param['competitionId'];
       
          this.leagueUrl = this.baseURL + this.compId + "/leagueTable";
         
          this.footballServ.get(this.leagueUrl).subscribe((Response) =>{
              console.log(Response.json());
          })      
   })
  //"href": "424/teams"}
            //"href": "http://api.football-data.org/v1/competitions/424/fixtures"
            //"href": "http://api.football-data.org/v1/competitions/424/leagueTable"

  }

}
