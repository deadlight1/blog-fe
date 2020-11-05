import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../interfaces/post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  post: Post;

  constructor(private postService: PostService, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      content: this.form.value.content,
      creationDate: new Date()
    };
    this.postService.create(post)
      .subscribe((resp: Post) => {
          this.post = resp;
          this.form.reset();
          this.router.navigate(['/', 'post'], {
            queryParams: {
              id: this.post.id != null ? this.post.id : null
            }
          });
        }
      );
  }
}
