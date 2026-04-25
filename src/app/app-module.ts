import { ApplicationModule, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './pages/login/login.component';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { RegisterComponent } from './pages/register/register.component';
import { ComponentsModule } from './components/components.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CrudModule } from './modules/crud/crud.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReportModule } from './modules/report/report.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CrudModule,
    ApplicationModule,
    ReportModule,

    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    CheckboxModule,
    CardModule,
    BreadcrumbModule,
    ToastModule,

    NgxSpinnerModule.forRoot({ type: "ball-atom" })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none',
        },
      },
    }),

    MessageService
  ],
  bootstrap: [App],
})
export class AppModule { }
