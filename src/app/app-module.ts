import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './pages/login/login.component';
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { CheckboxModule } from 'primeng/checkbox';
import { RegisterComponent } from './pages/register/register.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,

    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    CheckboxModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
