import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './site/header/navbar.component';
import { FooterComponent } from './site/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
