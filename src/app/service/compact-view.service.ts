import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompactViewService {
    private isCompact$ = new BehaviorSubject<boolean>(true);
    
    public setCompact(value: boolean): void {
        this.isCompact$.next(value);
    }
    
    public isCompactObservable(): Observable<boolean> {
        return this.isCompact$.asObservable();
    }
}
