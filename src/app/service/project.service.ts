import { Injectable } from '@angular/core';
import { projects_data } from '../data/project-data';
import { ProjectInterface } from '../model/projectInterface';
import { checkDefined } from '../helper/type.helper';

export class Project implements ProjectInterface {
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public htmlDescription: string,
        public highlight: boolean,
        public code_url: string,
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private readonly projects: Project[] = [];

    constructor() {
        this.projects = projects_data.map(project => new Project(project.id, project.title, project.image, project.htmlDescription, project.highlight, project.code_url));
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public getHighlightedProjects(): Project[] {
        return this.projects.filter(project => project.highlight);
    }

    public getProjectById(id: number): Project {
        return checkDefined(this.projects.find(project => project.id === id),
            () => new Error('Cannot find project with id ' + id + '.'));
    }
}
