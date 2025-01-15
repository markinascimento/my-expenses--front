// -> Icons lib
import { LogIn } from 'lucide-react';

// -> Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ButtonPasswordVisible } from './components/ButtonPasswordVisible';

// -> Assets
import logo from '@/view/assets/logo.svg';

// -> Types
import type { useModel } from './model';

interface IProps {
  props: ReturnType<typeof useModel>;
}

export function View({ props }: IProps) {
  return (
    <div className="flex flex-col justify-center gap-12 w-full max-w-[468px] mx-auto px-2 h-full sm:hidden">
      <header className='flex flex-col items-center justify-center gap-12'>
        <img src={logo} alt="" />

        <h1 className='font-bold text-2xl tracking-[-1px]'> 
          Entre em sua conta 
        </h1>
      </header>

      <form 
        onSubmit={props.handleSubmit}
        className='flex flex-col gap-4'
      >
        <Input 
          placeholder='Usuário' 
          className='lowercase' 
          {...props.register('username')}
        />
        
        <Input 
          placeholder='Senha'  
          type={props.isPasswordVisible ? 'text' : 'password'}
          rightAction={
            <ButtonPasswordVisible isVisible={props.isPasswordVisible} onToggle={props.togglePasswordVisible} />
          } 
          {...props.register('password')}
        />

        <Button 
          className='mt-6' 
          isLoading={props.isPending} 
          disabled={!props.isValid || props.isPending}
        >
          <LogIn className='size-4' strokeWidth={2.5} />
          Entrar
        </Button>
      </form>
    </div>
  )
}
