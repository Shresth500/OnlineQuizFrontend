import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  data!: any;
  constructor(private profile: ProfileService) {}
  ngOnInit(): void {
    this.getProfileData();
  }
  getProfileData() {
    return this.profile.getProfile().subscribe({
      next: (profileData) => {
        this.data = profileData;
        console.log(profileData);
      },
    });
  }
}
