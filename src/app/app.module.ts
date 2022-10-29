import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { AuthService } from './commonservices/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginInterceptor } from './interceptor/auth/login.interceptor';
import { ParentComponent } from './parent/parent.component';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { AnimationsModule } from './animations/animations.module';
import LearnTest from './learn-test-cases/learn-test';
import {FrontHeaderComponent} from './includes/front-header/front-header.component';
// import { FrontFromCommandComponent } from './includes/front-from-command/front-from-command.component';

// import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrontendLayoutComponent,
    ParentComponent,
    ChildAComponent,
    LearnTest,
    FrontHeaderComponent,
    // FrontFromCommandComponent
    // LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimationsModule,
    BrowserAnimationsModule

  ],
  providers: [AuthService,{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
