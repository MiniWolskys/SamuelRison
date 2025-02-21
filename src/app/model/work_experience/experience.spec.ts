import { Experience } from './experience';
import { WorkProject } from './workProject';

describe('Experience', () => {
    let experience: Experience
    const fakeProjects: WorkProject[] = [
        { name: 'Project 1', introduction: '', tasks: [], technologies: ['Java', 'Angular', 'Jest'] },
        { name: 'Project 2', introduction: '', tasks: [], technologies: ['Java', 'React', 'C#'] },
        { name: 'Project 3', introduction: '', tasks: [], technologies: ['Java', 'Python'] },
        { name: 'Project 4', introduction: '', tasks: [], technologies: ['C', 'C++'] },
    ];

    it('applyFilterToProject should return all projects if no filter is given', () => {
        experience = new Experience('', '', '', 0, 0, '', '', fakeProjects, []);
        experience.applyFiltersToProjects([]);
        expect(experience.projects).toHaveLength(4);
    });

    it('applyFilterToProject should return no project if no projects are given', () => {
        experience = new Experience();
        experience.applyFiltersToProjects(['Java', 'Angular']);
        expect(experience.projects).toHaveLength(0);
    });

    it('applyFilterToProject should return filtered projects', () => {
        experience = new Experience('', '', '', 0, 0, '', '', fakeProjects, []);
        experience.applyFiltersToProjects(['Java', 'Python']);
        expect(experience.projects).toHaveLength(1);
    });
});