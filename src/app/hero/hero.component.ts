import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Image {
  location: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeroComponent implements OnInit {
  public images: Image[] = [
    {
      location: '/assets/img/red_cup-min.jpg',
      title: 'African Print cup - Red',
      description: 'Recyclable cup with Nigerian Atampa Print on a Red background'
    },
    {
      location: '/assets/img/yellow_cup-min.jpg',
      title: 'African Print cup - Yellow',
      description: 'Recyclable cup with Nigerian Atampa Print on a Yellow background'
    },
    {
      location: '/assets/img/green_cup-min.jpg',
      title: 'African Print cup - Green',
      description: 'Recyclable cup with Nigerian Atampa Print on a Green background'
    }
  ];
  constructor() {
  }

  ngOnInit() {}
}
