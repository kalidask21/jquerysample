import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.services'

@Injectable({
  providedIn: 'root'
})
export class JsonService extends DataService {

  constructor(http : Http)
  {
     super(http);
  }
}
