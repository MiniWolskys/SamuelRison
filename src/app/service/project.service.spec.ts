import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
    let service: ProjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getProjects should return the full list of projects', () => {
        expect(service.getProjects()).toHaveLength(2);
    });

    it('getProjectsById should return the project with given id', () => {
        expect(service.getProjectById(1).id).toEqual(1);
    });

    it('getProjectsById should throw error when given incorrect id', () => {
        expect(() => service.getProjectById(-5)).toThrow('Cannot find project with id -5.');
    });

    it('getHighlightedProjects should return list of highlighted projects', () => {
        expect(service.getHighlightedProjects()).toHaveLength(1);
    });
});
