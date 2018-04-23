import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  public menuData:Array<any>=[];
  public showSubmenu:string='';
  url:string;
  constructor(public router:Router)
  {

  }
  submenu(element:any)
  {
   this.showSubmenu=element;
  }



  ngOnInit()
  {

  }

}
