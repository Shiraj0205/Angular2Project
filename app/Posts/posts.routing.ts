import {RouterModule} from '@angular/router';
import {PostsComponent} from './Components/posts.component';

export const postsRouting = RouterModule.forChild([
    {
        path: 'posts', component: PostsComponent
    }
]);