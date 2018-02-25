import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  token:any
  password:String
  private sub:any
  
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token']; // --> Name must match wanted parameter
    });
  }
  onChangeSubmit(){
    const user = {
      token: this.token,
      password: this.password
    }
    this.authService.resetPassword(user).subscribe(data =>{
      if(data.success){

      this.flashMessage.show(data.msg, {cssClass:'alert-success text-center',
      timeout:5000});

      this.router.navigate(['login']);

    } else {
      this.flashMessage.show(data.msg, {cssClass:'alert-danger text-center',
      timeout:5000});
      this.router.navigate(['forgot']);
    }
  });
      
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
