import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laygiatri',
  templateUrl: './laygiatri.component.html',
  styleUrls: ['./laygiatri.component.css']
})
export class LaygiatriComponent implements OnInit {

  // a = "a";
  laygt(a){
    alert(a.value);
  }
  a=true;
  doimau(){
    this.a = !this.a;
  }

  color = "green";
  // a = false;
  constructor() { }
  // ifdung = true;
  // ifvandung =true;

  //for
    // a = ['a','b','c','d','e','f'];
      // a=[
      //   {name: "a",age: 10},
      //   {name: "b",age: 3},
      //   {name: "v",age: 10}
      // ]
  ngOnInit(): void {
    // console.log('a');
  }
}
