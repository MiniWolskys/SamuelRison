import { Component, Input } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-site-section',
    imports: [
        FaIconComponent,
        NgIf
    ],
    standalone: true,
    templateUrl: './site-section.component.html',
    styleUrl: './presentation-section.component.css'
})
export class SiteSectionComponent {
    @Input({required: true})
    public icon: IconDefinition | undefined;
    @Input({required: true})
    public sectionTitle: string = '';
}
