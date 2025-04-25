import { Component, Input, SimpleChanges  } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  localProduct!: Product;
  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }


  addToCart(event: Event) {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    // TODO: Thêm logic thêm vào giỏ hàng ở đây
    console.log('Added to cart:', this.product);
  }

  ngOnChanges(): void {
    //de test
    // this.localProduct = { ...this.product, price: this.product.price.toString() as any };
    console.log('🔄 localProduct:', this.localProduct);
  }
  ngOnInit(): void {
    this.localProduct = { ...this.product, price: this.product.price.toString() as any };
    // console.log('🔄 localProduct:', this.localProduct);
  }

} 