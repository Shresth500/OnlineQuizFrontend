import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService, ISignIn } from '../../common/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  credentials: ISignIn = {
    username: '',
    password: '',
    roles: ['User'],
  };
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {}
  register(form: NgForm) {
    console.log(form);
    var data = { ...form.value };
    this.credentials.username = data.username;
    this.credentials.password = data.password;
    this.auth.register(this.credentials).subscribe({
      next: (registered) => {
        console.log(registered);
        this.router.navigate(['/auth', 'login']);
      },
    });
  }
}
