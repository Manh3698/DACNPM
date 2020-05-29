import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ApiService } from '../api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onSubmit(){
    console.warn(this.loginForm.value)
    console.log(this.loginForm.controls['email'].value)
   
  }
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.login().subscribe((data: any) => {
      
      // console.log(this.datas)
    });
  }

}
