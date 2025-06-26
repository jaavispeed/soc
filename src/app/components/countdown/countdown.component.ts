import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
})
export default class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2026-02-01T00:00:00');

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  secs: number = 0;

  private intervalId: any;

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
    const target = this.targetDate.getTime();
    const diff = Math.max(0, Math.floor((target - now) / 1000)); // en segundos

    this.days = Math.floor(diff / 86400);
    this.hours = Math.floor((diff % 86400) / 3600);
    this.minutes = Math.floor((diff % 3600) / 60);
    this.secs = diff % 60;
  }
}
