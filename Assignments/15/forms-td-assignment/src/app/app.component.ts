import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

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

  defaultSubscription = this.subscriptions[1];

  onSubmit(form) {
    this.form.emails.email1 = this.customForm.value.emails.email1;
    this.form.emails.email2 = this.customForm.value.emails.email2;
    this.form.subscriptions = this.customForm.value.subscriptions;
    this.form.pwd = this.customForm.value.pwd;
    console.log(form, this.form);
  }

  ngAfterViewInit() {
    console.log(this.customForm);
    this.customForm.form.patchValue({subscriptions: 'Advanced'});
  }

}
