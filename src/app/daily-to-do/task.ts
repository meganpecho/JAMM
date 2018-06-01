export class Task {
    constructor(
        public id: string,
        public name: string,
        public estimatedTime: number,
        public actualTime?: number,
        public inProgress?: boolean,
        public completed?: boolean,
        public description?: string
    ) { }
}

export const tasks:Task[] = [];
