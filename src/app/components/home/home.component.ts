import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public books = [];
  public book = '';

  ngOnInit() {
    this.dataApi.getAllBooks().subscribe(books => {
      console.log('BOOKS', books);
      this.books = books;
    })
  }

}
