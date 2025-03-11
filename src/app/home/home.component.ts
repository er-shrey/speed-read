import { Component, OnInit } from '@angular/core';
import { IBookList } from '../global/models/book-list';
import { HomeFascadeService } from './services/home-fascade.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  availableooks: IBookList[] = [];

  constructor( private _fascade: HomeFascadeService) {}

  ngOnInit(): void {
    this._fascade.getBookList().subscribe((list: IBookList[]) => {
      this.availableooks = list;
    })
  }

  bookSelected(book: IBookList): void {
    this._fascade.openBook(book);
  }
}
