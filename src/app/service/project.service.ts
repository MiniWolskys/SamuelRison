import { Injectable } from '@angular/core';
import { projects_data } from '../data/project-data';

export class Project {
    constructor(public id: number, public title: string, public image: string, public description: string, public highlight: boolean) {

    }

}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private readonly projects: Project[] = [];

    constructor() {
        this.projects = projects_data.map(project => new Project(project.id, project.title, project.image, project.description, project.highlight));
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public getHighlightedProjects(): Project[] {
        return this.projects.filter(project => project.highlight);
    }

    public getProjectById(id: number): Project | undefined {
        return this.projects.find(project => project.id === id);
    }
}
