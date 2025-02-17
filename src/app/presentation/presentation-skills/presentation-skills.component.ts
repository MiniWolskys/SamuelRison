import { Component, OnDestroy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass, NgForOf } from '@angular/common';
import { ExperienceFilterService } from '../../service/experience-filter.service';
import { Subscription } from 'rxjs';

interface Skills {
    name: string;
    items: string[];
}

@Component({
    selector: 'app-presentation-skills',
    imports: [
        MatIcon,
        NgForOf,
        NgClass
    ],
    standalone: true,
    templateUrl: './presentation-skills.component.html',
    styleUrl: './presentation-skills.component.css'
})
export class PresentationSkillsComponent implements OnDestroy {
    public technical_skills: Skills[] = [
        { name: 'Langages', items: ['Java', 'JavaScript', 'Kotlin', 'Python', 'TypeScript', 'C', 'C++']},
        { name: 'Architecture', items: ['Clean Architecture', 'Principes SOLID', 'TDD', 'MVP', 'Architecture modulaire', 'Architecture Oignon', 'Microservices']},
        { name: 'Frameworks & librairies', items: ['Angular', 'Gradle', 'Hibernate', 'Material', 'Maven', 'NodeJS/ Nest', 'Rx', 'Spring', 'SwiftUI', 'Unity', 'Django', 'Django REST Framework', 'SpringBoot', 'Flask', 'Electron', 'Ionic', 'NodeJS']},
        { name: 'Outils de test', items: ['Jest', 'JUnit', 'Pytest', 'Mockito/PowerMockito']},
        { name: 'Bases de données', items: ['ElasticSearch', 'Microsoft SQL Server', 'PostgreSQL', 'SQLite']},
        { name: 'Outils de développement', items: ['Eclipse', 'Android Studio', 'IntelliJ', 'Netbeans', 'Pycharm', 'Visual Studio Code', 'Visual Studio', 'XCode', 'Vim']},
        { name: 'Systèmes d\'exploitation', items: ['Android', 'iOS', 'Linux', 'MacOS', 'Windows']},
    ];
    public soft_skills: Skills[] = [
        { name: 'Compétences d\'entreprise', items: ['Communication', 'Capacité d\'innovation', 'Prise de recul', 'Esprit d\'équipe', 'Capacité d\'analyse'] },
        { name: 'Langues', items: ['Francais (Langue natale)', 'Anglais (Bilingue)', 'Espagnol (Compétences professionnelles)', 'Occitan (Bilingue)', 'Coréen (En apprentissage)'] },
        { name: 'Passion', items: ['Cuisine', 'Lecture', 'Jeux vidéos', 'Natation', 'Piano'] },
    ];
    public currentlyActiveFilters: string[] = [];
    private filtersSubscription: Subscription;

    constructor(private experienceFilterService: ExperienceFilterService) {
        this.filtersSubscription = this.experienceFilterService.filtersObservable().subscribe(filters => this.currentlyActiveFilters = filters);
    }

    public ngOnDestroy(): void {
        this.filtersSubscription.unsubscribe();
    }

    public addToFilter(skill: string): void {
        this.experienceFilterService.addFilter(skill);

    }
}
