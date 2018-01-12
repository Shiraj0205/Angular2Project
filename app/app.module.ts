import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {UsersModule} from './Users/users.module';
import {PostsModule} from './Posts/posts.module';
import {SharedModule} from './Shared/shared.module';

import { AppComponent }   from './app.component';
import {HomeComponent} from './home.component';
import {NavBarComponent} from './navbar.component';
import {NotFoundComponent} from './not-found.component';

import {usersRouting} from './Users/users.routing';
import {postsRouting} from './Posts/posts.routing';
import {routing} from './app.routing';

@NgModule({
  imports:      [ 
                    BrowserModule,
                    CommonModule,
                    UsersModule,
                    PostsModule,
                    SharedModule,
                    usersRouting,
                    postsRouting,
                    routing
                ],
  declarations: [ 
                    AppComponent,
                    NavBarComponent,
                    HomeComponent,
                    NotFoundComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
