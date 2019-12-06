import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../user';
import { state,trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email:string = "";
  pwd:string = "";
  message:string = "";
  submitted:boolean = false;
  constructor(public afAuth:AngularFireAuth,public router:Router,public ngZone:NgZone) {
  }

  ngOnInit() {

  }

  signIn(formLogin:FormGroup){
    this.submitted = true;
    this.email = formLogin.value['email'];
    this.pwd = formLogin.value['password'];
    return this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pwd).then((result)=>{
      this.ngZone.run(() => {
        this.router.navigate(['info']);
    });
  }).catch((error) => {
    this.message = error.message;
  })
}
  
}
