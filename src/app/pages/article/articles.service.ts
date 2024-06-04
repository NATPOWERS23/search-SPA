import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ResultData } from '../home/home.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.spaceflightnewsapi.net/v4/';

  getArticles(): Observable<ResultData> {
    return this.http.get<ResultData>(`${this.apiUrl}articles/`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}articles/${id}/`);
  }
}
