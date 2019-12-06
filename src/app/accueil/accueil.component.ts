import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public afAuth:AngularFireAuth,public router:Router,public ngZone:NgZone) { }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.auth.signOut().then((result)=>{
      this.router.navigate(['/login']);
    });

  }

}
