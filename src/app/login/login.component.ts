import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any
  form_data: any

  constructor(private loginData: LoginService) {
    if (localStorage.getItem('user_token')) {
      location.href = '/dashboard'
    }
  }

  ngOnInit(): void {
    
  }

  getLoginData(data: object) {

      this.form_data = data

      if (this.form_data['email'] == "") {
        alert('E-mail is required!')
        return
      }
      if (this.form_data['password'] == "") {
        alert('Password is required!')
        return
      }

      this.loginData.login(data).subscribe(
        (data) => {          
          this.data = data          
          if (this.data['token']) {
            localStorage.setItem('user_token',this.data["token"])
            location.href = '/dashboard'
          }
          if (this.data['error']) {
            alert(this.data['error'])
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getRegisterData(data: object) {

    this.form_data = {
      ...data,
      role: 0
    }

    if (this.form_data['email'] == "") {
      alert('E-mail is required!')
      return
    }
    if (this.form_data['password'] == "") {
      alert('Password is required!')
      return
    }

    this.loginData.register(this.form_data).subscribe(
      (data) => {          
        this.data = data          
        if (this.data['success']) {
          alert(this.data["success"])
        }
        if (this.data['error']) {
          alert(this.data['error'])
        }
      },
      (error) => {
        console.log(error)
      }
    )
}

}
