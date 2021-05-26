import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EventIt } from '../../models/event';
import { ListEventsService } from './list-events.service';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'event-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  @ViewChild(FilterComponent) filterComponent: FilterComponent;
  title: string = 'International IT Events';
  widthImage = 50;
  heightImage = 50;
  marginImage = 2;

  public get showImage(): boolean {
    return this.listEventsService._showImage;
  }
  public set showImage(value: boolean) {
    this.listEventsService._showImage = value;
  }
  theRatingStars: number;
  errorMessage: string;
  countEventsItP: number = 0;

  filteredEvents: EventIt[] = [];
  events: EventIt[] = [];

  constructor(private listEventsService: ListEventsService) {}

  public performFilterEvents(value: string): void {
    if (value) {
      const filterLowerCased = value.toLocaleLowerCase();
      this.filteredEvents = this.events.filter((eventIt) =>
        eventIt.name.toLocaleLowerCase().includes(filterLowerCased)
      );
    } else {
      this.filteredEvents = this.events;
    }
  }

  ngOnInit(): void {
    this.listEventsService.getEvents().subscribe({
      next: (eventsIt) => {
        this.events = eventsIt;
        this.performFilterEvents(this.listEventsService.filterName);
        // this.filteredEvents = this.events;
      },
      error: (errMessage) => {
        this.errorMessage = errMessage;
      },
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onGetRatingStars(ratingStars: number) {
    this.theRatingStars = ratingStars;
  }
  onFilterByName(filterbyName: string) {
    this.performFilterEvents(filterbyName);
  }
}
