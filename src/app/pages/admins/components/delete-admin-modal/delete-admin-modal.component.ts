import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-admin-modal',
  templateUrl: './delete-admin-modal.component.html',
  styleUrls: ['./delete-admin-modal.component.scss'],
})
export class DeleteAdminModalComponent implements OnInit {

  @Input() adminData: any;

  constructor(protected ref: NbDialogRef<DeleteAdminModalComponent>) { }

  ngOnInit(): void {
    return;
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.ref.close(true);
  }

}
