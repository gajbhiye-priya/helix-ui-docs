import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    isCollapsed = false;

  menu = [
    { icon: '🏠', label: 'Home', route: '/' },
    { icon: '🔘', label: 'Button', route: '/button' },
    { icon: '🧾', label: 'Card', route: '/card' },
    { icon: '⌨️', label: 'Input', route: '/input' },
    { icon: '⚠️', label: 'Alert', route: '/alert' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
