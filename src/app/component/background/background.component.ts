import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-background',
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  steps = signal([
    {
      title: 'Discovery Call',
      duration: '1 Hour',
      description: 'We get to know each other better:',
      points: [
        'Determine how I can assist you',
        'Understand the goals for your website'
      ]
    },
    {
      title: 'Concept & Strategy',
      duration: '2 Weeks',
      description: 'Together, we develop a strategy that aligns with your goals:',
      points: [
        'UX Design',
        'Wireframes',
        'Interactive Prototypes'
      ]
    },
    {
      title: 'Web Design',
      duration: '2 Weeks',
      description: 'Crafting high-end designs tailored to your brand:',
      points: [
        'High-end website designs',
        'Interactive prototype of the design'
      ]
    }
  ]);
}