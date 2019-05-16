import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesenvolvedoresComponent } from './desenvolvedores.component';

const routes: Routes = [
    {
        path: '', component: DesenvolvedoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesenvolvedoresRoutingModule {
}
