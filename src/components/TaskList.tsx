import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: { id: number; title: string; completed: boolean }[];
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </div>
  );
};

export default TaskList;