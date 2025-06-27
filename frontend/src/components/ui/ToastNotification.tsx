import React, { useEffect } from "react";

type ToastNotificationProps = {
  message: string;
  duration?: number;
  onClose: () => void;
  ariaLive?: "off" | "polite" | "assertive";
};

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  duration = 3000,
  onClose,
  ariaLive = "polite",
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="alert"
      aria-live={ariaLive}
      className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-fadeInOut"
    >
      {message}
    </div>
  );
};
