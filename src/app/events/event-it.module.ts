import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { StarComponent } from '../shared/star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckIdGuard } from './check-id.guard';
import { SpaceToDashPipe } from '../shared/space-to-dash.pipe';
import { SharedModule } from '../shared/shared.module';
const ROUTES_EVENT_IT = [
  { path: 'events', component: EventListComponent },
  {
    path: 'events/:id',
    canActivate: [CheckIdGuard],
    component: DetailEventComponent,
  },
];
@NgModule({
  declarations: [EventListComponent, DetailEventComponent],
  imports: [RouterModule.forChild(ROUTES_EVENT_IT), SharedModule],
})
export class EventItModule {}
