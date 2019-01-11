import { Component, OnInit } from '@angular/core';
import {pageTransition} from '../game/animations/animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    pageTransition
    ]
})
export class HomeComponent implements OnInit {

  state:string = 'in'

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }


}
