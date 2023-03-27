import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get(this.apiUrl + 'user');
  }

  getUsersRoles() {
    return this.http.get(this.apiUrl + 'user/role');
  }

  createNewUser(body) {
    return this.http.post(this.apiUrl + 'user', body);
  }

  deleteUser(userUuid) {
    return this.http.delete(this.apiUrl + 'user/' + userUuid);
  }

  updateUser(body, userUuid) {
    return this.http.patch(this.apiUrl + 'user/' + userUuid, body);
  }
}
