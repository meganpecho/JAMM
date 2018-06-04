// The '?' operator defines an optional field
// Everything else is required

export class Task {
  constructor(
    public name: string,
    public createdAtDate: Date,
    public completed: boolean,
    public completedAtDate?: Date,
    public totalTimeWorkedMins?: number,
    public estimatedTimeMins?: number,
    public description?: string,
    public userId?: string,
    public _id?: string,
  ) { }
}
