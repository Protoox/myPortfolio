import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('myElement', { static: false }) myElement!: ElementRef;

  typed!: Typed; // Variable para almacenar la instancia de Typed

  ngAfterViewInit() {
    const options = {
      strings: ['A junior software developer'],
      typeSpeed: 50,
      showCursor: false,
    };

    if (this.myElement) {
      // Agregar espacio en blanco al contenido del elemento

      // Iniciar Typed.js después de un pequeño retraso para permitir que el espacio en blanco se muestre correctamente
      setTimeout(() => {
        this.typed = new Typed(this.myElement.nativeElement, options);
      }, 650);
    }
  }
}

