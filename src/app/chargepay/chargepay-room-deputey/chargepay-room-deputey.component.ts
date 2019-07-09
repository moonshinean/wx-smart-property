import { Component, OnInit } from '@angular/core';
import {HeaderContent} from '../../common/components/header/header.model';
import {ActivatedRoute} from '@angular/router';
import {ChargepayRoomTenantService} from '../../common/services/chargepay-room-tenant.service';
import {GlobalService} from '../../common/services/global.service';

@Component({
  selector: 'app-chargepay-room-deputey',
  templateUrl: './chargepay-room-deputey.component.html',
  styleUrls: ['./chargepay-room-deputey.component.less']
})
export class ChargepayRoomDeputeyComponent implements OnInit {
  public headerOption: HeaderContent = {
    title: '副业主信息',
    leftContent: {
      icon: 'icon iconfont icon-fanhui'
    },
    rightContent: {
      // title: '缴费明细',
      // color: '#76B2F3',
      icon: ''
    }
  };
  public deputerListData = {
    type: 2,
    data: [
      // {name: '王五', phone: '18392738293', endTime: '2023.3.5'},
      // {name: '刘曼', phone: '18392738293', endTime: '2023.3.5'},
      // {name: '小王', phone: '18392738293', endTime: '2023.3.5'},
      // {name: '李柳', phone: '18392738293', endTime: '2023.3.5'},
    ]
  };
  constructor(
    private getRouter: ActivatedRoute,
    private chargeRoomTenantSrv: ChargepayRoomTenantService,
    private globalSrv: GlobalService,


  ) { }

  ngOnInit() {
    this.chargeRoomTenantSrv.getRoomTenantList({identity: 2, roomCode: this.globalSrv.wxGet('roomCode')}).subscribe(
      (value) => {
        console.log(value);
        value.entity.forEach( v => {
          // this.tenantListData
          if (v !== null) {
            this.deputerListData.data.push({name: v.userName, phone: v.userPhone, endTime: v.startDate});
          }
        });
      }
    );
  }

}
