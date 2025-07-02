import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../../common/lib/utils"
import { badgeVariants } from "./badge-variant"
import type { BadgeVariantProps } from "./badge-variant"

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  BadgeVariantProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge }
