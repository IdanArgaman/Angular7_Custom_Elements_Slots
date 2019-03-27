import {
  NgModule,
  Injector
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  createCustomElement
} from '@angular/elements';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [BoardComponent],
  entryComponents: [BoardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule {
  constructor(private injector: Injector) {

    const boardCE = createCustomElement(BoardComponent, {
      injector: this.injector
    });

    customElements.define('board-tile', boardCE);

  }

}
