import { Component, Input, OnInit } from '@angular/core';
import { VolumeInfo } from 'src/app/modules/book';

@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.scss']
})
export class CardBooksComponent implements OnInit{
  @Input() public itensBooks: VolumeInfo | undefined;
  constructor(){}

  ngOnInit(): void {
    console.log(this.itensBooks);
  }
  
}
