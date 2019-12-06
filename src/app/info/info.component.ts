import { Component, OnInit } from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  images = ["../assets/PizzaCarousel/Pizza1.jpg","../assets/PizzaCarousel/Pizza2.jpg","../assets/PizzaCarousel/Pizza3.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
