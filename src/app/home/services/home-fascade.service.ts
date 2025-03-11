import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBookList } from '@global/models/book-list';
import { Observable } from 'rxjs';
import { AVAILABLE_API } from '@global/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeFascadeService {

  constructor(private _http: HttpClient) { }

  getBookList(): Observable<IBookList[]> {
    return this._http.get<IBookList[]>(AVAILABLE_API.BOOK_LIST);
  }
}
