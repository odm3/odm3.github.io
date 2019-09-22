import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss']
})
export class MainDisplayComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'PROS', cols: 1, rows: 1, imageUrl: './assets/pros-tux.png', alt:'pros' },
          { title: 'VEX Code', cols: 1, rows: 1, imageUrl: './assets/V5text.png', alt:'VEXCode' }
        ];
      }

      return [
        { title: 'PROS', cols: 1, rows: 1, imageUrl: './assets/pros-tux.png', alt:'pros' },
        { title: 'VEX Code', cols: 1, rows: 1, imageUrl: './assets/V5Text.png', alt:'VEXCode' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
