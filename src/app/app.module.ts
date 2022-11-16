import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{ path: '', component: HomepageComponent },
			{ path: 'login', component: LoginPageComponent },
		]),
	],
	providers: [FormBuilder],
	bootstrap: [AppComponent],
	declarations: [AppComponent, HomepageComponent, LoginPageComponent],
})
export class AppModule {}
