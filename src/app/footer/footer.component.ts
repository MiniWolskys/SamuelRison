import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    imports: [
        FaIconComponent
    ],
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

    protected readonly faGithub = faGithub;
    protected readonly faLinkedin = faLinkedin;
}
