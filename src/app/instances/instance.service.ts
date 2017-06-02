import { Injectable } from '@angular/core';

import { Instance } from './instance';
import { DropdownConfiguration } from '../common/configuration-dropdown';
import { ConfigurationBase } from '../common/configuration-base';
import { TextboxConfiguration } from '../common/configuration-textbox';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class InstanceService
{
  private instanceUrl = 'http://localhost:3011/instances';
  private headers = new Headers({'Content-Type': 'application/json'});
  private instance = 'instance';
  private startRequest =  { 'started' : 'true' } ;
  private stopRequest =  { 'started' : 'false' } ;

  constructor(private http: Http) {}

  getInstances(): Promise<Instance[]> {
    return this.http.get(this.instanceUrl)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }
  //TODO There is no StartInstances function as starting multiple sessions requires feature that are not currently not implemented.
  stopInstances(): Promise<Instance[]> {
    const url = `${this.instanceUrl}`;
    return this.http.put(url, this.stopRequest, {headers: this.headers})
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

  startInstance(id: string): Promise<Instance> {
    const url = `${this.instanceUrl}/${id}`;
    return this.http.put(url, this.startRequest, {headers: this.headers})
    .toPromise().then(this.extractData)
    .catch(this.handleError);
  }

  stopInstance(id: string): Promise<Instance> {
    const url = `${this.instanceUrl}/${id}`;
    return this.http.put(url, this.stopRequest, {headers: this.headers})
    .toPromise().then(this.extractData)
    .catch(this.handleError);
  }

  create(name: JSON): Promise<string> {
    let options = new RequestOptions({ headers: this.headers });
    console.log(name);
    return this.http.post(this.instanceUrl,  name , options)
    .toPromise()
    .then(() => null)//TODO route this to message
    .catch(this.handleError);
  }

  deleteInstances(): Promise<Instance[]> {
    return this.http.delete(this.instanceUrl, { headers: this.headers } )
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  deleteInstance(id: string): Promise<Instance> {
    const url = `${this.instanceUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers } )
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
  private extractText(res: Response) {
    console.log(res);
    return res;
  }

  private handleError(error: any): Promise<any> {
    //TODO how can i actually relay this message to the application.
    console.error('An Error occurred', error);
    return Promise.reject(error.message || error);
  }
}
