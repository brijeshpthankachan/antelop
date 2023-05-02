import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { HomeComponent } from '@app/home/home.component'
import { LoginComponent } from '@app/login/login.component'
import { ReactiveComponent } from '@app/reactive/reactive.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ReactiveComponent,
		LoginComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
