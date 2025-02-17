import { Component, Input, OnDestroy } from '@angular/core';
import { CompactViewService } from '../../service/compact-view.service';
import { Subscription } from 'rxjs';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Experience } from '../../model/experience';
import { PresentationProjectComponent } from '../presentation-project/presentation-project.component';
import { ExperienceFilterService } from '../../service/experience-filter.service';

@Component({
    selector: 'app-presentation-experience',
    imports: [
        NgIf,
        DatePipe,
        NgForOf,
        PresentationProjectComponent
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

    constructor(private compactViewService: CompactViewService,
                private experienceFilterService: ExperienceFilterService) {
        this.isCompactSubscription = compactViewService.isCompactObservable().subscribe((compact) => {
            this.isCompact = compact;
        });
    }

    public ngOnDestroy(): void {
        this.isCompactSubscription.unsubscribe();
    }

    public filterToggle(tech: string): void {
        this.experienceFilterService.addFilter(tech);
    }
}
