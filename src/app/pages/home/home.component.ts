import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  error: string | null = null;
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
    console.log(this.products);
    
  }

  loadProducts() {
    this.loading = true;
    this.error = null;
    
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.filteredProducts = this.products;
        this.loading = false;
        
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error loading products:', err);
      },
      complete: () => {
        console.log('Request đã hoàn thành!'); // Sẽ được gọi sau khi có data
      }
    });
  }

  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
      return;
    }
    
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
