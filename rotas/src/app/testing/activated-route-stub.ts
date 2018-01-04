import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data, Params } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {
  private subjectParams = new BehaviorSubject(this.testParams);
  private subjectQueryParams = new BehaviorSubject(this.testQueryParams);
  private subjectData = new BehaviorSubject(this.testData);
  private _testParams: Params;
  private _testQueryParams: any;
  private _testData: Data;

  params = this.subjectParams.asObservable();
  queryParams = this.subjectQueryParams.asObservable();
  data = this.subjectData.asObservable();

  get testParams() {
    return this._testParams;
  }

  set testParams(params: Params) {
    this._testParams = params;
    this.subjectParams.next(this._testParams);
  }

  get testQueryParams() {
    return this._testQueryParams;
  }

  set testQueryParams(queryParams: any) {
    this._testQueryParams = queryParams;
    this.subjectQueryParams.next(this._testQueryParams);
  }

  get testData() {
    return this._testData;
  }

  set testData(data: Data) {
    this._testData = data;
    this.subjectData.next(this._testData);
  }

  get snapshot() {
    return {
      params: this.params,
      queryParams: this.queryParams,
      data: this.testData
    };
  }
}
