import { NgModule } from '@angular/core';
import { StatsComponent } from './components/stats/stats.component';
import { CardStyleDirective } from './directives/card-style.directive';
import { SlicerPipe } from './pipes/slicer.pipe';

@NgModule({
    declarations: [
        StatsComponent,
        SlicerPipe,
        CardStyleDirective,
    ],
    imports: [
    ],
    exports: [
        StatsComponent,   
        SlicerPipe,
        CardStyleDirective
    ]
})
export class SharedModule { }
