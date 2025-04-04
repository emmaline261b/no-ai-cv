import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { PrimeNG } from 'primeng/config';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'Fair CV Audit';

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
