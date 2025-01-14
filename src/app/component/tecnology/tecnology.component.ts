import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnology',
  imports: [CommonModule],
  templateUrl: './tecnology.component.html',
  styleUrls: ['./tecnology.component.css']
})


export class TecnologyComponent {
  iconoSize = signal(70);

}