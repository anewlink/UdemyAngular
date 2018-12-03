import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedSection = 'recipe';

  ngOnInit() {
    let config = {
      apiKey: "AIzaSyCCtSNoVM_r_FOnXX8madwPbguqoxD1wb8",
      authDomain: "ng-recipe-book-364a1.firebaseapp.com"
      /* databaseURL: "https://ng-recipe-book-364a1.firebaseio.com",
      projectId: "ng-recipe-book-364a1",
      storageBucket: "ng-recipe-book-364a1.appspot.com",
      messagingSenderId: "725860248968" */
    };
    firebase.initializeApp(config);
  }

  onNavigate(section: string){
    this.loadedSection = section;
  }

}
