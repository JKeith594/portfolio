import { Component } from '@angular/core';

import * as programmingProjects from '../assets/data/programmingProjects.json';
import * as hobbyProjects from '../assets/data/hobbyProjects.json';
import { ProjectSection } from './shared/classes/project_section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  programmingProjects: any = programmingProjects;
  hobbyProjects: any = hobbyProjects;
}
