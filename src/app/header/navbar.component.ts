import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem,
        MatIcon
    ],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './header.component.css'
})
export class NavbarComponent {
    public isMenuOpen = false;
    @ViewChild(MatMenuTrigger) projectMenuTrigger!: MatMenuTrigger;

    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
