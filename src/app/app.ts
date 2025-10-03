import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Footer} from './shared/components/layout/footer/footer';
import {Header} from './shared/components/layout/header/header';
import {filter} from 'rxjs/operators';
import {NgIf} from '@angular/common'; // Import necessário para usar *ngIf

@Component({
  selector: 'app-root',
  // ADICIONADO: NgIf para uso no template
  imports: [RouterOutlet, Footer, Header, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('artiza');

  // Variáveis controladoras, inicializadas para 'true' por padrão
  public showHeader: boolean = true;
  public showFooter: boolean = true;

  // Rotas que NÃO devem mostrar o Header/Footer
  private readonly routerWithoutHeaderAndFooter: string[] = [
    '/auth',
    '/auth/login',
    '/auth/register',
    '/auth/register/client',
    '/auth/register/seller',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/verify-email',
    '/auth/verify-email/resend',
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // 1. Checa a rota atual (caso o aplicativo seja recarregado em uma rota Auth)
    this.checkRoute(this.router.url);

    // 2. Assina o evento de mudança de rota para checar em tempo real
    this.router.events
      .pipe(
        // Filtra apenas para eventos de navegação finalizada
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects); // Usa urlAfterRedirects para pegar a URL final
      });
  }

  private checkRoute(url: string): void {
    // Limpa a URL de parâmetros de busca (?) e âncoras (#)
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Verifica se a URL atual BATE com alguma rota na lista
    const shouldHide = this.routerWithoutHeaderAndFooter.some(
      // Verifica se a URL é exatamente a rota OU começa com a rota + '/'
      route => cleanUrl === route || cleanUrl.startsWith(route + '/')
    );

    // ATUALIZA AS VARIÁVEIS DA CLASSE (CRUCIAL!)
    this.showHeader = !shouldHide;
    this.showFooter = !shouldHide;
  }
}
