import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* @Output() selectedMenu = new EventEmitter<string>(); */

  constructor() { }

  ngOnInit() {
  }

/*   onSelect(section: string){
    console.log("onSelect", section);
    this.selectedMenu.emit(section);
  } */

}
