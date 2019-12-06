import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pizza } from '../pizza';
import { AccueilService } from '../accueil.service';
import { viewClassName } from '@angular/compiler';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-show-pizza',
  templateUrl: './show-pizza.component.html',
  styleUrls: ['./show-pizza.component.css']
})
export class ShowPizzaComponent implements OnInit {
  startAt = new Subject();
  endsAt = new Subject();
  display='none';
  img:string="";
  name:string="";
  database:AngularFirestore;
  allPizzas:  Observable<any[]>;
  searchPizza : {};
  images:any;
  allPizzasFiltered: any;
  constructor(private accueilService: AccueilService,private db:AngularFirestore,private storage:AngularFireStorage) { 
    this.allPizzas = db.collection('Pizzas').valueChanges();
    this.images = this.storage.ref(`uploads/${"P1"}.jpg`).getDownloadURL();
    console.log("storage is ",this.images)
    this.database = db;
    console.log(this.allPizzas);
  }

  ngOnInit() {
  }

  closeImage(){
    this.display = 'none';
  }

  async openImage(x:string,name:string){
    if(x.length!=0){
      this.display = "block";
      this.img = x;    
      this.name = name;
    }else{
      window.alert("no image found");
    }
    
  }

  async deleteItem(x:string){
    return this.db.collection<Pizza>('Pizzas').doc(x).delete().then((result)=>{
      window.alert(`Pizza : ${x} has been deleted succesfully`);
    }).catch((error)=>{
      console.log(`cannot delete ${x}`);
    })
  }
}
