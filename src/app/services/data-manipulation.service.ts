import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor(private toastrService: NbToastrService) { }

  config: NbToastrConfig;
  destroyByClick = true;
  duration = 3000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  status: NbComponentStatus = 'primary';

  public showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
   
    this.toastrService.show(body, titleContent, config);
  }
}
