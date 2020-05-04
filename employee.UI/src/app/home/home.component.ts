import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../models/post';
import {PostService} from '../../providers/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PostService]
})
export class HomeComponent implements OnInit {
    posts: PostModel[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postService.getPosts().subscribe(
            res => {
                this.posts = res;
            }
        );
    }
}
