import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Project, ProjectService } from '../../service/project.service';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem,
        MatIcon,
        RouterLink
    ],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './header.component.css'
})
export class NavbarComponent {
    public isMenuOpen = false;
    public projectList: Project[];
    @ViewChild(MatMenuTrigger) projectMenuTrigger!: MatMenuTrigger;

    constructor(projectService: ProjectService) {
        this.projectList = projectService.getHighlightedProjects();
    }

    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;

    }

    protected readonly close = close;
}
