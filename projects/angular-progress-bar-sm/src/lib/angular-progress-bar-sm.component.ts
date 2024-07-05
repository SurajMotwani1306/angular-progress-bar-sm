import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-angular-progress-bar-sm',
  templateUrl:'./angular-progress-bar-sm.component.html',
  styleUrl:'./angular-progress-bar-sm.component.css'
})
export class AngularProgressBarSmComponent implements OnChanges {

  @Input() progressValue: number = 0;
  @Input() progressBarColor: string = '#007bff';
  barWidth = 0;

  ngOnInit(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progressValue']) {
      this.barWidth = this.progressValue;
    }
  }
}
