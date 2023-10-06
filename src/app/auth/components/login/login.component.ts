import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form : FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(private fb: FormBuilder){

  
  }

  ngOnInit(): void {
    
  }

  login(){
      let user: Usuario = {
        username: this.form.value.username,
        password: this.form.value.password,
      }

      if (user.username === "xx" && user.password === 'xx'){
        console.log('Bienvenida')
      }else{
        this.form.reset()
      }
  }


}
