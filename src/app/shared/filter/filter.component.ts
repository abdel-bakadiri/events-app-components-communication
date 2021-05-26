import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ListEventsService } from 'src/app/events/event-list/list-events.service';

@Component({
  selector: 'event-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('filterInput') filterInput: ElementRef;
  @Input() displayDetail: boolean;
  @Output() filterByNameEvent: EventEmitter<string> =
    new EventEmitter<string>();

  public set filterName(value: string) {
    this.filterByNameEvent.emit(value);
    this.listEventsService.filterName = value;
  }
  public get filterName(): string {
    return this.listEventsService.filterName;
  }

  private _countEventsIt;
  public get countEventsIt() {
    return this._countEventsIt;
  }
  @Input()
  public set countEventsIt(value) {
    this._countEventsIt = value;
  }

  constructor(private listEventsService: ListEventsService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (this.filterInput) {
      this.filterInput.nativeElement.focus();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
