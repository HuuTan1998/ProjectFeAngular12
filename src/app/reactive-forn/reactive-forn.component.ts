import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-forn',
  templateUrl: './reactive-forn.component.html',
  styleUrls: ['./reactive-forn.component.scss']
})
export class ReactiveFornComponent implements OnInit {
  // public  profileForm = new FormGroup({
  //   userName: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public profileForm = this.fb.group({
    userName: ['', Validators.required],
    age: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: ['']
    }),
  });

  constructor(private common:CommonService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitData() :void {
    this.common.sentData(this.profileForm.value);
  }

}
