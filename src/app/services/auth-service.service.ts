import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_KEY = 'jwt';

  login(username: string, password: string): boolean {

    if (username === 'tester' && password === 'password') {
      const token = 'yoeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODQyODQ4NTIsImV4cCI6MTcxNTgyMDg1MiwiYXVkIjoidHJ1ZXNjYXBlIiwic3ViIjoic3RlcGhlbnJvYWxlc0BnbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJTdGVwaGVuIiwiU3VybmFtZSI6IlJvamFsZXMiLCJFbWFpbCI6InN0ZXBoZW5yb2phbGVzQGdtYWlsLmNvbSIsIlJvbGUiOiJEZXZlbG9wZXIifQ.cZrCfr7wwqAg4arzRbgc9xcZ4AXL_-e3PHzao0zPSfQur-jwt-token'; 
      localStorage.setItem(this.JWT_KEY, token);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.JWT_KEY);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.JWT_KEY);
    return !!token;
  }
}