import { Injectable } from '@angular/core';

import { DropdownConfiguration } from './configuration-dropdown';
import { ConfigurationBase } from './configuration-base';
import { TextboxConfiguration } from './configuration-textbox';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Configuration } from './configuration';
//TODO get configuration from server and actually set form entries.
@Injectable()
export class ConfigurationService {
  private configurationUrl = 'http://localhost:3011/configuration';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http){ }
  create(name: JSON): Promise<Configuration> {
    let options = new RequestOptions({ headers: this.headers });
    console.log(' Posting Document ');
    return this.http.post(this.configurationUrl, { name }, options)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }
  getConfiguration(): Promise<Configuration> {
    return this.http.get(this.configurationUrl)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError (error: Response | any ) {
    // TODO Log this out
    console.error('An Error occurred', error);
    return Promise.reject(error.message || error);
  }
  getConfigurationsForm() {
    //TODO move this to call to REST for HEAD.
    let configurations: ConfigurationBase<any>[] = [

      new DropdownConfiguration({
        key: 'commit_id',
        label: 'Commit ID',
        options: [
          {key: 'commit_1', value: '672f844888ed16024374d871a28cbd043d9a17a9'},
          {key: 'commit_2', value: 'a7ec00ef15963bfca6b4168e9b7f271e79f538c'},
          {key: 'commit_3', value: 'c8498ddf75cbba4b3d25962e8431758dadefee3'},
        ],
        order: 3
      }),

      new DropdownConfiguration({
        key: 'docker_image',
        label: 'Docker Image Base',
        options: [
          {key: 'head', value: 'HEAD:latest'},
          {key: 'private_head', value: 'HEAD:private'},
        ],
        order: 3
      }),

      new TextboxConfiguration({
        key: 'max_session_number',
        label: 'Number of Instances allowed',
        value: '5',
        required: true,
        order: 1
      })
    ];
    return configurations.sort((a,b) => a.order - b.order);
  }
}
