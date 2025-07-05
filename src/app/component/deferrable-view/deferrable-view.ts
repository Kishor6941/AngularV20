import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-deferrable-view',
  imports: [],
  templateUrl: './deferrable-view.html',
  styleUrl: './deferrable-view.scss'
})
export class DeferrableView {
  showDetails = signal(false);

  toggleDetails() {
    setTimeout(() => {
      this.showDetails.update(current => !current);
    },500)
  }
}
