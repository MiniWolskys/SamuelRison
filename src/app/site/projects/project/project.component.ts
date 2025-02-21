import { Component, OnDestroy } from '@angular/core';
import { Project, ProjectService } from '../../../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { checkDefined } from '../../../helper/type.helper';
import { Subscription } from 'rxjs';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-project',
    imports: [
        FaIconComponent,
    ],
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.css'
})
export class ProjectComponent implements OnDestroy {
    public project: Project | undefined;
    private paramSubscription: Subscription;

    constructor(
        private projectService: ProjectService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.paramSubscription = this.activatedRoute.params.subscribe(value => {
            const id: number = Number(checkDefined(value['id']));
            this.project = this.projectService.getProjectById(id);
        });
    }

    public ngOnDestroy() {
        this.paramSubscription.unsubscribe();
    }

    protected readonly faGithub = faGithub;
}
