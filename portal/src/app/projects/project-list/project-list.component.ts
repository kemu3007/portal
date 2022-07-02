import { Project } from '../projects';
import { ProjectsService } from '../projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  testProjectNames = [
    'angular14-sample',
    'django-jwt-sample',
    'django_4_1_sample',
    'graphene-sample',
    'ngneat-reactive_forms-test',
    'pyodide-sample',
  ];

  excludeProjectNames = ['kemu3007'];

  ngOnInit(): void {
    this.projectsService.get().subscribe((projects) => (this.projects = projects));
  }

  get testProjects() {
    return this.projects.filter((project) => this.testProjectNames.includes(project.name)).sort();
  }

  get templateProjects() {
    return this.projects.filter((project) => project.is_template).sort();
  }

  get applicationProjects() {
    return this.projects
      .filter(
        (project) =>
          !project.is_template &&
          !this.testProjectNames.includes(project.name) &&
          !this.excludeProjectNames.includes(project.name)
      )
      .sort();
  }

  navigateToRepoUrl(project: Project) {
    window.location.href = project.svn_url;
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 3 : 1;
  }
}
