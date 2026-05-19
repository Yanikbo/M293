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
  selectedProject: Project | null = null;
  showPopup = false;

  constructor(
    private projectService: ProjectServive
  ) {}

  ngOnInit(): void {
      this.projects = this.projectService.projects;
  }

  openPopup(project: Project): void {
    this.selectedProject = project;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProject = null;
  }
}
