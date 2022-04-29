import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  skills = [
    {
      name: 'JS/TS',
      rating: 8,
    },
    {
      name: 'html',
      rating: 9,
    },
    {
      name: 'css',
      rating: 10,
    },
    {
      name: 'Polski',
      rating: 8,
    },
    {
      name: 'angielski',
      rating: 8,
    },
    {
      name: 'git',
      rating: 7,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
