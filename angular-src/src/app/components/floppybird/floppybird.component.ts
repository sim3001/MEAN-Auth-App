import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-floppybird',
  templateUrl: './floppybird.component.html',
  styleUrls: ['./floppybird.component.css']
})
export class FloppybirdComponent implements OnInit {

  constructor(private router:Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  flappy(run){
      var cvs: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
      var ctx: CanvasRenderingContext2D = cvs.getContext("2d");

      // load images

      var bird = new Image();
      var bg = new Image();
      var fg = new Image();
      var pipeNorth = new Image();
      var pipeSouth = new Image();

      bird.src = "../../assets/images/bird.png";
      bg.src = "../../assets/images/bg.png";
      fg.src = "../../assets/images/fg.png";
      pipeNorth.src = "../../assets/images/pipeNorth.png";
      pipeSouth.src = "../../assets/images/pipeSouth.png";


      // some variables

      var gap = 85;
      var constant;

      var bX = 10;
      var bY = 150;

      var gravity = 1.5;

      var score = 0;

      // audio files

      var fly = new Audio();
      var scor = new Audio();

      fly.src = "../../assets/sounds/fly.mp3";
      scor.src = "../../assets/sounds/score.mp3";

      // on key down

      document.addEventListener("keydown", moveUp);
      document.addEventListener("touchstart", moveUp, false);

      function moveUp() {
        bY -= 25;
        fly.play();
      }

      // pipe coordinates

      var pipe = [];

      pipe[0] = {
        x: cvs.width,
        y: 0
      };

      // draw images
      function msg() {
        this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger text-center'});
      }

      function draw() {
        if(run === true) {
          ctx.drawImage(bg, 0, 0);


          for (var i = 0; i < pipe.length; i++) {

            constant = pipeNorth.height + gap;
            ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

            pipe[i].x--;

            if (pipe[i].x == 125) {
              pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
              });
            }

            // detect collision

            if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
              location.reload();
            }

            if (pipe[i].x == 5) {
              score++;
              scor.play();
            }


          }

          ctx.drawImage(fg, 0, cvs.height - fg.height);

          ctx.drawImage(bird, bX, bY);

          bY += gravity;

          ctx.fillStyle = "#000";
          ctx.font = "20px Verdana";
          ctx.fillText("Score : " + score, 10, cvs.height - 20);

          requestAnimationFrame(draw);
        }
      }

      draw();
  }
  }

