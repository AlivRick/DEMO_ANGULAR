import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Subscription, interval, Subject, takeUntil } from 'rxjs';
import { TabPanelComponent } from '../../components/tab-panel/tab-panel.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, TabPanelComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  loading = true;
  error: string | null = null;
  private intervalSubscription: Subscription | null = null; // Khởi tạo là null
  
  // Code cũ
  // private productSubscription: Subscription = new Subscription();
  // private intervalSubscription: Subscription = new Subscription();
  
  // Code mới sử dụng takeUntil
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(parseInt(productId, 10));
    }

    // Code cũ
    // if (!this.intervalSubscription) {
    // this.intervalSubscription = interval(1000).subscribe(() => {
    //   console.log('Product detail is still running...', new Date().toISOString());
    // });
    // }
    console.log('ngOnInit called'); // Debug để kiểm tra

    // Code mới sử dụng takeUntil
    // interval(1000)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(() => {
    //     console.log('Product detail is still running...', new Date().toISOString());
    //   });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called'); // Debug để kiểm tra
    // Code cũ
    // this.productSubscription.unsubscribe();
    // if (this.intervalSubscription) {
    //   this.intervalSubscription.unsubscribe();
    //   this.intervalSubscription = null; // Đặt lại để tránh lỗi
    // }
    // Code mới sử dụng takeUntil
    this.destroy$.next();
    this.destroy$.complete();
    console.log('Product detail component destroyed');
    this.intervalSubscription = null; // Đặt lại để tránh lỗi
  }

  loadProduct(id: number) {
    this.loading = true;
    this.error = null;

    // Code cũ
    // this.productSubscription = this.productService.getProductById(id).subscribe({
    //   next: (product) => {
    //     this.product = product;
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     this.error = 'Failed to load product details. Please try again later.';
    //     this.loading = false;
    //     console.error('Error loading product:', err);
    //   }
    // });

    // Code mới sử dụng takeUntil
    this.productService.getProductById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
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