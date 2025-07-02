import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../common/lib/utils";
import { buttonVariants } from "./button-variant";
import type { ButtonVariantProps } from "./button-variant";

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
