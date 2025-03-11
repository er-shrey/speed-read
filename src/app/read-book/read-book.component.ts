import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBookList } from '@global/models/book-list';
import { ReadBookFascadeService } from './services/read-book-fascade.service';
import { IBookContent } from '@global/models/book-content';

@Component({
  selector: 'app-read-book',
  standalone: false,
  templateUrl: './read-book.component.html',
  styleUrl: './read-book.component.scss'
})
export class ReadBookComponent implements OnInit {
  bookDetails!: IBookList;
  bookContent: IBookContent = [];

  gettingReady = true;

  currentWord = "";

  constructor(
    private _route: ActivatedRoute,
    private _fascade: ReadBookFascadeService
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.params["id"];
    this.getBookDetails(id);
    this.getBookContent(id);
  }

  getBookDetails(id: string): void {
    this._fascade.getBookDetails(id).subscribe((data: IBookList) => {
      this.bookDetails = data;
    })
  }

  getBookContent(id: string): void {
    this._fascade.getBookContent(id).subscribe(async (content: IBookContent) => {
      this.bookContent = content;
      await this.showContent("Ready 1 2 3", 1000);
      this.gettingReady = false;
      for (let sentence of content) {
        await this.showContent(sentence, 200);
      }
    })
  }

  async showContent(sentence: string, speed: number): Promise<void> {
    let words = sentence.split(" ");
    let index = 0;
    let endIndex = words.length;

    while (index < endIndex) {
      this.currentWord = words[index];
      index++;
      
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
}
