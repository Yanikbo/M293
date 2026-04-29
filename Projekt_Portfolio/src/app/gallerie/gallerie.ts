import { Component, OnInit } from '@angular/core';
import { ProjectServive } from '../Services/project.servive';
import { Project } from '../classes/project';

@Component({
  selector: 'app-gallerie',
  imports: [],
  templateUrl: './gallerie.html',
  styleUrl: './gallerie.scss',
})
export class Gallerie implements OnInit {
  projects: Project[] = [];
  constructor(
    private projectService: ProjectServive
  ) {}

  ngOnInit(): void {
      this.projects = this.projectService.projects;
  }
}
