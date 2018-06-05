export class TaskData {
    constructor(

        public name: string,
        public estimatedTime: number,
        public createdAtDate?: Date,
        public completedAtDate?: Date,
        public actualTime?: number,
        public inProgress?: boolean,
        public completed?: boolean,
        public description?: string,
        public userId?: string,
        public _id?: string,
    ) { }
}

export const tasks:TaskData[] = [];
