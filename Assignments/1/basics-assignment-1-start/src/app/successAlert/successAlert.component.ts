import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'success-alert',
  templateUrl: './successAlert.component.html',
  styles: [`.alert.alert-warning{
    margin-top: 10px;
  }`]
})
export class SuccessAlertComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
