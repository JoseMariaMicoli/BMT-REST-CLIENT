import {Task} from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
  	let task = new Task({
  		name: 'hello01',
  		status: true
  	});
  	expect(task.name).toEqual('hello01');
  	expect(task.status).toEqual(true);
  });
});
