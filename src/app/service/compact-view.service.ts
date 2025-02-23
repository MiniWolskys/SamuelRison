import {Injectable, OnDestroy} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompactViewService implements OnDestroy {
    private isCompact$ = new BehaviorSubject<boolean>(true);

    public setCompact(value: boolean): void {
        this.isCompact$.next(value);
    }

    public isCompactObservable(): Observable<boolean> {
        return this.isCompact$.asObservable();
    }

    public ngOnDestroy() {
      this.isCompact$.complete();
    }
}
