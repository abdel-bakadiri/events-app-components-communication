import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { SpaceToDashPipe } from './space-to-dash.pipe';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [StarComponent, SpaceToDashPipe, FilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    SpaceToDashPipe,
    FilterComponent,
  ],
})
export class SharedModule {}
