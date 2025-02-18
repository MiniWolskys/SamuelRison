import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PresentationComponent } from './site/presentation/presentation.component';
import { ContactPageComponent } from './site/contact-page/contact-page.component';
import { ProjectsComponent } from './site/projects/projects.component';

export const routes: Routes = [
    { path: '', component: PresentationComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'project', component: ProjectsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}