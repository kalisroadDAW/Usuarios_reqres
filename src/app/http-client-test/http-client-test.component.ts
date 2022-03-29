import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModel } from './http-client.model';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-http-client-test',
  templateUrl: './http-client-test.component.html',
  styleUrls: ['./http-client-test.component.css']
})
export class HttpClientTestComponent implements OnInit {

  result: any;
  testOptions: HttpClientModel[];
  optionSelected: string | undefined = 'get';

  constructor(private http: HttpClient) {

    const get = this.get();
    this.testOptions = [
      {
        name: 'Get',
        model: 'get'
      },
      {
        name: 'Post',
        model: 'post'
      },
      {
        name: 'Put',
        model: 'put'
      },
      {
        name: 'Delete',
        model: 'delete'
      }
    ]
  }

  ngOnInit() { }

  public getData(key: string | undefined): void {
    this.optionSelected = key;
    if (key == 'get') {
      this.get();
    } else if (key == 'post') {
      this.post();
    } else if (key == 'put') {
      this.put();
    } else if (key == 'delete') {
      this.delete();
    }
  }

  private get() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => { this.result = data; });
  }

  private post() {
    this.http.post('https://reqres.in/api/users',
      {
        name: "morpheus",
        job: "leader"
      })
      .subscribe(data => { this.result = data; });
  }

  private put() {
    this.http.put('https://reqres.in/api/users/2',
      {
        name: "morpheus",
        job: "zion resident"
      })
      .subscribe(data => { this.result = data; });
  }
 
  private delete() {
    this.http.delete('https://reqres.in/api/users/2',)
      .subscribe(data => { this.result = data; })
  }

  getIndividual() {
    const params = new HttpParams().set('id', '5');
    this.http.get('https://reqres.in/api/users', { params })
      .subscribe(data => { this.result = data; })

  }


}
