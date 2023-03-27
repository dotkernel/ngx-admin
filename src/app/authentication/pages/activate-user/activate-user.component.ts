import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataManipulationService } from '../../../services/data-manipulation.service';

@Component({
  selector: 'ngx-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {
  hash;
  error = true;
  loading = false;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private data: DataManipulationService) {
    this.hash = this.route.snapshot.paramMap.get('hash');
  }

  ngOnInit(): void {
    this.activateUser(this.hash);
  }

  private activateUser(hash) {
    this.loading = true;
    this.authService.activateUser(hash).subscribe(res => {
      this.data.showToast('success', 'User activated with success!', '');
      this.error = false;
      this.loading = false;
    },
    error => {
      this.data.showToast('warning', 'Error to activate user.', '');
      this.loading = false;
    });
  }

}
