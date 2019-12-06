import { Component, OnInit,NgZone } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Pizza } from '../pizza';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent implements OnInit {

  name:string="";
  image:string="";
  ingredientsArray = [];
  price:number;
  description:string="";
  pizza:Pizza;
  key : string;
  database: AngularFirestore;
  constructor(private _Activatedroute:ActivatedRoute,private db:AngularFirestore,private firedb:AngularFireDatabase,private ngZone:NgZone,private router:Router) {
    this.database = db;
  }

  ngOnInit() {
    this.key = this._Activatedroute.snapshot.params['name'];
    this.name = this._Activatedroute.snapshot.params['name'];
    this.image = this._Activatedroute.snapshot.params['image'];
    this.price = parseInt(this._Activatedroute.snapshot.params['price']);
    this.description = this._Activatedroute.snapshot.params['description'];
  }

  onUpdate(f:FormGroup){
    this.pizza = {
      name : f.value['name'],
      ingredients : this.ingredientsArray,
      image : f.value['image'],
      price : f.value['price'],
      description : f.value['description']
    }
    console.log(this.pizza);
    this.database.collection<Pizza>('Pizzas').doc(this.key).update(this.pizza).then((result)=>{
      this.ngZone.run(()=>{
        window.alert(`${this.key} has been updated`);
        this.router.navigate(['show-pizza']);
      })
    }).catch((error)=>{
      window.alert(error.message);
    });;
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
