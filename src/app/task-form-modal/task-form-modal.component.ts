import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../core/api.service';
// import { TaskService } from '../task/task.service';
import { Task } from '../core/models/task';

@Component({
  selector: 'app-task-form-modal',
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.scss']
})
export class TaskFormModalComponent implements OnInit {

    closeResult:string;
    task:Task = new Task('', new Date(), false);
    modalReference:any;

    constructor(private api: ApiService, private modalService: NgbModal) {}

    open(content:any):void {
        this.modalReference = this.modalService.open(content, { size: 'lg' });
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalReference.close();
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

    ngOnInit() { }

    onSubmit(form, formValue:any) {
        console.log(formValue);

        const taskObserver = {
            next: x => console.log('next: ' + x),
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification')
        };
        const formData = Object.assign({}, formValue);
        this.task = this.prepareSaveTask(formData);
        this.api.createNewTask(this.task).subscribe(taskObserver);

        form.reset();
        this.close();
    }

    createTask(taskConfig:any) {

    }

    prepareSaveTask(formValue):Task {
        const formData = formValue;
        const saveTask:Task = {
            name: formData.name as string,
            createdAtDate: new Date() as Date,
            description: formData.description as string,
            estimatedTime: formData.estimatedTime as number,
            actualTime: 0,
            inProgress: false,
            completed: false,
            userId: 'megan' as string
        };

        return saveTask;
    }



}
