import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IAdoptionCandidate } from 'src/app/interfaces/adoptionCandidate';
import { IAnimal } from 'src/app/interfaces/animal';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-for-adoption',
  templateUrl: './for-adoption.component.html',
  styleUrls: ['./for-adoption.component.scss']
})
export class ForAdoptionComponent implements OnInit {

  animal: IAnimal | undefined;
  adoptForm: FormGroup;
  errorMessage = '';
  adoptionCandidate: IAdoptionCandidate;
  specie = '';
  submitted: boolean;
  emailMessage: string;
  animalSpecie: string;
  species: string[] = ['Perro', 'Gato', 'Hurón', 'Conejo'];
  isHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildAdoptForm()
  }

  buildAdoptForm(): void {
    this.adoptForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailGroup: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: ['', Validators.required, Validators.minLength(9)],
      addressGroup: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pc: ['', Validators.required]
      }),
      animalSpecie:  ['', Validators.required]
    });

    const emailControl = this.adoptForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  save() {
    console.log('sadasd',this.adoptForm);
    this.submitted = true;
    if(!this.adoptForm.valid) {
      return;
    }
    // If sends form make this.submitted = false
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  };

  private validationMessages = {
    required: 'Por favor, ingrese un email',
    email: 'Por favor, ingrese un email válido'
  };

}
