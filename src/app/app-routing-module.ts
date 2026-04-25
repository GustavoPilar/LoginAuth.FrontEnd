import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth-guards';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(cm => cm.CrudModule), canActivate: [authGuard] },
  { path: "system", loadChildren: () => import("./modules/system/system.module").then(cm => cm.SystemModule), canActivate: [authGuard] },
  { path: "report", loadChildren: () => import("./modules/report/report.module").then(rm => rm.ReportModule), canActivate: [authGuard] },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
