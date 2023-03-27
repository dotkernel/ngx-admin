import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminDetailRendererComponent } from './components/admin-detail-renderer/admin-detail-renderer.component';
import { CreateNewAdminModalComponent } from './components/create-new-admin-modal/create-new-admin-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAdminModalComponent } from './components/update-admin-modal/update-admin-modal.component';
import { DeleteAdminModalComponent } from './components/delete-admin-modal/delete-admin-modal.component';



@NgModule({
  declarations: [
    AdminsComponent,
    AdminDetailRendererComponent,
    CreateNewAdminModalComponent,
    UpdateAdminModalComponent,
    DeleteAdminModalComponent
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
export class AdminsModule { }
