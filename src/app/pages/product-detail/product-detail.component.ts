import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error: string | null = null;
  private productSubscription: Subscription = new Subscription();
  private intervalSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(parseInt(productId, 10));
    }

    // Lưu subscription của interval
    this.intervalSubscription = interval(1000).pipe().subscribe(() => {
      console.log('Product detail is still running...', new Date().toISOString());
    });
  }

  ngOnDestroy() {
    // Hủy cả hai subscription
    this.productSubscription.unsubscribe();
    this.intervalSubscription.unsubscribe();
  }

  loadProduct(id: number) {
    this.loading = true;
    this.error = null;

    this.productSubscription = this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
        console.error('Error loading product:', err);
      }
    });
  }
} 