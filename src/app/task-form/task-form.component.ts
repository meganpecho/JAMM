import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task/task.service';
import { Task, tasks } from './task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnChanges {
    @Input() task: Task;

    taskForm:FormGroup;
    closeResult: string;

    constructor(
        private fb:FormBuilder,
        private taskService:TaskService,
        private modalService: NgbModal) {

        this.createForm();
        this.logNameChange();
    }

    ngOnChanges() {
        this.rebuildForm();
    }

    createForm() {
        this.taskForm = this.fb.group({
            name: [ '', Validators.required ],
            description: [ '' ],
            estimatedTime: [ 0, [Validators.required, Validators.min(0), Validators.max(1000)] ]
        });
    }

    rebuildForm() {
        this.taskForm.reset({
            name: this.task.name,
            description: this.task.description,
            estimatedTime: this.task.estimatedTime
        });
    }

    onSubmit() {
        this.task = this.prepareSaveTask();
        this.taskService.updateTask(this.task).subscribe(/*Error handling*/);
        this.rebuildForm();
    }

    prepareSaveTask():Task {
        const formModel = this.taskForm.value;
        const saveTask:Task = {
            id: this.task.id,
            name: formModel.name as string,
            description: formModel.description as string,
            estimatedTime: formModel.estimatedTime as number
        };

        return saveTask;
    }

    nameChangeLog: string[] = [];
    logNameChange() {
        const nameControl = this.taskForm.get('name');
        nameControl.valueChanges.forEach(
            (value: string) => this.nameChangeLog.push(value)
        );
    }

    open(content:any):void {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    createTask() {

    }

}
