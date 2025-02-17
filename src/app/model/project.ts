export interface Project {
    name: string;
    introduction: string;
    tasks: string[];
    technologies: string[];
}

export const createEmptyProject = (): Project => ({ name: '', introduction: '', tasks: [], technologies: [] });