import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  @Input('data') data;
  constructor() { }

  ngOnInit(): void {
  }

}
