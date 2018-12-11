import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  options = [
    {id: 1, name: 'option 1 '},
    {id: 2, name: 'option 3 '},
    {id: 3, name: 'option 4 '},
    {id: 4, name: 'option 5 '},
  ];

  check(f){
    console.log(f.value)
  }
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    let value = f.value;
  }
}
