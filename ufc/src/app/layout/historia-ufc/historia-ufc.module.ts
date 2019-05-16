import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaUfcRoutingModule } from './historia-ufc-routing.module';
import { HistoriaUfcComponent } from './historia-ufc.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        HistoriaUfcRoutingModule,
        PageHeaderModule
    ],
    declarations: [HistoriaUfcComponent]
})
export class HistoriaUfcModule {}
