import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IChengyu} from '../models/Chengyu.model';

@Injectable({
  providedIn: 'root'
})
export class ChengyuService {
  private chengyuListUrl = 'chengyu-list.json';
  private chengyuListSubject = new BehaviorSubject<IChengyu[]>([]);
  private chengyuListChangeSubject = new Subject<void>();

  constructor(private http: HttpClient) {
    this.loadChengyus();
  }

  private loadChengyus() {
    this.http.get<IChengyu[]>(this.chengyuListUrl).subscribe({
      next: (data) => {
        console.log('Fetched Chengyus:', data);
        this.chengyuListSubject.next(data);
      }
    });
  }

  getChengyus(): Observable<IChengyu[]> {
    return this.chengyuListSubject.asObservable();
  }

  notifyCheckListChange() {
    this.chengyuListChangeSubject.next();
  }

  getChengyuListChangeNotifier(): Observable<void> {
    return this.chengyuListChangeSubject.asObservable();
  }
}
