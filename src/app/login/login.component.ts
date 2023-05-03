import { Component } from '@angular/core'
import { AuthService } from '@app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	isRegisterScreenVisible = false
	constructor(private readonly authService: AuthService) {}

	showRegisterScreen = () => (this.isRegisterScreenVisible = true)

	googleLogin() {
		this.authService.signInWithGoogle()
	}
}
