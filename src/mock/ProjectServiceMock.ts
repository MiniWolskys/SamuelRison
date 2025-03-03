import { Project } from '../app/service/project.service';

export class ProjectServiceMock {
    public fakeProjects = [
        new Project(0, 'Fake Project', 'path', 'Fake project description', true, 'code/path'),
        new Project(1, 'Another Fake Project', 'anotherPath', 'Fake project description', false, 'code/path'),
    ];

    public getProjects = () => this.fakeProjects;
    public getHighlightedProjects = () => [this.fakeProjects[0]];
    public getProjectById = () => this.fakeProjects[0];
}