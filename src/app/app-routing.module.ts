import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todo',component:TodoComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todo/edit/:id',component:EditTodoComponent, canActivate:[RouteGuardService]},
  {path:'todo/new',component:EditTodoComponent, canActivate:[RouteGuardService]},

  
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
