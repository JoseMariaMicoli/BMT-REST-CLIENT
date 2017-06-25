import { TestBed, inject } from '@angular/core/testing';
import { Task } from './task';
import { TaskDataService } from './task-data.service';

describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should be created', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTasks()', () => {

  	it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
  		expect(service.getAllTasks()).toEqual([]);
  	}));

  	it('should return all tasks', inject([TaskDataService], (service: TaskDataService) => {
  		let task1 = new Task({name: 'Hello_01', status: false});
  		let task2 = new Task({name: 'Hello_02', status: true});

  		service.addTask(task1);
  		service.addTask(task2);

  		expect(service.getAllTasks()).toEqual([task1, task2]);
  	}));
  });

  describe('#save(task)', () => {
  	it('should automatically assign an incrementing id', inject([TaskDataService], (service: TaskDataService) => {
  		let task1 = new Task({name: 'Hello_01', status: false});
  		let task2 = new Task({name: 'Hello_02', status: true});

  		service.addTask(task1);
  		service.addTask(task2);

  		expect(service.getTaskById(1)).toEqual(task1);
  		expect(service.getTaskById(2)).toEqual(task2);
  	}));
  });

  describe('#deleteTaskById(id)', () => {

  	it('should remove task with the corresponding id', inject([TaskDataService], (service: TaskDataService) => {
  		let task1 = new Task({name: 'Hello_01', status: false});
  		let task2 = new Task({name: 'Hello_02', status: true});

  		service.addTask(task1);
  		service.addTask(task2);

  		expect(service.getAllTasks()).toEqual([task1, task2]);
  		service.deleteTaskById(1);
  		expect(service.getAllTasks()).toEqual([task2]);
  		service.deleteTaskById(2);
  		expect(service.getAllTasks()).toEqual([]);
  	}));

  	it('should not removing anything if task with corresponding id is not found', inject([TaskDataService], (service: TaskDataService) => {
  		let task1 = new Task({name: 'Hello_01', status: false});
  		let task2 = new Task({name: 'Hello_02', status: true});

  		service.addTask(task1);
  		service.addTask(task2);

  		expect(service.getAllTasks()).toEqual([task1, task2]);
  		service.deleteTaskById(3);
  		expect(service.getAllTasks()).toEqual([task1, task2]);  		
  	}));
  });

  describe('#updateTaskById(id, values)', () => {
  	it('should return task with the corresponding id and updated data', inject([TaskDataService], (service: TaskDataService) => {
  		let task = new Task({name: 'Hello_01', status: false});

  		service.addTask(task);

  		let updatedTask = service.updateTaskById(1, {
  			name: 'new name'
  		});

  		expect(updatedTask.name).toEqual('new name');
  	}));

  	it('should return null if task is not found', inject([TaskDataService], (service: TaskDataService) => {
  		let task = new Task({name: 'Hello_01', status: false});

  		service.addTask(task);

  		let updatedTask = service.updateTaskById(2, {
  			name: 'new name'
  		});

  		expect(updatedTask).toEqual(null);
  	}));
  });

  describe('#toggleTaskComplete(task)', () => {
  	it('should return the updated task with inverse complete status', inject([TaskDataService], (service: TaskDataService) => {
	  	let task = new Task({name: 'Hello_01', status: false});

	  	service.addTask(task);

	  	let updatedTask = service.toggleTaskComplete(task);

	  	expect(updatedTask.status).toEqual(true);

	  	service.toggleTaskComplete(task);

	  	expect(updatedTask.status).toEqual(false);
	}));
  });

});
