import { Component, Input } from '@angular/core';
import { IBookList } from '@global/models/book-list';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  @Input({ required: true })
  book!: IBookList;
}
