import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'elements';
  content = null;

  constructor() {
    setTimeout(() => {
      this.content = "<p>A paragreaph!</p>";
    }, 1000);
  }

}
