import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckIdGuard } from './check-id.guard';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { EventListComponent } from './event-list/event-list.component';
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
