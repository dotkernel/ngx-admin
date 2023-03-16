import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-admin-detail-renderer',
  template: `
    <div class="d-flex flex-column" *ngIf="this.value.cell.column.id === 'roles'">
      <span [style]="!last ? {'margin-bottom':'.2rem'}:{'margin-bottom':'0'}" *ngFor="let role of adminRoles, let last = last">{{ role.name }}</span>
    </div>
    {{this.value.cell.column.id === 'created' ? (this.rowData.created.date | date: 'MM.dd.yyyy'):''}}
    {{this.value.cell.column.id === 'updated' ? (this.rowData.updated.date | date: 'MM.dd.yyyy'):''}}`,
  styleUrls: ['./admin-detail-renderer.component.scss']
})
export class AdminDetailRendererComponent implements OnInit, ViewCell {

  adminRoles: any[];
  value: any;
  rowData: any;

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.rowData);

    this.adminRoles = this.rowData.roles;
  }

}
