import { Component,OnInit } from '@angular/core';
import { Gribouillis } from '../models/gribouillis.model';
import { GribouillisService } from '../services/gribouillis.service';
@Component({
  selector: 'app-gribouillis-list',
  templateUrl: './gribouillis-list.component.html',
  styleUrl: './gribouillis-list.component.scss'
})
export class GribouillisListComponent implements OnInit {
  gribouillis! : Gribouillis[];
  constructor(private gribouillisService: GribouillisService){} 

  ngOnInit():void {
    this.gribouillis = this.gribouillisService.getAllGribouillis();
  }
}
