<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
=======
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
>>>>>>> 0f8cd57e3a53de062da343596611ce9054c1586e

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
<<<<<<< HEAD
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

=======
  newServerName = '';
  newServerContent = '';

>>>>>>> 0f8cd57e3a53de062da343596611ce9054c1586e
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverContent: this.newServerContent */
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverContent: this.newServerContent
    });
=======
  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    );

>>>>>>> 0f8cd57e3a53de062da343596611ce9054c1586e
  }



}
