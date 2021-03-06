import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showData: Boolean = false;
  clicks = [];
  clickId: number = 0;

  toggleDetails(event){
    this.showData = !this.showData;
    //let click = {timeStamp: event.timeStamp, id: this.clickId};
    //this.clickId += 1;
    //this.clicks.push(click);
    this.clicks.push(new Date());
  }

  getColor(index){
    return index >= 4 ? 'blue': 'unset';
  }
}
