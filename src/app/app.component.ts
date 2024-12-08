import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent} from "./course-card/course-card.component"
import {COURSES} from "../db-data";
import {Course} from './model/course';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe, KeyValuePipe,
  NgForOf, NgIf,
  PercentPipe,
  SlicePipe,
  UpperCasePipe
} from '@angular/common';
import {CourseImageComponent} from './course-image/course-image.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, NgForOf, DatePipe, UpperCasePipe, DecimalPipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe, NgIf, CourseImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

@ViewChildren(CourseCardComponent)
  cards!:QueryList<CourseCardComponent>;
  @ViewChild('courseImage')
  courseImage!:ElementRef;

  // @ViewChild(CourseCardComponent)
@ViewChild('cardRef')
  card!:CourseCardComponent;

  @ViewChild('couerseImage')
  couerseImage!:ElementRef;

  @ViewChild('cardRef',{read:ElementRef})
  cardElement!:ElementRef;

  @ViewChild('containerRef')
  containerDiv!:ElementRef;

  data = {
    title : '<h1>AngularCourse</h1>'
  }
  price = 9.345634345;
  courses:Course[] = COURSES;
  startDate = new Date(2000,0,1);
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngRxCourse = COURSES[2];
  onLogoClicked(){
    alert('hello world');
  }

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  }
  onCardClicked(){
    console.log("app component button clicked.")
  }
  onCourseSelected(course:Course){
    console.log(this.couerseImage)
    console.log(this.courseImage,this.card,this.containerDiv,course.description);
  }
  trackCourse(index:number,course:Course){
    // console.log(index, course)
    return course?.id ;
  }

  ngAfterViewInit(): void {
    // console.log("containerDiv", this.containerDiv)
    // this.courses[1].description = "test";

this.cards.changes.subscribe(cards => {
      console.log(cards);
    })
  }
  onCourseEdited(){
    this.courses.push(  {
      id: 11,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      lessonsCount: 10,
      category:'',
    });
  }
}
