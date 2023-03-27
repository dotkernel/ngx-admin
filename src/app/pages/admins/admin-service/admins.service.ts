import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAdminsList() {
    return this.http.get(this.apiUrl + 'admin');
  }

  getAdminRoles() {
    return this.http.get(this.apiUrl + 'admin/role');
  }

  createNewAdmin(body) {
    return this.http.post(this.apiUrl + 'admin', body);
  }

  deleteAdmin(adminUuid) {
    return this.http.delete(this.apiUrl + 'admin/' + adminUuid);
  }

  updateAdmin(body, adminUuid) {
    return this.http.patch(this.apiUrl + 'admin/' + adminUuid, body);
  }
}
