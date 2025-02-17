import { Component, Input } from '@angular/core';
import { createEmptyProject, Project } from '../../model/project';
import { NgForOf, NgIf } from '@angular/common';
import { ExperienceFilterService } from '../../service/experience-filter.service';

@Component({
    selector: 'app-presentation-project',
    imports: [
        NgIf,
        NgForOf
    ],
    standalone: true,
    templateUrl: './presentation-project.component.html',
    styleUrl: './presentation-project.component.css'
})
export class PresentationProjectComponent {
    @Input({required: true})
    public project: Project = createEmptyProject();

    constructor(private experienceFilterService: ExperienceFilterService) {
    }

    public filterToggle(tech: string): void {
        this.experienceFilterService.addFilter(tech);
    }
}
