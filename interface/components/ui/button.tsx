/* eslint-disable react/prop-types */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../helpers/utils'

const buttonVariants = cva(
  'rounded-md text-sm sm:text-base font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-work-sans relative z-10 transition-all duration-200 flex items-center justify-center space-x-[.8em]',
  {
    variants: {
      variant: {
        default:
          'before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:bg-xaeon-gradient before:transition-all before:duration-200 hover:before:opacity-60 before:-z-10',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        'outline-gradient':
          'before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:bg-xaeon-gradient before:transition-all before:duration-200 hover:before:opacity-60 before:-z-20 z-10 after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:rounded-md after:bg-background after:-z-10',
        secondary: 'bg-[rgba(255,255,255,.08)] hover:bg-white/20',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
      },
      size: {
        default: 'h-10 sm:h-11 px-6 sm:px-7',
        sm: 'h-9 px-5 text-sm sm:text-sm',
        lg: 'h-14 px-10',
        icon: 'h-11 w-11'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isSubmitting?: boolean
  childrenWrapperClassName?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isSubmitting,
      childrenWrapperClassName,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {isSubmitting ? (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
        ) : (
          children
        )}

        {/* <span
          className={twMerge(
            'flex items-center justify-center space-x-[.8em] font-inherit transition-all duration-200',
            childrenWrapperClassName,
            isSubmitting ? 'opacity-0' : null
          )}
        > */}
        {/* </span> */}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
