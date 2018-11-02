import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post-modal';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
    selector: 'app-create-post',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

    constructor(public postService: PostService) {
    }

    enteredTitle = '';
    enteredContent = '';
    postCreated: Post[] = [];

    onAddPost(postForm: NgForm) {
        if (postForm.invalid) {
            return;
        }
        const post: Post = {
            title: postForm.value.title,
            content: postForm.value.content
        };

        this.postService.addPosts(post);
    }
}
