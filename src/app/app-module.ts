import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './pages/login/login.component';
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
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

@NgModule({
  declarations: [
    App,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    CheckboxModule,
    CardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "system"
        }
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
