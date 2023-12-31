"use client";

import { useEffect } from "react";

// Components
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/Toast";

// Helpers
import { useSelector } from "@/lib/hooks";
import { useToast } from "@/lib/hooks/useToast";

// Types
import { ErrorType } from "@/types";

export function Toaster() {
  const { error: creaturesError } = useSelector(({ creatures }) => creatures);
  const { toast, toasts } = useToast();

  const ERRORS: { [key: string]: ErrorType } = Object.freeze({
    AbortError: {
      title: "The request has been aborted due to a user action",
      style: "destructive",
    },
    ConditionError: {
      title: "The request has been cached for faster response times",
      style: "default",
    },
  });

  const handleErrors = (error: string | undefined) => {
    if (error) {
      const { style, title } = ERRORS[error as keyof typeof ERRORS];
      toast({ variant: style, title });
    }
  };

  useEffect(() => {
    handleErrors(creaturesError);
  }, [creaturesError]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
