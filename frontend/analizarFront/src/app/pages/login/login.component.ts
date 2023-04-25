import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  constructor( private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.login = this.initForm();
    
  }
  //Capturo los valores cuando le doy a ingresar
  onSubmit(): void{
    console.log('Form ->', this.login.value);
    
  }
  //Validaciones para los campos
  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[^ ]+@[^ ]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}