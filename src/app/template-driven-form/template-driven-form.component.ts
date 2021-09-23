import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  public userName ='';
  public age =0

  public submitData() :void {
    this.common.sentData({name:this.userName,age:this.age});
  }

}
