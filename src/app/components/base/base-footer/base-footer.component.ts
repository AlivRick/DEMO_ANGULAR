import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
   <footer class="base-footer">
      <div class="footer-content">
        <div class="footer-section">
          <ng-content select=".footer-section"></ng-content>
        </div>
        <div class="footer-links">
          <ng-content select=".footer-links"></ng-content>
        </div>
        <div class="footer-social">
          <ng-content select=".footer-social"></ng-content>
        </div>
        <div class="footer-newsletter">
          <ng-content select=".footer-newsletter"></ng-content>
        </div>
      </div>
      <div class="footer-bottom">
        <ng-content select=".footer-bottom"></ng-content>
      </div>
    </footer>
  `,
  styles: [`
    .base-footer {
      background-color: #333;
      color: #fff;
      padding: 2rem 0;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .footer-section {
      h3 {
        color: #fff;
        margin-bottom: 1rem;
      }
      p {
        color: #ccc;
        line-height: 1.6;
      }
    }
    .footer-links {
      ul {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 0.5rem;
          a {
            color: #ccc;
            text-decoration: none;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    .footer-social {
      .social-icons {
        display: flex;
        gap: 1rem;
        a {
          color: #fff;
          font-size: 1.5rem;
          &:hover {
            color: #ccc;
          }
        }
      }
    }
    .footer-newsletter {
      form {
        display: flex;
        gap: 0.5rem;
        input {
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          flex: 1;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #fff;
          color: #333;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background-color: #ccc;
          }
        }
      }
    }
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      margin-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      p {
        color: #ccc;
        margin: 0;
      }
    }
  `]
})
export class BaseFooterComponent {} 