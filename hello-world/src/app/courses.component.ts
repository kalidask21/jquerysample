
import {Component} from '@angular/core';
import {CoursesService} from './courses.services';

@Component({
	selector : 'courses',
	template : `<h2>
	      {{title}}
          <ul>
             <li *ngFor="let course of courses" >
                 {{course}}
             </li>
          </ul>
	      </h2>`
})


export class CoursesComponent{
  	title:String = 'List of Courses';
    courses;


    constructor(cService :CoursesService){
       // let cService = new CoursesService(); // Tradition way . 
        this.courses = cService.getCourses();
    }
}