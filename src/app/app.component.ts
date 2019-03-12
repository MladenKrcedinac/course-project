import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'course-project';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAqq8GeiXu4KtSmCT9meBORWzVYbcDvIdA",
      authDomain: "ng-recipe-book-9c156.firebaseapp.com",
    });
  }

}
