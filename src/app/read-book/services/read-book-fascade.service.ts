import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AVAILABLE_API } from '@global/constants/api.constants';
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

  getBookCOntent(id: string) {}
}
