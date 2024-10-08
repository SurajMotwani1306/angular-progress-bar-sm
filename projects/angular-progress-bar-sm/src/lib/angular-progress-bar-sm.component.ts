import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-angular-progress-bar-sm',
  templateUrl:'./angular-progress-bar-sm.component.html',
  styleUrl:'./angular-progress-bar-sm.component.css'
})
export class AngularProgressBarSmComponent implements OnChanges {

  @Input() progressValue: number = 0;
  @Input() progressBarType: string = 'bar';
  @Input() progressColor: string = '';
  circumference: any;
  strokeDashOffset: any;
  barWidth = 0;

  ngOnInit(){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progressValue'] && this.progressBarType === 'bar') {
      this.barWidth = this.progressValue;
    }

    if(changes['progressValue'] && this.progressBarType === 'circle'){
      this.progressValue = this.progressValue > 100 ? 100 : (this.progressValue < 0 ? 0 : this.progressValue);
      this.circumference= (2 * 3.14 * 45);
      this.strokeDashOffset = this.circumference * (1- (this.progressValue/100));
    }
  }
}
