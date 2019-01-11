import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() money:number
  @Input() clickMultiplier:number
  @Input() perSecond:number
  @Output() newMoney: EventEmitter<number> = new EventEmitter<number>();
  @Output() newClickMult: EventEmitter<number> = new EventEmitter<number>();
  @Output() newPerSecond: EventEmitter<number> = new EventEmitter<number>();
  @Output() closeTheShop: EventEmitter<any> = new EventEmitter<any>();
  @Output() upg: EventEmitter<any> = new EventEmitter<any>();

  isOpen: string = 'open'

  constructor() { }

  ngOnInit() {
  }

  closeShop() {
    this.isOpen = 'closed'
    this.closeTheShop.emit(this.isOpen)
  }

  upgradeNow(price, mult, id) {
    if (price <= this.money) {
      this.upgrades.splice(this.upgrades.findIndex(x => x.id === id), 1)
      this.money-=price
      this.perSecond+=mult
      this.newMoney.emit(this.money)
      this.newPerSecond.emit(this.perSecond)
      this.upg.emit(this.upgrades)
    }
  }
  upgradeClicker(cM) {
    var price = ((cM + 300*2*(cM/7))/4);
    if (this.money >= price) {
      this.money-=price;
      this.clickMultiplier*=2;
      this.newMoney.emit(this.money)
      this.newClickMult.emit(this.clickMultiplier)
    }
  }

  @Input()
  upgrades = []
}
