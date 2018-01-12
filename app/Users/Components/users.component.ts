import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {UsersService} from '../Services/users.service';

@Component({
    selector: 'users',
    templateUrl: '/app/Users/Views/users.component.html',
})

export class UsersComponent implements OnInit{

    isLoading = true;
    users: any[];
    
    constructor(private _userService: UsersService)
    {

    }

    ngOnInit(){
            this._userService.getUsers()
                .subscribe(u => {
                    this.isLoading = false;
                    this.users = u;
                })
    }

    deleteUser(user)
    {
        if(confirm('are you sure you want to delete user ' + user.name + '?'))
        {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this._userService.deleteUser(user.id)
            .subscribe(null, err => {
                                alert('Failed to delete user');
            
                                this.users.splice(index, 0, user);
            });
        }
    }
}