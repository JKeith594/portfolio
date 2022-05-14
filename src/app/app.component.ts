import { Component } from '@angular/core';

import * as programmingProjects from '../assets/data/programmingProjects.json';
import * as hobbyProjects from '../assets/data/hobbyProjects.json';
import * as graphicDesignProjects from '../assets/data/graphicDesign.json';
import * as skills from '../assets/data/skills.json';
import * as contact from '../assets/data/contact.json';

import { ProjectSection } from './shared/classes/project_section';
import { InfoSection } from './shared/classes/info_section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  programmingProjects: any = programmingProjects;
  hobbyProjects: any = hobbyProjects;
  graphicDesignProjects: any = graphicDesignProjects;
  skills: InfoSection = skills;
  contact: InfoSection = contact;
}
