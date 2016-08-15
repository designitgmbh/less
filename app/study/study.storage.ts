import { Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { API_URL } from '../config';
import { TypedJSON } from "typedjson/js";
import { Study } from './';

export class StudyStorage {
    studies: Study[] = [];

    constructor (@Inject(Http) private http: Http) {
        this.fetchStudies();
    }

    get all() {
        return this.studies;
    }

    get first() {
        return this.studies[0];
    }

    fetchStudies() {
        this.http.get(API_URL + '/studies')
                 .subscribe(data => {
                     let studies = data.json();
                     for(let study of studies) {
                         this.studies.push(Study.fromJSON(study));
                     }
                 });
    }

    sendStudyResults(study: Study) {
      let body = JSON.stringify({ study });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post(API_URL + '/studyResults', body, options)
                      .subscribe(data => {});
    }
}