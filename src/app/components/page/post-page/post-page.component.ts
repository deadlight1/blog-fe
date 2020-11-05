import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../interfaces/post';
import {AlertService} from '../../../service/alert.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private alert: AlertService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.post$ = this.postService.getById(params.id);
    });
  }

  onDelete(): void {
    this.route.queryParams.subscribe(params => {
      this.postService.deleteById(params.id)
        .subscribe();
    });
    this.router.navigate(['/']);
    this.alert.success('Post was deleted');
  }
}
