import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/jsonservice.service';

@Component({
  selector: 'app-jsonpost',
  templateUrl: './jsonpost.component.html',
  styleUrls: ['./jsonpost.component.css']
})
export class JsonpostComponent implements OnInit {

  topics : any[];
 
  url = 'https://jsonplaceholder.typicode.com/posts';
 
  constructor(private jsonService :JsonService) 
  {
      
  }
  addTitle(inputData : HTMLInputElement){
      let jsonData = { title : inputData.value };
      this.jsonService.create(this.url,JSON.stringify(jsonData)).subscribe((Response) =>{
       console.log(Response.json());
       jsonData['id'] = Response.json();
       this.topics.splice(0,0,jsonData);
      })     
  }

  updateTitle(selectedTopic){
  	  this.jsonService.update(this.url,selectedTopic);	
  }
  
  deleteTitle(selectedTopic){
  	 this.jsonService.delete(this.url,selectedTopic).subscribe((Response) =>{
     console.log(Response.json());
     let index = this.topics.indexOf(selectedTopic);
     this.topics.splice(index,1);
    })     
  }
  ngOnInit() {
  	  this.jsonService.get(this.url,).subscribe((Response) =>{
       	 this.topics = Response.json();
      })  
   
  }

}
