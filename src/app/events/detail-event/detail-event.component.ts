import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventIt } from 'src/app/models/event';
import { ListEventsService } from '../event-list/list-events.service';

@Component({
  selector: 'event-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css'],
})
export class DetailEventComponent implements OnInit {
  title: string = 'Information about event : ';
  eventIt: EventIt | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listEventsService: ListEventsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.listEventsService.getEventById(id).subscribe((eventIt) => {
        this.eventIt = eventIt;
        this.title += eventIt.name;
      });
    }
  }
  onBack() {
    this.router.navigate(['/events']);
  }
}
