import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

const URL = 'http://localhost:3000/jobs';
const URLcat = 'http://localhost:3000/categories';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) { }

  all_jobs(): Observable<Job[]> {
    return this.http.get<Job[]>(URL);
  }

  get_job(slug: String): Observable<Job> {
    return this.http.get<Job>(`${URL}/${slug}`);
  }

  getJobsByCategory(slug: String): Observable<Job[]> {
    return this.http.get<Job[]>(`${URLcat}/${slug}`);
  }
}
