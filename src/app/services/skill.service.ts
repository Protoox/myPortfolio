import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skillsData } from 'src/assets/data/skill-data';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = 'http://143.47.53.166:8080/api/v1/skill'; // This is the base url of the REST API

  constructor(private httpClient: HttpClient) { }

  getSkillsList(): Observable<skillsData[]> {
    return this.httpClient.get<skillsData[]>(this.baseUrl); // This method returns an observable of type Experience[]
  }
}
