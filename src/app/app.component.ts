import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NoticiaComponent } from './NoticiaMain/noticia/noticia.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule, NoticiaComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  
})
export class AppComponent {
  title = 'Fabricio Junior no toque';
}
