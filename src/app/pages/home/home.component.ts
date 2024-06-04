import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {
  AsyncPipe,
  DatePipe,
  NgOptimizedImage,
  SlicePipe,
} from '@angular/common';

import { Observable } from 'rxjs';

import { ResultData } from './home.interface';
import { ArticlesService } from '../article/articles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AsyncPipe,
    SlicePipe,
    DatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public data$: Observable<ResultData> = inject(ArticlesService).getArticles();
}
