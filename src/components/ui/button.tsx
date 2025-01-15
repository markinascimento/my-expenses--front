// -> ReactJS
import * as React from "react";

// -> Icons lib
import { LoaderCircle } from "lucide-react";

// -> Utils
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
  isLoading: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(
          `flex items-center justify-center gap-2 w-full h-12 bg-primary rounded-full font-medium 
          text-white hover:bg-primary/80 transition-colors disabled:bg-primary/50 
          disabled:cursor-not-allowed`,
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          children
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button };

