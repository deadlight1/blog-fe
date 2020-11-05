import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styleUrls: ['./edit-post-page.component.scss']
})
export class EditPostPageComponent implements OnInit {

  post: Post;
  form: FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.postService.getById(params.id)
        .subscribe(post => {
          this.post = post;
          this.form = new FormGroup({
            title: new FormControl(post.title, Validators.required),
            content: new FormControl(post.content, Validators.required),
            author: new FormControl(post.author, Validators.required)
          });
        });
    });
  }

  onSubmit(): void {
    this.post.author = this.form.value.author;
    this.post.content = this.form.value.content;
    this.post.title = this.form.value.title;
    this.postService.update(this.post)
      .subscribe((resp: Post) => {
        this.post = resp;
        this.form.reset();
        this.router.navigate(['/', 'post'], {
          queryParams: {
            id: this.post.id != null ? this.post.id : null
          }
        });
      });
  }
}
