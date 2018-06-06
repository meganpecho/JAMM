import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from '../core/api.service';
import { Task, t } from '../core/models/task';
import { Subscription } from 'rxjs/Subscription';
// import { TaskService } from '../task/task.service';
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    tasks: Task[] = t;
    chart:Chart = null;
    estimatedData:number[] = [];
    actualData:number[] = [];
    taskNames:string[] = [];
    error: boolean;
    selectedTaskSub: Subscription;
    // estimationPercent:number = 0;

    constructor(private api:ApiService) { }

    ngOnInit() {

        // this.getTasks();
        this.selectedTaskSub = this.api.getTasks()
            .subscribe(
                res => {
                    this.tasks = res;
                    console.log(this.tasks);

                    for (let task in this.tasks) {
                        if (this.tasks[task].completed) {
                            this.taskNames.push(this.tasks[task].name);
                            this.estimatedData.push(this.tasks[task].estimatedTime);
                            this.actualData.push(this.tasks[task].actualTime);
                        }

                    }

                    this.chart = new Chart({
                       chart: {
                       type: 'column'
                       },
                       title: {
                           text: 'Estimated vs Actual Time to Completion'
                       },
                       subtitle: {
                           text: ''
                       },
                       xAxis: {
                           categories: this.taskNames,
                           crosshair: true
                       },
                       yAxis: {
                           min: 0,
                           title: {
                               text: 'Time (minutes)'
                           }
                       },
                       tooltip: {
                           headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                           pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                               '<td style="padding:0"><b>{point.y:.1f} min</b></td></tr>',
                           footerFormat: '</table>',
                           shared: true,
                           useHTML: true
                       },
                       plotOptions: {
                           column: {
                               pointPadding: 0.2,
                               borderWidth: 0
                           }
                       },
                       series: [{
                           name: 'Estimated',
                           data: this.estimatedData
                       }, {
                           name: 'Actual',
                           data: this.actualData
                       }]
                   });

                },
                err => {
                    console.error(err);
                    this.error = true;
            });





    }

    getData():void {
        // console.log(this.tasks);
        // let data = {
        //     task1: {
        //         name: 'Finish Homework',
        //         estimatedTime: 10,
        //         actualTime: 70
        //     },
        //     task2: {
        //         name: 'Do final exam',
        //         estimatedTime: 80,
        //         actualTime: 35
        //     },
        //     task3: {
        //         name: 'Finish Webapp',
        //         estimatedTime: 240,
        //         actualTime: 480
        //     },
        //     task4: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task5: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task6: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task7: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task8: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task9: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     },
        //     task10: {
        //         name: 'Write reaction paper',
        //         estimatedTime: 10,
        //         actualTime: 10
        //     }
        // };
    }

    getTasks() {

    }


}
