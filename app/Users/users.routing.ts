import {RouterModule} from '@angular/router';
import {UsersComponent} from './Components/users.component';
import {NewUserComponent} from './Components/new-user.component';
import {PreventUnsavedChangesGuard} from '../prevent-unsaved-changes-guard.service';

export const usersRouting = RouterModule.forChild([

{
    path: 'users/:id',
    component: NewUserComponent,
    canDeactivate: [PreventUnsavedChangesGuard]
},
{
    path: 'users/newUser',
    component: NewUserComponent,
    canDeactivate: [PreventUnsavedChangesGuard]
},
{
    path: 'users',
    component: UsersComponent
}



]);