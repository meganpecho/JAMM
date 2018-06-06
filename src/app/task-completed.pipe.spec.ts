import { TaskCompletedPipe } from './task-completed.pipe';

describe('TaskCompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskCompletedPipe();
    expect(pipe).toBeTruthy();
  });
});
