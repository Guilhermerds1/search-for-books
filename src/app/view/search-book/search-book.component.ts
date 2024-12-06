import { Component } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { VolumeInfo } from 'src/app/modules/book';
import { BooksService } from 'src/app/services/books-service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent {
  public bookSearched: string = ''; 
  public booksItens: Array<VolumeInfo> = [];
  public mensagemErro:string = "";
  constructor(private booksService: BooksService){}

  searchBooks(){
    this.booksItens = [];
    this.mensagemErro = "";
    // this.booksService.getBooks(this.bookSearched).subscribe({
    //   next: (resultadoPesquisa) => {
    //     this.configureVolumesItens(resultadoPesquisa);
    //     this.bookSearched = "";
    //   }
    // })
    this.booksService.getBooks(this.bookSearched).pipe(
      tap((resultadoPesquisa) => {
        this.configureVolumesItens(resultadoPesquisa);
         this.bookSearched = "";
      }),
      catchError((erro) => {
        this.mensagemErro = "Algo deu errado, tente novamente!"
        return EMPTY
      })
    ).subscribe()
  }

  configureVolumesItens(booksVolumes: Array<VolumeInfo>){
    return booksVolumes.forEach((dados) => {
    
      this.booksItens.push(
        {
          authors: dados.authors,
          categories: dados.categories,
          description: dados.description,
          imageLinks: dados.imageLinks,
          pageCount: dados.pageCount,
          publishedDate: dados.publishedDate,
          publisher: dados.publisher,
          title: dados.title
        }
      )  
    })
  }
}
