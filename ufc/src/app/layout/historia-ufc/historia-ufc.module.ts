import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LutadoresRoutingModule } from './historia-ufc-routing.module';
import { HistoriaUfcComponent } from './historia-ufc.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        LutadoresRoutingModule,
        PageHeaderModule
    ],
    declarations: [HistoriaUfcComponent]
})
export class HistoriaUfcModule {}
