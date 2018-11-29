import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      name: new FormControl(null, [Validators.required, this.invalidProjectName.bind(this)], this.asyncInvalidProjectName.bind(this)),
      email: new FormControl(null, [Validators.email, Validators.required]),
      status: new FormControl(this.statusList[0])
    });
  }

  invalidProjectName(control: FormControl) {
    if (control.value === this.forbbidenProjectName) {
      return { invalidProjectName: true };
    }
    return null;
  }

  asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.invalidProjectName(control));
      }, 10000);
    });
    return promise;
  }

  onSubmit() {
    console.log('form values', this.projectForm.value);
  }
}
