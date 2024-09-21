import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  constructor() {
    console.log('HomeComponent constructor');
  }

  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }

}
