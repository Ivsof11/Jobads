import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingJobs: any;
  newToday: any;
  popularJobs: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingJobs();
    this.getnewToday();
    this.getPopularJobs();
  }

  getTrendingJobs() {
    this.http.get('http://localhost:4200/assets/data/trending-jobs.json').subscribe((jobs) => {
      this.trendingJobs = jobs;
    });
  }
  getnewToday() {
    this.http.get('http://localhost:4200/assets/data/new-today.json').subscribe((jobs) => {
      this.newToday = jobs;
    });
  }
  getPopularJobs() {
    this.http.get('http://localhost:4200/assets/data/popular-jobs.json').subscribe((jobs) => {
      this.popularJobs = jobs;
    });
  }
  goToJob(type:string, id:string){
    this.router.navigate(['job', type, id]);
  }
}
