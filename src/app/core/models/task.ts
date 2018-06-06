export class Task {
  constructor(
    public name: string,
    public createdAtDate: Date,
    public completed: boolean,
    public inProgress?: boolean,
    public completedAtDate?: Date,
    public actualTime?: number,
    public estimatedTime?: number,
    public description?: string,
    public userId?: string,
    public _id?: string,
  ) { }
}

export const t:Task[] = [];
