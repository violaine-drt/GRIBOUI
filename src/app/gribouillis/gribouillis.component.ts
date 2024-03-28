import { Component, OnInit, Input } from '@angular/core';
import { Gribouillis } from '../models/gribouillis.model';
import { GribouillisService } from '../services/gribouillis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gribouillis',
  templateUrl: './gribouillis.component.html',
  styleUrl: './gribouillis.component.scss'
})
export class GribouillisComponent implements OnInit {
  @Input() gribouillis!: Gribouillis;

  constructor(private gribouillisService: GribouillisService,
              private router: Router ) {}

  ngOnInit() {
  }
  handleLike(){
    this.gribouillisService.handleLikeById(this.gribouillis.id);
  } 
  
  onViewGribouillis(){
    this.router.navigateByUrl(`gribouillis/${this.gribouillis.id}`)

  }

}

