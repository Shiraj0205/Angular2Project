import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService{

    private url = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http: Http)
    {

    }

    getUsers(){
                    return this._http.get(this.url)
                            .map(res => res.json());
    }

    getUser(id){
        return this._http.get(this.url + "/" + id)
                .map(u => u.json());
    }

    updateUser(user)
    {
        return this._http.put(this.url + "/" + user.id, JSON.stringify(user))
                .map(user => user.json());
    };

    addUser(user){
        return this._http.post(this.url, JSON.stringify(user))
                .map(user => user.json());

    }

    deleteUser(id){
        return this._http.delete(this.url + "/" + id)
                .map(u => u.json());
    }

}