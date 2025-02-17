import { Component, OnDestroy } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompactViewService } from '../../service/compact-view.service';
import { ExperienceFilterService } from '../../service/experience-filter.service';
import { NgForOf, NgIf } from '@angular/common';
import { getEducations, getExperiences } from '../../data/experience-data';
import { Subscription } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-presentation-header',
    imports: [
        MatSlideToggle,
        FormsModule,
        ReactiveFormsModule,
        NgForOf,
        MatIcon,
        NgIf,
        MatMenu,
        MatSelectionList,
        MatListOption,
        MatMenuTrigger,
        MatIconButton
    ],
    standalone: true,
    templateUrl: './presentation-header.component.html',
    styleUrl: './header.component.css'
})
export class PresentationHeaderComponent implements OnDestroy {
    public isCompact: boolean = true;
    public availableFilters: Set<string> = new Set<string>();
    public filter: FormControl = new FormControl([]);
    private filterValueChangeSubscription: Subscription;
    public selectedFilters: string[] = [];
    private filtersSecondaryEditToggle: Subscription;

    constructor(
        private compactViewService: CompactViewService,
        experienceFilterService: ExperienceFilterService,
    ) {
        getExperiences().map(experience => {
            experience.technologies.map(tech => this.availableFilters.add(tech));
            experience.projects.map(project => project.technologies.map(tech => this.availableFilters.add(tech)));
        });
        getEducations().map(education => {
            education.technologies.map(tech => this.availableFilters.add(tech));
            education.projects.map(project => project.technologies.map(tech => this.availableFilters.add(tech)));
        });
        this.filtersSecondaryEditToggle = experienceFilterService.secondaryEditEvent().subscribe(filters => {
            this.filter.setValue(filters);
        })
        this.filterValueChangeSubscription = this.filter.valueChanges.subscribe(filters => {
            experienceFilterService.setFilters(filters);
            this.selectedFilters = filters;
        });
    }

    public changeCompactView(): void {
        this.compactViewService.setCompact(this.isCompact);
    }

    public ngOnDestroy(): void {
        this.filtersSecondaryEditToggle.unsubscribe();
        this.filterValueChangeSubscription.unsubscribe();
    }

    public removeAllFilters() {
        this.filter.setValue([]);
    }
}
