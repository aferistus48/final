import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user-list', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'detail/:id', canActivate: [AuthGuard], component: UserDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
