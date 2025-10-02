import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Carousel} from "primeng/carousel";

interface Artisan {
  image: string;
  name: string;
  specialty: string;
  products: string;
  state: string;
}

@Component({
  selector: 'app-artisan',
    imports: [
        Button,
        Carousel
    ],
  templateUrl: './artisan.html',
  styleUrl: './artisan.scss'
})
export class ArtisanSection implements OnInit{
  artisan!: Artisan[];
  responsiveOptions!: any[];

  inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK' = 'INSTOCK';
  inventoryStatusText: string = 'Em estoque'

  ngOnInit(): void {
    this.artisan = [
      { image: 'ana-ferreira.png', name: 'Ana Ferreira', specialty: 'Arte em Resina', products: '45 produtos disponíveis', state: 'São Paulo' },
      { image: 'carlos-mendes.jpg', name: 'Carlos Mendes', specialty: 'Esculturas em Madeira', products: '32 produtos disponíveis', state: 'Minas Gerais' },
      { image: 'maria-silva.png', name: 'Mariana Oliveira', specialty: 'Cerâmica e Porcelana', products: '58 produtos disponíveis', state: 'Bahia' },
      { image: 'joao-ribeiro.jpg', name: 'João Ribeiro', specialty: 'Tecelagem Manual', products: '27 produtos disponíveis', state: 'Ceará' },
      { image: 'beatriz-souza.jpg', name: 'Beatriz Souza', specialty: 'Joias Artesanais em Prata', products: '40 produtos disponíveis', state: 'Rio Grande do Sul' },
      { image: 'felipe-duarte.png', name: 'Felipe Duarte', specialty: 'Pinturas em Aquarela', products: '19 produtos disponíveis', state: 'Pernambuco' },
      { image: 'clara-martins.jpg', name: 'Clara Martins', specialty: 'Bordados e Costura Criativa', products: '61 produtos disponíveis', state: 'Paraná' },
      { image: 'rogerio-lima.jpg', name: 'Rogério Lima', specialty: 'Arte em Vidro Soprado', products: '22 produtos disponíveis', state: 'Rio de Janeiro' }
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
