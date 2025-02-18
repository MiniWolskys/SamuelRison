import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
import { SiteSectionComponent } from '../site-section/site-section.component';

@Component({
    selector: 'app-contact-page',
    imports: [
        FaIconComponent,
        FormsModule,
        SiteSectionComponent
    ],
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
    public username: string | undefined;
    public userEmail: string | undefined;
    public userMessage: string | undefined;

    protected readonly faPhone = faPhone;
    protected readonly faEnvelope = faEnvelope;
    protected readonly faLinkedin = faLinkedin;
    protected readonly faGithub = faGithub;

    public submitForm() {
        if (this.username === undefined || this.userEmail === undefined || this.userMessage === undefined) {
            return ;
        }
        console.log("Currently this does nothing, but cool !" + this.username + this.userEmail + this.userMessage);
    }
}
