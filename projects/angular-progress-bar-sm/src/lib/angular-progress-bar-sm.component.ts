import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-angular-progress-bar-sm',
  templateUrl:'./angular-progress-bar-sm.component.html',
  styleUrl:'./angular-progress-bar-sm.component.css'
})
export class AngularProgressBarSmComponent implements OnChanges {

  @Input() progressValue: number = 0;
  @Input() progressBarType: string = 'bar';
  circumference: any;
  strokeDashOffset: any;
  progressColor: string = '';
  barWidth = 0;

  ngOnInit(){
    if(this.progressBarType === 'circle'){
      this.progressValue = this.progressValue > 100 ? 100 : this.progressValue;
      this.circumference= (2 * 3.14 * 45);
      this.strokeDashOffset = this.circumference * (1- (this.progressValue/100));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progressValue'] && this.progressBarType === 'bar') {
      this.barWidth = this.progressValue;
    }
  }
}
