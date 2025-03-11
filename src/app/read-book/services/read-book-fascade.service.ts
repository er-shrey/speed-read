import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AVAILABLE_API } from '@global/constants/api.constants';
import { IBookContent } from '@global/models/book-content';
import { IBookList } from '@global/models/book-list';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadBookFascadeService {

  constructor(private _http: HttpClient, private _router: Router) { }
  
  getBookDetails(id: string): Observable<IBookList> {
    return this._http.get<IBookList[]>(AVAILABLE_API.BOOK_LIST)
          .pipe(map((data: IBookList[]) => data.filter(book => book.id == id)))
          .pipe(map((bookList: IBookList[]) => bookList[0]));
  }

  getBookContent(id: string): Observable<IBookContent> {
    return this._http.get(AVAILABLE_API.BOOK_CONTENT + id + ".txt", {responseType: "text"})
           .pipe(map((text) => {
              const cleanedText = text.replace(/\r?\n/g, '. ');
              const sentences = cleanedText.split(/(?<=\.)\s+/).map(sentence => sentence.trim()).filter(Boolean);
              return sentences;
            }))
  }
}
