import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Categories} from './categories/categories';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    RouterLink,
    Categories,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  searchQuery: any;

  onSearch($event: SubmitEvent) {

  }

}
