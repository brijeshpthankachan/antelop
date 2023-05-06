import { Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	isRegisterScreenVisible = false
	loginForm = new FormBuilder().group({
		email: new FormControl(),
		password: new FormControl(),
	})
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	showRegisterScreen = () => (this.isRegisterScreenVisible = true)

	googleLogin() {
		this.authService
			.signInWithGoogle()
			.then(() => this.router.navigateByUrl('profile'))
	}

	signIn() {
		const control = this.loginForm.value
		this.authService
			.signInWithPassword(control.email, control.password)
			.then(() => this.router.navigateByUrl('profile'))
	}
}
