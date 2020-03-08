import { Component } from '@angular/core';
import { Job } from './model/job.vm';
import { JobService } from './service/job.service';
import { Observable } from 'rxjs';
import { StateType } from './model/state.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "./job.component.html"
})
export class JobComponent {
  title = 'processorApp';
  jobs: Observable<Job[]>;
  proposalId: string;

  constructor(private service: JobService, private route: ActivatedRoute) {
    this.proposalId = this.route.snapshot.params["proposalId"];
    this.jobs = this.service.getJobs();
  }

  getStateStyle(state: StateType): string {
    switch (state) {
      case StateType.Active:
        return "alert-info";
      case StateType.Complete:
        return "alert-success";
      case StateType.Ready:
        return "alert-warning";
      case StateType.Error:
        return "alert-danger";
    }
  }
}
