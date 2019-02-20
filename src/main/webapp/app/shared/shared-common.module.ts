import { NgModule } from '@angular/core';

import { DonpepepizzeriaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DonpepepizzeriaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DonpepepizzeriaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DonpepepizzeriaSharedCommonModule {}
