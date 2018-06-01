export class Task {
    constructor(
        public id: number,
        public name: string,
        public estimatedTime: number,
        public actualTime: number,
        public inProgress: boolean,
        public completed: boolean,
        public description?: string
    ) { }
}
