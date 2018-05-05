import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-to-do',
  templateUrl: './daily-to-do.component.html',
  styleUrls: ['./daily-to-do.component.css']
})
export class DailyToDoComponent implements OnInit {

  title:String;
  currentTasks:string[];
  completedTasks:string[];

  constructor() { }

  ngOnInit() {
    this.title = 'Daily Tasks'
    this.currentTasks = ['Cook', 'Do homework', 'Run'];
    this.completedTasks = [];
  }


  onClick(){

}

  // Create a new task when clicking the "Add" button
  addTask(task){
    if (task === ''){
      alert("Please enter a task")
    }
    else{
      this.currentTasks.unshift(task);
    }
  }

  //removes current tasks
  deleteTask(task){
    for(let i = 0; i<this.currentTasks.length;i++){
      if(this.currentTasks[i] == task){
        this.currentTasks.splice(i,1);
      }
    }
  }

  //adds task to completedTask list and deletes from current task list
  completeTask(task){
    this.completedTasks.unshift(task);
    //onClick();
    this.deleteTask(task);

  }
}
