import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteSectionComponent } from '../site-section/site-section.component';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { NgForOf } from '@angular/common';
import { Project, ProjectService } from '../../service/project.service';

@Component({
    selector: 'app-projects',
    imports: [
        RouterLink,
        SiteSectionComponent,
        NgForOf
    ],
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    public projects: Project[] = [];

    protected readonly faUserGear = faUserGear;

    constructor(projectService: ProjectService) {
        this.projects = projectService.getProjects();
    }
}
