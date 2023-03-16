import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {

  @Input() userData: any;

  constructor(protected ref: NbDialogRef<DeleteUserModalComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.ref.close(true);
  }

}
