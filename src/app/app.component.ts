import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fair CV Audit';
}
