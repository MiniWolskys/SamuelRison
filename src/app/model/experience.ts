import { Project } from './project';

export interface ExperienceInterface {
    company: string;
    title: string;
    location: string;
    startDate: number;
    endDate: number;
    shortDescription: string;
    introduction: string;
    projects: Project[];
    technologies: string[];
}

export class Experience implements ExperienceInterface {
    public projects: Project[];
    constructor(public company: string = '',
                public title: string = '',
                public location: string = '',
                public startDate: number = 0,
                public endDate: number = 0,
                public shortDescription: string = '',
                public introduction: string = '',
                private allProjects: Project[] = [],
                public technologies: string[] = []) {
        this.projects = this.allProjects;
    }

    public applyFiltersToProjects(filters: string[]) {
        this.projects = this.allProjects.filter(project => filters.every(filter => project.technologies.includes(filter)));
    }
}
