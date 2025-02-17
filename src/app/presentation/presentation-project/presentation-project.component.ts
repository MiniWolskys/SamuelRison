import { Component, Input } from '@angular/core';
import { createEmptyProject, Project } from '../../model/project';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ExperienceFilterService } from '../../service/experience-filter.service';

@Component({
    selector: 'app-presentation-project',
    imports: [
        NgIf,
        NgForOf,
        NgClass
    ],
    standalone: true,
    templateUrl: './presentation-project.component.html',
    styleUrl: './presentation-project.component.css'
})
export class PresentationProjectComponent {
    @Input({required: true})
    public project: Project = createEmptyProject();

    public currentlyActiveFilters: string[] = [];

    constructor(private experienceFilterService: ExperienceFilterService) {
        this.experienceFilterService.filtersObservable().subscribe(filters => this.currentlyActiveFilters = filters);
    }

    public filterToggle(tech: string): void {
        this.experienceFilterService.addFilter(tech);
    }
}
