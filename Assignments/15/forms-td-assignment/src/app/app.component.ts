import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') customForm: NgForm;

  form = {
    emails: {
      email1: '',
      email2: ''
    },
    subscriptions: 'Advanced',
    pwd: ''
  };

  subscriptions = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  onSubmit(form) {
    this.form.emails.email1 = this.customForm.value.emails.email1;
    this.form.emails.email2 = this.customForm.value.emails.email2;
    this.form.subscriptions = this.customForm.value.subscriptions;
    this.form.pwd = this.customForm.value.pwd;
    console.log(form, this.form);
  }

  ngOnInit() {
    console.log(this.customForm);
    this.customForm.form.patchValue({subscriptions: 'Advanced'});
  }

}
