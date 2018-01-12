"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var posts_service_1 = require("../Services/posts.service");
var users_service_1 = require("../../Users/Services/users.service");
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.commentsLoading = false;
        this.isLoading = true;
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPosts();
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        this.isLoading = true;
        this._postsService.getPosts(filter).subscribe(function (posts) {
            _this.posts = posts;
            // this.pagedPosts = _.take(this.posts, this.pageSize);
            _this.isLoading = false;
        });
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (u) {
            _this.users = u;
        });
    };
    PostsComponent.prototype.loadUserPosts = function (filter) {
        this.currentPost = null;
        this.isLoading = true;
        this.loadPosts(filter);
    };
    PostsComponent.prototype.select = function (post) {
        var _this = this;
        this.currentPost = post;
        this.currentPost.comments = null;
        this.commentsLoading = true;
        this._postsService.getComments(post.id)
            .subscribe(function (comments) {
            return _this.currentPost.comments = comments;
        }, null, function () { return _this.commentsLoading = false; });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/Posts/Views/posts.component.html',
        styles: ["\n        .posts li { cursor: pointer; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService, users_service_1.UsersService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map