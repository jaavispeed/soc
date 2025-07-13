import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private intervalId: any;

  targetDate = new Date('2026-01-01T00:00:00');

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log('Days:', this.days);
  }
  formatNumber(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
