import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onforgotSubmit(){
  const user = {
    email : this.email
  }
  this.authService.forgotPassword(user).subscribe(data =>{
      if(data.success){

      this.flashMessage.show(data.msg, {cssClass:'alert-success text-center',
      timeout:5000});

      this.router.navigate(['/']);

    } else {
      this.flashMessage.show(data.msg, {cssClass:'alert-danger text-center',
      timeout:5000});
      this.router.navigate(['forgot']);
    }
  });
  }
}
