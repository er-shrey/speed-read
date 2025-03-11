import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBookList } from '@global/models/book-list';
import { ReadBookFascadeService } from './services/read-book-fascade.service';

@Component({
  selector: 'app-read-book',
  standalone: false,
  templateUrl: './read-book.component.html',
  styleUrl: './read-book.component.scss'
})
export class ReadBookComponent implements OnInit {
  bookDetails!: IBookList;

  constructor(
    private _route: ActivatedRoute,
    private _fascade: ReadBookFascadeService
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.params["id"];
    this.getBookDetails(id);
    this.getBookCOntent(id);
  }

  getBookDetails(id: string): void {
    this._fascade.getBookDetails(id).subscribe((data: IBookList) => {
      this.bookDetails = data;
    })
  }

  getBookCOntent(id: string): void {
    
  }
}
