import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(): any {
    return ['course1', 'course1', 'course3'];
  }
  constructor() { }
}
