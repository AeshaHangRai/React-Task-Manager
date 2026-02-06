import type { Task } from '@/types/task';

import TaskItems from './TaskItems';
interface Props {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
function TaskList({tasks, onToggle,onDelete}: Props) {
  return(
   <div>
    {tasks.map((t)=> (
    <TaskItems
     id={t.id} 
     title={t.title} 
     completed={t.completed}
      onToggle={onToggle} 
      onDelete={onDelete} />
  ))}
  </div>
  );
}

export default TaskList;
