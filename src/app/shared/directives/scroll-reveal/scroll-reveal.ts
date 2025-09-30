import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollReveal implements OnInit {
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void{
    // 1. Define as classes iniciais (escondido)
    this.renderer.addClass(this.el.nativeElement, 'js-scroll-hidden');

    // 2. Cria o Intersection Observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Se estiver visível, adiciona a classe de ativação
            this.renderer.addClass(this.el.nativeElement, 'js-scroll-active');
            this.renderer.removeClass(this.el.nativeElement, 'js-scroll-hidden');

            // Para a observação após a primeira visualização
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -150px 0px', // Aciona quando falta 150px para o elemento entrar
        threshold: 0.1 // 10% do elemento visível
      }
    );

    // 3. Começa a observar o elemento
    this.observer.observe(this.el.nativeElement);
  }

  // Opcional, para limpeza
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
