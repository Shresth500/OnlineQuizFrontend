import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, ILogIn } from '../../common/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  credentials!: ILogIn;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  signin(form: NgForm) {
    this.credentials = { ...form.value };
    this.auth.login(this.credentials).subscribe({
      next: (loggedinUser) => {
        this.router.navigateByUrl('/home');
      },
    });
  }
}
