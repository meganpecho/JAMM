import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './core/models/task';

@Pipe({
    name: 'taskCompleted'
})
export class TaskCompletedPipe implements PipeTransform {

    transform(allTasks:Task[]): any {
        if (!allTasks)
            return allTasks;
        return allTasks.filter(task => task.completed);
    }

}
