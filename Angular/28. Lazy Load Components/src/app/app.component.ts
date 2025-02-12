import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '27. Lazy Load Components for Ultimate Efficiency';

  isAdmin = false;

  ProfileComponent: { new(): UserProfileComponent | AdminProfileComponent } | null = null;

  async getProfileComponent() {
     if (this.isAdmin) {
      const { AdminProfileComponent } = await import('./admin-profile/admin-profile.component');
      this.ProfileComponent = AdminProfileComponent;
     }

     else {
      const { UserProfileComponent } = await import('./user-profile/user-profile.component');

      this.ProfileComponent = UserProfileComponent;
     }
  }


  ngOnInit() {
    this.getProfileComponent();
  }
}
