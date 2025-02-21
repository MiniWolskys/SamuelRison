import { ProjectInterface } from '../model/projectInterface';

export const projects_data: ProjectInterface[] = [
    {
        id: 0,
        title: 'Ce Site Web',
        image: 'assets/projects/angular.png',
        htmlDescription: 'Ce site web est fait avec Angular. Tout le code est disponible sur Github.',
        highlight: true,
        code_url: 'https://github.com/MiniWolskys/SamuelRison'
    },
    {
        id: 1,
        title: 'XML Parser',
        image: 'assets/projects/java.png',
        htmlDescription: 'Ce projet, un exercice technique pour un entretien,permet de transformer un XML en appliquant un XSL. Tout le code est disponible sur Github.',
        highlight: false,
        code_url: 'https://github.com/MiniWolskys/HelloWorkTechnicalInterview'
    },
]