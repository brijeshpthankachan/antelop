import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	isRegisterScreenVisible = false
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
}
