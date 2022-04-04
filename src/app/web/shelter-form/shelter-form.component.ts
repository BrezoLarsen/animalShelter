import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { IAnimal } from 'src/app/interfaces/animal';
import { IShelterCandidate } from 'src/app/interfaces/shelterCandidate';

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
  selector: 'app-shelter-form',
  templateUrl: './shelter-form.component.html',
  styleUrls: ['./shelter-form.component.scss'],
})
export class ShelterFormComponent implements OnInit {
  animal: IAnimal | undefined;
  shelterForm: FormGroup;
  errorMessage = '';
  shelterCandidate: IShelterCandidate;
  specie = '';
  submitted: boolean;
  emailMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('specie');
    if (param) {
      this.specie = param;
    }
    this.buildShelterForm();
  }

  buildShelterForm(): void {
    this.shelterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailGroup: this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required],
        },
        { validator: emailMatcher }
      ),
      dni: ['', [Validators.required]],
      phone: ['', Validators.required, Validators.minLength(9)],
      addressGroup: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pc: ['', Validators.required],
      }),
      birthDate: ['', [Validators.required]],
      married: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });

    const emailControl = this.shelterForm.get('emailGroup.email');
    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setMessage(emailControl));
  }

  save() {
    console.log(this.shelterForm);
    this.submitted = true;
    if (!this.shelterForm.valid) {
      return;
    }
    // If sends form make this.submitted = false
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map((key) => this.validationMessages[key])
        .join(' ');
    }
  }

  private validationMessages = {
    required: 'Por favor, ingrese un email',
    email: 'Por favor, ingrese un email válido',
  };

  onBack(): void {
    this.router.navigate(['/casas-de-acogida']);
  }
}
