import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private service: HttpServiceService) { }

  ngOnInit(): void {
    this.service.getRandom(5).subscribe((data)=>{
      console.log('data=',data.results)
    })
  }

}
