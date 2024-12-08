import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output, QueryList
} from '@angular/core';
import {Course} from '../model/course';
import {NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {CourseImageComponent} from '../course-image/course-image.component';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{

  @ContentChild("couerseImage")
  image!:ElementRef;

  @ContentChild(CourseImageComponent)
  imageComponent!:CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  images!: QueryList<CourseImageComponent>;

  @ContentChild(CourseImageComponent,{read:ElementRef})
  imageComponentDom!:ElementRef;
  @Input({
    required:true
  })
  course!: Course;

  @Input()
  index!:number;

  @Output("courseSelected")
  courseEventEmitter = new EventEmitter<Course>();

  // @Output()
  // courseSelected = new EventEmitter<Course>();

  onCourseViewed(){
    // console.log("card component - button clicked..")
    this.courseEventEmitter.emit(this.course)
  }
  isImageVisible(){
    return this.course?.iconUrl;
  }
  cardClasses(){

    if (this.course?.category?.toLowerCase() == 'beginner'){
      return ['beginner'];//or 'beginner'
    }
    return {
      beginner: this.course?.category?.toLowerCase() == 'beginner'
    }
  }
  cardStyles(){
    return {
      'text-decoration':'line-through'
    }
  }

  ngAfterViewInit(): void {
    console.log(this.image);
    console.log(this.imageComponent)
    console.log(this.imageComponentDom)
  }

  ngAfterContentInit(): void {
    console.log(this.images);
  }
}
