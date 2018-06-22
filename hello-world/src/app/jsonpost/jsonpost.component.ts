import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/jsonservice.service';

@Component({
  selector: 'app-jsonpost',
  templateUrl: './jsonpost.component.html',
  styleUrls: ['./jsonpost.component.css']
})
export class JsonpostComponent implements OnInit {

  topics : any[];
 
  constructor(private jsonService :JsonService) 
  {
      
  }
  addTitle(inputData : HTMLInputElement){
      let jsonData = { title : inputData.value };
      this.jsonService.addData(JSON.stringify(jsonData)).subscribe((Response) =>{
       console.log(Response.json());
       jsonData['id'] = Response.json();
       this.topics.splice(0,0,jsonData);
      })     
  }

  updateTitle(selectedTopic){
  	  this.jsonService.updateData(selectedTopic);	
  }
  
  deleteTitle(selectedTopic){
  	 this.jsonService.deleteData(selectedTopic).subscribe((Response) =>{
     console.log(Response.json());
     let index = this.topics.indexOf(selectedTopic);
     this.topics.splice(index,1);
    })     
  }
  ngOnInit() {
  	  this.jsonService.getData().subscribe((Response) =>{
       	 this.topics = Response.json();
      })  
   
  }

}
