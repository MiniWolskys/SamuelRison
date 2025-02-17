import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExperienceFilterService {
    private filters$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    private filtersSecondaryEdit$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    public filters: string[] = [];

    public setFilters(filters: string[]): void {
        this.filters = filters;
        this.filters$.next(this.filters);
    }
    
    public filtersObservable(): Observable<string[]> {
        return this.filters$.asObservable();
    }

    public secondaryEditEvent(): Observable<string[]> {
        return this.filtersSecondaryEdit$.asObservable();
    }

    public addFilter(tech: string): void {
        if (this.filters.includes(tech)) {
            this.filters = this.filters.filter(filter => filter !== tech);
        } else {
            this.filters.push(tech);
        }
        this.filtersSecondaryEdit$.next(this.filters);
    }
}
