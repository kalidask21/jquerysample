import { Component, OnInit ,AfterViewInit ,Input} from '@angular/core';
import { FootballService } from '../services/footballservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


  teamsUrl;
  teamData : any [];
  @Input('compid') compId;
  @Input('baseurl') baseURL;

  constructor(private footballServ : FootballService) { }

  ngOnInit() {
     this.teamsUrl = this.baseURL + this.compId + "/teams";
     console.log(' this.teamsUrl ',this.teamsUrl);
  	 this.footballServ.get(this.teamsUrl).subscribe((Response) =>{
              this.teamData = Response.json().teams;
              console.log(this.teamData);
     })  
  	 
  }

}
