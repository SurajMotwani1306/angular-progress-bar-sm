# angular-progress-bar-sm
Stylish animated progress bar
<br/>

<table>
  <tr>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="./src/lib/Screenshots/progress.gif" />
        <p align="center">Use Animated Progressbars</p>
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
<app-progress-bar [progressValue]="50" [progressBarColor]="'#000'" />
```

## Fundamentals / Mandatories

| Property/Method       |  Type   | Description                                                             |
| ----------------------| :-----: | ---------------------------------------------------------------------------------- |
| progressValue         | number  | Percentage of filled progress bar                                                  |
| progressBarColor      | string  | Provide color single inverted comma's with hex color code or by default "#007bff"  |


## Future Plans
- [ ] Circular Progress Bar

## Author
Suraj Motwani - Email: suraj.motwani1306@gmail.com

## License

Angular Progress Bar SM is available under the MIT license. See the LICENSE file for more info.

