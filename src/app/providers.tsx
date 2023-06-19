"use client";

import { AuthProvider } from "@/context/AuthProvider";
import useCustomQueryClient from "@/hooks/useCustomQueryClient";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const { customQueryClient: queryClient } = useCustomQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </AuthProvider>
    </QueryClientProvider>
  );
}
