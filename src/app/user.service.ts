import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USERS } from './users';

import { Pipe, PipeTransform } from '@angular/core';
import { SortDirection } from './sortable.directive';

@Pipe({ name: 'Boolean' })
export class BooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        return value == true ? 'В отпуске' : 'На работе'
    }; 
}

interface State {
  page: number;
  pageSize: number;
  sortColumn: string;
  sortDirection: SortDirection;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
  public getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }
  public updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions)
  }
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(catchError(this.handleError<User>('addUser')));
  }
  public deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    if(window.confirm("Вы подтверждаете удаление ?")) {
      return this.http.delete<User>(url, httpOptions).pipe(
        catchError(this.handleError<User>('deleteUser'))
      );
    }
  }
  private _state: State = {
    page: 1,
    pageSize: 4,
    sortColumn: '',
    sortDirection: ''
  };
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
  }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  
  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
}