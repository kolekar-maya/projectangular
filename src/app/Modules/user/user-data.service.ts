import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private message = new BehaviorSubject('0');
  public currentData = this.message.asObservable();

  private id: any = new BehaviorSubject('0');
  public currentId = this.id.asObservable();

  private data: any = new BehaviorSubject('0');
  public currentData1 = this.data.asObservable();

  private sharedData = new BehaviorSubject<string>('updatedDta');
  sharedData$ = this.sharedData.asObservable();

  constructor(private http: HttpClient) { }

  newUserData(newData: any): void {
    this.sharedData.next(newData);
  }

  getData1() {
    return this.http.get('http://localhost:3000/api/getAllCourses');
  }
  postData(data: any) {
    return this.http.post('http://localhost:3000/api/insertCourses', data);
  }
  editData(id: any, data: any) {
    return this.http.put('http://localhost:3000/api/updateCourses/' + id, data);
  }
  deleteData(id: any) {
    return this.http.delete('http://localhost:3000/api/deleteCourses/' + id);
  }

  getMessage() {
    return this.currentData1;
  }

  setMessage(msg: any, msg1: any) {
    this.message.next(msg);
    this.message.next(msg1);
  }

  setEditUserData(i: any, d: any) {
    this.id.next(i);
    this.data.next(d);
  }

  getEditUserData() {
    return this.currentId, this.currentData1
  }

}
