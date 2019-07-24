import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Bibles } from '../shared/bibles';
@Injectable({
  providedIn: 'root'
})
export class BiblesService {
  bibleId: any;
  bookId: any;
  chapterId: any;
  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  get_full_bibles() {
    return this.http.get(baseURL + '/bibles')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  get_books(bibleId) {
    return this.http.get(baseURL + '/bibles' + '/' + bibleId + '/books')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  get_book(bookId, bibleId) {
    return this.http.get(baseURL + '/bibles' + '/' + bibleId + '/books' + '/' + bookId + '/chapters')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  get_chapter(bibleId, chapterId) {
    return this.http.get(baseURL + '/bibles' + '/' + bibleId + '/chapters' + '/' + chapterId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
