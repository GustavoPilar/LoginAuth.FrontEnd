import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "manager", loadChildren: () => import("./modules/crud/crud.module").then(cm => cm.CrudModule) },
  { path: "system", loadChildren: () => import("./modules/system/system.module").then(cm => cm.SystemModule) },
  { path: "report", loadChildren: () => import("./modules/report/report.module").then(rm => rm.ReportModule) },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
