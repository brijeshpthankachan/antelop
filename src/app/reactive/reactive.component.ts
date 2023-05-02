import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
})
export class ReactiveComponent {
	carForm: FormGroup = new FormGroup({})

	constructor(private readonly fb: FormBuilder) {}

	ngOnInit() {
		this.buildForm()
	}

	names = () => this.carForm.get('skills') as FormArray

	address = () => this.carForm.get('address') as FormGroup

	add = () => this.names().push(this.fb.control(''))

	remove = (index: number) => this.names().removeAt(index)

	submit = () => console.log(this.carForm.value)

	buildForm = () =>
		(this.carForm = this.fb.group({
			name: [],
			dob: [],
			band: [],
			address: this.fb.group({
				houseNo: [],
				street: [],
				zipCode: [],
			}),
			skills: this.fb.array([]),
		}))
}
