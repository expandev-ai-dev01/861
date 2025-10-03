import { Task } from '../../types';

export interface TaskFormProps {
  onSuccess?: (task: Task) => void;
  onCancel?: () => void;
  className?: string;
}
