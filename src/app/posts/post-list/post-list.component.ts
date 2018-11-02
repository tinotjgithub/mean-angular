import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post-modal';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    Posts: Post[] = [];

    constructor(public postService: PostService) {

    }

    ngOnInit(): void {
        this.Posts = this.postService.getPosts();
    }
}

