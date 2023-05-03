import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { HomeComponent } from '@app/home/home.component'
import { LoginComponent } from '@app/login/login.component'
import { ReactiveComponent } from '@app/reactive/reactive.component'
import { RegisterComponent } from '@app/register/register.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr'
import { environment } from '../environments/environment'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ReactiveComponent,
		LoginComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NgbModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		AngularFireModule.initializeApp(environment.firebase),
		provideFirestore(() => getFirestore()),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
