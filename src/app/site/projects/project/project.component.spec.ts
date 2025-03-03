import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProjectService } from '../../../service/project.service';
import { ProjectServiceMock } from '../../../../mock/ProjectServiceMock';

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;
    let projectServiceMock: ProjectServiceMock;

    beforeEach(async () => {
        projectServiceMock = new ProjectServiceMock();

        await TestBed.configureTestingModule({
            imports: [ProjectComponent],
            providers: [
                { provide: ActivatedRoute, useValue: { params: of(convertToParamMap([{ id: 1 }])) }},
                { provide: ProjectService, useValue: projectServiceMock }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
