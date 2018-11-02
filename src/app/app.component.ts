import { Component } from '@angular/core';
import { Post } from './posts/post-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts = [];

  onPostCreated(post: Post) {
    this.storedPosts.push(post);
  }
}
