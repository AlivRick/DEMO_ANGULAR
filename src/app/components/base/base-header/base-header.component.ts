import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="base-header">
      <div class="header-left">
        <ng-content select=".header-left"></ng-content>
      </div>
      <div class="header-center">
        <ng-content select=".header-center"></ng-content>
      </div>
      <div class="header-right">
        <ng-content select=".header-right"></ng-content>
      </div>
    </header>
  `,
  styles: [`
    .base-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header-left, .header-center, .header-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `]
})
export class BaseHeaderComponent {} 