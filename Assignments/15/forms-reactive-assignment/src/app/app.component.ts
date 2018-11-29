import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusList = ['Stable', 'Critical', 'Finished'];
  forbbidenProjectName = 'Test';

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      email: new FormControl(null, [Validators.email, Validators.required]),
      status: new FormControl(this.statusList[0])
    });
  }

  onSubmit() {
    console.log('form values', this.projectForm.value);
  }
}
