import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Categories} from './categories/categories';
import {Search} from './search/search';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    RouterLink,
    Categories,
    Search,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {


}
