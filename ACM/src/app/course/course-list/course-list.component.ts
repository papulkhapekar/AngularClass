import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
ImageVisible = false;
  courses;
  
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    //this.courses = this.courseService.getCourses();
    this.courseService.getCourses()
      .subscribe(
        responce =>{
          this.courses = responce;       
         },
         error =>
         {
           console.log('error occured', error);
         }
      )
  }

  ShowImage()
  {
    this.ImageVisible = !this.ImageVisible;
  }
}
