import { Component, OnInit } from '@angular/core';
import { JobService } from '../../core/services/job.service';
import { Job } from '../../core/models/job.model';
import { ActivatedRoute } from '@angular/router';
import { CardJobComponent } from '../card-job/card-job.component';

@Component({
  selector: 'app-list-jobs',
  standalone: true,
  imports: [CardJobComponent],
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.css'
})
export class ListJobsComponent implements OnInit {

  //Declaraciones
  jobs: Job[] = [];
  slug_Category!: string | null;

  constructor(
    private JobService: JobService,  
    private ActivatedRoute: ActivatedRoute
  ) { }

  //Inicia solo una vez durante el ciclo de vida del componente
  ngOnInit(): void {
    this.slug_Category = this.ActivatedRoute.snapshot.paramMap.get('slug');
    this.get_products();
    // console.log(this.slug_Category);
  }

  // Find jobs 
  get_products(): void {
    if (this.slug_Category !== null) { // jobsByCategory
      this.JobService.getJobsByCategory(this.slug_Category).subscribe(
        (data: any) => {
          this.jobs = data.jobs;
          console.log(data, "Jobs by Category");
      });
    } else { // all jobs
      this.JobService.all_jobs().subscribe(
        (data: any) => {
          this.jobs = data.jobs;
          console.log(data.jobs, "All jobs");
      });      
    }
  }
}
