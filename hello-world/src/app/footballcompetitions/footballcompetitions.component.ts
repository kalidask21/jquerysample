import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/footballservice.service';


@Component({
  selector: 'app-footballcompetitions',
  templateUrl: './footballcompetitions.component.html',
  styleUrls: ['./footballcompetitions.component.css']
})
export class FootballcompetitionsComponent implements OnInit {

  constructor(private footballServ : FootballService) { }
 
  isLoading : boolean = true;
  competitions :any[];
  url = 'http://api.football-data.org/v1/competitions';

  ngOnInit() {
    this.footballServ.get(this.url).subscribe((Response) =>{
       	 this.competitions = Response.json()
       	 this.isLoading = false; 
    })   
  }

}
