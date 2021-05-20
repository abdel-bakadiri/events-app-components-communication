import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'event-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() starsRating: number;
  @Output() getRatingStars: EventEmitter<number> = new EventEmitter<number>();
  widthStars: number;
  constructor() {}
  ngOnChanges(): void {
    this.widthStars = (this.starsRating * 75) / 5;
  }
  sendRating(): void {
    this.getRatingStars.emit(this.starsRating);
  }
}
