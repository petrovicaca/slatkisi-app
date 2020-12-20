import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { db } from '../../../../NodeJS/db.js';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();


  getPosts(){
    return [...this.posts];
    //return db.collection.find();
  }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);



    // copy of the posts after they are updated
    this.postsUpdated.next([...this.posts]);
  }
}
