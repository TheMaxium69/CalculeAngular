import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})


export class EnfantComponent implements OnInit {

  child: number = 0;

  @Output() out: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() { }

  plus(): void {
    this.child++;
    this.out.emit(1);
  }

  moin(): void {
    if(this.child > 0){
      this.child = this.child - 1
      this.out.emit(-1);
    }
  }

  reset(): void {
    this.out.emit(-this.child);
    this.child = 0
  }

  ngOnInit(): void {
  }

}
