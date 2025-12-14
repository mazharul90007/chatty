// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/system";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastContainer position="top-right" hideProgressBar className="z-50" />
      {children}
    </HeroUIProvider>
  );
}
