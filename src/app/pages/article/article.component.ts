import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ArticlesService } from './articles.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterModule,
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  private articlesService = inject(ArticlesService);
  private articleId = inject(ActivatedRoute).snapshot.params['id'];
  public item$ = this.articlesService.getArticleById(this.articleId);
}
