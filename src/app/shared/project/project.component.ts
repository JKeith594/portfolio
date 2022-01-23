import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../classes/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project = null!;

  constructor() { }

  ngOnInit(): void {
  }

}
