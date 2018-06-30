import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}
  
  ngOnInit() {
    this.service.getPosts()
          .subscribe(response => {
            this.posts = response.json();
          }, error => {
            alert('An unexpected error: ' + error);
          });
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post)
             .subscribe(response => {
               post.id = response.json().id;
               this.posts.splice(0, 0, post);
               console.log(response.json());
             }, (error: Response) => {
               if (error.status === 400) {
                 // this.form.setErrors(error.json());
               } else {
                 alert('An unexpected error: ' + error);
               }
            });
  }
  updatePost(post) {
    this.service.updatePost(post)
             .subscribe(response => {
               console.log(response.json());
             }, error => {
              alert('An unexpected error: ' + error);
            });
  }
  deletePost(post) {
    this.service.deletePost(post.id) // 345
             .subscribe(response => {
               let index = this.posts.indexOf(post);
               this.posts.splice(index, 1);
             }, (error: Response) => {
               if (error.status === 404) {
                 alert('Post has been deleted.');
               } else {
                 alert('An unexpected error: ' + error);
               }
            });
  }
}
