import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../service/post.service';
import {Pageable} from '../../../interfaces/pageable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    const pageable: Pageable = {
      size: 10,
      page: 0
    };
    this.postService.getAll(pageable)
      .subscribe(page => {
        this.posts = page.content;
      });
  }

}
