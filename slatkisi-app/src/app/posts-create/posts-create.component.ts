import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post/post.model';
import { PostsService } from '../post/post.service';


@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  enteredTitle = "";
  enteredContent = "";

  onAddPost(form: NgForm){
    //alert('Post added!');
    //this.newPost = this.enteredValue;
    if(form.invalid){
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    }

    this.postsService.addPost(form.value.title, form.value.content)
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
