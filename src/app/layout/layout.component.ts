import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = 'users';

  constructor() { }

  ngOnInit(): void {
    
  }

  exit() {
    localStorage.removeItem('user_token')
    location.href = '/'
  }

}
