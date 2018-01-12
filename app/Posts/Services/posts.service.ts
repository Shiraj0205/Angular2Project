import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PostsService{

    private url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http)
    {

    }

    getPosts(filter)
    {
        var url = this.url;
        if(filter && filter.userId)
        {
            url =  this.url + "?userId=" + filter.userId;
        }

        return this._http.get(url)
                .map(posts => posts.json());
    }

    getComments(id){
        return this._http.get(this.url + "/" + id + "/comments")
                .map(comments => comments.json())
    }

}