import { Component,OnInit } from '@angular/core';
import { ServicerService } from '../servicer.service';

@Component({
  selector: 'app-quick1',
  templateUrl: './quick1.component.html',
  styleUrls: ['./quick1.component.scss']
})
export class Quick1Component implements OnInit {
  getalllist: any;
  constructor(public service1: ServicerService) { }
  ngOnInit(): void {
    this.service1.getallusers().subscribe((data)=>{
      
      this.getalllist=data
    })
   
  }

}
