import { Component, Input } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-presentation-section',
    imports: [
        FaIconComponent,
        NgIf
    ],
    standalone: true,
    templateUrl: './presentation-section.component.html',
    styleUrl: './presentation-section.component.css'
})
export class PresentationSectionComponent {
    @Input({required: true})
    public icon: IconDefinition | undefined;
    @Input({required: true})
    public sectionTitle: string = '';
}
