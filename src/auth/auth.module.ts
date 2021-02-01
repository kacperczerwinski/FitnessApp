import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", loadChildren: "./login/login.module#LoginModule" },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule",
      },
    ],
  },
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDa3kVrE3eVddwXFVh6ERP6P4Fxm-64Dqc",
  authDomain: "fitnessapp2-1234f.firebaseapp.com",
  databaseURL: "https://fitnessapp2-1234f-default-rtdb.firebaseio.com",
  projectId: "fitnessapp2-1234f",
  storageBucket: "fitnessapp2-1234f.appspot.com",
  messagingSenderId: "234773337336",
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
})
export class AuthModule {}
