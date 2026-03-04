import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-sage-light/40 bg-white px-4 py-3 text-text font-body placeholder:text-text-light/60 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-colors",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
