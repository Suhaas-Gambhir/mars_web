"use client";

import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { LogoutButton } from "@/components/logout-button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Toaster />
      <main className="min-h-screen">{children}</main>
      <LogoutButton />
    </SessionProvider>
  );
}
