import { Injectable } from '@angular/core';
import { DataService } from './data.services'
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService extends DataService {

   constructor(http : Http)
  {
     super(http);
  }
}
