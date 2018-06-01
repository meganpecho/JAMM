export class Task {
    constructor(
        public name: string,
        public estimatedTime: number,
        public id?: number,
        public actualTime?: number,
        public inProgress?: boolean,
        public completed?: boolean,
        public description?: string
    ) { }
}

export const tasks:Task[] = [];
