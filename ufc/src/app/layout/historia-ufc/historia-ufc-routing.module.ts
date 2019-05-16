import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaUfcComponent } from './historia-ufc.component';

const routes: Routes = [
    {
        path: '', component: HistoriaUfcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LutadoresRoutingModule {
}
