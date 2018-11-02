import { Post } from './post-modal';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    post: Post[] = [];

    getPosts() {
        return this.post;
    }

    addPosts(post: Post) {
        this.post.push(post);
    }
}
