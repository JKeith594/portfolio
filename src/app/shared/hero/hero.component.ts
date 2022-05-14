import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input()
  showButton: boolean = false;

  @Input()
  backgroundImageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundUrlStyle(url: string): string {
    return "background-image: url(" + url + ");";
  }

}
