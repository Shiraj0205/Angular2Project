import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { PostsComponent } from './Components/posts.component';
import {PostsService} from './Services/posts.service';

@NgModule({

            imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        HttpModule
                    ],
            declarations: [
                            PostsComponent
                            
                        ],
            exports: [PostsComponent],
            providers: [PostsService]
})

export class PostsModule{

}