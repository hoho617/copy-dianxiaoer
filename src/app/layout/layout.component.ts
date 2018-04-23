import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.css']
})
export class LayoutComponent {
  public offsetwidth:number=document.body.offsetWidth-140-190-8;
  constructor(public router: Router) {

  }
  menuData;
  url;
  changeRoutes(url){
    console.log("url",url)
    if(url.startsWith("/order")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"订单管理",href:"/order",type:"outside",isSelected:url=="/order"});
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.menuData=tempMenu;
      console.log("this.menuData",this.menuData)
    }
    else if(url.startsWith("/comment")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.menuData=tempMenu;
    }
    else if(url.startsWith("/merchandise")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"商品管理",href:"/merchandise",type:"outside",isSelected:url=="/merchandise"});
      tempMenu.push({name:"商品类别",href:"/merchandise/merchandise-type",type:"outside",isSelected:url=="/merchandise/merchandise-type"});
      this.menuData=tempMenu;
    }
    else if(url.startsWith("/client")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"客户管理",href:"/client",type:"outside",isSelected:url=="/client"});
      tempMenu.push({name:"标签管理",href:"/client/tag",type:"outside",isSelected:url=="/client/tag"});
      this.menuData=tempMenu;
    }
    else if(url.startsWith("/setting")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"店铺设置",href:"/setting",type:"outside",isSelected:url=="/setting"});
      tempMenu.push({name:"用户设置",href:"/setting/setting-user",type:"outside",isSelected:url=="/setting/setting-user"});
      tempMenu.push({name:"消息设置",href:"/setting/setting-info",type:"outside",isSelected:url=="/setting/setting-info"});
      tempMenu.push({name:"房间设置",href:"/setting/setting-room",type:"outside",isSelected:url=="/setting/setting-room"});
      tempMenu.push({name:"支付设置",href:"/setting/setting-pay",type:"outside",isSelected:url=="/setting/setting-pay"});
      tempMenu.push({name:"会员设置",href:"/setting/setting-vip",type:"outside",isSelected:url=="/setting/setting-vip"});
      this.menuData=tempMenu;
    }
  }
  ngOnInit() {
    if(this.router.url.indexOf('?')!=-1){
      let num=this.router.url.indexOf('?');
      this.url=this.router.url.slice(0,num);
    }else {
      this.url=this.router.url;
    }
    console.log("this.url",this.url)
    this.changeRoutes(this.router.url)
  }
  onVoted(e){
    console.log(e);
    this.changeRoutes(e)
  }
}
