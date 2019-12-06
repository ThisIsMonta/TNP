import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email:string="";
  pwd:string="";
  cpwd:string="";
  message:string="";
  constructor(public afAuth:AngularFireAuth,public ngZone:NgZone,public router:Router) { }

  ngOnInit() {
  }
  
  onSignUp(formSignUp:FormGroup){
    this.email = formSignUp.value['email'];
    this.pwd = formSignUp.value['password'];
    this.cpwd = formSignUp.value['Cpassword'];
    if(this.pwd==this.cpwd){
      return this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.pwd).then((result)=>{
        this.ngZone.run(() => {
          this.router.navigate(['info']);
      });
    }).catch((error) => {
      this.message = error.message;
    })
    }
  }

}
