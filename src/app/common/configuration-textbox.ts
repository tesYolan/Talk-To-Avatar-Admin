import { ConfigurationBase } from './configuration-base';

export class TextboxConfiguration extends ConfigurationBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options)
    this.type = options['type'] || '';
  }
}
