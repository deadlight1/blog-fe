import {Injectable} from '@angular/core';
import {Post} from '../interfaces/post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pageable} from '../interfaces/pageable';
import {Page} from '../interfaces/page';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.host + 'post/create', post);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(environment.host + 'post?id=' + id);
  }

  getAll(pageable: Pageable): Observable<Page<Post>> {
    return this.http.get<Page<Post>>(environment.host + 'post/all?size=' + pageable.size + '&page=' + pageable.page);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(environment.host + 'post', post);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(environment.host + 'post?id=' + id);
  }
}
