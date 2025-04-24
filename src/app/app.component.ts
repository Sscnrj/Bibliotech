import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormatTitrePipe} from './pipes/format-titre.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormatTitrePipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp01_ANGULAR_ePsi';
}
