import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './task';

@Component({
    selector: 'app-daily-to-do',
    templateUrl: './daily-to-do.component.html',
    styleUrls: ['./daily-to-do.component.scss']
})
export class DailyToDoComponent implements OnInit {

    // title:String;
    // //  currentTasks:{value: String, viewValue: String}[];
    // currentTasks:{name:string, description:string, inProgress:boolean, completed:boolean, estimatedTime:string, actualTime:string, id:string}[];
    // completedTasks:{name:string, description:string, inProgress:boolean, completed:boolean, estimatedTime:string, actualTime:string, id:string}[];
    //
    // selectedTask:string;
    //
    // closeResult: string;
    //
    // taskForm:FormGroup;
    //
    // constructor(private modalService: NgbModal) {}
    //
    // open(content:any):void {
    //     this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    // }
    //
    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return  `with: ${reason}`;
    //     }
    // }
    //
    // // name:string;
    // // description:string;
    // // estimatedTime:string;
    // // actualTIme:string;
    // //
    // // inProgress:boolean = false;
    // // completed:boolean = false;
    //
    //
    ngOnInit() {
        // this.title = 'Daily Tasks';
        // this.taskForm = new FormGroup({
        //     'name': new FormControl(this.task.name, [
        //         Validators.required
        //     ]),
        //     'description': new FormControl(this.task.description),
        //     'estimatedTime': new FormControl(this.task.estimatedTime, [
        //         Validators.required,
        //         Validators.minLength(0),
        //         Validators.maxLength(1000)
        //     ])
        // });
    //localStorage.clear();
    // this.currentTasks  = localStorage.getItem('currentTasks') ? JSON.parse(localStorage.getItem('currentTasks')) : [];

    //console.log(this.currentTasks[0].value);

    // this.completedTasks = localStorage.getItem('completedTasks') ? JSON.parse(localStorage.getItem('completedTasks')) : [];

    // localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    // localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
    }
    //
    // task = new Task(1, '', 0, 0, false, false, '');
    //
    // onSubmit() {
    //
    // }
    //
    // // TODO: Remove this when we're done
    // // get diagnostic() { return JSON.stringify(this.task); }
    //
    // createTask(id:string, name:string, description:string, estimatedTime:string, actualTime:string, inProgress:boolean, completed:boolean):void {
    //     // return {id: id, name: name, description: description, estimatedTime: estimatedTime, actualTime, inProgress: inProgress, completed: completed};
    // }
    //
    //
    // // Create a new task when clicking the "Add" button
    // addTask(task):void {
    //     this.currentTasks.unshift({name: task, description: 'sample', inProgress:false, completed:false, estimatedTime:'20', actualTime:'30', id:name});
    // // localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    //
    // }
    //
    //
    // //removes current tasks
    // deleteTask(task){
    //
    //     // var e = (<HTMLSelectElement>document.getElementById("currentTasksSelect")).options;
    //     // console.log(e);
    //     for(let i = 0; i<this.currentTasks.length;i++){
    //         if(this.currentTasks[i].name == task){
    //             console.log("finna delete" + task);
    //             this.currentTasks.splice(i,1);
    //             // localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
    //         }
    //     }
    // }
    //
    // //adds task to completedTask list and deletes from current task list
    // completeTask(task):void {
    //     // this.inProgress = false;
    //     // this.completed = true;
    //
    //     let elem = this.currentTasks.find(function(element) {
    //         return element.name === task;
    //     });
    //
    //     this.currentTasks.splice(this.currentTasks.indexOf(elem), 1);
    //
    //     this.completedTasks.unshift({name: task, description: 'sample', inProgress:false, completed:false, estimatedTime:'20', actualTime:'30', id:name});
    //     // localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
    //     //onClick();
    //     // this.deleteTask(task);
    //
    // }
    //
    // updateValue(task:string):void {
    //     this.selectedTask = task;
    // }
    //
    // startTask(id):void {
    //     let elem = this.currentTasks.find(function(element) {
    //         return element.name === id;
    //     });
    //
    //     this.currentTasks.splice(this.currentTasks.indexOf(elem), 1);
    //     elem['inProgress'] = true;
    //     // console.log(elem.inProgress);
    //     this.currentTasks.unshift(elem);
    // }

}
