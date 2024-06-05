import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../pages/home/home.interface';

interface SearchItem extends Article {
  priority: number;
}

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: Article[], searchTerm: string): Article[] {
    if (!value || !searchTerm) {
      return value;
    }

    const lowercaseTerm = searchTerm.toLocaleLowerCase();

    const sorted = value
      .filter((item: Article) => {
        const nameMatch = item.title
          ?.toLocaleLowerCase()
          .includes(lowercaseTerm);
        const descriptionMatch = item.summary
          ?.toLocaleLowerCase()
          .includes(lowercaseTerm);
        (item as SearchItem).priority =
          nameMatch && descriptionMatch ? 1 : nameMatch ? 2 : 3;

        return nameMatch || descriptionMatch;
      })
      .sort((a, b) => (a as SearchItem).priority - (b as SearchItem).priority);

    return sorted as Article[];
  }
}
