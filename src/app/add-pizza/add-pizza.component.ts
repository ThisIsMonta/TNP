import { Component, OnInit,NgZone } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AccueilService } from '../accueil.service';
import { Pizza } from '../pizza';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  submitted: boolean = false;
  existance: boolean = false;
  f: FormGroup;
  path:string = '';
  ingredientsArray = [];
  database:AngularFirestore;
  items:  Observable<any[]>;
  pizza:Pizza=null;
  constructor(private accueilService: AccueilService,private db:AngularFirestore,private firedb:AngularFireDatabase,private ngZone:NgZone,private router:Router) { 
    this.items = db.collection('Pizzas').valueChanges();
    this.database = db;
    console.log(this.items);
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    this.pizza={
      name:f.value['name'].toUpperCase(),
      ingredients:this.ingredientsArray,
      image:f.value['img'],
      price:f.value['price'],
      description:f.value['descPizza']
    }
    this.database.collection<Pizza>('Pizzas').doc(this.pizza.name).set(this.pizza).then((result)=>{
      this.ngZone.run(()=>{
        
        this.router.navigate(['show-pizza']);
      })
    }).catch((error)=>{
      window.alert(error.message);
    });
  }

  ingredientSelector(f: FormGroup) {
    const item = this.ingredientsArray.indexOf(f.value['ingredients']);
    if (item == -1)
      this.ingredientsArray.push(f.value['ingredients']);
    else
      window.alert("already exists !");
  }

  removeIngredient(s: string) {
    const item = this.ingredientsArray.indexOf(s);
    if (item > -1) {
      this.ingredientsArray.splice(item, 1);
    }
  }
}
