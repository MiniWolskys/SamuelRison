export interface WorkProject {
    name: string;
    introduction: string;
    tasks: string[];
    technologies: string[];
}

export const createEmptyProject = (): WorkProject => ({ name: '', introduction: '', tasks: [], technologies: [] });