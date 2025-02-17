import { Component, OnDestroy } from '@angular/core';
import { PresentationHeaderComponent } from './presentation-header/presentation-header.component';
import { PresentationExperienceComponent } from './presentation-experience/presentation-experience.component';
import { Experience } from '../model/experience';
import { getExperiences, getEducations } from '../data/experience-data';
import { NgForOf } from '@angular/common';
import { faBriefcase, faCode, faGraduationCap, faPen } from '@fortawesome/free-solid-svg-icons';
import { PresentationSectionComponent } from './presentation-section/presentation-section.component';
import { ExperienceFilterService } from '../service/experience-filter.service';
import { Subscription } from 'rxjs';
import { PresentationIntroductionComponent } from './presentation-introduction/presentation-introduction.component';
import { PresentationSkillsComponent } from './presentation-skills/presentation-skills.component';

@Component({
    selector: 'app-presentation',
    imports: [
        PresentationHeaderComponent,
        PresentationExperienceComponent,
        NgForOf,
        PresentationSectionComponent,
        PresentationIntroductionComponent,
        PresentationSkillsComponent
    ],
    standalone: true,
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnDestroy {
    private readonly experiences: Experience[] = getExperiences();
    private readonly educations: Experience[] = getEducations();
    public displayedExperiences: Experience[] = [];
    public displayedEducations: Experience[] = [];
    protected readonly faBriefcase = faBriefcase;
    protected readonly faGraduationCap = faGraduationCap;
    protected readonly faPen = faPen;
    protected readonly faCode = faCode;

    private filtersSubscription: Subscription;

    constructor(private experienceFiltersService: ExperienceFilterService) {
        this.filtersSubscription = experienceFiltersService.filtersObservable().subscribe(
            (filters): void => {
                this.applyFiltersToExperiences(filters);
                this.applyFiltersToEducations(filters)
            }
        );
    }

    private applyFiltersToExperiences(filters: string[]) {
        if (filters.length === 0) {
            this.displayedExperiences = this.experiences;
        }
        this.displayedExperiences = this.experiences.filter(experience => filters.every(filter => experience.technologies.includes(filter)) ||
        experience.projects.find(project => filters.every(filter => project.technologies.includes(filter))));
        this.displayedExperiences.forEach(experience => experience.applyFiltersToProjects(filters));
    }

    private applyFiltersToEducations(filters: string[]) {
        this.displayedEducations = this.educations.filter(education => filters.every(filter => education.technologies.includes(filter)));
    }

    public ngOnDestroy(): void {
        this.filtersSubscription.unsubscribe();
    }
}
