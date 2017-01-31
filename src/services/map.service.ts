import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IMarker } from '../models/marker';

const URL_MARKERS = '/assets/markers.json'

@Injectable()
export class MapService {

  constructor(private _http: Http) { }
  getMarkers() : Observable<IMarker[]> {
      return this._http.get(URL_MARKERS)
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }
  private _handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
