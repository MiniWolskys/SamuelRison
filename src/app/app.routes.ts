import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation/presentation.component';

export const routes: Routes = [
    { path: '', component: PresentationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}