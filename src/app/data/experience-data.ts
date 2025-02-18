import { Experience, ExperienceInterface } from '../model/work_experience/experience';

const experiences: ExperienceInterface[] = [
    {
        company: 'Sauermann Industries',
        title: 'Développeur applicatif',
        location: 'Bordeaux, FR',
        startDate: 1639684410000,
        endDate: 1734378810000,
        shortDescription: 'Dans une équipe de 7 personnes, j’ai pris part à la conception, amélioration et maintenance de plusieurs applications web et mobiles. J’ai également apporté mes connaissances et compétences dans l’amélioration de l’équipe et des processus, via la pratique du clean code et la mise en place des processus de méthodologie agile. J’ai également encadré les nouveaux membres de l’équipe et mis en place un processus d’onboarding.',
        technologies: ['Angular 18', 'Ionic', 'Electron', 'Java', 'TypeScript', 'Spring', 'REST API', 'PostgreSQL', 'Docker', 'Junit', 'Jest', 'Azure Devops', 'Github', 'Kubernetes', 'Swift', 'Swift UI', 'Kotlin', 'Kotlin Native', 'Pipeline', 'Dev & Ops', 'TDD', 'Clean Code', 'Methodologie Agile'],
        introduction: 'Au sein de l\'entreprise Sauermann, j\'ai participé à la conception, le développement et la maintenance de plusieurs applications à destination des utilisateurs et clients des produits Sauermann. Ceci a permis de booster les ventes des différents produits en simplifiant leur utilisation et en les rendant plus accessibles.',
        projects: [
            {
                name: 'Sauermann Pilot',
                introduction: 'En tant que développeur, j\'ai participé activement à la conception et à la mise en place d\'une application mobile native destinée à connecter les utilisateurs à toutes les futures gammes de produits Sauermann.',
                tasks: [
                    'Intégration de nouveaux développeurs : Formation et accompagnement des nouvelles recrues pour les familiariser rapidement avec les processus et outils internes.',
                    'Études techniques : Réalisation d\'analyses approfondies pour anticiper la maintenance de l\'application sur le long terme et garantir sa pérennité.',
                    'Backend Kotlin : Création d\'un backend en Kotlin pour gérer les configurations et données utilisateurs.',
                    'Pipelines automatisés : Mise en place de pipelines CI/CD pour faciliter les évolutions futures et accélérer les cycles de développement.',
                    ' Librairie de tests : Développement d\'une librairie de tests complète afin d\'assurer la qualité des futurs développements et d’optimiser la gestion des régressions.',
                ],
                technologies: ['Kotlin', 'SwiftUI', 'Architecture Oignon', 'Android', 'Android Studio', 'MacOS', 'iOS', 'Gradle'],
            },
            {
                name: 'Transmetteur',
                introduction: 'En tant que développeur, j\'ai participé activement à la conception, mise en place et maintenance d\'une application web et mobile connectée à la dernière gamme de produits de mesures Sauermann.',
                tasks: [
                    'Développement d\'une application cross-platform via les technologies Angular, Capacitor et Ionic permettant de se connecter à un même appareil depuis une variété de plateformes.',
                    'Assurer la qualité du produit de la conception à la maintenance, en mettant en place des tests unitaires et fonctionnels automatisés.',
                    'Mise en place un protocole de communication avec l\'appareil permettant de s\'assurer de la bonne communication entre les différents éléments.',
                    'Contribuer à améliorer la qualité du produit en prenant en compte les retours clients et en effectuant des développements rapides afin de débloquer des ventes.',
                    'Prise en charge la maintenance du projet lors du lancement des sujets suivants afin de libérer des ressources sur les autres projets.'
                ],
                technologies: ['Angular', 'TypeScript', 'Java', 'JavaScript', 'Clean Architecture', 'Jest', 'IntelliJ', 'NodeJS'],
            },
            {
                name: 'Combustion',
                introduction: 'En tant que développeur, j\'ai pris une place importante dans la mise en place et la maintenance d\'une application web et mobile connectée aux derniers produits de mesures Combustion de Sauermann.',
                tasks: [
                    'Prise en main de code existant et refactoring d\'ancien code afin d\'améliorer la maintenabilité du code.',
                    'Ajout de fonctionnalités à l\'application existante afin de répondre aux besoins de différents marchés à travers le monde.',
                    'Mise en place de tests unitaires afin de facilité les évolution et réécriture du code et maintenir la qualité de l\'application.',
                    'Contribuer à améliorer la qualité du produit en prenant en compte les retours clients et en effectuant des développements rapides afin de débloquer des ventes.',
                    'Prise en charge de la maintenance du projet lors du lancement des sujets suivants afin de libérer des ressources sur les autres projets.'
                ],
                technologies: [
                    'Java', 'Spring', 'SpringBoot', 'Angular', 'Jest', 'JUnit', 'Architecture modulaire', 'Material', 'TypeScript', 'JavaScript', 'Principes SOLID', 'PostgreSQL', 'Microsoft SQL Server', 'iOS', 'Android', 'Windows','Linux'],
            },
            {
                name: 'Tracklog',
                introduction: 'En tant que développeur chez Sauermann, j\'ai pris par à la maintenance d\'une application de gestion de données pour de nombreux clients, et au développement de nouvelles features pour de nouveaux partenaires commerciaux, dans une architecture de micro-services.',
                tasks: [
                    'Réalisation de nouveaux services en NodeJS et Java.',
                    'Maintenance de services existant en NodeJS.',
                    'Réorganisation des composants existant en micro services.',
                    'Restructuration de la communication entre les composants pour optimiser les temps d\'enregistrement des données.' +
                    'Analyse et réalisation de documentation sur d\'anciens composants non documentés.'
                ],
                technologies: [
                    'NodeJS', 'Microservices', 'TypeScript', 'JavaScript', 'Angular', 'Principes SOLID', 'IntelliJ', 'TDD', 'Java'],
            },
        ],
    },
    {
        company: 'AKKA Technologies',
        title: 'Ingénieur d\'étude',
        location: 'Bordeaux, FR',
        startDate: 1618613938000,
        endDate: 1637103538000,
        shortDescription: 'Dans une équipe de 4 personnes, j’ai conçu et réalisé l\'architecture des plateformes de tests pour les équipements du client dans un processus de cycle en V, permettant d\'accélérer les phases de test et d’optimiser les bénéfices.',
        introduction: 'Au sein d\'AKKA Technologies, j\'ai répondu aux besoins du client avec lequel j\'ai travaillé lors de ma mission.',
        technologies: ['Python', 'C', 'QT', 'Pipeline', 'Amazon Web Service', 'Docker', 'Flask', 'Architecture projet', 'Github', 'Test unitaires', 'Cycle en V'],
        projects: [
            {
                name: 'Mission chez Thales',
                introduction: 'En mission chez Thales, j\'ai pris en charge un projet de modernisation d\'une plateforme de test utilisée par plusieurs équipes. L’objectif était de faciliter le travail des équipes de tests et de développement sur différents produits, tout en rendant les modifications et les résultats plus exploitables. Ce projet a permis d’optimiser les workflows, réduisant les délais et améliorant la qualité des produits livrés chez Thales.',
                tasks: [
                    'Modernisation de la plateforme : Réingénierie de la plateforme de test pour améliorer les processus et mieux répondre aux besoins des équipes techniques.',
                    'Automatisation : Mise en place de processus automatisés pour accélérer et fiabiliser les tests.',
                    'Exploitation des résultats : Développement d’outils permettant une meilleure gestion des résultats de tests, favorisant des prises de décision rapides et informées.',
                    'Collaboration renforcée : Amélioration de la collaboration entre les équipes de tests et de développement pour garantir la cohérence des modifications sur plusieurs produits.'
                ],
                technologies: ['Python', 'C', 'C++', 'Clean Architecture'],
            },
        ],
    },
    {
        company: 'Cityfibre',
        title: 'Application Developer',
        location: 'Milton Keynes, UK',
        startDate: 1568674738000,
        endDate: 1618613938000,
        shortDescription: 'Dans une équipe de 4 personnes, j’ai conçu et réalisé l\'architecture des plateformes de tests pour les équipements du client dans un processus de cycle en V, permettant d\'accélérer les phases de test et d’optimiser les bénéfices.',
        introduction: 'En tant que développeur applicatif, j\'ai participé à la maintenance et à la conception de nombreux projets, allant de la création d\'outils internes à la conception d\'API destinées aux clients. J\'ai joué un rôle clé dans la conception de nouveaux outils visant à améliorer les processus d\'autres services internes, tout en optimisant les outils mis à disposition des clients. Ces initiatives ont contribué à accélérer leurs flux de travail et à accroître les revenus de l\'entreprise.',
        technologies: ['Python', 'C', 'QT', 'Pipeline', 'Amazon Web Service', 'Docker', 'Flask', 'Architecture projet', 'Github', 'Test unitaires', 'Cycle en V'],
        projects: [
            {
                name: 'Développement des outils internes',
                introduction: 'En tant que développeur applicatif, j\'ai conçu et maintenu des outils internes à Cityfibre pour soutenir la croissance de l\'entreprise.',
                tasks: [
                    'Réalisation de tests unitaires sur des sujets déjà existant.',
                    'Conception de nouvelles applications en partenariat avec les autres services pour répondre à leurs besoins.',
                    'Maintenance et évolutions d\'applications existantes.',
                ],
                technologies: ['Python', 'PHP', 'C', 'Flask', 'Amazon Web Services'],
            }
        ],
    },
    {
        company: 'Philes',
        title: 'Développeur informatique',
        location: 'Toulouse, FR',
        startDate: 1508194738000,
        endDate: 1568674738000,
        shortDescription: 'Lors de diverses missions intégrées aux équipes du client, j’ai participé à la conception et la maintenance de différents systèmes de test dans le monde de l’aéronautique, ainsi qu\'à la mise en place des méthodologies SCRUM.\n',
        introduction: 'Au sein de la compagnie Philes, j\'ai travaillé pour les clients en assurant toujours leur satisfaction et la réponse à leurs besoins.',
        technologies: ['C', 'C++', 'TCL', 'Python', 'Javascript', 'Splunk', 'Systemes de tests| Github', 'SVN', 'Test unitaires', 'SCRUM'],
        projects: [
            {
                name: 'Mission Airbus EVID',
                introduction: 'Dans le cadre de la mission Airbus EVID, j\'ai travaillé en tant qu\'ingénieur logiciel spécialisé dans la maintenance d\'applications, avec une expertise en C et C++. Mon rôle principal était la création de tests logiciels permettant de vérifier la conformité des systèmes pour autoriser la vente des avions.',
                tasks: [
                    'Expertise en C/C++',
                    'Création de tests pour validation aéronautique',
                    'Contribution à la fiabilité des systèmes avant la commercialisation',
                ],
                technologies: ['C', 'C++'],
            },
            {
                name: 'Mission Airbus R&D',
                introduction: 'Lors de cette mission, j\'ai occupé un rôle d\'ingénieur logiciel spécialisé en Python et Splunk, travaillant sur des projets Big Data. Mon travail consistait à mesurer et optimiser les performances des équipements Airbus en utilisant des outils d\'analyse de données, contribuant à améliorer l\'efficacité et la durabilité du matériel.',
                tasks: [
                    'Développement en Python et utilisation de Splunk',
                    'Analyse et optimisation des données pour le matériel Airbus',
                    'Participation à des projets innovants en R&D',
                ],
                technologies: ['Python', 'C', 'Clean Architecture', 'Splunk'],
            },
            {
                name: 'Mission Airbus Defense & Space',
                introduction: 'Dans cette mission pour Airbus Defence et Space, j\'ai occupé un poste d\'ingénieur logiciel spécialisé en TCL, avec une responsabilité de maintenance applicative. J\'ai travaillé sur la création de tests permettant de valider les systèmes nécessaires à la production de satellites.',
                tasks: [
                    'Expertise en TCL et Python pour les tests automatisés sur satellites.',
                    'Création de tests pour la production de satellites.',
                    'Contribution directe à la validation des systèmes spatiaux.',
                ],
                technologies: ['TCL', 'Python', 'Pytest'],
            },
        ],
    },
    {
        company: 'Sogeti France',
        title: 'Stagiaire en informatique',
        location: 'Toulouse, FR',
        startDate: 1476658738000,
        endDate: 1489705138000,
        shortDescription: 'Au sein d’un pôle de Recherche et Développement de 3 personnes, j’ai participé au morcellement d’une application monolithique pour passer vers une architecture Micro-Service via docker et kubernetes.',
        introduction: 'Au sein d’un pôle de Recherche et Développement de 3 personnes, j’ai participé au morcellement d’une application monolithique pour passer vers une architecture Micro-Service via docker et kubernetes.',
        technologies: ['Python', 'Perl', 'C', 'Docker', 'Architecture Micro Service'],
        projects: [],
    }
];

