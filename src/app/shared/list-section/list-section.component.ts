import { Component, Input, OnInit } from '@angular/core';
import { InfoSection } from '../classes/info_section';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  @Input()
  section: InfoSection = null!;

  @Input()
  customListClass: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getGridTemplateColumns(numberOfItems: number): string {
    return "grid-template-columns: repeat(" + numberOfItems + ", 1fr);";
  }

}
