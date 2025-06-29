import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import React from "react";

export const Accordion = Object.assign(
  React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
  >(({ ...props }, ref) => (
    <AccordionPrimitive.Root ref={ref} {...props} />
  )),
  {
    Item: function AccordionItem({
      className,
      value,
      ...props
    }: {
      className?: string;
      value: string;
      [key: string]: unknown;
    }) {
      return (
        <AccordionPrimitive.Item
          value={value}
          className={cn("border-b border-gray-200", className)}
          {...props}
        />
      );
    },

    Trigger: React.forwardRef<
      HTMLButtonElement,
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
    >(({ className, children, ...props }, ref) => (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown
            className="h-4 w-4 transition-transform duration-200"
            aria-hidden
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )),
    Content: React.forwardRef<
      HTMLDivElement,
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
    >(({ className, children, ...props }, ref) => (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(
          "overflow-hidden text-sm text-muted-foreground transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </AccordionPrimitive.Content>
    )),
  }
);

Accordion.Trigger.displayName = AccordionPrimitive.Trigger.displayName;
Accordion.Content.displayName = AccordionPrimitive.Content.displayName;
