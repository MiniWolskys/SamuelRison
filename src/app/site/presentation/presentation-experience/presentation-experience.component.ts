import { Component, Input, OnDestroy } from '@angular/core';
import { CompactViewService } from '../../../service/compact-view.service';
import { Subscription } from 'rxjs';
import { DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Experience } from '../../../model/work_experience/experience';
import { PresentationProjectComponent } from '../presentation-project/presentation-project.component';
import { ExperienceFilterService } from '../../../service/experience-filter.service';

@Component({
    selector: 'app-presentation-experience',
    imports: [
        NgIf,
        DatePipe,
        NgForOf,
        PresentationProjectComponent,
        NgClass
    ],
    standalone: true,
    templateUrl: './presentation-experience.component.html',
    styleUrl: './presentation-experience.component.css'
})
export class PresentationExperienceComponent implements OnDestroy {
    @Input({required: true})
    public experience: Experience = new Experience();

    public isCompact = true;
    private isCompactSubscription: Subscription;
    public currentlyActiveFilters: string[] = [];

    constructor(private compactViewService: CompactViewService,
                private experienceFilterService: ExperienceFilterService) {
        this.isCompactSubscription = compactViewService.isCompactObservable().subscribe((compact) => {
            this.isCompact = compact;
        });
        this.experienceFilterService.filtersObservable().subscribe(filters => this.currentlyActiveFilters = filters);
    }

    public ngOnDestroy(): void {
        this.isCompactSubscription.unsubscribe();
    }

    public filterToggle(tech: string): void {
        this.experienceFilterService.toggleFilter(tech);
    }
}
