import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@app/home/home.component'
import { ReactiveComponent } from '@app/reactive/reactive.component'
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'reactive-forms', component: ReactiveComponent },
	{ path: 'profile', component: ProfileComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
