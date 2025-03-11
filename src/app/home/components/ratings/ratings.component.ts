import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  standalone: false,
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  @Input({required: true})
  ratings!: number;
}
