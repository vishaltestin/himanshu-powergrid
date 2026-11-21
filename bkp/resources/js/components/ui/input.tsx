import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"

interface InputProps extends React.ComponentProps<"input"> {
  label?: React.ReactNode
}

function Input({ className, type, label, id, ...props }: InputProps) {
  // 1. Generate a unique ID so the label can focus the input
  const generatedId = React.useId()
  const inputId = id || generatedId

  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        data-slot="input"
        placeholder=" "
        className={cn(
          "peer h-15 w-full min-w-0 bg-white rounded-md border border-gray-300 px-4 pb-2 pt-6 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-accent focus-visible:ring-0 focus-visible:bg-white  disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
          "placeholder:text-transparent",
          className
        )}
        {...props}
      />
      <Label
        htmlFor={inputId}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 transition-all duration-200 pointer-events-none",
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-gray-500",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
        )}
      >
        {label}
      </Label>
    </div>
  )
}

export { Input }