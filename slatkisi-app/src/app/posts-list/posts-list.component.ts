import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostsService } from '../post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  constructor(public postsService: PostsService) { }

  posts: Post [] = [];
  private postsSub: Subscription;

  ngOnInit() {

    /*this.posts = */ this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });


  }

  ngOnDestroy(){
    //prevents memory leaks
    this.postsSub.unsubscribe();
  }
}
