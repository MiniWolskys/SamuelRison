import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: PresentationComponent },
    { path: 'contact', component: ContactPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}