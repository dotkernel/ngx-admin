import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-user-detail-renderer',
  template: `
    <div class="d-flex flex-column" *ngIf="this.value.cell.column.id === 'roles'">
      <span [style]="!last ? {'margin-bottom':'.2rem'}:{'margin-bottom':'0'}" *ngFor="let role of userRoles, let last = last">{{ role.name }}</span>
    </div>
    {{this.value.cell.column.id === 'firstName' ? this.rowData.detail.firstName : this.value.cell.column.id === 'lastName' ? rowData.detail.lastName : ''}}
    {{this.value.cell.column.id === 'created' ? (rowData.created.date | date: 'MM.dd.yyyy'):''}}
    {{this.value.cell.column.id === 'updated' ? (rowData.updated.date | date: 'MM.dd.yyyy'):''}}`,
  styleUrls: ['./user-detail-renderer.component.scss']
})
export class UserDetailRendererComponent implements OnInit, ViewCell {

  constructor() { }
  value: any;
  rowData: any;
  userRoles: any[];

  ngOnInit(): void {
    this.userRoles = this.rowData.roles;
  }

}
