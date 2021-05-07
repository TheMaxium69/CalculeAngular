import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  toto = 0;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(param: number): void{
    console.log('jai recu ' + param);
    this.toto += param;
  }

}
