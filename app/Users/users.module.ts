import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {User} from './Components/user';
import {UsersComponent} from './Components/users.component';
import {NewUserComponent} from './Components/new-user.component';
import {UsersService} from './Services/users.service';
import {PreventUnsavedChangesGuard} from '../prevent-unsaved-changes-guard.service';

@NgModule({
    imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                HttpModule
            ],
    declarations: [
                    UsersComponent,
                    NewUserComponent
    ],
    exports: [
                    UsersComponent,
                    NewUserComponent
    ],
    providers: [
                    UsersService,
                    PreventUnsavedChangesGuard
                ]

})

export class UsersModule{

}