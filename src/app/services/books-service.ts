import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Book, Items, VolumeInfo } from '../modules/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly urlSearchBooks: string = "https://www.googleapis.com/books/v1/volumes";

  constructor(private httpClient: HttpClient) { 

  }

  getBooks(typedBook: string):Observable<Array<VolumeInfo>>{
    const params = new HttpParams().append("q", typedBook);
    return this.httpClient.get<Book>(this.urlSearchBooks, {params}).pipe(
      map((book) => {
        return book.items.map((dadosVolumes) => dadosVolumes.volumeInfo)
      })
   );
  }
}
