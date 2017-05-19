import { Injectable } from '@angular/core';

import { Instance } from './instance';
import { DropdownConfiguration } from './configuration-dropdown';
import { ConfigurationBase } from './configuration-base';
import { TextboxConfiguration } from './configuration-textbox';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class InstanceService
{
  private instanceUrl = 'http://localhost:3011/instances';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getInstances(): Promise<Instance[]> {
    return this.http.get(this.instanceUrl)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  getInstance(id: string): Promise<Instance> {
    const url = `${this.instanceUrl}/${id}`;
    return this.http.get(url)
    .toPromise().then(this.extractData)
    .catch(this.handleError);
  }

  create(name: JSON): Promise<Instance> {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.instanceUrl, { name }, options)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  getNewInstanceConfigurationsForm() {
    //TODO move this to call to REST for HEAD.
    let configurations: ConfigurationBase<any>[] = [

      new DropdownConfiguration({
        key: 'chatbot',
        label: 'chatbot to use',
        options: [
          {key: 'opencog', value: 'opencog'},
          {key: 'aiml', value: 'aiml'},
        ],
        order: 3
      }),

      new DropdownConfiguration({
        key: 'vision_tool',
        label: 'Vision Tool to Use',
        options: [
          {key: 'cmt', value: 'cmt'},
          {key: 'pi_vision', value: 'pi'},
        ],
        order: 2
      }),

      new TextboxConfiguration({
        key: 'instance_name',
        label: 'Instance Name',
        value: 'instance name',
        required: true,
        order: 1
      })
    ];
    return configurations.sort((a,b) => a.order - b.order);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any): Promise<any> {
    //TODO how can i actually relay this message to the application.
    console.error('An Error occurred', error);
    return Promise.reject(error.message || error);
  }
}
