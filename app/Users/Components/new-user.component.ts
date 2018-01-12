import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';
import {UserValidations} from '../Validators/user.validations';
import {User} from './user';
import {UsersService} from '../Services/users.service';


@Component({
    templateUrl: '/app/Users/Views/new-user.component.html'
})

export class NewUserComponent implements OnInit{

    form: FormGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder, private _router: Router, private _route: ActivatedRoute, private _usersService: UsersService)
        {

            this.form = fb.group({
			name: ['', Validators.required],
			email: ['', UserValidations.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});

            
    };
    
    ngOnInit()
    {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];
            this.title = id ? "Edit User" : "Add User";

            if(!id)
                return;

            this._usersService.getUser(id)
                .subscribe(u =>
                                    this.user = u,
                                    response => {
                                        if(response.status == 404)
                                        {
                                            this._router.navigate(['NotFound']);
                                        }
                                    }
                );
        });
    }

        save()
        {
            if(this.user.id)
            {
                this._usersService.updateUser(this.user)
                    .subscribe(user => {
                        this._router.navigate(['users']);
                    })
            }
            else
            {
                this._usersService.addUser(this.user)
                    .subscribe(user => {
                        this._router.navigate(["users"]);
                    })
            }

        }
    }