export class Task {
  id: number;
  name = '';
  status = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
