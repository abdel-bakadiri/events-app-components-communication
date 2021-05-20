import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageTitle = 'The international IT events';
  constructor() {}

  ngOnInit(): void {}
}
