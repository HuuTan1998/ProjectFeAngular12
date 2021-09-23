import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public nameColor = 'blue'
  public color = '';
  public dataAddress = [
    {
      idProvince: '-1',
      name: 'Chọn tỉnh/ thành phố',
      province: []
    },
    {
      idProvince: '89',
      name: 'Tỉnh An Giang',
      province: [
        { idProvince: `89`, idDistrict: `883`, name: `Thành phố Long Xuyên` },
        { idProvince: `89`, idDistrict: `884`, name: `Thành phố Châu Đốc` },
        { idProvince: `89`, idDistrict: `886`, name: `Huyện An Phú` },
        { idProvince: `89`, idDistrict: `887`, name: `Thị xã Tân Châu` },
        { idProvince: `89`, idDistrict: `888`, name: `Huyện Phú Tân` },
        { idProvince: `89`, idDistrict: `889`, name: `Huyện Châu Phú` },
        { idProvince: `89`, idDistrict: `890`, name: `Huyện Tịnh Biên` },
        { idProvince: `89`, idDistrict: `891`, name: `Huyện Tri Tôn` },
        { idProvince: `89`, idDistrict: `892`, name: `Huyện Châu Thành` },
        { idProvince: `89`, idDistrict: `893`, name: `Huyện Chợ Mới` },
      ]
    },
    {
      idProvince: '91',
      name: 'Tỉnh Kiên Giang',
      province: [
        { idProvince: `91`, idDistrict: `899`, name: `Thành phố Rạch Giá` },
        { idProvince: `91`, idDistrict: `900`, name: `Thành phố Hà Tiên` },
        { idProvince: `91`, idDistrict: `902`, name: `Huyện Kiên Lương` },
        { idProvince: `91`, idDistrict: `903`, name: `Huyện Hòn Đất` },
        { idProvince: `91`, idDistrict: `904`, name: `Huyện Tân Hiệp` },
        { idProvince: `91`, idDistrict: `905`, name: `Huyện Châu Thành` },
        { idProvince: `91`, idDistrict: `906`, name: `Huyện Giồng Riềng` },
        { idProvince: `91`, idDistrict: `907`, name: `Huyện Gò Quao` },
        { idProvince: `91`, idDistrict: `908`, name: `Huyện An Biên` },
        { idProvince: `91`, idDistrict: `909`, name: `Huyện An Minh` },
        { idProvince: `91`, idDistrict: `910`, name: `Huyện Vĩnh Thuận` },
        { idProvince: `91`, idDistrict: `911`, name: `Thành phố Phú Quốc` },
        { idProvince: `91`, idDistrict: `912`, name: `Huyện Kiên Hải` },
        { idProvince: `91`, idDistrict: `913`, name: `Huyện U Minh Thượng` },
        { idProvince: `91`, idDistrict: `914`, name: `Huyện Giang Thành` },
      ]
    }


  ];

  public dataDistricts :any[] = [];
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    //console.log(this.dataAddress)
    this.count = this.common.count;
    this.binhPhuong = this.common.binhPhuong(this.common.count);
    this.common.count++;
  }

  public changeProvince(event : any){
    this.dataDistricts = this.dataAddress.find(item => item.idProvince === event.target.value)?.province || [];
    //console.log(this.dataAddress.find(item => item.idProvince === event.target.value)?.province)
    //console.log(event.target.value)
  }

  public changeColor (color:string): void{
    this.color = color;
  }

  public count = 0;
  public binhPhuong = 0



}
