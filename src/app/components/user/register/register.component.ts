import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  user: UserInterface={
    name: '',
    email: '',
    pais: '',
    aficiones: ''
  };

  @ViewChild('nameUser') inputName: ElementRef;
  @ViewChild('paisUser') inputPais: ElementRef;
  @ViewChild('afiUser') inputAficiones: ElementRef;
  @ViewChild('sexoUser') inputSexo: ElementRef;

  public email: string = '';
  public password: string = '';

  ngOnInit() {
    this.authService.isAuth().subscribe(user =>{
      if(user){
        this.user.sexo = this.inputSexo.nativeElement.value;
        this.user.pais = this.inputPais.nativeElement.value;
        this.user.aficiones = this.inputAficiones.nativeElement.value;
      }
    })
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: this.inputName.nativeElement.value
            }).then(function () {
              console.log('USER UPDATED!');
            }).catch(function (error) {
              console.log('error', error);
            })
          }
        });
        //this.router.navigate(['admin/list-books']);
      }).catch(err => console.log('err'));
  }

}
