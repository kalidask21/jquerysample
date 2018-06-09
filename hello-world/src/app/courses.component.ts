
import {Component} from '@angular/core';
import {CoursesService} from './courses.services';

@Component({
	selector : 'courses',
	templateUrl : './courses.component.html'
	      
})


export class CoursesComponent{
  	title:String = 'List of Courses';
  	imageURL = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg";
  	isActive = true;
  	wikiPage = 'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation';
    courses;
    form = {
    	fname : 'Kalidas',
    	lname :  'K'
    }


	onSubmitForm(){
		//$event.stopPropagation(); // Prevent bubble Event in DOM Calls
        console.log('button is clicked ');
        console.log(this.form);
	}

    constructor(cService :CoursesService){
       // let cService = new CoursesService(); // Tradition way . 
        this.courses = cService.getCourses();
    }
}