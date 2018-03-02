import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: "AIzaSyBLdeDmPS6oVmkTkZaypNk2OJvOEnxeRH8",
  authDomain: "coinotc-kitchensink-chat.firebaseapp.com",
  databaseURL: "https://coinotc-kitchensink-chat.firebaseio.com/",
  projectId: "coinotc-kitchensink-chat",
  storageBucket: "coinotc-kitchensink-chat.appspot.com",
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
