import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any
  form_data: any
  data: any
  user: any

  constructor(private userData: DashboardService) { 
    this.isLogged()
  }

  ngOnInit(): void {
    this.user = new Array<{name: string, email: string}>()
    this.getUsers()
  }

  isLogged() {
    if (localStorage.getItem('user_token') == null) {
      location.href = '/'
    }
  }

  getUsers() {
    this.userData.getUsers().subscribe(
      (data) => {          
        this.users = data
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

    this.userData.register(this.form_data).subscribe(
      (data) => {          
        this.data = data          
        if (this.data['success']) {
          this.getUsers()
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

  deleteUser(id: any) {

    if (confirm("Press a button!")) {
      this.userData.delete(id).subscribe(
        (data) => {         
          this.data = data
          if (this.data['success']) {
            this.getUsers()
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

  getUser(id: any) {
    this.userData.getUser(id).subscribe(
      (data) => {          
        this.user = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getEditData(data: object) {

    this.form_data = {
      ...data,
      role: 0,
      id: this.user['id']
    }

    if (this.form_data['email'] == "") {
      alert('E-mail is required!')
      return
    }
    if (this.form_data['password'] == "") {
      alert('Password is required!')
      return
    }

    this.userData.update(this.form_data).subscribe(
      (data) => {          
        this.data = data          
        if (this.data['success']) {
          this.getUsers()
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
