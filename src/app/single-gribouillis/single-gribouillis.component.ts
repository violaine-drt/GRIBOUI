import { Component, OnInit } from '@angular/core';
import { Gribouillis } from '../models/gribouillis.model';
import { GribouillisService } from '../services/gribouillis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-gribouillis',
  templateUrl: './single-gribouillis.component.html',
  styleUrl: './single-gribouillis.component.scss'
})
export class SingleGribouillisComponent implements OnInit {
  gribouillis!: Gribouillis;

  constructor(private gribouillisService: GribouillisService,
              private route:ActivatedRoute,
              private router2: Router){}

  ngOnInit() {
    const gribouillisId = +this.route.snapshot.params['id']; //ici, le + transforme le string (de l'id) en  number
    this.gribouillis  = this.gribouillisService.getGribouillisById(gribouillisId);
  }
  handleLike(){
    this.gribouillisService.handleLikeById(this.gribouillis.id);
    } 
    returnMenuGribouillis(){
      this.router2.navigateByUrl('gribouillis')
    }
}


