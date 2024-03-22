import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class LayoutService {

  protected layoutSize$ = new Subject();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({ refCount: true }),
  );

  changeLayoutSize() {
    this.layoutSize$.next(EMPTY);
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(
      debounceTime(350),
    );
  }
}
