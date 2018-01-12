
import {Component, OnInit} from '@angular/core';
import {PostsService} from '../Services/posts.service';
import {UsersService} from '../../Users/Services/users.service'
import {Http} from '@angular/http';

import * as _ from 'underscore'; 

@Component({
    templateUrl: '/app/Posts/Views/posts.component.html',
    styles: [`
        .posts li { cursor: pointer; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
})

export class PostsComponent implements OnInit{

    posts: any[];
    pagedPosts: any[];
    users: any[];
    post;
    currentPost;
    commentsLoading = false;
    isLoading = true;
    pageSize = 10;

    constructor(private _postsService: PostsService, private _usersService: UsersService){
    

    }

    ngOnInit()
    {

        this.loadUsers();
        this.loadPosts();
        
    }

    loadPosts(filter?){
            this.isLoading = true;
                this._postsService.getPosts(filter).subscribe(posts => {
                        this.posts = posts;
                        // this.pagedPosts = _.take(this.posts, this.pageSize);
                        this.isLoading = false;
                });
    }

    loadUsers()
    {
            this._usersService.getUsers()
                .subscribe(u => {
                            this.users = u;
                });
    }

    loadUserPosts(filter)
    {
        this.currentPost = null;
        this.isLoading = true;
        this.loadPosts(filter);
    }

    select(post){
		this.currentPost = post; 
        this.currentPost.comments = null;

        this.commentsLoading = true;
        this._postsService.getComments(post.id)
			.subscribe(
                comments => 
                    this.currentPost.comments = comments,
                null,
                () => this.commentsLoading = false); 
    } 

    // onPageChanged(page){
    //     var startIndex = (page - 1) * this.pageSize;
    //     this.pagedPosts = _.take(_.rest(this.post, startIndex), this.pageSize);
    // }

}