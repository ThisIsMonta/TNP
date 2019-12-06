import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from "../Pizza";
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  // private dbPath = '/Pizzas';

  // pizza: AngularFireList<Pizza[]>
  constructor(){}
  // constructor(private db:AngularFireDatabase) { 
  //   this.pizza = db.list(this.dbPath);
  // }
  // addPizza(p:Pizza):void{
  //   this.pizza.push(p);
  // }
  

}
