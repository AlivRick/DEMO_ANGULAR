import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="base-product-card">
      <div class="product-image">
        <ng-content select=".product-image"></ng-content>
      </div>
      <div class="product-info">
        <div class="product-title">
          <ng-content select=".product-title"></ng-content>
        </div>
        <div class="product-description">
          <ng-content select=".product-description"></ng-content>
        </div>
        <div class="product-meta">
          <ng-content select=".product-meta"></ng-content>
        </div>
        <div class="product-actions">
          <ng-content select=".product-actions"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .base-product-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .base-product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .product-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    .product-info {
      padding: 1rem;
    }
    .product-title {
      margin-bottom: 0.5rem;
    }
    .product-description {
      color: #666;
      margin-bottom: 1rem;
    }
    .product-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .product-actions {
      display: flex;
      gap: 0.5rem;
    }
  `]
})
export class BaseProductCardComponent {} 