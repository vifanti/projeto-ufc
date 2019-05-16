import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvedoresRoutingModule } from './desenvolvedores-routing.module';
import { DesenvolvedoresComponent } from './desenvolvedores.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        DesenvolvedoresRoutingModule,
        PageHeaderModule
    ],
    declarations: [DesenvolvedoresComponent]
})
export class DesenvolvedoresModule {}
