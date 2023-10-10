import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router';

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


  constructor(private fb: FormBuilder,
              private router: Router){

  
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
        this.router.navigate(['./cliente'])
        
      }else{
        this.form.reset()
      }
  }


}
