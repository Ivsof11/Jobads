import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobads',
  templateUrl: './jobads.component.html',
  styleUrls: ['./jobads.component.scss']
})
export class JobadsComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  jobs: any;
  job: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-jobs.json';
    }
    if (this.type === 'new') {
      this.url = 'http://localhost:4200/assets/data/new-today.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-jobs.json';
    }
    this.getJob();
  }
  getJob() {
    this.http.get(this.url).subscribe((jobs) => {
      this.jobs = jobs;
      let index = this.jobs.findIndex((job: { id: string; }) => job.id == this.id);
      if (index > -1 ){
        this.job = this.jobs[index];
      }
    });
  }

}
