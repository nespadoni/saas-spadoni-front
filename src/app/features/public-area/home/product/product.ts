import {Component, OnInit} from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {Button} from 'primeng/button';

interface Product {
  image: string;
  store: string;
  name: string;
  price: string;
}

@Component({
  selector: 'app-product',
  imports: [
    Carousel,
    Button,
  ],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class ProductsSection implements OnInit {
  products!: Product[];
  responsiveOptions!: any[];

  inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK' = 'INSTOCK';
  inventoryStatusText: string = 'Em estoque'

  ngOnInit(): void {
    this.products = [
      { image: 'vaso-decorativo.png', store: 'Atelier Maria Silva', name: 'Vaso Decorativo em Cerâmica', price: 'R$ 189,90' },
      { image: 'prato-ceramica.png', store: 'Spadoni Artesanatos', name: 'Prato de Cerâmica', price: 'R$ 145,00' },
      { image: 'tabua-corte.png', store: 'Madeira & Arte', name: 'Tábua de Corte Artesanal', price: 'R$ 98,50' },
      { image: 'brinco-resina.png', store: 'Resina Art Studio', name: 'Brinco feito em Resina', price: 'R$ 115,00' },
      { image: 'escultura-madeira.png', store: 'Madeira & Arte', name: 'Escultura em Madeira Talhada', price: 'R$ 320,00' },
      { image: 'xale-tecido.png', store: 'Tecelagem Aurora', name: 'Xale de Algodão Tingido à Mão', price: 'R$ 210,90' },
      { image: 'caneca-ceramica.png', store: 'Spadoni Artesanatos', name: 'Caneca de Cerâmica Esmaltada', price: 'R$ 75,00' },
      { image: 'colar-pedras.png', store: 'Resina Art Studio', name: 'Colar com Pedras Naturais', price: 'R$ 189,00' },
      { image: 'caixa-bambu.png', store: 'Atelier Maria Silva', name: 'Caixa Decorativa em Bambu', price: 'R$ 129,50' },
      { image: 'lampada-corda.png', store: 'Ilumina Arte', name: 'Luminária de Corda Náutica', price: 'R$ 285,00' },
      { image: 'quadro-abstrato.png', store: 'Atelier Maria Silva', name: 'Quadro Abstrato em Tinta Acrílica', price: 'R$ 540,00' },
      { image: 'copo-vidro.png', store: 'Vidraçaria Cristalina', name: 'Copo de Vidro Soprados à Mão (Kit c/ 4)', price: 'R$ 260,00' }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px', // Telas grandes (Laptops)
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px', // Tablets (Landscape)
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px', // Celulares e Tablets (Portrait)
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
