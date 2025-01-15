// -> Icons lib
import { Eye, EyeOff } from 'lucide-react';

interface IProps{
  isVisible: boolean;
  onToggle(): void;
}

export function ButtonPasswordVisible({ isVisible, onToggle }: IProps) {
  return (
    <button 
      type='button'
      className='flex items-center justify-end w-8 h-8' 
      onClick={onToggle}
    >
      {isVisible ? (
        <EyeOff className='size-4' />
      ) : (
        <Eye className='size-4' />
      )}
    </button>
  )
}
