# Angular Progress Bar SM
Stylish animated progress bar
<br/>

<table>
  <tr>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="./projects/angular-progress-bar-sm/src/lib/Screenshots/progress.gif" />
    </td>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="./projects/angular-progress-bar-sm/src/lib/Screenshots/circular.PNG" />
    </td>
   </tr>
   <tr>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="./projects/angular-progress-bar-sm/src/lib/Screenshots/bar-animated.gif" />
        <p align="center">Make it Animated by below mentioned code</p>
    </td>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="./projects/angular-progress-bar-sm/src/lib/Screenshots/circle-animated.gif" />
    </td>
   </tr>
</table>

## Installation

```sh
npm i angular-progress-bar-sm
```

## Usage

## Import
```ts
import { AngularProgressBarSmModule } from 'angular-progress-bar-sm';
```

## Fundamental Usage
```html
<lib-angular-progress-bar-sm 
    [progressValue]="50" 
    [progressColor]="'#000'"    <!-- values '#000' or 'black' must be string -->
    [progressBarType]="'bar'"   <!-- values 'bar' or 'circle' must be string -->
/>
```

### To make it Animated:
Start passing dynamic values in your project & use [progressValue] = "progressValue"

```ts
 let intervalValue = setInterval(() => {
    this.progressValue += 1;

    if(this.progressValue === 100){
      this.progressValue = 0;
    }
  },100)
```

## Fundamentals / Mandatories

| Property/Method       |  Type   | Description                                                             |
| ----------------------| :-----: | -------------------------------------------------------------------------------------------- |
| progressValue         | number  | Percentage of filled progress bar                                                            |
| progressBarColor      | string  | Provide color single inverted comma's with hex color code or by default "#007bff" (Optional) |
| progressBarType       | string  | By default: 'bar' or can be 'circle' (Optional)                                              |


## Future Plans
- [ ] Animated filled portion of progress bar.

## Author
Suraj Motwani - Email: suraj.motwani1306@gmail.com

## License

Angular Progress Bar SM is available under the MIT license. See the LICENSE file for more info.

