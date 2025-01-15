// -> ReactJS
import * as React from "react";

// -> Utils
import { cn } from "@/lib/utils";

interface IProps extends React.ComponentProps<"input">{
  className?: string;
  rightAction?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ id, className, placeholder, name, rightAction, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          className={cn(
            `bg-white w-full rounded-lg border border-gray-500 px-2.5 h-[52px] text-gray-800 pt-3 
            peer placeholder-shown:pt-0 focus:border-primary transition-all outline-none`,
            className
          )}
          placeholder=' '
        />
        <label
          htmlFor={inputId}
          className='absolute text-xs left-[13px] top-0 pointer-events-none text-[#495057] peer-placeholder-shown:text-base
          peer-placeholder-shown:top-3.5 transition-all'
        >
          {placeholder}
        </label>

        {rightAction && (
          <div className="absolute right-1 top-1/2 -translate-y-1/2  min-h-8 min-w-8">
            {rightAction}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input };

