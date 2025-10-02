import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  showCategoriesMenu: any;
}
