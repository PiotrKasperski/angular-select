import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rting',
  templateUrl: './rting.component.html',
  styleUrls: ['./rting.component.scss'],
})
export class RtingComponent implements OnInit {
  @Input() rate: number;
  @Input() maxRate: number;
  @Input() stars: number;
  constructor() {}

  ngOnInit() {
    //TODO: maxrate=stars
  }
  fullStarsCounter(): Array<any> {
    return new Array(Math.floor(this.rate * (this.stars / this.maxRate)));
  }
  isHalfStar(): boolean {
    return (this.rate * (this.stars / this.maxRate)) % 1 !== 0;
  }
  emptyStarsCounter(): Array<any> {
    return new Array(
      this.stars - this.fullStarsCounter().length - (this.isHalfStar() ? 1 : 0)
    );
  }
}
