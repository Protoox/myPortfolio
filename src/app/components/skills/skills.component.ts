import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { skillsData } from 'src/assets/data/skill-data';
import { SkillService } from 'src/app/services/skill.service';


declare var btoa: any;


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsData: skillsData[];
  frontendSkills: skillsData[];
  backendSkills: skillsData[];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }


  constructor(private SkillsService: SkillService) {

  }

  ngOnInit(): void {


    this.getSkillsList();

  }

  private getSkillsList() {
    this.SkillsService.getSkillsList().subscribe(data => {
      this.skillsData = data;

      this.skillsData.forEach(skill => {
        console.log("antes")
        console.log(skill.img);
        if (skill.img && typeof skill.img === 'string') {
          skill.img = 'data:image/svg+xml;base64,' + skill.img;
        }
        console.log("despues")
        console.log(skill.img);
      });

      // Filtra las habilidades basadas en el campo 'tech'
      this.frontendSkills = this.skillsData.filter(skill => skill.tech === 'Frontend');
      this.backendSkills = this.skillsData.filter(skill => skill.tech === 'Backend');
    });
  }


}
