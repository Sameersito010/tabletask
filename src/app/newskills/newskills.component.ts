import { Component, OnInit } from '@angular/core';
import { Itodos } from '../component/interface/interface';
import { stdArr } from "../component/const/const";

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.scss']
})
export class NewskillsComponent implements OnInit {
todos : Array<Itodos>=stdArr
completed: any;
  constructor() { }

  ngOnInit(): void {
  }

}
