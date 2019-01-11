import { Component, OnInit } from '@angular/core';
import { openUpShop } from './animations/openShop';
import { menuOpenButton } from './animations/buttonPress';
import { coinClick } from './animations/coinClick';
import {pageTransition} from './animations/animation';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    openUpShop,
    menuOpenButton,
    coinClick,
    pageTransition
  ]
})
export class GameComponent implements OnInit {

  //Money Game Values
  money:number = 0;
  clickMultiplier:number = .05
  perSecond:number = .01

  //States
  state:string = 'in'
  shopState:string = 'closed'
  clickButton:string = 'notclick'
  clickButton1:string = 'notclick'
  clickButton3:string = 'notclick'
  moneyClicker:string = 'notclick'

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
    let myObservable = Rx.Observable.interval(500).timeInterval()
    myObservable.subscribe(x => this.autoMoney())
    let autoSave = Rx.Observable.interval(60000).timeInterval()
    autoSave.subscribe(x => this.saveGame())

    if(localStorage.money != null) {
      this.money = (JSON.parse(localStorage.money))
      this.clickMultiplier = (JSON.parse(localStorage.clickMult))
      this.perSecond = (JSON.parse(localStorage.perSec))
      this.upgrades = (JSON.parse(localStorage.upgrades))
    }

  }
  saveGame() {
    localStorage.setItem("money", JSON.stringify(this.money))
    localStorage.setItem("clickMult", JSON.stringify(this.clickMultiplier))
    localStorage.setItem("perSec", JSON.stringify(this.perSecond))
    localStorage.setItem("upgrades", JSON.stringify(this.upgrades))
  }
  finishClick() {
    this.moneyClicker = 'notclick'
  }
  makeState() {
    this.clickButton = 'clicked'
  }
  makeState1() {
    this.clickButton1 = 'clicked'
  }
  makeState3() {
    this.clickButton3 = 'clicked'
  }
  undoState() {
    this.clickButton = 'noClick'
    this.clickButton1 = 'noClick'
    this.clickButton3 = 'noClick'
  }
  autoMoney() {
    this.money+=.5*this.perSecond
  }

  clickMoney() {
    this.moneyClicker = 'clicked'
    this.money+=this.clickMultiplier;
    
  }

  shopStateFunc() {
    this.shopState = 'closed' ? 'open' : 'closed'
  }
  closeUpShop(event) {
    this.shopState = event
    console.log(event)
  }
  newMoney(event) {
    this.money = event
  }
  newClickMult(event) {
    this.clickMultiplier = event
  }
  newPerSecond(event) {
    this.perSecond = event
  }
  countUpg(event) {
    this.upgrades = event
  }
  upgrades = [
    {
      id: 0,
      price: .50,
      multiplier: .05,
      imgUrl: "assets/Upgrades/0.png",
      name: 'Nickel per second'
    },
    {
      id: 1,
      price: 2,
      multiplier: .10,
      imgUrl: "assets/Upgrades/1.png",
      name: 'Dime per second'
    },
    {
      id: 2,
      price: 5,
      multiplier: .25,
      imgUrl: "assets/Upgrades/2.png",
      name: 'Quarter per second'
    },
    {
      id: 3,
      price: 15,
      multiplier: .50,
      imgUrl: "assets/Upgrades/3.png",
      name: 'Half dollar per second'
    },
    {
      id: 4,
      price: 25,
      multiplier: 1,
      imgUrl: "assets/Upgrades/4.png",
      name: 'Dollar per second'
    },
    {
      id: 5,
      price: 125,
      multiplier: 5,
      imgUrl: "assets/Upgrades/5.png",
      name: 'Five dollars per second'
    },
    {
      id: 6,
      price: 2000,
      multiplier: 10,
      imgUrl: "assets/Upgrades/6.png",
      name: 'Ten dollars per second'
    },
    {
      id: 7,
      price: 7500,
      multiplier: 20,
      imgUrl: "assets/Upgrades/7.png",
      name: 'Twenty dollars per second'
    },
    {
      id: 8,
      price: 20000,
      multiplier: 50,
      imgUrl: "assets/Upgrades/8.png",
      name: 'Fifty dollars per second'
    },
    {
      id: 9,
      price: 50000,
      multiplier: 100,
      imgUrl: "assets/Upgrades/9.png",
      name: 'One hundred per second'
    },
    {
      id: 10,
      price: 200000,
      multiplier: 1000,
      imgUrl: "assets/Upgrades/10.png",
      name: 'One thousand per second'
    },
    {
      id: 11,
      price: 1000000,
      multiplier: 10000,
      imgUrl: "assets/Upgrades/11.png",
      name: 'Ten thousand per second'
    }
  ]

}
