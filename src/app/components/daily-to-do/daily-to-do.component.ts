import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-to-do',
  templateUrl: './daily-to-do.component.html',
  styleUrls: ['./daily-to-do.component.css']
})
export class DailyToDoComponent implements OnInit {

  title:String;
//  currentTasks:{value: String, viewValue: String}[];
  currentTasks:{value: String}[];
  completedTasks:{value: String}[];

  selectedTask:string;

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


  onClick(){

}

  // Create a new task when clicking the "Add" button
  addTask(task){
    if (task === ''){
      alert("Please enter a task")
    }
    else{
      this.currentTasks.unshift({value: task});
      localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    }
  }


  //removes current tasks
  deleteTask(task){

    var e = (<HTMLSelectElement>document.getElementById("currentTasksSelect")).options;
    console.log(e);
    for(let i = 0; i<this.currentTasks.length;i++){
      if(this.currentTasks[i].value == task){
        console.log("finna delete" + task);
        this.currentTasks.splice(i,1);
        localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
      }
    }
  }

  //adds task to completedTask list and deletes from current task list
  completeTask(task){
    this.completedTasks.unshift({value: task});
    localStorage.setItem('completedTasks', JSON.stringify(this.currentTasks));
    //onClick();
    this.deleteTask(task);

  }

  updateValue(task:string) {
    this.selectedTask = task;
  }
}
