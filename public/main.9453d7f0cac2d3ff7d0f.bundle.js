webpackJsonp([1,4],{221:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.validateRegister=function(e){return void 0!=e.name&&void 0!=e.email&&void 0!=e.username&&void 0!=e.password},e.prototype.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},e.prototype.validateUserLogin=function(e){return void 0!=e.username&&void 0!=e.password},e=o([n.i(a.Injectable)(),r("design:paramtypes",[])],e)}()},392:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=392},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(480),o=n(0),r=n(521),i=n(511);r.a.production&&n.i(o.enableProdMode)(),n.i(a.a)().bootstrapModule(i.a)},510:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){this.title="app works!"}return e=o([n.i(a.Component)({selector:"app-root",template:n(688),styles:[n(679)]}),r("design:paramtypes",[])],e)}()},511:function(e,t,n){"use strict";var a=n(152),o=n(0),r=n(471),i=n(207),s=n(63),c=n(510),l=n(517),u=n(516),f=n(519),p=n(515),d=n(512),h=n(518),g=n(221),v=n(80),m=(n.n(v),n(79)),y=n(520),b=n(513),R=n(514);n.d(t,"a",function(){return x});var j=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},w=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=[{path:"",component:p.a},{path:"register",component:f.a},{path:"login",component:u.a},{path:"dashboard",component:d.a,canActivate:[y.a]},{path:"profile",component:h.a,canActivate:[y.a]},{path:"flappy",component:b.a,canActivate:[y.a]}],x=function(){function e(){}return e=j([n.i(o.NgModule)({declarations:[c.a,l.a,u.a,f.a,p.a,d.a,h.a,b.a,R.a],imports:[a.a,r.a,i.HttpModule,s.a.forRoot(O),v.FlashMessagesModule],providers:[g.a,m.a,y.a],bootstrap:[c.a]}),w("design:paramtypes",[])],e)}()},512:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a.Component)({selector:"app-dashboard",template:n(689),styles:[n(680)]}),r("design:paramtypes",[])],e)}()},513:function(e,t,n){"use strict";var a=n(0),o=n(63),r=n(80);n.n(r);n.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.router=e,this.flashMessage=t}return e.prototype.ngOnInit=function(){this.flappy()},e.prototype.flappy=function(){function e(){p-=25,g.play()}function t(){a.drawImage(r,0,0);for(var e=0;e<m.length;e++)l=s.height+u,a.drawImage(s,m[e].x,m[e].y),a.drawImage(c,m[e].x,m[e].y+l),m[e].x--,125==m[e].x&&m.push({x:n.width,y:Math.floor(Math.random()*s.height)-s.height}),(f+o.width>=m[e].x&&f<=m[e].x+s.width&&(p<=m[e].y+s.height||p+o.height>=m[e].y+l)||p+o.height>=n.height-i.height)&&location.reload(),5==m[e].x&&(h++,v.play());a.drawImage(i,0,n.height-i.height),a.drawImage(o,f,p),p+=d,a.fillStyle="#000",a.font="20px Verdana",a.fillText("Score : "+h,10,n.height-20),requestAnimationFrame(t)}var n=document.getElementById("canvas"),a=n.getContext("2d"),o=new Image,r=new Image,i=new Image,s=new Image,c=new Image;o.src="../../assets/images/bird.png",r.src="../../assets/images/bg.png",i.src="../../assets/images/fg.png",s.src="../../assets/images/pipeNorth.png",c.src="../../assets/images/pipeSouth.png";var l,u=85,f=10,p=150,d=1.5,h=0,g=new Audio,v=new Audio;g.src="../../assets/sounds/fly.mp3",v.src="../../assets/sounds/score.mp3",document.addEventListener("keydown",e),document.addEventListener("touchstart",e,!1);var m=[];m[0]={x:n.width,y:0},t()},e=i([n.i(a.Component)({selector:"app-floppybird",template:n(690),styles:[n(681)]}),s("design:paramtypes",["function"==typeof(t=void 0!==o.b&&o.b)&&t||Object,"function"==typeof(c=void 0!==r.FlashMessagesService&&r.FlashMessagesService)&&c||Object])],e);var t,c}()},514:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a.Component)({selector:"app-forgot",template:n(691),styles:[n(682)]}),r("design:paramtypes",[])],e)}()},515:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a.Component)({selector:"app-home",template:n(692),styles:[n(683)]}),r("design:paramtypes",[])],e)}()},516:function(e,t,n){"use strict";var a=n(0),o=n(79),r=n(221),i=n(63),s=n(80);n.n(s);n.d(t,"a",function(){return u});var c=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t,n,a){this.authService=e,this.validateService=t,this.router=n,this.flashMessage=a}return e.prototype.ngOnInit=function(){},e.prototype.onLoginSubmit=function(){var e=this,t={username:this.username,password:this.password};this.authService.authenticateUser(t).subscribe(function(n){if(!e.validateService.validateUserLogin(t))return e.flashMessage.show("Please fill in all fields",{cssClass:"alert-danger text-center",timeout:3e3}),!1;n.success?(e.authService.storeUserData(n.token,n.user),e.flashMessage.show("You are now logged in!",{cssClass:"alert-success text-center",timeout:5e3}),e.router.navigate(["dashboard"])):(e.flashMessage.show(n.msg,{cssClass:"alert-danger text-center",timeout:5e3}),e.router.navigate(["login"]))})},e=c([n.i(a.Component)({selector:"app-login",template:n(693),styles:[n(684)]}),l("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object,"function"==typeof(f=void 0!==i.b&&i.b)&&f||Object,"function"==typeof(p=void 0!==s.FlashMessagesService&&s.FlashMessagesService)&&p||Object])],e);var t,u,f,p}()},517:function(e,t,n){"use strict";var a=n(0),o=n(79),r=n(80),i=(n.n(r),n(63));n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.authService=e,this.flashMessage=t,this.router=n}return e.prototype.ngOnInit=function(){},e.prototype.onLogoutClick=function(){return this.authService.logout(),this.flashMessage.show("You are logged out",{cssClass:"alert-success",timeout:3e3}),this.router.navigate(["/login"]),!1},e=s([n.i(a.Component)({selector:"app-navbar",template:n(694),styles:[n(685)]}),c("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object,"function"==typeof(l=void 0!==r.FlashMessagesService&&r.FlashMessagesService)&&l||Object,"function"==typeof(u=void 0!==i.b&&i.b)&&u||Object])],e);var t,l,u}()},518:function(e,t,n){"use strict";var a=n(0),o=n(79),r=n(63);n.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.ngOnInit=function(){var e=this;this.authService.getProfile().subscribe(function(t){e.user=t.user},function(e){return console.log(e),!1})},e=i([n.i(a.Component)({selector:"app-profile",template:n(695),styles:[n(686)]}),s("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object,"function"==typeof(c=void 0!==r.b&&r.b)&&c||Object])],e);var t,c}()},519:function(e,t,n){"use strict";var a=n(0),o=n(221),r=n(79),i=n(80),s=(n.n(i),n(63));n.d(t,"a",function(){return u});var c=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t,n,a){this.validateService=e,this.flashMessage=t,this.authService=n,this.router=a}return e.prototype.ngOnInit=function(){},e.prototype.onRegisterSubmit=function(){var e=this,t={name:this.name,email:this.email,username:this.username,password:this.password};return this.validateService.validateRegister(t)?this.validateService.validateEmail(t.email)?void this.authService.registerUser(t).subscribe(function(t){t.success?(e.flashMessage.show("You are now registered and can log in",{cssClass:"alert-success text-center",timeout:3e3}),e.router.navigate(["/login"])):(e.flashMessage.show("Something went wrong!",{cssClass:"alert-danger text-center",timeout:3e3}),e.router.navigate(["/register"]))}):(this.flashMessage.show("Please use a valid email",{cssClass:"alert-danger text-center",timeout:3e3}),!1):(this.flashMessage.show("Please fill in all fields",{cssClass:"alert-danger text-center",timeout:3e3}),!1)},e=c([n.i(a.Component)({selector:"app-register",template:n(696),styles:[n(687)]}),l("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object,"function"==typeof(u=void 0!==i.FlashMessagesService&&i.FlashMessagesService)&&u||Object,"function"==typeof(f=void 0!==r.a&&r.a)&&f||Object,"function"==typeof(p=void 0!==s.b&&s.b)&&p||Object])],e);var t,u,f,p}()},520:function(e,t,n){"use strict";var a=n(0),o=n(63),r=n(79),i=n(80);n.n(i);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.authService=e,this.router=t,this.flashMessage=n}return e.prototype.canActivate=function(){return!!this.authService.loggedIn()||(this.flashMessage.show("Please Login",{cssClass:"alert-danger text-center",timeout:3e3}),this.router.navigate(["/login"]),!1)},e=s([n.i(a.Injectable)(),c("design:paramtypes",["function"==typeof(t=void 0!==r.a&&r.a)&&t||Object,"function"==typeof(l=void 0!==o.b&&o.b)&&l||Object,"function"==typeof(u=void 0!==i.FlashMessagesService&&i.FlashMessagesService)&&u||Object])],e);var t,l,u}()},521:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={production:!0}},679:function(e,t){e.exports=""},680:function(e,t){e.exports=""},681:function(e,t){e.exports=""},682:function(e,t){e.exports=""},683:function(e,t){e.exports=""},684:function(e,t){e.exports=""},685:function(e,t){e.exports=""},686:function(e,t){e.exports=""},687:function(e,t){e.exports=""},688:function(e,t){e.exports='<app-navbar></app-navbar>\n<div class="container">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>'},689:function(e,t){e.exports='<h2 class="page-header">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n'},690:function(e,t){e.exports='<h2 class="page-header text-center">Flappy Bird</h2>\n<div class="text-center">\n  <h4>Press any key to play</h4>\n  <canvas id=\'canvas\' width="288" height="512"></canvas>\n</div>\n'},691:function(e,t){e.exports="<p>\n  forgot works!\n</p>\n"},692:function(e,t){e.exports='<div class="jumbotron text-center">\n    <h1>MEAN Authentication App</h1>\n    <p class="lead">Welcome to our custom MEAN authentication application built using the following technologies </p>\n    <div>\n      <a class="btn btn-primary" [routerLink]="[\'/register\']">Register</a> <a class="btn btn-default" [routerLink]="[\'/login\']">Login</a>\n    </div>\n  </div>\n  \n  <div class="row">\n    <div class="col-md-4">\n      <h3>Express Backend</h3>\n      <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n    </div>\n    <div class="col-md-4">\n      <h3>Angular-CLI</h3>\n      <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n    </div>\n    <div class="col-md-4">\n      <h3>JWT Tokens</h3>\n      <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n    </div>\n  </div>'},693:function(e,t){e.exports='<h2 class="page-header" >Login</h2>\n<form class="form-signin" (submit)="onLoginSubmit()">\n        <div class="form-group">\n          <label for="Username">Username</label>\n          <input type="text" class="form-control" placeholder="Enter Username" [(ngModel)]="username" name="username">\n        </div>\n        <div class="form-group">\n        <label for="Password">Password</label>\n        <input type="password" class="form-control" placeholder=" Enter Password" [(ngModel)]="password" name="password">\n        </div>\n        <div class="checkbox">\n          <label>\n            <a href=\'/users/forgot\'>Forgot Password?</a>\n          </label>\n        </div>\n        <input class="btn btn-lg btn-primary" type="submit" value="Login">\n</form>'},694:function(e,t){e.exports='<nav class="navbar navbar-default">\n    <div class="container">\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" [routerLink]="[\'/\']">MEAN Auth App</a>\n      </div>\n      <div id="navbar" class="collapse navbar-collapse">\n        <ul class="nav navbar-nav navbar-left">\n          <li [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/\']">Home</a></li>\n        </ul>\n\n        <ul class="nav navbar-nav navbar-right">\n            <li *ngIf="authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/dashboard\']">Dashboard</a></li>\n            <li *ngIf="authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/flappy\']">Flappy Bird</a></li>\n            <li *ngIf="authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/profile\']">Profile</a></li>\n\n            <li *ngIf="!authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/login\']">Login</a></li>\n            <li *ngIf="!authService.loggedIn()" [routerLinkActive]="[\'active\']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="[\'/register\']">Register</a></li>\n            <li *ngIf="authService.loggedIn()"><a (click)="onLogoutClick()" href="#" >Logout</a></li>\n          </ul>\n      </div>\x3c!--/.nav-collapse --\x3e\n    </div>\n  </nav>\n'},695:function(e,t){e.exports='<div *ngIf="user">\n  <h2 class="page-header">{{user.name}}</h2>\n  <ul class="list-group">\n    <li class="list-group-item">Username : {{user.username}}</li>\n    <li class="list-group-item">Email : {{user.email}}</li>\n  </ul>\n</div>\n'},696:function(e,t){e.exports='<div>\n    <h2 class="page-header">Register</h2>\n    <form (submit)="onRegisterSubmit()" >\n      <div class="form-group">\n        <label for="name">Name</label>\n        <input type="text" [(ngModel)]="name" name="name" class="form-control" id="name" placeholder="Enter Name">\n      </div>\n      <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" [(ngModel)]="username" name="username" class="form-control" id="username" placeholder="Enter Username">\n      </div>\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input type="email" [(ngModel)]="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">\n        <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n      </div>\n      <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" [(ngModel)]="password" name="password" class="form-control" id="password" placeholder=" Enter Password">\n      </div>\n      <input type="submit" class="btn btn-primary" value="Submit">\n    </form>\n    </div>'},734:function(e,t,n){e.exports=n(393)},79:function(e,t,n){"use strict";var a=n(0),o=n(207),r=n(702),i=(n.n(r),n(526));n.n(i);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){this.http=e}return e.prototype.registerUser=function(e){var t=new o.Headers;return t.append("Content-type","application/json"),this.http.post("users/register",e,{headers:t}).map(function(e){return e.json()})},e.prototype.authenticateUser=function(e){var t=new o.Headers;return t.append("Content-type","application/json"),this.http.post("users/authenticate",e,{headers:t}).map(function(e){return e.json()})},e.prototype.getProfile=function(){var e=new o.Headers;return this.loadToken(),e.append("Authorization",this.authToken),e.append("Content-Type","application/json"),this.http.get("users/profile",{headers:e}).map(function(e){return e.json()})},e.prototype.storeUserData=function(e,t){localStorage.setItem("id_token",e),localStorage.setItem("user",JSON.stringify(t)),this.authToken=e,this.user=t},e.prototype.loadToken=function(){var e=localStorage.getItem("id_token");this.authToken=e},e.prototype.loggedIn=function(){return n.i(i.tokenNotExpired)("id_token")},e.prototype.logout=function(){this.authToken=null,this.user=null,localStorage.clear()},e=s([n.i(a.Injectable)(),c("design:paramtypes",["function"==typeof(t=void 0!==o.Http&&o.Http)&&t||Object])],e);var t}()}},[734]);