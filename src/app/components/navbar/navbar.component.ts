import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  public responsive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.responsive = !this.responsive;
  }
}
