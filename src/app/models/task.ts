export interface Task {
  id?: string;
  task_name?: string;
  task_description?: string;
  estimated_time_mins?: number;
  total_time_worked_mins?: number;
  completed?: boolean;
}
