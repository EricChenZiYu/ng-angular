import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: true,
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {

  @Input("src")
  iconUrl!:string;

  @Input()
  description!:string;

}
