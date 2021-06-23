import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counter: number = 0;


  add(): void
  {
    this.counter++;
    this.display();
  }
  
  sub(): void
  {
    this.counter--;
    this.display();
  }

  inpClass: string = "";
  display(): void
  {
    this.inpClass = "";
    if(this.counter % 2 == 0) this.inpClass += " text-danger "
    if(this.counter % 3 == 0) this.inpClass += " fw-bold "
    if(this.counter % 7 == 0) this.inpClass += " fst-italic "
  }
  

}
