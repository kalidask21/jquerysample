import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : Http)
  {

  }
  getData() {
      return this.http.get(this.url);
  };
 
  addData(postTopic) {
        return this.http.post(this.url,postTopic);
  };

  deleteData(selectedTopic) {
     return  this.http.delete(this.url +'/'+selectedTopic.id);
  };

  updateData(selectedTopic) {
    selectedTopic['isupdated'] = true;
  	console.log(selectedTopic);
  };
}
