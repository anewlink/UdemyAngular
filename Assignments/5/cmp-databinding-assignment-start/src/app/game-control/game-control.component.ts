import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  lastNumber : number = 0;
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
   console.log("start");
   this.interval = setInterval(() => {
    this.lastNumber += 1;
    this.intervalFired.emit(this.lastNumber);
   }, 1000);
  }

  onPauseGame() {
    console.log("stop");
    clearInterval(this.interval);
  }

}