const educations: ExperienceInterface[] = [
    {
        company: 'Ecole 42',
        title: 'Architecte des technologies numériques',
        location: 'Paris, FR',
        startDate: 1408229938000,
        endDate: 1502924338000,
        shortDescription: 'Participations à de nombreux projets tels que la mise en place d\'un moteur graphique 3D, la création d’un nouveau shell Unix, et la conception d’applications Web.',
        introduction: 'Participations à de nombreux projets tels que la mise en place d\'un moteur graphique 3D, la création d’un nouveau shell Unix, et la conception d’applications Web.',
        technologies: [],
        projects: [],
    },
    {
        company: 'Openclassroom',
        title: 'Apprenez à programmer en C',
        location: '',
        startDate: 0,
        endDate: 1537138738000,
        shortDescription: '',
        introduction: '',
        technologies: [],
        projects: [],
    },
    {
        company: 'Openclassroom',
        title: 'Apprenez à programmer en Python',
        location: '',
        startDate: 0,
        endDate: 1542409138000,
        shortDescription: '',
        introduction: '',
        technologies: [],
        projects: [],
    },
]

export const getExperiences = (): Experience[] => {
    return experiences.map(experience => new Experience(experience.company, experience.title, experience.location, experience.startDate, experience.endDate, experience.shortDescription, experience.introduction, experience.projects, experience.technologies));
}

export const getEducations = (): Experience[] => {
    return educations.map(experience => new Experience(experience.company, experience.title, experience.location, experience.startDate, experience.endDate, experience.shortDescription, experience.introduction, experience.projects, experience.technologies));
}