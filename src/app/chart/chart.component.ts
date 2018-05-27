import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    chart:Chart = null;
    estimatedData:number[] = [];
    actualData:number[] = [];
    taskNames:string[] = [];

    // estimationPercent:number = 0;

    constructor() { }

    ngOnInit() {
        this.getData();

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

    }

    getData():void {
        let data = {
            task1: {
                name: 'Finish Homework',
                estimatedTime: 10,
                actualTime: 70
            },
            task2: {
                name: 'Do final exam',
                estimatedTime: 80,
                actualTime: 35
            },
            task3: {
                name: 'Finish Webapp',
                estimatedTime: 240,
                actualTime: 480
            },
            task4: {
                name: 'Write reaction paper',
                estimatedTime: 10,
                actualTime: 10
            }
        };

        for (let task in data) {
            this.taskNames.push(data[task].name);
            this.estimatedData.push(data[task].estimatedTime);
            this.actualData.push(data[task].actualTime);
        }



    }


}
