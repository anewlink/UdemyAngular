import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(section: string){
    console.log("onHeaderClick", section);
    this.selectedMenu.emit(section);
  }

}
