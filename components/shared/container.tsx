import React from "react"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  children?: React.ReactNode
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={cn("mx-auto max-w-[1280]", className)}>{children}</div>
}
