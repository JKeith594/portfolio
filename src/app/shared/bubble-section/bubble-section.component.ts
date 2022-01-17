import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-section',
  templateUrl: './bubble-section.component.html',
  styleUrls: ['./bubble-section.component.scss']
})
export class BubbleSectionComponent implements OnInit {

  @Input()
  showImageOnRight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
