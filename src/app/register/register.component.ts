import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Firestore, addDoc, collection } from '@angular/fire/firestore'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	constructor(
		private readonly fb: FormBuilder,
		private readonly fs: Firestore,
		private readonly toaster: ToastrService
	) {}

	registrationForm: FormGroup = new FormGroup({})
	@Input() isRegisterScreenVisible = false
	@Output() isRegisterScreenVisibleChange = new EventEmitter<boolean>()

	ngOnInit(): void {
		this.buildForm()
	}

	buildForm() {
		this.registrationForm = this.fb.group({
			firstName: [],
			lastName: [],
			email: [],
			phone: [],
			password: [],
			reEnterPassword: [],
		})
	}

	onSubmit = () => {
		const collectionInstance = collection(this.fs, 'users')
		addDoc(collectionInstance, this.registrationForm.value)
			.then((data) => {
				this.toaster.success('account added successfully')
				console.log(data)
			})
			.catch((err) => console.log(err))
	}
	closeRegisterScreen = () => this.isRegisterScreenVisibleChange.emit(false)
}
