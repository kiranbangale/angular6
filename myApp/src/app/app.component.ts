import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyAFAgiDE3Zr7O99oiYST969zeIutOw-rDE",
      authDomain: "ng-recipe-book-f079a.firebaseapp.com"
    });
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
