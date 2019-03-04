import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { BookInterface } from '../../../models/book';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private books: BookInterface[];
  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(){
    this.dataApi.getAllBooks().subscribe( books => {
      this.books = books;
  
    });
  }

  onDeleteBook(){
    console.log('DELETE BOOK');
  }
}
