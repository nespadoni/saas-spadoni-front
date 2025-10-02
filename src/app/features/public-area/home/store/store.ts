import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Carousel} from "primeng/carousel";

interface Store {
  image: string;
  name: string;
  category: string;
  products: string;
  state: string;
}

@Component({
  selector: 'app-store',
    imports: [
        Button,
        Carousel
    ],
  templateUrl: './store.html',
  styleUrl: './store.scss'
})
export class StoreSection implements OnInit{
  stores!: Store[];
  responsiveOptions!: any[];

  ngOnInit(): void {
    this.stores = [
      { image: 'atelier-maria-silva.png', name: 'Atelier Maria Silva', category: 'Cerâmica e Arte Decorativa', products: '120 produtos disponíveis', state: 'São Paulo' },
      { image: 'spadoni-artesanatos.png', name: 'Spadoni Artesanatos', category: 'Cerâmica e Esculturas', products: '87 produtos disponíveis', state: 'Mato Grosso do Sul' },
      { image: 'madeira-arte.png', name: 'Madeira & Arte', category: 'Esculturas em Madeira', products: '64 produtos disponíveis', state: 'Paraná' },
      { image: 'resina-art-studio.png', name: 'Resina Art Studio', category: 'Arte em Resina', products: '102 produtos disponíveis', state: 'Rio de Janeiro' },
      { image: 'ilumina-arte.png', name: 'Ilumina Arte', category: 'Luminárias e Decoração', products: '55 produtos disponíveis', state: 'Bahia' },
      { image: 'vidracaria-cristalina.png', name: 'Vidraçaria Cristalina', category: 'Vidros Soprado e Decorativo', products: '41 produtos disponíveis', state: 'Rio Grande do Sul' },
      { image: 'tecelagem-aurora.png', name: 'Tecelagem Aurora', category: 'Tecelagem Manual e Bordados', products: '72 produtos disponíveis', state: 'Ceará' }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
