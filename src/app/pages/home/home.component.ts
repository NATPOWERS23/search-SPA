import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
import { SearchPipe } from '../../pipes/search.pipe';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { DateSuffix } from '../../pipes/date-suffix.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
    SearchPipe,
    HighlightPipe,
    DateSuffix,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public data$: Observable<ResultData> = inject(ArticlesService).getArticles();
  public searchTermControl = new FormControl();
}
