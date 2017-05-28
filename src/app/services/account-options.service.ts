import {Injectable} from '@angular/core';

import {Jsonp, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class AccountOptionsService {

  constructor(private jsonp: Jsonp) {
  }

  getOptions(): Observable<any> {
    let accountsUrl = 'https://accounts.gigya.com/accounts.getPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&callback=JSONP_CALLBACK&sections=accountOptions';

    return this.jsonp
      .get(accountsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('err' + errMsg);
    return Observable.throw(errMsg);
  }
}
