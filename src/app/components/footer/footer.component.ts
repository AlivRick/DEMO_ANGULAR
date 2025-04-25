import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFooterComponent } from '../base/base-footer/base-footer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BaseFooterComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
