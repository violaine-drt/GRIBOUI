import { Component,OnDestroy,OnInit } from '@angular/core';
import { Gribouillis } from '../models/gribouillis.model';
import { GribouillisService } from '../services/gribouillis.service';
import { interval, tap, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-gribouillis-list',
  templateUrl: './gribouillis-list.component.html',
  styleUrl: './gribouillis-list.component.scss'
})
export class GribouillisListComponent implements OnInit, OnDestroy {
  gribouillis! : Gribouillis[];
  private destroy$! : Subject<boolean>;
  constructor(private gribouillisService: GribouillisService){} 

  ngOnInit():void {
    this.destroy$ = new Subject<boolean>();
    this.gribouillis = this.gribouillisService.getAllGribouillis();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
    
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
      
  }
}
