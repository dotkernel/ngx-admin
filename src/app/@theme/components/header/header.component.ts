import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../../../authentication/services/auth.service';
import { ProfileModalAccountComponent } from '../profile-modal-account/profile-modal-account.component';
import { ApiWraperService } from '../../../services/api-wraper.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';
  currentUser: any;

  userMenu = [ { title: 'Profile', target: 'terget' }, { title: 'Log out' } ];

  currentUserObservable: Subscription;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private dialogService: NbDialogService,
              private apiWraper: ApiWraperService,
              private authService: AuthService) 
  {
    menuService.onItemClick().subscribe((res) => {
      if(res.item.title === 'Profile') {
        this.dialogService.open(ProfileModalAccountComponent, {closeOnBackdropClick : false, autoFocus : false , context: {accountData: this.currentUser}}).onClose.subscribe((res)=> {
        });
      }
      if(res.item.title === 'Log out'){
        this.authService.logout();
      }
    });
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.currentUserObservable = this.apiWraper.getCurrentAccount().subscribe((res) => {
      this.currentUser = res
    });

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
