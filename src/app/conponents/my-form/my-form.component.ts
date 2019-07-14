import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

interface InitValue {
  email: string
}

const initValue: InitValue = {
  email: ''
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fb = new FormBuilder();
    this.createForm(initValue)
  }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.fg.controls.email.errors)

    // console.log(this.fg.value)
    // console.log(this.fg.get('email'));
    // console.log(this.fg.value);
    // console.log(this.fg.errors);
    // console.log(this.f.dirty);
    // console.log(this.f.valid);
  }

  private createForm(v: InitValue) {
    this.fg = this.fb.group({
      // email: this.fb.control(v.email, [Validators.required]),

      email:['', [Validators.required, Validators.email]]
    })
  }
}
