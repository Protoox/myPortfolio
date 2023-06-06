import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { experiencesData } from 'src/assets/data/exp-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  expData: experiencesData[]; // expData is an array of experiencesData objects

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {

    this.getExperiencesList(); // Call the method to get the list of experiences

  }

  /*
  * This method is called when the component is initialized
  */
  private getExperiencesList() {
    this.experienceService.getExperiencesList().subscribe(data => {
      this.expData = data;
    });
  }
}
