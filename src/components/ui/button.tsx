import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-sans font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-white text-primary border border-primary font-semibold hover:bg-white/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
        heroOutline: "border border-white/30 bg-black/50 backdrop-blur-sm text-white font-semibold hover:bg-black/70 hover:border-white/50 hover:scale-105",
        glass: "bg-card/60 backdrop-blur-xl border border-border/50 text-foreground hover:bg-card/80 hover:border-primary/30",
      },
      size: {
        default: "",
        sm: "rounded-md",
        lg: "rounded-xl text-base",
        xl: "rounded-xl text-lg",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size = "default", asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const sizeStyles: Record<string, React.CSSProperties> = {
      default: { 
        minHeight: "clamp(2.25rem, 4vw, 2.5rem)", 
        paddingTop: "clamp(0.5rem, 1.2vw, 0.625rem)", 
        paddingBottom: "clamp(0.5rem, 1.2vw, 0.625rem)",
        paddingLeft: "clamp(1rem, 2.5vw, 1.5rem)",
        paddingRight: "clamp(1rem, 2.5vw, 1.5rem)"
      },
      sm: { 
        minHeight: "clamp(2rem, 3.5vw, 2.25rem)", 
        paddingTop: "clamp(0.375rem, 1vw, 0.5rem)", 
        paddingBottom: "clamp(0.375rem, 1vw, 0.5rem)",
        paddingLeft: "clamp(0.75rem, 2vw, 1rem)",
        paddingRight: "clamp(0.75rem, 2vw, 1rem)"
      },
      lg: { 
        minHeight: "clamp(2.75rem, 5vw, 3rem)", 
        paddingTop: "clamp(0.625rem, 1.5vw, 0.75rem)", 
        paddingBottom: "clamp(0.625rem, 1.5vw, 0.75rem)",
        paddingLeft: "clamp(2rem, 5vw, 2.5rem)",
        paddingRight: "clamp(2rem, 5vw, 2.5rem)"
      },
      xl: { 
        minHeight: "clamp(3rem, 6vw, 3.5rem)", 
        paddingTop: "clamp(0.75rem, 1.8vw, 0.875rem)", 
        paddingBottom: "clamp(0.75rem, 1.8vw, 0.875rem)",
        paddingLeft: "clamp(2.5rem, 6vw, 3rem)",
        paddingRight: "clamp(2.5rem, 6vw, 3rem)"
      },
      icon: { 
        minHeight: "clamp(2.25rem, 4vw, 2.5rem)", 
        minWidth: "clamp(2.25rem, 4vw, 2.5rem)", 
        padding: 0 
      },
    };
    const combinedStyle = { ...sizeStyles[size || "default"], ...style };
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        style={combinedStyle}
        ref={ref} 
        {...props} 
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
