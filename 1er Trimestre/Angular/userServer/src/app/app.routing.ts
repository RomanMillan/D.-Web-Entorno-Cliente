import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'users',
        component: UsersComponent
    },
    {
        path: 'users/1',
        component: UserComponent
    },
    {
        path:'servers',
        component:ServersComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}