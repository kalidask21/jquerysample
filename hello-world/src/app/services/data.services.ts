
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers:any = new Headers();
  options:any;
  constructor(private http : Http)
  {
       this.headers.append('X-Auth-Token', '1bda19448e4542b1acb696ba9cb83e18');
       this.options = new RequestOptions({headers: this.headers})
  }
  get(url) {
      console.log(this.options);
      return this.http.get(url,this.options);
  };
  create(url,resource) {
        return this.http.post(url,resource);
  };

  delete(url,selectedTopic) {
     return  this.http.delete(url +'/'+selectedTopic.id);
  };

  update(url,selectedTopic) {
    selectedTopic['isupdated'] = true;
  	console.log(selectedTopic);
  };
}
