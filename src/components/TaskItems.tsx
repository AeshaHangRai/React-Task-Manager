
import { Button } from './ui/button';
interface Props {
    id : number;
    title: string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}
function TaskItems({ id, title, completed, onToggle, onDelete }: Props) {
  return (
    <div className="flex justify-between p-2 border-b">
        <div className="flex items-center gap-2">
            <input type="checkbox" checked={completed} onChange={() => onToggle(id)}/>
        </div>
      <span className={completed ? "line-through text-green-500" : ""}>
        {title}
        </span>
      
      <Button variant={'destructive'} onClick={() => onDelete(id)}>Delete</Button>
    </div>
  );
}

export default TaskItems;