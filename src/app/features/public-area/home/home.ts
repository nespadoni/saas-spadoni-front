import { Component } from '@angular/core';
import {ScrollReveal} from '../../../shared/directives/scroll-reveal/scroll-reveal';
import {ProductsSection} from './product/product';
import {ArtisanSection} from './artisan/artisan';
import {StoreSection} from './store/store';
import {Testimonial} from './testimonial/testimonial';

@Component({
  selector: 'app-home',
  imports: [
    ScrollReveal,
    ProductsSection,
    ArtisanSection,
    StoreSection,
    Testimonial
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
