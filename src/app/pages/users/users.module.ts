import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { UserDetailRendererComponent } from './components/user-detail-renderer/user-detail-renderer.component';
import { CreateNewUserModalComponent } from './components/create-new-user-modal/create-new-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserModalComponent } from './components/update-user-modal/update-user-modal.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailRendererComponent,
    CreateNewUserModalComponent,
    UpdateUserModalComponent,
    DeleteUserModalComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbFormFieldModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
