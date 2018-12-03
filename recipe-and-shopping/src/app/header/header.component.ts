import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* @Output() selectedMenu = new EventEmitter<string>(); */

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onFetchData() {
    console.log('fetch');
    this.dataStorageService.getRecipes();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Response)=>{
        console.log(response);
      });
  }

/*   onSelect(section: string){
    console.log("onSelect", section);
    this.selectedMenu.emit(section);
  } */

}
