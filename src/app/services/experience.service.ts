import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencesData } from 'src/assets/data/exp-data';

@Injectable({
  providedIn: 'root' // This service is available in any component or service in the application
})
export class ExperienceService {

  private baseUrl = 'http://143.47.53.166:8080/api/v1/experience'; // This is the base url of the REST API

  constructor(private httpClient: HttpClient) {
  }

  getExperiencesList(): Observable<experiencesData[]> {
    return this.httpClient.get<experiencesData[]>(this.baseUrl); // This method returns an observable of type Experience[]
  }

}
