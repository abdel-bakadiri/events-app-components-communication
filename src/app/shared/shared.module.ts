import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { SpaceToDashPipe } from './space-to-dash.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, SpaceToDashPipe],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StarComponent, SpaceToDashPipe],
})
export class SharedModule {}
