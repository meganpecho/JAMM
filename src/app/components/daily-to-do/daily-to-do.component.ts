import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-to-do',
  templateUrl: './daily-to-do.component.html',
  styleUrls: ['./daily-to-do.component.scss']
})
export class DailyToDoComponent implements OnInit {

  title:String;
//  currentTasks:{value: String, viewValue: String}[];
  currentTasks:{name:string, description:string, inProgress:boolean, completed:boolean, estimatedTime:string, actualTime:string, id:string}[];
  completedTasks:{name:string, description:string, inProgress:boolean, completed:boolean, estimatedTime:string, actualTime:string, id:string}[];

  selectedTask:string;

  name:string;
  description:string;
  estimatedTime:string;
  actualTIme:string;

  inProgress:boolean = false;
  completed:boolean = false;

  constructor() {}

  ngOnInit() {
    this.title = 'Daily Tasks';
    //localStorage.clear();
    this.currentTasks  = localStorage.getItem('currentTasks') ? JSON.parse(localStorage.getItem('currentTasks')) : [];

    //console.log(this.currentTasks[0].value);

    this.completedTasks = localStorage.getItem('completedTasks') ? JSON.parse(localStorage.getItem('completedTasks')) : [];

    localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
  }


  // Create a new task when clicking the "Add" button
  addTask(task){
    if (task === ''){
      alert("Please enter a task")
    }
    else{
      this.currentTasks.unshift({name: task, description: 'sample', inProgress:false, completed:false, estimatedTime:'20', actualTime:'30', id:name});
      localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    }
  }


  //removes current tasks
  deleteTask(task){

    // var e = (<HTMLSelectElement>document.getElementById("currentTasksSelect")).options;
    // console.log(e);
    for(let i = 0; i<this.currentTasks.length;i++){
      if(this.currentTasks[i].name == task){
        console.log("finna delete" + task);
        this.currentTasks.splice(i,1);
        localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
      }
    }
  }

  //adds task to completedTask list and deletes from current task list
  completeTask(task){
    // this.inProgress = false;
    // this.completed = true;

    let elem = this.currentTasks.find(function(element) {
        return element.name === task;
    });

    this.currentTasks.splice(this.currentTasks.indexOf(elem), 1);

    this.completedTasks.unshift({name: task, description: 'sample', inProgress:false, completed:false, estimatedTime:'20', actualTime:'30', id:name});
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
    //onClick();
    // this.deleteTask(task);

  }

  updateValue(task:string) {
    this.selectedTask = task;
  }

  startTask(id):void {
      let elem = this.currentTasks.find(function(element) {
          return element.name === id;
      });

      this.currentTasks.splice(this.currentTasks.indexOf(elem), 1);
      elem['inProgress'] = true;
      // console.log(elem.inProgress);
      this.currentTasks.push(elem);
  }

}
