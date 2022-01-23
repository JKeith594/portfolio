import { Component, Input, OnInit } from '@angular/core';
import { ProjectSection } from '../classes/project_section';

@Component({
  selector: 'app-angled-section',
  templateUrl: './angled-section.component.html',
  styleUrls: ['./angled-section.component.scss']
})
export class AngledSectionComponent implements OnInit {

  @Input() projectSection: ProjectSection = null!;
  @Input() sectionColor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
