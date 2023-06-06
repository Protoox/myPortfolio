import { Component, EventEmitter, Host, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from 'src/assets/data/nav-data';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [ // Animación de entrada y salida del sidenav letras
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms',
          style({ opacity: 0 })
        )
      ])
    ]),

  ]
})
export class SidenavComponent implements OnInit {
  // Evento para emitir el estado del sidenav y el ancho de la pantalla
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  addClass = false;
  downloadedCv = false;

  // Detectar el ancho de la pantalla y cerrar el sidenav si es mayor a 768px
  // y emitir el evento para que el componente padre lo reciba y cierre el sidenav
  // en pantallas grandes
  // En caso de que el ancho de la pantalla sea menor a 768px, el sidenav se cerrará
  // al hacer click en un enlace
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

    }
  }
  // Descargar CV y animación de descarga de CV
  downloadCv() {
    this.addClass = true;
    setTimeout(() => { // Simular descarga de CV con un timeout de 250ms
      this.downloadedCv = true;
    }, 250);
    setTimeout(() => { // Quitar la clase de animación de descarga de CV con un timeout de 1000ms
      this.addClass = false;
    }, 1000);
    this.downloadedCv = false;

  }


  // Abrir y cerrar el sidenav en pantallas pequeñas y grandes respectivamente 
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  enter(): void {
    this.collapsed = true;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  leave(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
