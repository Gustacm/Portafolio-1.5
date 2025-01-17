import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { IntroductionComponent } from "../../component/introduction/introduction.component";
import { TecnologyComponent } from "../../component/tecnology/tecnology.component";
import { BackgroundComponent } from "../../component/background/background.component";

@Component({
  selector: 'app-master',
  imports: [NavbarComponent, IntroductionComponent, TecnologyComponent, BackgroundComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
